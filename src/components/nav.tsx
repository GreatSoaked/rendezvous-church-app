
"use client"
import {
  Calendar,
  HandHelping,
  HeartHandshake,
  Home,
  BookOpen,
  Users,
  Clapperboard,
  LogIn,
  Sparkles,
  Settings,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

const navItems = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/sermons", label: "Sermons", icon: Clapperboard },
  { href: "/giving", label: "Giving", icon: HandHelping },
  { href: "/prayer", label: "Prayer Requests", icon: HeartHandshake },
  { href: "/groups", label: "Groups", icon: Users },
  { href: "/resources", label: "Resources", icon: BookOpen },
  { href: "/check-in", label: "Pre-Check-In", icon: LogIn },
  { href: "/welcome", label: "Welcome Tool", icon: Sparkles },
  { href: "/admin/settings", label: "Settings", icon: Settings },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <Link href={item.href} passHref legacyBehavior>
            <SidebarMenuButton
              isActive={pathname === item.href}
              tooltip={{ children: item.label }}
            >
              <item.icon className="h-5 w-5" />
              <span className="truncate">{item.label}</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
