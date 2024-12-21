"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const works = [
  {
    title: "BeakDash",
    description: "Transform your SQL data into powerful, interactive visualizations with Apache ECharts integration.",
    href: "/works/analytics/beakdash",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    title: "Felicity LIMS",
    description: "The next generation open source laboratory information management system for clinical/medical laboratories.",
    href: "/works/healthcare/felicity-lims",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "Felicity LabLink",
    description: "A middleware that connects laboratory instruments to laboratory information systems.",
    href: "/works/healthcare/felicity-lablink",
    gradient: "from-green-400 to-lime-500",
  },
]

export default function WorksPage() {
  return (
    <div className="container mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Our Works</h1>
        <p className="text-xl text-muted-foreground">
          Explore our innovative solutions that help businesses harness the power of data.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 grid gap-8 sm:grid-cols-2"
      >
        {works.map((work) => (
          <Link
            key={work.title}
            href={work.href}
            className="group relative overflow-hidden rounded-lg border bg-card p-8 transition-colors hover:bg-accent"
          >
            <div className="flex flex-col gap-4">
              <h2 className={`bg-gradient-to-r ${work.gradient} bg-clip-text text-2xl font-bold text-transparent`}>
                {work.title}
              </h2>
              <p className="text-muted-foreground">{work.description}</p>
              <Button className="w-fit" variant="ghost">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  )
}

