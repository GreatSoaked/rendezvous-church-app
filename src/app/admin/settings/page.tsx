
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
import { ArrowUp, ArrowDown, Home, Calendar, Clapperboard, HandHelping, HeartHandshake, Users, BookOpen, LogIn, Sparkles, Mail, KeyRound, UserPlus, MessageSquare, Settings, PlusCircle, Trash2, Pencil, ExternalLink } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

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


export default function AdminSettingsPage() {
  const [users, setUsers] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isUserDialogOpen, setIsUserDialogOpen] = useState(false);
  const [navItems, setNavItems] = useState<NavItem[]>(initialNavItemsData);

  const [resources, setResources] = useState(initialResources);
  const [editingResource, setEditingResource] = useState<Resource | null>(null);
  const [isResourceDialogOpen, setIsResourceDialogOpen] = useState(false);
  
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
        if(initialResources.find(r => r.title === editingResource.title && r.title !== (editingResource as any).originalTitle)) {
             // This is an edit of an existing one.
             setResources(resources.map(r => r.title === (editingResource as any).originalTitle ? editingResource : r));
        } else {
            // This is a new one
            setResources([...resources, editingResource]);
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
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Admin Settings</h1>
        <p className="text-muted-foreground">
          Manage your application's configuration and users.
        </p>
      </div>

      <Tabs defaultValue="navigation" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
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

        <TabsContent value="resources">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Resource Links</CardTitle>
                            <CardDescription>
                                Add, edit, or remove links from the Resources page.
                            </CardDescription>
                        </div>
                        <Button onClick={handleAddNewResource}>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add Resource
                        </Button>
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
                        {resources.map((resource) => (
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
            <DialogTitle>{editingResource && initialResources.some(r => r.title === editingResource.title) ? 'Edit Resource' : 'Add New Resource'}</DialogTitle>
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
    </div>
  );
}

    