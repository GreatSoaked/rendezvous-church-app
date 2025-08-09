import {
  Calendar,
  HandHelping,
  HeartHandshake,
  BookOpen,
  Users,
  Clapperboard,
  LogIn,
  Sparkles,
  KeyRound,
} from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const features = [
  {
    title: 'Events',
    description: 'View upcoming events',
    href: '/events',
    icon: Calendar,
  },
  {
    title: 'Sermons',
    description: 'Watch live and past sermons',
    href: '/sermons',
    icon: Clapperboard,
  },
  {
    title: 'Giving',
    description: 'Donate and give online',
    href: '/giving',
    icon: HandHelping,
  },
  {
    title: 'Prayer Requests',
    description: 'Submit and view requests',
    href: '/prayer',
    icon: HeartHandshake,
  },
  {
    title: 'Groups',
    description: 'Find a small group or team',
    href: '/groups',
    icon: Users,
  },
  {
    title: 'Resources',
    description: 'Find helpful articles & links',
    href: '/resources',
    icon: BookOpen,
  },
  {
    title: 'Pre-Check-In',
    description: 'Streamline your event entry',
    href: '/check-in',
    icon: LogIn,
  },
  {
    title: 'Welcome Tool',
    description: 'Generate welcome messages',
    href: '/welcome',
    icon: Sparkles,
  },
  {
    title: 'Login',
    description: 'Access your account',
    href: '/login',
    icon: KeyRound,
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Welcome to Rendezvous Church</h1>
        <p className="text-muted-foreground">Your central hub for church community and engagement.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {features.map((feature) => (
          <Link href={feature.href} key={feature.href}>
            <Card className="h-full hover:bg-accent hover:text-accent-foreground transition-colors duration-200 flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {feature.title}
                </CardTitle>
                <feature.icon className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
