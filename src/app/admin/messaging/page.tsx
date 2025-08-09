
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
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Send } from 'lucide-react';

const users = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
  },
  {
    name: 'Michael Johnson',
    email: 'michael.j@example.com',
  },
];

export default function AdminMessagingPage() {
    const [sentMessage, setSentMessage] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const recipient = formData.get('recipient');
        const subject = formData.get('subject');
        
        // In a real app, this would trigger an API call to send the message.
        setSentMessage(`Message "${subject}" sent to ${recipient === 'all' ? 'all users' : recipient}.`);
    }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Admin Messaging</h1>
        <p className="text-muted-foreground">
          Send messages and announcements to your users.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Compose Message</CardTitle>
          <CardDescription>
            Select a recipient and write your message below.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
                 <div className="space-y-2">
                    <Label htmlFor="recipient">Recipient</Label>
                    <Select name="recipient" defaultValue="all" required>
                    <SelectTrigger id="recipient">
                        <SelectValue placeholder="Select a recipient" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Users</SelectItem>
                        {users.map(user => (
                            <SelectItem key={user.email} value={user.email}>
                                {user.name} ({user.email})
                            </SelectItem>
                        ))}
                    </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="e.g., Upcoming Holiday Schedule" required/>
                </div>
            </div>
            
            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                id="message"
                name="message"
                placeholder="Write your announcement or message here..."
                className="min-h-[200px]"
                required
                />
            </div>
            </CardContent>
            <CardFooter>
            <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
            </Button>
            </CardFooter>
        </form>
      </Card>
      
      {sentMessage && (
        <div className="mt-6 p-4 bg-secondary text-secondary-foreground rounded-lg text-center text-sm">
            {sentMessage}
        </div>
      )}
    </div>
  );
}
