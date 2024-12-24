"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navigation = [
  { name: "Industries", type: "megaMenu", href: "" },
  { name: "Blog", href: "/blog" },
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
  {
    name: "Markets",
    items: [
      { 
        name: "MQL5 Products", 
        href: "/works/markets/mql5-products",
        description: "A collection of products for MetaTrader 5 platform that help traders enhance their trading outcomes."
      },
    ],
  },
]

const ListItem: React.FC<{
  title: string
  href: string
  children: React.ReactNode
  onClick?: () => void
}> = ({ title, href, children, onClick }) => {
  return (
    <li className="gap-x-3">
      <Link 
        href={href} 
        className="text-sm font-medium text-primary text-nowrap"
        onClick={onClick}
      >
        {title}
      </Link>
      <p className="text-sm text-muted-foreground">{children}</p>
    </li>
  )
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mainExpandedSection, setMainExpandedSection] = useState<string | null>(null)
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>(null)
  const pathname = usePathname()

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleMainSectionClick = (name: string) => {
    if (mainExpandedSection === name) {
      // If closing the main section, also close any open industry
      setMainExpandedSection(null)
      setExpandedIndustry(null)
    } else {
      setMainExpandedSection(name)
    }
  }

  const handleIndustryClick = (e: React.MouseEvent, name: string) => {
    e.stopPropagation() // Prevent the click from bubbling up
    setExpandedIndustry(expandedIndustry === name ? null : name)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 w-full sm:w-80 bg-background border-r z-50 overflow-y-auto"
            style={{ height: '100dvh' }}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-xl font-bold">Menu</span>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <nav className="p-4 space-y-4">
              {navigation.map((item) => {
                if (item.type === "megaMenu") {
                  return (
                    <div key={item.name} className="space-y-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-between"
                        onClick={() => handleMainSectionClick(item.name)}
                      >
                        <span>{item.name}</span>
                        <motion.span
                          animate={{ rotate: mainExpandedSection === item.name ? 180 : 0 }}
                          className="ml-2"
                        >
                          ▼
                        </motion.span>
                      </Button>
                      
                      <AnimatePresence>
                        {mainExpandedSection === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-4">
                              {industries.map((industry) => (
                                <div key={industry.name} className="space-y-2">
                                  <Button
                                    variant="ghost"
                                    className={cn(
                                      "w-full justify-between text-sm",
                                      expandedIndustry === industry.name && "bg-accent text-accent-foreground"
                                    )}
                                    onClick={(e) => handleIndustryClick(e, industry.name)}
                                  >
                                    <span>{industry.name}</span>
                                    <motion.span
                                      animate={{ rotate: expandedIndustry === industry.name ? 180 : 0 }}
                                      className="ml-2"
                                    >
                                      ▼
                                    </motion.span>
                                  </Button>
                                  
                                  <AnimatePresence>
                                    {expandedIndustry === industry.name && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                      >
                                        <div className="pl-4 space-y-4">
                                          {industry.items.map((subItem) => (
                                            <Link
                                              key={subItem.name}
                                              href={subItem.href}
                                              className="block py-2 text-sm hover:text-primary"
                                              onClick={onClose}
                                            >
                                              <span className="font-medium">{subItem.name}</span>
                                              <p className="text-sm text-muted-foreground mt-1">
                                                {subItem.description}
                                              </p>
                                            </Link>
                                          ))}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "block py-2 text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-foreground"
                        : "text-foreground/60"
                    )}
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
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
            <React.Fragment key={item.name}>
              <ListItem
                title={item.name}
                href={item.href}
              >
                {item.description}
              </ListItem>
              {idx < selectedIndustry.items.length - 1 && <hr className="my-4" />}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-6">
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
                  href={item.href}
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

          {/* Theme Toggle - Always visible */}
          <ModeToggle />
        </div>

        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
        />
      </nav>
    </header>
  )
}