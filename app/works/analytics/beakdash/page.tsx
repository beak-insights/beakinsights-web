"use client"

import { motion } from "framer-motion"
import { ArrowLeft, BarChart2, Database, Lock } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BeakdashPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/works">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to our works</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">BeakDash</h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8 grid gap-8 md:grid-cols-2"
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            Transform SQL Data into Interactive Visualizations
          </h2>
          <p className="text-muted-foreground">
            BeakDash transforms your SQL data into powerful, interactive visualizations
            with Apache ECharts integration. Connect directly to your database and start
            creating insightful dashboards in minutes.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="https://github.com">View on GitHub</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
          <div >
            <div className="mt-16 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">How It Works</h3>
              <ol className="list-decimal list-inside space-y-4 text-muted-foreground flex-grow">
                <li>Add your PostgreSQL connection</li>
                <li>Add your datasources (tables, views, aggregate tables)</li>
                <li>Create your pages (dashboards/indicators)</li>
                <li>Add widgets powered by your datasets + SQL</li>
              </ol>
              <p className="mt-6">More features coming soon, stay tuned!</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <Database className="h-12 w-12 text-primary" />
            <h3 className="mt-4 font-bold">Direct SQL Connection</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Connect directly to your SQL database and start visualizing data in minutes
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <BarChart2 className="h-12 w-12 text-primary" />
            <h3 className="mt-4 font-bold">Advanced Analytics</h3>
            <p className="mt-2 text-sm text-muted-foreground">
            Leverage Apache ECharts&apos; powerful features for deep data analysis
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <Lock className="h-12 w-12 text-primary" />
            <h3 className="mt-4 font-bold">Secure by Design</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              BeakDash doesn&apos;t store your data - queries are run directly on your datasources. 
              With local client caching, we prevent unnecessary database calls, reducing your costs 
              while maintaining performance.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <Database className="h-12 w-12 text-primary" />
            <h3 className="mt-4 font-bold">AI Copilot</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              BeakDash&apos;s AI Copilot helps you build queries and visualizations faster.
            </p>
          </div>
        </div>

        <div className="col-span-2">
          <hr className="my-2" />
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary">Tech Stack</h3>
            <hr className="mt-2 mb-8" />
            <ul className="w-full flex justify-between items-center gap-x-4 text-muted-foreground">
              <li>Next.js 19 for optimal performance.</li>
              <li>Clerk for secure authentication.</li>
              <li>Supabase for database management.</li>
              <li>Local client caching to reduce costs.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

