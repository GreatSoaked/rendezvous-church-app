
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
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';

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
    date: 'August 17, 2024',
    time: '12:00 PM - 3:00 PM',
    location: 'Church Lawn',
    description: 'A free BBQ for our local community. All are welcome!',
  },
  {
    title: 'Women\'s Ministry Breakfast',
    date: 'August 24, 2024',
    time: '9:00 AM - 10:30 AM',
    location: 'Fellowship Hall',
    description: 'Connect with other women over a delicious breakfast and devotional.',
  },
];

export default function EventsPage() {
  const [events, setEvents] = useState(initialEvents);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Upcoming Events</h1>
        <p className="text-muted-foreground">
          Get involved and connect with our community.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{event.date}</span>
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
        ))}
      </div>
    </div>
  );
}

    