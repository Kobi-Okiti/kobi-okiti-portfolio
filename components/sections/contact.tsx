"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:kobiokiti@gmail.com",
    label: "Send an email",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Kobi-Okiti",
    label: "Visit GitHub profile",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/kobi-okiti-4a277922b/",
    label: "Visit LinkedIn profile",
  },
]

export function Contact() {
  const handleWhatsApp = () => {
    // Replace with your actual WhatsApp number (format: country code + number, no + or spaces)
    const phoneNumber = "2347010286937" // Example: "2341234567890" for Nigeria
    const message = encodeURIComponent("Hello! I'd like to get in touch.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  const currentYear = new Date().getFullYear()

  return (
    <>
      <section
        id="contact"
        className="relative px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Get In Touch
              </h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </motion.div>

            {/* Contact Links */}
            <motion.div
              variants={itemVariants}
              className="mb-8 flex flex-wrap items-center justify-center gap-4"
            >
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    aria-label={link.label}
                    className="group flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-accent hover:text-accent-foreground"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="size-4 transition-transform group-hover:scale-110" />
                    <span>{link.name}</span>
                  </motion.a>
                )
              })}
            </motion.div>

            {/* WhatsApp Button */}
            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="group"
              >
                <MessageCircle className="mr-2 size-5 transition-transform group-hover:scale-110" />
                Reach Out on WhatsApp
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} OgheneKobiruo Okiti. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
