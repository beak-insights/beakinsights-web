"use client"

import { motion } from "framer-motion"
import { BarChart2, Database, LineChart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="container m-auto space-y-6 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
            Welcome to Beak Insights
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Transform Raw Data into{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Actionable Insights
            </span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Harness the power of data to drive informed decision making for businesses across diverse industries.
          </p>
          <div className="flex gap-4">
            {/* <Button asChild>
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button> */}
            <Button variant="outline" asChild>
              <Link href="/works">Our Works</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="container m-auto  py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div className="rounded-lg border bg-card p-8">
            <Database className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-bold">Data Design</h3>
            <p className="mt-2 text-muted-foreground">
              Craft robust and intuitive data architectures tailored to meet unique needs.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-8">
            <LineChart className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-bold">Development Services</h3>
            <p className="mt-2 text-muted-foreground">
              Develop customized data solutions using the latest technologies.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-8">
            <BarChart2 className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-bold">Insightful Analytics</h3>
            <p className="mt-2 text-muted-foreground">
              Unlock data potential with advanced analytics and visualization.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

