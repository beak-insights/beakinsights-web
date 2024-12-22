"use client"

import { motion } from "framer-motion"
import { ArrowLeft, LineChart, Binary, Clock, Search, Code, BarChart, Compass, Layers } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MQL5ProductsPage() {
  return (<div>
    <div className="container mx-auto py-12">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/works">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to our works</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">MQL5 Trading Products</h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8 grid gap-8 md:grid-cols-2"
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            Professional Trading Tools & Indicators
          </h2>
          <p className="text-muted-foreground">
            A comprehensive suite of MetaTrader 5 trading tools and indicators developed by
            Aurthur Musendame. Our products help traders identify market patterns, track timeframes,
            and make informed trading decisions.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="https://www.mql5.com/en/users/aurthurm/seller">View on MQL5</Link>
            </Button>
          </div>

          <div>
            <div className="mt-16 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Featured Product</h3>
              <div className="rounded-lg border bg-card p-6">
                <h4 className="text-xl font-bold">Order Block Locator</h4>
                <p className="mt-2 text-muted-foreground">
                  Powered by three main search algorithms for finding order blocks:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-muted-foreground">
                  <li>Simple Fractal Search Algorithm</li>
                  <li>Naive Fractal Movers Algorithm</li>
                  <li>Candle Transition Algorithm</li>
                </ul>
                <p className="mt-4 text-sm">Version 1.5 | Updated: June 24, 2022</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <Clock className="h-12 w-12 text-primary" />
            <h3 className="mt-4 font-bold">Day Trader WorkTime</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Track important trading sessions and market protraction periods
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <BarChart className="h-12 w-12 text-primary" />
            <h3 className="mt-4 font-bold">Super Fractals</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Enhanced fractal indicator with customizable parameters
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <Layers className="h-12 w-12 text-primary" />
            <h3 className="mt-4 font-bold">HTF Candle Tracker</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Monitor higher timeframe candle formation in real-time
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <Compass className="h-12 w-12 text-primary" />
            <h3 className="mt-4 font-bold">True Day</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Identify optimal trading hours and avoid dead zones
            </p>
          </div>
        </div>

        <div className="col-span-2">
          <hr className="my-2" />
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary">Platform Support</h3>
            <hr className="mt-2 mb-8" />
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            >
              <ul className="w-full grid grid-cols-4 gap-4">
                <li className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card">
                  <Binary className="h-8 w-8 text-primary" />
                  <span className="font-bold">MetaTrader 5</span>
                  <span className="text-sm text-muted-foreground">Trading Platform</span>
                </li>
                <li className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card">
                  <Code className="h-8 w-8 text-primary" />
                  <span className="font-bold">MQL5</span>
                  <span className="text-sm text-muted-foreground">Development</span>
                </li>
                <li className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card">
                  <Search className="h-8 w-8 text-primary" />
                  <span className="font-bold">Algorithms</span>
                  <span className="text-sm text-muted-foreground">Pattern Detection</span>
                </li>
                <li className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card">
                  <LineChart className="h-8 w-8 text-primary" />
                  <span className="font-bold">Technical</span>
                  <span className="text-sm text-muted-foreground">Analysis Tools</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>)
}