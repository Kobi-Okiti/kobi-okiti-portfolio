"use client"

import { motion } from "framer-motion"
import { Briefcase, Award, Target, BadgeCheck } from "lucide-react"
import { achievements } from "@/data/portfolio"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const iconMap = {
  experience: Briefcase,
  achievement: Award,
  milestone: Target,
  certification: BadgeCheck,
}

export function Experience() {
  return (
    <section
      id="experience"
      className="relative px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Experience & Achievements
            </h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
              Key milestones and accomplishments in my development journey
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {achievements.map((achievement, index) => {
                const Icon = iconMap[achievement.type]
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={achievement.id}
                    variants={itemVariants}
                    className="relative flex items-start gap-6 md:items-center"
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-full border-2 border-border bg-card">
                      <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`flex-1 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg ${
                        index === achievements.length - 1 ? "mb-0" : ""
                      }`}
                    >
                      <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-lg font-semibold">{achievement.title}</h3>
                        <span className="text-sm font-medium text-primary">
                          {achievement.date}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
