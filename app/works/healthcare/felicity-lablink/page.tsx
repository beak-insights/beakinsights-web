"use client"

import { motion } from "framer-motion"
import { ArrowLeft, LinkIcon, Shield } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FelicityLablinkPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/works">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to our works</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Felicity LabLink</h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8 grid gap-8 md:grid-cols-2"
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            Seamless Laboratory Integration Platform
          </h2>
          <p className="text-muted-foreground">
            Felicity LabLink provides secure, reliable integration between laboratory systems,
            enabling seamless data exchange and workflow automation.
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
            <LinkIcon className="h-12 w-12 text-primary" />
            <h3 className="mt-4 font-bold">System Integration</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Connect multiple laboratory systems seamlessly
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <Shield className="h-12 w-12 text-primary" />
            <h3 className="mt-4 font-bold">Secure Transfer</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Enterprise-grade security for data exchange
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

