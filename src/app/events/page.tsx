
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { addDays, format, isSunday, isWednesday } from 'date-fns';

const initialEvents = [
  {
    title: 'Sunday Morning Worship',
    date: 'Every Sunday',
    time: '10:00 AM - 11:30 AM',
    location: 'Main Sanctuary',
    description: 'Join us for a time of worship, teaching, and fellowship.',
  },
  {
    title: 'Youth Group Night',
    date: 'Every Wednesday',
    time: '7:00 PM - 8:30 PM',
    location: 'Youth Hall',
    description: 'A fun and engaging night for students from 6th to 12th grade.',
  },
  {
    title: 'Community Outreach BBQ',
    date: '2024-08-17',
    time: '12:00 PM - 3:00 PM',
    location: 'Church Lawn',
    description: 'A free BBQ for our local community. All are welcome!',
  },
  {
    title: 'Women\'s Ministry Breakfast',
    date: '2024-08-24',
    time: '9:00 AM - 10:30 AM',
    location: 'Fellowship Hall',
    description: 'Connect with other women over a delicious breakfast and devotional.',
  },
];

export default function EventsPage() {
  const [events, setEvents] = useState(initialEvents);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const filteredEvents = events.filter(event => {
    if (!selectedDate) return true;
    const selectedDay = format(selectedDate, 'yyyy-MM-dd');
    
    if (event.date.startsWith('Every')) {
      if (event.date.includes('Sunday') && isSunday(selectedDate)) return true;
      if (event.date.includes('Wednesday') && isWednesday(selectedDate)) return true;
      return false;
    }
    
    // The date from the event is UTC, but when a user selects a date, it has a timezone.
    // We create a date from the string to ensure we're comparing just the date part.
    const eventDate = new Date(event.date);
    const eventDay = format(addDays(eventDate, 1), 'yyyy-MM-dd'); // Adjust for timezone issues
    
    return eventDay === selectedDay;
  });

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Upcoming Events</h1>
        <p className="text-muted-foreground">
          Get involved and connect with our community.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
            <Card>
                <CardContent className="p-2">
                    <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md"
                    />
                </CardContent>
            </Card>
        </div>
        <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold tracking-tight font-headline">
                Events for {selectedDate ? format(selectedDate, 'MMMM do, yyyy') : 'All Dates'}
            </h2>
            {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => (
                <Card key={index} className="flex flex-col">
                    <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-grow">
                    <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>{event.date.startsWith('Every') ? event.date : format(new Date(event.date), 'PPPP')}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>{event.location}</span>
                    </div>
                    </CardContent>
                    <CardFooter>
                    <Button className="w-full">View Details</Button>
                    </CardFooter>
                </Card>
                ))
            ) : (
                <Card>
                    <CardContent className="p-6">
                        <p className="text-muted-foreground text-center">No events scheduled for this day.</p>
                    </CardContent>
                </Card>
            )}
        </div>
      </div>
    </div>
  );
}
