"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  // const scrollToAbout = () => {
  //   const aboutSection = document.getElementById("about")
  //   aboutSection?.scrollIntoView({ behavior: "smooth" })
  // }

  return (
    <section
      id="hero"
      className="relative flex h-[calc(100vh-4rem)] flex-col px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-5xl flex-1 flex flex-col items-center justify-center pb-20 sm:pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center w-full"
        >
          {/* Profile Picture */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="relative size-32 overflow-hidden rounded-full border-4 border-primary/20 ring-4 ring-primary/10  max-md:size-48">
              <Image
                src="/profile.jpeg"
                alt="OgheneKobiruo Okiti"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                priority
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  const target = e.target as HTMLImageElement
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23333' width='200' height='200'/%3E%3Ctext fill='%23666' font-family='sans-serif' font-size='60' dy='.3em' x='50%25' y='50%25' text-anchor='middle'%3EOK%3C/text%3E%3C/svg%3E"
                }}
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="mb-4 text-sm font-medium text-muted-foreground sm:text-base"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Oghenekobiruo Okiti
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={itemVariants}
            className="mb-6 text-lg text-muted-foreground sm:text-xl md:text-2xl"
          >
            Full-Stack Web & Mobile (iOS & React Native) Developer
          </motion.p>

          {/* Two-line headline */}
          <motion.div
            variants={itemVariants}
            className="mb-8 space-y-2"
          >
            <p className="text-xl font-light leading-relaxed sm:text-2xl md:text-3xl">
              Building digital experiences
            </p>
            <p className="text-xl font-light leading-relaxed text-primary sm:text-2xl md:text-3xl">
              that make a difference
            </p>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground sm:text-base"
          >
            <span className="font-medium">Tech Stack:</span>
            <span className="text-foreground">MERN</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-foreground">TypeScript</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-foreground">SwiftUI</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-foreground">React Native</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              Get in Touch
              <ArrowDown className="ml-2 size-4 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <a
                href="/Kobi-Okiti-CV.pdf"
                download
                className="flex items-center"
              >
                <Download className="mr-2 size-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll indicator - Fixed to viewport bottom */}
      {/* <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer z-10 sm:bottom-8"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="text-xs">Scroll</span>
          <ArrowDown className="size-4" />
        </motion.div>
      </motion.button> */}
    </section>
  )
}
