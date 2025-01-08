import * as React from "react"
// import { MainSidebar } from "./main-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { MainSidebar } from "@/Components/main-sidebar"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen bg-background">
        <MainSidebar />
        <SidebarInset>
          <header className="flex h-14 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
          </header>
          <main className="flex-1 space-y-4 p-8">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
