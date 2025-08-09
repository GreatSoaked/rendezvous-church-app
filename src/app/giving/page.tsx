
"use client"
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const initialGivingLinks = [
  {
    title: 'General Fund',
    description: 'Support the day-to-day ministry and operations of the church.',
    href: '#',
  },
  {
    title: 'Missions Fund',
    description: 'Help us support local and global missionary partners.',
    href: '#',
  },
  {
    title: 'Building Fund',
    description: 'Contribute to our future home and building projects.',
    href: '#',
  },
];

export default function GivingPage() {
    const [givingLinks, setGivingLinks] = useState(initialGivingLinks);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Online Giving</h1>
        <p className="text-muted-foreground">
          Support our ministry and mission with your generous gift.
        </p>
      </div>

       <div className="space-y-4">
        {givingLinks.map((link) => (
          <Link href={link.href} key={link.title} target="_blank" rel="noopener noreferrer">
            <Card className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
              <CardHeader className="flex flex-row items-center">
                <div className="flex-1">
                  <CardTitle>{link.title}</CardTitle>
                  <CardDescription>{link.description}</CardDescription>
                </div>
                 <Button variant="ghost" size="icon">
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                </Button>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
