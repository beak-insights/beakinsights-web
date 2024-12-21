"use client"

import { motion } from "framer-motion"
import { ArrowLeft, FlaskRoundIcon as Flask, Users } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FelicityLimsPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/works">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to our works</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Felicity LIMS</h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8 grid gap-8 md:grid-cols-2"
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            Next Generation Laboratory Information Management
          </h2>
          <p className="text-muted-foreground">
            The Felicity LIMS project creates a comprehensive Laboratory Information Management System (LIMS) 
            that tracks complete laboratory workflow, ensuring accurate sample and experimental data management.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="https://github.com">View on GitHub</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <Flask className="h-12 w-12 text-primary" />
            <h3 className="mt-4 font-bold">Sample Management</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Complete sample lifecycle tracking from receipt to dispatch
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <Users className="h-12 w-12 text-primary" />
            <h3 className="mt-4 font-bold">User Management</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Comprehensive RBAC and user profile management
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

