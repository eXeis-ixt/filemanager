'use client'

import * as React from "react"
import { Home, Settings, Users, LayoutDashboard, FileAxis3DIcon } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/Components/ui/sidebar"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ThemeToggle } from "./theme-toogle"
import { Link } from "@inertiajs/react"

export function MainSidebar() {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: route('file.index') },
    { icon: Users, label: "Users", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
    { icon: FileAxis3DIcon, label: "File Demo", href: (route('file.demo')) },
  ]

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-border/50">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg">
              <Link href={route('file.index')} className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg md:bg-primary text-primary-foreground">
                  <Home className="h-4 w-4" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold leading-none">Home</span>
                  <span className="text-xs leading-none text-muted-foreground">
                    v1.0.0
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2"
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right" className="group-data-[collapsible=icon]:block hidden">
                  {item.label}
                </TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/50">
        <SidebarMenu>
          <ThemeToggle />
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

