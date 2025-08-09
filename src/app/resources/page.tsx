import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';

const resources = [
  {
    title: 'Daily Devotional by Our Daily Bread',
    description: 'Start your day with a short, inspiring devotional reading.',
    href: '#',
    category: 'Devotionals',
  },
  {
    title: 'The Bible Project',
    description: 'Watch short-form animated videos that walk through the narrative of the Bible.',
    href: '#',
    category: 'Bible Study',
  },
  {
    title: 'RightNow Media',
    description: 'Access a huge library of faith-based videos for all ages (requires church login).',
    href: '#',
    category: 'Streaming',
  },
  {
    title: 'GotQuestions.org',
    description: 'Find answers to your biblical and theological questions.',
    href: '#',
    category: 'Articles',
  },
    {
    title: 'Focus on the Family',
    description: 'Resources and advice for marriage and parenting from a Christian perspective.',
    href: '#',
    category: 'Family Life',
  },
];

export default function ResourcesPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Resources</h1>
        <p className="text-muted-foreground">
          Helpful links for your spiritual growth and daily life.
        </p>
      </div>
      <div className="space-y-4">
        {resources.map((resource) => (
          <Link href={resource.href} key={resource.title} target="_blank" rel="noopener noreferrer">
            <Card className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
              <CardHeader className="flex flex-row items-center">
                <div className="flex-1">
                  <CardTitle>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground ml-4" />
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
