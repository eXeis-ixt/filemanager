"use client"

import * as React from "react"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "./ThemeProvider"
import { SidebarMenuItem, SidebarMenuButton } from "@/Components/ui/sidebar"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <SidebarMenuItem>
      <Tooltip>
        <TooltipTrigger asChild>
          <SidebarMenuButton
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="w-full"
          >
            {theme === "dark" ? (
              <>
                <Sun className="h-4 w-4 shrink-0" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="h-4 w-4 shrink-0" />
                <span>Dark Mode</span>
              </>
            )}
          </SidebarMenuButton>
        </TooltipTrigger>
        <TooltipContent side="right" className="group-data-[collapsible=icon]:block hidden">
          Toggle theme
        </TooltipContent>
      </Tooltip>
    </SidebarMenuItem>
  )
}

