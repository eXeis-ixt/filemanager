
import * as React from "react"
import { Menu } from 'lucide-react'

import { Button } from "@/Components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from "@inertiajs/react"

const navigation = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      setIsScrolled(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <header
        className={`relative w-full transition-all  rounded-full border border-white/10 ${
          isScrolled
          ? "bg-transparent max-w-[90%] md:max-w-[70%] supports-[backdrop-filter]:bg-white/10 backdrop-blur-xl"
          : "bg-transparent "
        } transition-all duration-300 `}
      >
        <div className="container flex h-14 items-center justify-between px-8">
          <div className="flex gap-6 md:gap-10">
            <Link className="flex items-center space-x-2" href="#">
              <span className="inline-block font-bold">LOGO</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:flex">
                <Link href={route('login')} >
              Sign In
                </Link>
            </Button>
            <Button className="hidden md:flex">
                <Link href={route('register')}>
              Get Started
                </Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="px-2 md:hidden" aria-label="Open Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="rounded-l-2xl">
                <div className="flex flex-col gap-4 py-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button variant="ghost">
                    <Link href={route('login')}>
                    Sign In
                    </Link>
                    </Button>
                  <Button>
                    <Link href={route('register')}>
                    Get Started
                    </Link>
                    </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  )
}

