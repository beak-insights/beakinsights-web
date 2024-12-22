"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Shield, Terminal, Cpu, Network, Database, Cable, Server, MonitorDot } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FelicityLablinkPage() {

  return (<div>
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
              Felicity LabLink is an open-source laboratory integration platform that enables
              seamless connectivity between laboratory instruments and information systems
              through RS-232 and MLLP protocols.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="https://github.com/beak-insights/felicity-lablink">View on GitHub</Link>
              </Button>
            </div>
            <div>
              <div className="mt-16 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">Quick Setup</h3>
                <ol className="list-decimal list-inside space-y-4 text-muted-foreground flex-grow">
                  <li>Install MariaDB and create database</li>
                  <li>Install Python 3.11 via Miniconda</li>
                  <li>Clone repository and install dependencies</li>
                  <li>Configure and run migrations</li>
                </ol>
                <p className="mt-6">Check our documentation for detailed configuration options.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <Cable className="h-12 w-12 text-primary" />
              <h3 className="mt-4 font-bold">RS-232 Support</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Direct connection to laboratory instruments via serial interface
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <Network className="h-12 w-12 text-primary" />
              <h3 className="mt-4 font-bold">MLLP Protocol</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                TCP/IP connectivity with MLLP client and server support
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <MonitorDot className="h-12 w-12 text-primary" />
              <h3 className="mt-4 font-bold">Supervisor Integration</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Built-in process management and monitoring capabilities
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <Shield className="h-12 w-12 text-primary" />
              <h3 className="mt-4 font-bold">Secure Transfer</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Protected data exchange with comprehensive error handling
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
                    <Terminal className="h-8 w-8 text-primary" />
                    <span className="font-bold">Python 3.11</span>
                    <span className="text-sm text-muted-foreground">Core runtime</span>
                  </li>
                  <li className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card">
                    <Database className="h-8 w-8 text-primary" />
                    <span className="font-bold">MariaDB</span>
                    <span className="text-sm text-muted-foreground">Data storage</span>
                  </li>
                  <li className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card">
                    <Server className="h-8 w-8 text-primary" />
                    <span className="font-bold">Supervisor</span>
                    <span className="text-sm text-muted-foreground">Process management</span>
                  </li>
                  <li className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card">
                    <Cpu className="h-8 w-8 text-primary" />
                    <span className="font-bold">ASTM/HL7</span>
                    <span className="text-sm text-muted-foreground">Protocol support</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>)
}