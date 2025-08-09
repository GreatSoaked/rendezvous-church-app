
"use client"
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const initialMessages = [
  {
    id: 1,
    sender: 'Admin Team',
    initials: 'AT',
    subject: 'Welcome to the New App!',
    date: '2 days ago',
    content: 'Hi there, welcome to the official Rendezvous Church app! We are so excited to have you join our digital community. Feel free to explore the different sections. You can watch past sermons, check upcoming events, and even join a small group. If you have any questions, don\'t hesitate to reach out. Blessings!',
    read: false,
  },
  {
    id: 2,
    sender: 'Pastor John',
    initials: 'PJ',
    subject: 'This Weekend\'s Service',
    date: '4 days ago',
    content: 'Hope you are having a wonderful week. Just a reminder that we will be continuing our series on "Building a Strong Life" this Sunday. It\'s going to be a powerful time of worship and teaching. See you there!',
    read: true,
  },
  {
    id: 3,
    sender: 'Youth Ministry',
    initials: 'YM',
    subject: 'Youth Group Update',
    date: '1 week ago',
    content: 'Parents and students, please note that this week\'s youth group will be a special game night! We\'ll have pizza, games, and a short devotional. Bring a friend!',
    read: true,
  },
];

type Message = typeof initialMessages[0];

export default function InboxPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(messages[0]);
  
  const handleSelectMessage = (message: Message) => {
    setSelectedMessage(message);
    setMessages(msgs => msgs.map(m => m.id === message.id ? {...m, read: true} : m));
  }

  return (
    <div>
       <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">My Inbox</h1>
        <p className="text-muted-foreground">
          Messages and announcements from our team.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
        <div className="lg:col-span-1">
            <Card>
                <CardHeader>
                    <CardTitle>Messages</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <ul className="space-y-1">
                        {messages.map((message) => (
                           <li
                            key={message.id}
                            className={cn(
                                "flex items-start gap-3 p-3 cursor-pointer hover:bg-accent",
                                selectedMessage?.id === message.id && "bg-accent"
                            )}
                            onClick={() => handleSelectMessage(message)}
                           >
                            {!message.read && <Badge className="h-2 w-2 p-0 rounded-full bg-primary" />}
                             <Avatar className={cn(message.read && "ml-5")}>
                                <AvatarFallback>{message.initials}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <p className="font-semibold">{message.sender}</p>
                                <p className="text-sm text-muted-foreground truncate">{message.subject}</p>
                            </div>
                            <p className="text-xs text-muted-foreground whitespace-nowrap">{message.date}</p>
                           </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
        <div className="md:col-span-2 lg:col-span-3">
            <Card className="h-full">
                {selectedMessage ? (
                     <>
                        <CardHeader>
                            <div className="flex items-start gap-4">
                                <Avatar>
                                    <AvatarFallback>{selectedMessage.initials}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle>{selectedMessage.subject}</CardTitle>
                                    <CardDescription>From: {selectedMessage.sender} - {selectedMessage.date}</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <Separator />
                        <CardContent className="py-6">
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{selectedMessage.content}</p>
                        </CardContent>
                    </>
                ) : (
                    <CardContent className="flex h-full items-center justify-center">
                        <p className="text-muted-foreground">Select a message to read</p>
                    </CardContent>
                )}
            </Card>
        </div>
      </div>
    </div>
  );
}
