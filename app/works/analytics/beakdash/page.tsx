"use client"

import { motion } from "framer-motion"
import { ArrowLeft, BarChart2, Database, Lock } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ReactECharts from "echarts-for-react"
import { useState, useEffect } from "react"

export default function BeakdashPage() {
  const [mounted, setMounted] = useState(false)
  const [windowWidth, setWindowWidth] = useState(1000)

  useEffect(() => {
    setMounted(true)
    setWindowWidth(window.innerWidth)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  
  const lineChartOption = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisLine: { lineStyle: { color: "#6E59A5" } },
    },  
    yAxis: {
      type: "value",
      axisLine: { lineStyle: { color: "#6E59A5" } },
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
        color: "#9b87f5",
      },
    ],
    tooltip: { trigger: "axis" },
  }

  const pieChartOption = {
    tooltip: { trigger: "item" },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        data: [
          { value: 1048, name: "Search", itemStyle: { color: "#9b87f5" } },
          { value: 735, name: "Direct", itemStyle: { color: "#7E69AB" } },
          { value: 580, name: "Email", itemStyle: { color: "#6E59A5" } },
          { value: 484, name: "Union Ads", itemStyle: { color: "#F97316" } },
          { value: 300, name: "Video Ads", itemStyle: { color: "#0EA5E9" } },
        ],
      },
    ],
  }

  const barChartOption = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisLine: { lineStyle: { color: "#6E59A5" } },
    },
    yAxis: {
      type: "value",
      axisLine: { lineStyle: { color: "#6E59A5" } },
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
        color: "#33C3F0",
      },
    ],
    tooltip: { trigger: "axis" },
  }

  const bounceTransition = {
    duration: 15,
    repeat: Infinity,
    ease: "linear",
  }

  if (!mounted) {
    return null
  }

  const chartWidth = windowWidth + 500

  return (<div>
      {/* Background Charts */}
      <motion.div
        initial={{ opacity: 0, rotate: -15, x: -windowWidth }}
        animate={{
          opacity: 0.2,
          rotate: -15,
          x: [-(chartWidth), chartWidth],
        }}
        transition={bounceTransition}
        className="fixed w-[500px] top-24 transform scale-125"
      >
        <ReactECharts option={lineChartOption} style={{ height: "300px" }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: 15, x: windowWidth }}
        animate={{
          opacity: 0.2,
          rotate: 15,
          x: [chartWidth, -(chartWidth)],
        }}
        transition={{
          ...bounceTransition,
          delay: 5,
        }}
        className="fixed w-[500px] top-48 transform scale-125"
      >
        <ReactECharts option={pieChartOption} style={{ height: "300px" }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: -10, x: -windowWidth }}
        animate={{
          opacity: 0.2,
          rotate: -10,
          x: [-(chartWidth), chartWidth],
        }}
        transition={{
          ...bounceTransition,
          delay: 10,
        }}
        className="fixed w-[500px] top-72 transform scale-125"
      >
        <ReactECharts option={barChartOption} style={{ height: "300px" }} />
      </motion.div>

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
                <Link href="https://github.com/beak-insights/beakdash">View on GitHub</Link>
              </Button>
            </div>
            <div>
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
              <motion.div
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, type: "tween", bounce: 0.3 }}
              >
                <ul className="w-full grid grid-cols-4 gap-4">
                  <li className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card">
                    <BarChart2 className="h-8 w-8 text-primary" />
                    <span className="font-bold">Next.js 19</span>
                    <span className="text-sm text-muted-foreground">Optimal performance</span>
                  </li>
                  <li className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card">
                    <Lock className="h-8 w-8 text-primary" />
                    <span className="font-bold">Clerk</span>
                    <span className="text-sm text-muted-foreground">Secure authentication</span>
                  </li>
                  <li className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card">
                    <Database className="h-8 w-8 text-primary" />
                    <span className="font-bold">Supabase</span>
                    <span className="text-sm text-muted-foreground">Database management</span>
                  </li>
                  <li className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card">
                    <ArrowLeft className="h-8 w-8 text-primary" />
                    <span className="font-bold">Client Caching</span>
                    <span className="text-sm text-muted-foreground">Reduced costs</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>)
}