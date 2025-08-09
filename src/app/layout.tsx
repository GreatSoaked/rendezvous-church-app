import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Nav } from '@/components/nav';
import { Logo } from '@/components/logo';
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarInset } from '@/components/ui/sidebar';

export const metadata: Metadata = {
  title: 'ConnectPoint',
  description: 'Your central hub for church community and engagement.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased h-full bg-background">
        <SidebarProvider>
            <Sidebar>
              <SidebarHeader>
                <Logo />
              </SidebarHeader>
              <SidebarContent>
                <Nav />
              </SidebarContent>
            </Sidebar>
            <SidebarInset>
              <Header />
              <main className="p-4 sm:p-6 lg:p-8">
                {children}
              </main>
            </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
