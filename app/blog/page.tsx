"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Building the Perfect Order Block Detection Algorithm",
      excerpt: "Order blocks are significant areas on a price chart where major market players have shown substantial interest. These zones often act as strong support and resistance levels where price tends to react. In this deep dive, we'll explore the three main algorithms we've developed for detecting these crucial trading zones...",
      date: "Dec 15, 2023",
      readTime: "8 min read",
      mediumUrl: "https://medium.com/@aurthurm/building-the-perfect-order-block-detection-algorithm",
      tags: ["Trading", "Algorithm", "Technical Analysis"]
    },
    {
      title: "The Science Behind Fractal Pattern Detection",
      excerpt: "Fractal patterns in trading are powerful indicators of market turning points. By understanding how to identify and utilize these patterns effectively, traders can gain a significant edge in their market analysis. Let's explore how our Super Fractals indicator revolutionizes this approach...",
      date: "Nov 28, 2023",
      readTime: "6 min read",
      mediumUrl: "https://medium.com/@aurthurm/the-science-behind-fractal-pattern-detection",
      tags: ["Trading", "Fractals", "Market Analysis"]
    },
    {
      title: "Maximizing Day Trading with Time-Based Analytics",
      excerpt: "Time is a crucial element in day trading that often gets overlooked. Understanding how to leverage different trading sessions and their characteristics can dramatically improve your trading results. In this article, we'll dive into the concepts behind our Day Trader WorkTime indicator...",
      date: "Nov 15, 2023",
      readTime: "7 min read",
      mediumUrl: "https://medium.com/@aurthurm/maximizing-day-trading-with-time-based-analytics",
      tags: ["Day Trading", "Time Analysis", "Trading Sessions"]
    }
  ]

  if(1) {
    return <BlogComingSoon />
  }

  return (
    <div className="container mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6"
      >
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Latest Articles
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Insights and deep dives into trading algorithms, technical analysis, and market psychology.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 mt-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold hover:text-primary">
                      <Link href={post.mediumUrl} target="_blank">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="flex gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/50 mt-6">
                  <Button variant="ghost" asChild className="ml-auto">
                    <Link href={post.mediumUrl} target="_blank">
                      Read on Medium
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center mt-8">
          <Button variant="outline" asChild>
            <Link href="https://medium.com/@aurthurm" target="_blank">
              View all articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export function BlogComingSoon() {
  return (
    <div className="container mx-auto py-12">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-6"
      >
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Latest Articles
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Coming soon...
        </p>
      </motion.div>
    </div>
  )
}

