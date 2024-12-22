"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Database, Flashlight, Lock, Settings, FileText, Box } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FelicityLimsPage() {

  return (<div>
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
              Felicity LIMS is an open-source Laboratory Information Management System 
              that revolutionizes laboratory operations with comprehensive sample tracking, 
              workflow automation, and powerful analytics.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="https://github.com/beak-insights/felicity-lims">View on GitHub</Link>
              </Button>
            </div>
            <div>
              <div className="mt-16 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">Quick Setup</h3>
                <ol className="list-decimal list-inside space-y-4 text-muted-foreground flex-grow">
                  <li>Download docker-compose.yml from our repository</li>
                  <li>Configure environment variables</li>
                  <li>Run docker compose up -d</li>
                  <li>Initialize database with felicity-lims upgrade</li>
                </ol>
                <p className="mt-6">Visit our documentation for detailed configuration options.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <Flashlight className="h-12 w-12 text-primary" />
              <h3 className="mt-4 font-bold">Sample Management</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Complete sample lifecycle tracking from receipt to final results
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <Settings className="h-12 w-12 text-primary" />
              <h3 className="mt-4 font-bold">Workflow Automation</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Streamline processes with customizable workflows and reflex rules
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <FileText className="h-12 w-12 text-primary" />
              <h3 className="mt-4 font-bold">Advanced Reporting</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Generate comprehensive reports with integrated analytics dashboard
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <Box className="h-12 w-12 text-primary" />
              <h3 className="mt-4 font-bold">Inventory Control</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Manage laboratory supplies with integrated inventory tracking
              </p>
            </div>
          </div>

          <div className="col-span-2">
            <hr className="my-2" />
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary">Tech Stack</h3>
              <hr className="mt-2 mb-8" />
              <motion.div
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              >
                <ul className="w-full grid grid-cols-4 gap-4">
                  <li className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card">
                    <Box className="h-8 w-8 text-primary" />
                    <span className="font-bold">FastAPI</span>
                    <span className="text-sm text-muted-foreground">High-performance backend</span>
                  </li>
                  <li className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card">
                    <Database className="h-8 w-8 text-primary" />
                    <span className="font-bold">PostgreSQL</span>
                    <span className="text-sm text-muted-foreground">Reliable data storage</span>
                  </li>
                  <li className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card">
                    <Settings className="h-8 w-8 text-primary" />
                    <span className="font-bold">Vue + Tailwind</span>
                    <span className="text-sm text-muted-foreground">Modern frontend</span>
                  </li>
                  <li className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card">
                    <Lock className="h-8 w-8 text-primary" />
                    <span className="font-bold">Strawberry GraphQL</span>
                    <span className="text-sm text-muted-foreground">Flexible API</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>)
}