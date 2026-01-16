"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Server, Sparkles, Wrench, Layout } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

const capabilities = [
  {
    title: "Web Apps",
    icon: Code,
    description: "Modern, responsive web applications built with React, Next.js, and TypeScript",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Mobile Apps",
    icon: Smartphone,
    description: "Cross-platform mobile solutions using React Native and native iOS development with smooth intuitive user experiences.",
    skills: ["React Native", "SwiftUI", "iOS", "Android", "Expo"],
  },
  {
    title: "Backend Systems",
    icon: Server,
    description: "Scalable server-side logic, APIs, and data-driven systems built with reliability and maintainability in mind.",
    skills: ["Node.js", "Express", "MongoDB", "Javascript", "REST APIs"],
  },
  {
    title: "AI-assisted Development",
    icon: Sparkles,
    description: "Using AI-powered tools to improve development speed, code quality, and workflow efficiency.",
    skills: ["AI Integration", "Code Optimization", "Automation"],
  },
  {
    title: "Tools & Engineering Practices",
    icon: Wrench,
    description: "Professional development workflows focused on clean code, collaboration, and long-term maintainability.",
    skills: ["Git", "GitHub", "CI/CD", "API Integration", "Debugging", "Responsive Design", "Testing", "Documentation"],
  },
  {
    title: "UI Implementation",
    icon: Layout,
    description: "Designing and implementing user interfaces that are both visually appealing and functionally robust.",
    skills: ["Figma to Code", "Responsive Layouts", "Accessibility"],
  },
]

export function About() {
  return (
    <section
      id="about"
      className="relative px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Intro Section */}
          <motion.div
            variants={itemVariants}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <div className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I&apos;m OgheneKobiruo Okiti, a passionate full-stack developer dedicated to
                crafting exceptional digital experiences. With expertise spanning web and
                mobile development, I bring ideas to life through clean code, thoughtful
                design, and innovative solutions.
              </p>
              <p>
                My approach combines technical excellence with a focus on user experience,
                ensuring that every project I work on is not just functional, but
                meaningful and impactful.
              </p>
            </div>
          </motion.div>

          {/* Capabilities Section */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-12 text-center text-2xl font-semibold tracking-tight sm:text-3xl">
              Capabilities
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon
                return (
                  <motion.div
                    key={capability.title}
                    variants={itemVariants}
                    custom={index}
                    className="group relative rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                  >
                    {/* Icon */}
                    <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Icon className="size-6" />
                    </div>

                    {/* Title */}
                    <h4 className="mb-2 text-lg font-semibold">
                      {capability.title}
                    </h4>

                    {/* Description */}
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {capability.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {capability.skills.map((skill, skillIndex) => (
                        <span
                          key={`${capability.title}-skill-${skillIndex}-${skill}`}
                          className="rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-foreground transition-colors group-hover:border-primary/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
