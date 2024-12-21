"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useState } from "react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Industries", type: "megaMenu" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const industries = [
  {
    name: "Healthcare",
    items: [
      { 
        name: "Felicity LIMS", 
        href: "/works/healthcare/felicity-lims",
        description: "Felicity LIMS is a laboratory information management system that helps labs manage samples, tests, and results."
      },
      { 
        name: "Felicity LabLink", 
        href: "/works/healthcare/felicity-lablink",
        description: "Felicity LabLink is a middleware that connects laboratory instruments to laboratory information systems."
      },
    ],
  },
  {
    name: "Analytics",
    items: [
      { 
        name: "BeakDash", 
        href: "/works/analytics/beakdash",
        description: "BeakDash is a business intelligence dashboard that helps organizations easilty visualize and analyze their data."
      },
    ],
  },
]



const ListItem: React.FC<{
  title: string
  href: string
  children: React.ReactNode
}> = ({ title, href, children }) => {
  return (
    <li className="gap-x-3">
      <Link href={href} className="text-sm font-medium text-primary text-nowrap">
        {title}
      </Link>
      <p className="text-sm text-muted-foreground">{children}</p>
    </li>
  )
}

function MegaMenu() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0])

  return (
    <div className="flex w-[800px] p-4">
      <ul className="w-1/3 space-y-2 border-r pr-4">
        {industries.map((industry) => (
          <li key={industry.name}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start",
                selectedIndustry.name === industry.name && "bg-accent text-accent-foreground"
              )}
              onClick={() => setSelectedIndustry(industry)}
            >
              {industry.name}
            </Button>
          </li>
        ))}
      </ul>
      <div className="w-2/3 pl-4">
        <h3 className="mb-2 text-lg font-semibold">{selectedIndustry.name}</h3>
        <ul className="p-4 md:w-[400px] lg:w-[500px]">
          {selectedIndustry.items.map((item, idx) => (
            <>
              <ListItem
                key={item.name}
                title={item.name}
                href={item.href}
              >
                {item.description}
              </ListItem>
              {idx < selectedIndustry.items.length - 1 && <hr className="my-4" />}
            </>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container m-auto flex h-16 items-center">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-2xl font-bold">Beak Insights</span>
          </motion.div>
        </Link>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex gap-6">
            {navigation.map((item) => {
              if (item.type === "megaMenu") {
                return (
                  <HoverCard key={item.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger className="text-sm font-medium text-foreground/60 hover:text-primary">
                      {item.name}
                    </HoverCardTrigger>
                    <HoverCardContent 
                      className="w-auto p-0" 
                      align="start" 
                      sideOffset={8}
                    >
                      <MegaMenu />
                    </HoverCardContent>
                  </HoverCard>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href!}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            {/* <Button>Get Started</Button> */}
          </div>
        </div>
      </nav>
    </header>
  )
}