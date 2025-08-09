
"use client";

import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const initialConnectLinks = [
    {
        title: 'Join a Group',
        href: '/groups',
        imageUrl: 'https://placehold.co/600x400.png',
        dataAiHint: 'community group',
    },
    {
        title: 'Volunteer With Us',
        href: '#',
        imageUrl: 'https://placehold.co/600x400.png',
        dataAiHint: 'volunteering hands',
    },
    {
        title: 'New to Rendezvous?',
        href: '#',
        imageUrl: 'https://placehold.co/600x400.png',
        dataAiHint: 'welcome sign',
    }
];

export default function ConnectPage() {
  const [connectLinks, setConnectLinks] = useState(initialConnectLinks);
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Connect With Us</h1>
        <p className="text-muted-foreground">
          Find ways to get involved and take your next step.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {connectLinks.map((link) => (
          <Link href={link.href} key={link.title} className="group">
            <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                        src={link.imageUrl}
                        alt={link.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={link.dataAiHint}
                    />
                </div>
                <CardContent className="p-4 flex-grow flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{link.title}</h3>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:rotate-45" />
                </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
