
"use client";

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Printer, CheckCircle } from 'lucide-react';

type CheckedInPerson = {
  name: string;
  event: string;
};

export default function CheckInPage() {
  const [checkedInPeople, setCheckedInPeople] = useState<CheckedInPerson[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const eventName = formData.get('event') as string;
    const guestName = formData.get('guest') as string;

    const familyMembers = [
      { id: 'member-1', name: 'John Doe' },
      { id: 'member-2', name: 'Jane Doe' },
      { id: 'member-3', name: 'Jimmy Doe' },
    ];

    const people: CheckedInPerson[] = [];

    familyMembers.forEach(member => {
        if (formData.get(member.id)) {
            people.push({ name: member.name, event: eventName });
        }
    });

    if (guestName) {
        people.push({ name: guestName, event: eventName });
    }

    setCheckedInPeople(people);
    setIsSubmitted(true);
  };

  const handlePrint = () => {
    window.print();
  };
  
  const handleCheckInAgain = () => {
    setIsSubmitted(false);
    setCheckedInPeople([]);
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Pre-Check-In</h1>
        <p className="text-muted-foreground">
          Streamline your arrival by checking in ahead of time.
        </p>
      </div>

      {!isSubmitted ? (
        <Card>
          <CardHeader>
            <CardTitle>Check-In Form</CardTitle>
            <CardDescription>
              Select an event and the people you are checking in.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="event">Event or Service</Label>
                <Select name="event" required>
                  <SelectTrigger id="event">
                    <SelectValue placeholder="Select an event" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Sunday Service - 10:00 AM">Sunday Service - 10:00 AM</SelectItem>
                    <SelectItem value="Youth Group - Wednesday 7:00 PM">Youth Group - Wednesday 7:00 PM</SelectItem>
                    <SelectItem value="Community BBQ - Saturday 12:00 PM">Community BBQ - Saturday 12:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                  <h3 className="text-sm font-medium text-muted-foreground">Family Members</h3>
                  <div className="flex items-center space-x-2">
                      <Checkbox id="member-1" name="member-1" defaultChecked />
                      <Label htmlFor="member-1">John Doe</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                      <Checkbox id="member-2" name="member-2" defaultChecked />
                      <Label htmlFor="member-2">Jane Doe</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                      <Checkbox id="member-3" name="member-3" />
                      <Label htmlFor="member-3">Jimmy Doe</Label>
                  </div>
              </div>

              <div className="space-y-2">
                  <Label htmlFor="guest">Add a Guest</Label>
                  <Input id="guest" name="guest" placeholder="e.g., Sarah Smith" />
              </div>
            </CardContent>
            <CardFooter>
                <Button type="submit" className="w-full">
                Pre-Check-In
                </Button>
            </CardFooter>
          </form>
        </Card>
      ) : (
        <Card className="printable-area">
          <CardHeader className="text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
            <CardTitle>Check-In Confirmed!</CardTitle>
            <CardDescription>You can now print the name tags below.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {checkedInPeople.map((person, index) => (
              <div key={index} className="name-tag border-2 border-dashed rounded-lg p-4 text-center">
                <p className="text-2xl font-bold font-headline">{person.name}</p>
                <p className="text-muted-foreground">{person.event}</p>
              </div>
            ))}
          </CardContent>
          <CardFooter className="flex-col gap-4 no-print">
            <Button onClick={handlePrint} className="w-full">
              <Printer className="mr-2 h-4 w-4" />
              Print Labels
            </Button>
            <Button variant="outline" onClick={handleCheckInAgain} className="w-full">
              Check-In Again
            </Button>
          </CardFooter>
        </Card>
      )}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .printable-area, .printable-area * {
            visibility: visible;
          }
          .printable-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .no-print {
            display: none;
          }
          .name-tag {
            border: 2px solid black;
            page-break-inside: avoid;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
