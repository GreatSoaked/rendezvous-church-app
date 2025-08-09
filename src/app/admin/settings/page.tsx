
"use client";

import { useState, useMemo } from 'react';
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowUp, ArrowDown, Home, Calendar, Clapperboard, HandHelping, HeartHandshake, Users, BookOpen, LogIn, Sparkles, Mail, KeyRound, UserPlus, MessageSquare, Settings, PlusCircle, Trash2, Pencil, ExternalLink, ShieldCheck, AreaChart, BarChart, LineChart } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { Bar, XAxis, YAxis, CartesianGrid, BarChart as RechartsBarChart } from 'recharts';


const initialUsers = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    initials: 'JD',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Editor',
    initials: 'JS',
  },
  {
    name: 'Michael Johnson',
    email: 'michael.j@example.com',
    role: 'Viewer',
    initials: 'MJ',
  },
  {
    name: 'Sarah Lee',
    email: 'sarah.lee@example.com',
    role: 'Tribe Leader',
    initials: 'SL',
  }
];

type User = {
  name: string;
  email: string;
  role: string;
  initials: string;
};

const initialNavItemsData = [
    { href: "/", label: "Dashboard", icon: Home, visible: true },
    { href: "/events", label: "Events", icon: Calendar, visible: true },
    { href: "/sermons", label: "Sermons", icon: Clapperboard, visible: true },
    { href: "/giving", label: "Giving", icon: HandHelping, visible: true },
    { href: "/prayer", label: "Prayer Requests", icon: HeartHandshake, visible: true },
    { href: "/groups", label: "Groups", icon: Users, visible: true },
    { href: "/resources", label: "Resources", icon: BookOpen, visible: true },
    { href: "/check-in", label: "Pre-Check-In", icon: LogIn, visible: true },
    { href: "/welcome", label: "Welcome Tool", icon: Sparkles, visible: true },
    { href: "/inbox", label: "Inbox", icon: Mail, visible: true },
    { href: "/login", label: "Login", icon: KeyRound, visible: true },
    { href: "/register", label: "Register", icon: UserPlus, visible: true },
    { href: "/admin/messaging", label: "Messaging", icon: MessageSquare, visible: true },
    { href: "/admin/settings", label: "Settings", icon: Settings, visible: true },
];

type NavItem = {
    href: string;
    label: string;
    icon: React.ElementType;
    visible: boolean;
}

const initialResources = [
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
];

type Resource = {
  title: string;
  description: string;
  href: string;
  category: string;
};

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
];
type Event = typeof initialEvents[0];

const initialSermons = [
  {
    title: 'The Foundation of Faith',
    speaker: 'Pastor John Smith',
    date: 'August 11, 2024',
    series: 'Building a Strong Life',
    imageUrl: 'https://placehold.co/600x400.png',
  },
  {
    title: 'Living in Grace',
    speaker: 'Pastor John Smith',
    date: 'August 4, 2024',
    series: 'Building a Strong Life',
    imageUrl: 'https://placehold.co/600x400.png',
  },
];
type Sermon = typeof initialSermons[0];

const initialGroups = [
  {
    name: 'Young Adults Connect',
    schedule: 'Tuesdays at 7:00 PM',
    leader: 'John & Jane Smith',
    category: 'Small Group',
    material: 'Book of Romans',
  },
  {
    name: 'Men\'s Bible Study',
    schedule: 'Saturdays at 8:00 AM',
    leader: 'David Chen',
    category: 'Bible Study',
    material: 'The Pursuit of Holiness',
  },
  {
    name: 'Worship Team',
    schedule: 'Thursdays at 6:30 PM',
    leader: 'Sarah Lee',
    category: 'Ministry Team',
    material: 'Weekly Song Set',
  },
];
type Group = typeof initialGroups[0];

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
type GivingLink = typeof initialGivingLinks[0];

const initialTermsContent = `
Last updated: August 12, 2024

Agreement to Terms
These Terms and Conditions constitute a legally binding agreement made between you and Rendezvous Church concerning your access to and use of the application.

1. User Accounts
When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.

2. User Conduct
You agree not to use the Service to post or otherwise transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.

3. Intellectual Property
The Service and its original content, features, and functionality are and will remain the exclusive property of Rendezvous Church and its licensors.

4. Termination
We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.

5. Governing Law
These Terms shall be governed and construed in accordance with the laws of the land, without regard to its conflict of law provisions.

Contact Us
If you have any questions about these Terms, please contact us at: contact@rendezvous.church
`.trim();

const initialPrivacyContent = `
Last updated: August 12, 2024

Introduction
Your privacy is important to us. This Privacy Policy explains how Rendezvous Church ("we," "us," or "our") collects, uses, discloses, and safeguards your information when you use our application.

Information We Collect
We may collect information about you in a variety of ways. The information we may collect on the App includes:
- Personal Data: Personally identifiable information, such as your name, email address, and demographic information, that you voluntarily give to us when you register with the App.
- Usage Data: Information our servers automatically collect when you access the App, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the App.

Use of Your Information
Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the App to:
- Create and manage your account.
- Email you regarding your account or order.
- Enable user-to-user communications.
- Monitor and analyze usage and trends to improve your experience with the App.
- Notify you of updates to the App.

Security of Your Information
We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.

Contact Us
If you have questions or comments about this Privacy Policy, please contact us at: contact@rendezvous.church
`.trim();

const givingData = [
    { date: 'Jan', total: 4500, general: 3000, missions: 1000, building: 500 },
    { date: 'Feb', total: 4800, general: 3200, missions: 1100, building: 500 },
    { date: 'Mar', total: 5200, general: 3400, missions: 1200, building: 600 },
    { date: 'Apr', total: 4900, general: 3300, missions: 1000, building: 600 },
    { date: 'May', total: 5500, general: 3600, missions: 1300, building: 600 },
    { date: 'Jun', total: 5800, general: 3800, missions: 1400, building: 600 },
    { date: 'Jul', total: 6100, general: 4000, missions: 1500, building: 600 },
];
const chartConfig = {
    total: { label: 'Total Giving', color: 'hsl(var(--chart-1))' },
    general: { label: 'General Fund', color: 'hsl(var(--chart-2))' },
    missions: { label: 'Missions Fund', color: 'hsl(var(--chart-3))' },
    building: { label: 'Building Fund', color: 'hsl(var(--chart-4))' },
} satisfies Record<string, any>;


export default function AdminSettingsPage() {
  const [currentUserRole, setCurrentUserRole] = useState<'Admin' | 'Tribe Leader'>('Admin');
  const [users, setUsers] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isUserDialogOpen, setIsUserDialogOpen] = useState(false);
  const [navItems, setNavItems] = useState<NavItem[]>(initialNavItemsData);

  const [resources, setResources] = useState(initialResources);
  const [editingResource, setEditingResource] = useState<Resource | null>(null);
  const [isResourceDialogOpen, setIsResourceDialogOpen] = useState(false);
  const [resourceFilter, setResourceFilter] = useState('All');

  const [events, setEvents] = useState(initialEvents);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false);
  
  const [sermons, setSermons] = useState(initialSermons);
  const [editingSermon, setEditingSermon] = useState<Sermon | null>(null);
  const [isSermonDialogOpen, setIsSermonDialogOpen] = useState(false);

  const [groups, setGroups] = useState(initialGroups);
  const [editingGroup, setEditingGroup] = useState<Group | null>(null);
  const [isGroupDialogOpen, setIsGroupDialogOpen] = useState(false);
  const [groupFilter, setGroupFilter] = useState('All');

  const [givingLinks, setGivingLinks] = useState(initialGivingLinks);
  const [editingGivingLink, setEditingGivingLink] = useState<GivingLink | null>(null);
  const [isGivingLinkDialogOpen, setIsGivingLinkDialogOpen] = useState(false);
  
  const [termsContent, setTermsContent] = useState(initialTermsContent);
  const [privacyContent, setPrivacyContent] = useState(initialPrivacyContent);

  const resourceCategories = useMemo(() => ['All', ...Array.from(new Set(initialResources.map(r => r.category)))], [initialResources]);
  const groupCategories = useMemo(() => ['All', ...Array.from(new Set(initialGroups.map(g => g.category)))], [initialGroups]);

  const filteredResources = useMemo(() => {
    if (resourceFilter === 'All') return resources;
    return resources.filter(r => r.category === resourceFilter);
  }, [resources, resourceFilter]);

  const filteredGroups = useMemo(() => {
    if (groupFilter === 'All') return groups;
    return groups.filter(g => g.category === groupFilter);
  }, [groups, groupFilter]);

  
  const handleEditUserClick = (user: User) => {
    setEditingUser({ ...user });
    setIsUserDialogOpen(true);
  };

  const handleSaveUserChanges = () => {
    if (editingUser) {
      setUsers(users.map(u => u.email === editingUser.email ? editingUser : u));
    }
    setIsUserDialogOpen(false);
    setEditingUser(null);
  };
  
  const handleEditResourceClick = (resource: Resource) => {
    setEditingResource({ ...resource });
    setIsResourceDialogOpen(true);
  };
  
  const handleSaveResourceChanges = () => {
    if (editingResource) {
        const isNew = !resources.some(r => r.title === (editingResource as any).originalTitle);
        if (isNew) {
            setResources([...resources, editingResource]);
        } else {
             setResources(resources.map(r => r.title === (editingResource as any).originalTitle ? editingResource : r));
        }
    }
    setIsResourceDialogOpen(false);
    setEditingResource(null);
  }

  const handleDeleteResource = (title: string) => {
      setResources(resources.filter(r => r.title !== title));
  }

  const handleAddNewResource = () => {
      setEditingResource({ title: '', description: '', href: '', category: ''});
      setIsResourceDialogOpen(true);
  }

  const handleEditEventClick = (event: Event) => {
    setEditingEvent({ ...event, originalTitle: event.title });
    setIsEventDialogOpen(true);
  };
  
  const handleSaveEventChanges = () => {
    if (editingEvent) {
        const isNew = !events.some(e => e.title === (editingEvent as any).originalTitle);
        if (isNew) {
            setEvents([...events, editingEvent]);
        } else {
             setEvents(events.map(e => e.title === (editingEvent as any).originalTitle ? editingEvent : e));
        }
    }
    setIsEventDialogOpen(false);
    setEditingEvent(null);
  }

  const handleDeleteEvent = (title: string) => {
      setEvents(events.filter(e => e.title !== title));
  }

  const handleAddNewEvent = () => {
      setEditingEvent({ title: '', date: '', time: '', location: '', description: ''});
      setIsEventDialogOpen(true);
  }

  const handleEditSermonClick = (sermon: Sermon) => {
    setEditingSermon({ ...sermon, originalTitle: sermon.title });
    setIsSermonDialogOpen(true);
  };

  const handleSaveSermonChanges = () => {
    if (editingSermon) {
        const isNew = !sermons.some(s => s.title === (editingSermon as any).originalTitle);
        if (isNew) {
            setSermons([{...editingSermon, imageUrl: 'https://placehold.co/600x400.png'}, ...sermons]);
        } else {
             setSermons(sermons.map(s => s.title === (editingSermon as any).originalTitle ? editingSermon : s));
        }
    }
    setIsSermonDialogOpen(false);
    setEditingSermon(null);
  }

    const handleDeleteSermon = (title: string) => {
      setSermons(sermons.filter(s => s.title !== title));
  }

  const handleAddNewSermon = () => {
      setEditingSermon({ title: '', speaker: '', date: '', series: '', imageUrl: ''});
      setIsSermonDialogOpen(true);
  }
  
  const handleEditGroupClick = (group: Group) => {
    setEditingGroup({ ...group, originalName: group.name });
    setIsGroupDialogOpen(true);
  };

  const handleSaveGroupChanges = () => {
    if (editingGroup) {
        const isNew = !groups.some(g => g.name === (editingGroup as any).originalName);
        if (isNew) {
            setGroups([...groups, editingGroup]);
        } else {
             setGroups(groups.map(g => g.name === (editingGroup as any).originalName ? editingGroup : g));
        }
    }
    setIsGroupDialogOpen(false);
    setEditingGroup(null);
  }

  const handleDeleteGroup = (name: string) => {
      setGroups(groups.filter(g => g.name !== name));
  }

  const handleAddNewGroup = () => {
      setEditingGroup({ name: '', schedule: '', leader: '', category: '', material: ''});
      setIsGroupDialogOpen(true);
  }

    const handleEditGivingLinkClick = (link: GivingLink) => {
        setEditingGivingLink({ ...link, originalTitle: link.title });
        setIsGivingLinkDialogOpen(true);
    };

    const handleSaveGivingLinkChanges = () => {
        if (editingGivingLink) {
            const isNew = !givingLinks.some(g => g.title === (editingGivingLink as any).originalTitle);
            if (isNew) {
                setGivingLinks([...givingLinks, editingGivingLink]);
            } else {
                setGivingLinks(givingLinks.map(g => g.title === (editingGivingLink as any).originalTitle ? editingGivingLink : g));
            }
        }
        setIsGivingLinkDialogOpen(false);
        setEditingGivingLink(null);
    }

    const handleDeleteGivingLink = (title: string) => {
        setGivingLinks(givingLinks.filter(g => g.title !== title));
    }

    const handleAddNewGivingLink = () => {
        setEditingGivingLink({ title: '', description: '', href: ''});
        setIsGivingLinkDialogOpen(true);
    }


  const moveNavItem = (index: number, direction: 'up' | 'down') => {
    const newNavItems = [...navItems];
    const item = newNavItems[index];
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (swapIndex < 0 || swapIndex >= newNavItems.length) {
      return;
    }

    newNavItems.splice(index, 1);
    newNavItems.splice(swapIndex, 0, item);
    setNavItems(newNavItems);
  };
  
  const toggleNavItemVisibility = (index: number) => {
      const newNavItems = [...navItems];
      newNavItems[index].visible = !newNavItems[index].visible;
      setNavItems(newNavItems);
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight font-headline">Admin Settings</h1>
          <p className="text-muted-foreground">
            Manage your application's configuration and content.
          </p>
        </div>
        <div className="flex items-center gap-2 self-center md:self-auto">
            <Label htmlFor="role-switcher">Viewing as:</Label>
            <Select value={currentUserRole} onValueChange={(value: 'Admin' | 'Tribe Leader') => setCurrentUserRole(value)}>
                <SelectTrigger id="role-switcher" className="w-[180px]">
                    <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Tribe Leader">Tribe Leader</SelectItem>
                </SelectContent>
            </Select>
        </div>
      </div>


      <Tabs defaultValue="navigation" className="space-y-4">
        <TabsList className="flex-wrap h-auto">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="sermons">Sermons</TabsTrigger>
          <TabsTrigger value="groups">Groups</TabsTrigger>
          <TabsTrigger value="giving">Giving</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          {currentUserRole === 'Admin' && <TabsTrigger value="analytics">Analytics</TabsTrigger>}
          {currentUserRole === 'Admin' && <TabsTrigger value="legal">Legal</TabsTrigger>}
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Update your site's basic information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="site-name">Site Name</Label>
                <Input id="site-name" defaultValue="Rendezvous Church" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="site-description">Site Description</Label>
                <Textarea
                  id="site-description"
                  defaultValue="Your central hub for church community and engagement."
                  className="min-h-[100px]"
                />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize the look and feel of your application.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="space-y-2">
                <Label htmlFor="logo">Logo</Label>
                <Input id="logo" type="file" />
                <p className="text-sm text-muted-foreground">Upload a new logo (e.g., PNG, JPG, SVG).</p>
              </div>
               <div className="space-y-2">
                <Label>Theme Colors</Label>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary border" />
                        <span>Primary</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-accent border" />
                        <span>Accent</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-background border" />
                        <span>Background</span>
                    </div>
                </div>
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="navigation">
          <Card>
            <CardHeader>
              <CardTitle>Sidebar Navigation</CardTitle>
              <CardDescription>
                Reorder and toggle visibility of items in the main sidebar.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <div key={item.href} className="flex items-center justify-between rounded-md border bg-background p-3">
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch
                        checked={item.visible}
                        onCheckedChange={() => toggleNavItemVisibility(index)}
                        aria-label={`Toggle visibility of ${item.label}`}
                      />
                      <Button variant="ghost" size="icon" onClick={() => moveNavItem(index, 'up')} disabled={index === 0}>
                        <ArrowUp className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => moveNavItem(index, 'down')} disabled={index === navItems.length - 1}>
                        <ArrowDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
             <CardFooter>
                <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>


        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>
                Manage who has access to your application.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.email}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                           <Avatar>
                            <AvatarImage src={`https://placehold.co/40x40.png?text=${user.initials}`} />
                            <AvatarFallback>{user.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={user.role === 'Admin' ? 'default' : 'secondary'}>{user.role}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" onClick={() => handleEditUserClick(user)}>Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="events">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Events</CardTitle>
                            <CardDescription>
                                Add, edit, or remove events from the Events page.
                            </CardDescription>
                        </div>
                        <Button onClick={handleAddNewEvent}>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add Event
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Date & Time</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {events.map((event) => (
                            <TableRow key={event.title}>
                            <TableCell>
                                <p className="font-medium">{event.title}</p>
                                <p className="text-sm text-muted-foreground truncate max-w-xs">{event.description}</p>
                            </TableCell>
                             <TableCell>{event.date} at {event.time}</TableCell>
                            <TableCell>{event.location}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="icon" onClick={() => handleEditEventClick(event)}>
                                    <Pencil className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDeleteEvent(event.title)}>
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="sermons">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Sermons</CardTitle>
                            <CardDescription>
                                Add, edit, or remove sermons from the Sermons page.
                            </CardDescription>
                        </div>
                        <Button onClick={handleAddNewSermon}>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add Sermon
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Speaker</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {sermons.map((sermon) => (
                            <TableRow key={sermon.title}>
                            <TableCell>
                                <p className="font-medium">{sermon.title}</p>
                            </TableCell>
                            <TableCell>{sermon.speaker}</TableCell>
                             <TableCell>{sermon.date}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="icon" onClick={() => handleEditSermonClick(sermon)}>
                                    <Pencil className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDeleteSermon(sermon.title)}>
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="groups">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <CardTitle>Groups</CardTitle>
                            <CardDescription>
                                Add, edit, or remove groups from the Groups page.
                            </CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                            <Select value={groupFilter} onValueChange={setGroupFilter}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Filter by category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {groupCategories.map(category => (
                                        <SelectItem key={category} value={category}>{category}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Button onClick={handleAddNewGroup}>
                                <PlusCircle className="mr-2 h-4 w-4" />
                                Add Group
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Category</TableHead>
                             <TableHead>Leader</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {filteredGroups.map((group) => (
                            <TableRow key={group.name}>
                            <TableCell>
                                <p className="font-medium">{group.name}</p>
                            </TableCell>
                            <TableCell><Badge variant="secondary">{group.category}</Badge></TableCell>
                             <TableCell>{group.leader}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="icon" onClick={() => handleEditGroupClick(group)}>
                                    <Pencil className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDeleteGroup(group.name)}>
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="giving">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Giving Links</CardTitle>
                            <CardDescription>
                                Add, edit, or remove links from the Giving page.
                            </CardDescription>
                        </div>
                        <Button onClick={handleAddNewGivingLink}>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add Giving Link
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {givingLinks.map((link) => (
                            <TableRow key={link.title}>
                            <TableCell>
                                <p className="font-medium">{link.title}</p>
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground truncate max-w-xs">{link.description}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="icon" asChild>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4" /></a>
                                </Button>
                                <Button variant="ghost" size="icon" onClick={() => handleEditGivingLinkClick(link)}>
                                    <Pencil className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDeleteGivingLink(link.title)}>
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="resources">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <CardTitle>Resource Links</CardTitle>
                            <CardDescription>
                                Add, edit, or remove links from the Resources page.
                            </CardDescription>
                        </div>
                         <div className="flex items-center gap-2">
                            <Select value={resourceFilter} onValueChange={setResourceFilter}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Filter by category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {resourceCategories.map(category => (
                                        <SelectItem key={category} value={category}>{category}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Button onClick={handleAddNewResource}>
                                <PlusCircle className="mr-2 h-4 w-4" />
                                Add Resource
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {filteredResources.map((resource) => (
                            <TableRow key={resource.title}>
                            <TableCell>
                                <p className="font-medium">{resource.title}</p>
                                <p className="text-sm text-muted-foreground truncate max-w-xs">{resource.description}</p>
                            </TableCell>
                            <TableCell><Badge variant="secondary">{resource.category}</Badge></TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="icon" asChild>
                                    <a href={resource.href} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4" /></a>
                                </Button>
                                <Button variant="ghost" size="icon" onClick={() => handleEditResourceClick(resource)}>
                                    <Pencil className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDeleteResource(resource.title)}>
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

        {currentUserRole === 'Admin' && <TabsContent value="analytics">
            <Card>
                <CardHeader>
                    <CardTitle>Giving Analytics</CardTitle>
                    <CardDescription>
                        An overview of your church's financial support.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <Card>
                         <CardHeader>
                            <CardTitle>Total Giving Over Time</CardTitle>
                         </CardHeader>
                         <CardContent>
                             <ChartContainer config={chartConfig} className="w-full h-[300px]">
                                <RechartsBarChart data={givingData} accessibilityLayer>
                                    <CartesianGrid vertical={false} />
                                    <XAxis dataKey="date" tickLine={false} tickMargin={10} axisLine={false} />
                                    <YAxis tickFormatter={(value) => `$${value/1000}k`} />
                                    <ChartTooltip content={<ChartTooltipContent />} />
                                    <ChartLegend content={<ChartLegendContent />} />
                                    <Bar dataKey="total" fill="var(--color-total)" radius={4} />
                                </RechartsBarChart>
                             </ChartContainer>
                         </CardContent>
                    </Card>
                     <Card>
                         <CardHeader>
                            <CardTitle>Giving by Fund</CardTitle>
                         </CardHeader>
                         <CardContent>
                             <ChartContainer config={chartConfig} className="w-full h-[300px]">
                                <RechartsBarChart data={givingData} layout="vertical" stackOffset="expand">
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="date" type="category" tickLine={false} tickMargin={10} axisLine={false} />
                                    <ChartTooltip content={<ChartTooltipContent />} />
                                    <ChartLegend content={<ChartLegendContent />} />
                                    <Bar dataKey="general" fill="var(--color-general)" stackId="a" radius={[4, 0, 0, 4]} />
                                    <Bar dataKey="missions" fill="var(--color-missions)" stackId="a" />
                                    <Bar dataKey="building" fill="var(--color-building)" stackId="a" radius={[0, 4, 4, 0]}/>
                                </RechartsBarChart>
                             </ChartContainer>
                         </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </TabsContent>}

        {currentUserRole === 'Admin' && <TabsContent value="legal">
            <Card>
                <CardHeader>
                    <CardTitle>Legal Documents</CardTitle>
                    <CardDescription>
                        Edit the content for your Terms of Service and Privacy Policy pages.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="terms-content">Terms of Service</Label>
                        <Textarea 
                            id="terms-content" 
                            className="min-h-[300px] font-mono text-xs"
                            value={termsContent}
                            onChange={(e) => setTermsContent(e.target.value)}
                        />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="privacy-content">Privacy Policy</Label>
                        <Textarea 
                            id="privacy-content" 
                            className="min-h-[300px] font-mono text-xs"
                            value={privacyContent}
                            onChange={(e) => setPrivacyContent(e.target.value)}
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Save Legal Content</Button>
                </CardFooter>
            </Card>
        </TabsContent>}
      </Tabs>

      <Dialog open={isUserDialogOpen} onOpenChange={setIsUserDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Make changes to the user's profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          {editingUser && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Photo
                </Label>
                <div className="col-span-3 flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src={`https://placehold.co/40x40.png?text=${editingUser.initials}`} />
                        <AvatarFallback>{editingUser.initials}</AvatarFallback>
                    </Avatar>
                    <Input id="photo" type="file" className="text-sm"/>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={editingUser.name}
                  onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  value={editingUser.email}
                  onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">
                  Role
                </Label>
                <Select
                  value={editingUser.role}
                  onValueChange={(value) => setEditingUser({ ...editingUser, role: value })}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Editor">Editor</SelectItem>
                    <SelectItem value="Viewer">Viewer</SelectItem>
                    <SelectItem value="Tribe Leader">Tribe Leader</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsUserDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveUserChanges}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Dialog open={isResourceDialogOpen} onOpenChange={setIsResourceDialogOpen}>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>{editingResource && resources.some(r => r.title === editingResource.title) ? 'Edit Resource' : 'Add New Resource'}</DialogTitle>
            <DialogDescription>
                Fill out the details for the resource link below.
            </DialogDescription>
            </DialogHeader>
            {editingResource && (
            <div className="grid gap-4 py-4">
                <div className="space-y-2">
                    <Label htmlFor="resource-title">Title</Label>
                    <Input id="resource-title" value={editingResource.title} onChange={(e) => setEditingResource({ ...editingResource, title: e.target.value, originalTitle: editingResource.title })} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="resource-desc">Description</Label>
                    <Textarea id="resource-desc" value={editingResource.description} onChange={(e) => setEditingResource({ ...editingResource, description: e.target.value })} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="resource-href">URL</Label>
                    <Input id="resource-href" value={editingResource.href} onChange={(e) => setEditingResource({ ...editingResource, href: e.target.value })} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="resource-category">Category</Label>
                    <Input id="resource-category" value={editingResource.category} onChange={(e) => setEditingResource({ ...editingResource, category: e.target.value })} />
                </div>
            </div>
            )}
            <DialogFooter>
                <Button variant="outline" onClick={() => setIsResourceDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleSaveResourceChanges}>Save Resource</Button>
            </DialogFooter>
        </DialogContent>
      </Dialog>

    <Dialog open={isEventDialogOpen} onOpenChange={setIsEventDialogOpen}>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>{editingEvent && events.some(e => e.title === editingEvent.title) ? 'Edit Event' : 'Add New Event'}</DialogTitle>
            </DialogHeader>
            {editingEvent && (
            <div className="grid gap-4 py-4">
                <Input placeholder="Title" value={editingEvent.title} onChange={(e) => setEditingEvent({ ...editingEvent, title: e.target.value, originalTitle: editingEvent.title })} />
                <Textarea placeholder="Description" value={editingEvent.description} onChange={(e) => setEditingEvent({ ...editingEvent, description: e.target.value })} />
                <Input placeholder="Date" value={editingEvent.date} onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })} />
                <Input placeholder="Time" value={editingEvent.time} onChange={(e) => setEditingEvent({ ...editingEvent, time: e.target.value })} />
                <Input placeholder="Location" value={editingEvent.location} onChange={(e) => setEditingEvent({ ...editingEvent, location: e.target.value })} />
            </div>
            )}
            <DialogFooter>
                <Button variant="outline" onClick={() => setIsEventDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleSaveEventChanges}>Save Event</Button>
            </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Dialog open={isSermonDialogOpen} onOpenChange={setIsSermonDialogOpen}>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>{editingSermon && sermons.some(s => s.title === editingSermon.title) ? 'Edit Sermon' : 'Add New Sermon'}</DialogTitle>
            </DialogHeader>
            {editingSermon && (
            <div className="grid gap-4 py-4">
                <Input placeholder="Title" value={editingSermon.title} onChange={(e) => setEditingSermon({ ...editingSermon, title: e.target.value, originalTitle: editingSermon.title })} />
                <Input placeholder="Speaker" value={editingSermon.speaker} onChange={(e) => setEditingSermon({ ...editingSermon, speaker: e.target.value })} />
                <Input type="date" placeholder="Date" value={editingSermon.date} onChange={(e) => setEditingSermon({ ...editingSermon, date: e.target.value })} />
                <Input placeholder="Series" value={editingSermon.series} onChange={(e) => setEditingSermon({ ...editingSermon, series: e.target.value })} />
                 <Input type="file" />
            </div>
            )}
            <DialogFooter>
                <Button variant="outline" onClick={() => setIsSermonDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleSaveSermonChanges}>Save Sermon</Button>
            </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isGroupDialogOpen} onOpenChange={setIsGroupDialogOpen}>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>{editingGroup && groups.some(g => g.name === editingGroup.name) ? 'Edit Group' : 'Add New Group'}</DialogTitle>
            </DialogHeader>
            {editingGroup && (
            <div className="grid gap-4 py-4">
                <Input placeholder="Name" value={editingGroup.name} onChange={(e) => setEditingGroup({ ...editingGroup, name: e.target.value, originalName: editingGroup.name })} />
                <Input placeholder="Schedule" value={editingGroup.schedule} onChange={(e) => setEditingGroup({ ...editingGroup, schedule: e.target.value })} />
                <Input placeholder="Leader" value={editingGroup.leader} onChange={(e) => setEditingGroup({ ...editingGroup, leader: e.target.value })} />
                <Input placeholder="Category" value={editingGroup.category} onChange={(e) => setEditingGroup({ ...editingGroup, category: e.target.value })} />
                <Input placeholder="Study Material" value={editingGroup.material} onChange={(e) => setEditingGroup({ ...editingGroup, material: e.target.value })} />
            </div>
            )}
            <DialogFooter>
                <Button variant="outline" onClick={() => setIsGroupDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleSaveGroupChanges}>Save Group</Button>
            </DialogFooter>
        </DialogContent>
      </Dialog>

    <Dialog open={isGivingLinkDialogOpen} onOpenChange={setIsGivingLinkDialogOpen}>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>{editingGivingLink && givingLinks.some(g => g.title === editingGivingLink.title) ? 'Edit Giving Link' : 'Add New Giving Link'}</DialogTitle>
            </DialogHeader>
            {editingGivingLink && (
            <div className="grid gap-4 py-4">
                <Input placeholder="Title" value={editingGivingLink.title} onChange={(e) => setEditingGivingLink({ ...editingGivingLink, title: e.target.value, originalTitle: editingGivingLink.title })} />
                <Textarea placeholder="Description" value={editingGivingLink.description} onChange={(e) => setEditingGivingLink({ ...editingGivingLink, description: e.target.value })} />
                <Input placeholder="URL" value={editingGivingLink.href} onChange={(e) => setEditingGivingLink({ ...editingGivingLink, href: e.target.value })} />
            </div>
            )}
            <DialogFooter>
                <Button variant="outline" onClick={() => setIsGivingLinkDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleSaveGivingLinkChanges}>Save Link</Button>
            </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
