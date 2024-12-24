"use client"

import { motion } from "framer-motion"
import { 
  BarChart2, 
  Database, 
  LineChart, 
  ArrowRight, 
  Users, 
  Shield, 
  Award,
  Search,
  CodeSquare,
  Rocket,
  Repeat
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container m-auto space-y-6 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
            Next-Generation Data Solutions
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Full-Stack Solutions &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Data Engineering
            </span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Build powerful custom systems and unlock the potential of your data with our comprehensive development solutions. 
            We create tailored applications, seamless integrations, and innovative data pipelines.
          </p>
          <div className="md:flex gap-4">
            <Button size="lg" className="mb-2 md:mb-0" asChild>
              <Link href="https://calendly.com/aurthurmusendame/intro-call">
                Schedule Your Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/works">Explore Our Works</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="container m-auto py-4 sm:py-16">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
          <h2 className="text-3xl font-bold mb-4">Professional Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building Robust Systems for Tomorrow&apos;s Needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div className="rounded-lg border bg-card p-8 hover:border-primary transition-colors">
            <Database className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-bold">System Architecture</h3>
            <p className="mt-2 text-muted-foreground">
              Design and build robust, scalable systems that grow with your business. Our architects 
              create efficient and maintainable solutions for complex challenges.
            </p>
            {/* <Link href="/services" className="mt-4 inline-flex items-center text-primary hover:underline">
              Learn more <ChevronRight className="ml-1 h-4 w-4" />
            </Link> */}
          </div>
          <div className="rounded-lg border bg-card p-8 hover:border-primary transition-colors">
            <LineChart className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-bold">Full-Stack Development</h3>
            <p className="mt-2 text-muted-foreground">
              Deliver end-to-end solutions from backend systems to user interfaces. We build custom applications,
              integrate systems, and create seamless digital experiences.
            </p>
            {/* <Link href="/services" className="mt-4 inline-flex items-center text-primary hover:underline">
              Learn more <ChevronRight className="ml-1 h-4 w-4" />
            </Link> */}
          </div>
          <div className="rounded-lg border bg-card p-8 hover:border-primary transition-colors">
            <BarChart2 className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-bold">Data Engineering</h3>
            <p className="mt-2 text-muted-foreground">
              Build powerful data pipelines and analytics solutions. From ETL processes to 
              predictive models, we help you harness the full potential of your data.
            </p>
            {/* <Link href="/services" className="mt-4 inline-flex items-center text-primary hover:underline">
              Learn more <ChevronRight className="ml-1 h-4 w-4" />
            </Link> */}
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures successful delivery across all projects
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center text-center p-6"
          >
            <div className="bg-background p-4 rounded-full border-2 border-primary mb-4">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Understand</h3>
            <p className="text-muted-foreground">
              We start by understanding your vision, requirements, and constraints through in-depth discussions and analysis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center text-center p-6"
          >
            <div className="relative bg-background p-4 rounded-full border-2 border-primary mb-4">
              <CodeSquare className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Strategize</h3>
            <p className="text-muted-foreground">
              Develop a comprehensive strategy and technical blueprint that aligns with your goals and maximizes value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center text-center p-6"
          >
            <div className="relative bg-background p-4 rounded-full border-2 border-primary mb-4">
              <Rocket className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Build</h3>
            <p className="text-muted-foreground">
              Execute with precision using modern tools and best practices, maintaining clear communication throughout.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center text-center p-6"
          >
            <div className="relative bg-background p-4 rounded-full border-2 border-primary mb-4">
              <Repeat className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">4. Evolve</h3>
            <p className="text-muted-foreground">
              Continuously refine and optimize your solution based on real-world usage and emerging requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted py-16 mt-12">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What Sets Beak Insights Apart</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of working with a team that combines innovation with excellence
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              {...fadeInUp}
              className="bg-background rounded-lg p-6"
            >
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Enterprise-Grade Security</h3>
              <p className="text-muted-foreground">
                Your data security is our top priority. We implement industry-leading security measures 
                and maintain strict compliance standards.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="bg-background rounded-lg p-6"
            >
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Dedicated Support Team</h3>
              <p className="text-muted-foreground">
                Get personalized attention from our expert team. We&apos;re committed to your success 
                with 24/7 support and guidance.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="bg-background rounded-lg p-6"
            >
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation-First Approach</h3>
              <p className="text-muted-foreground">
                We stay ahead of technology trends, constantly exploring new tools and 
                methodologies to deliver the most effective solutions for our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-primary text-primary-foreground rounded-2xl p-8 sm:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Data Strategy?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Schedule a free consultation with our data experts and discover how we can help you 
            unlock the full potential of your data.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="https://calendly.com/aurthurmusendame/intro-call">
              Book your Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  )
}