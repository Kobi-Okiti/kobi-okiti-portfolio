"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Github, X, ChevronLeft, ChevronRight, Images, ExternalLink } from "lucide-react"
import { projects } from "@/data/portfolio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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

interface ProjectCarouselProps {
  project: (typeof projects)[0]
  isOpen: boolean
  onClose: () => void
}

function ProjectCarousel({ project, isOpen, onClose }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const allImages = project.images && project.images.length > 0 
    ? project.images 
    : [project.image]

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))
  }, [allImages.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1))
  }, [allImages.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Reset index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0)
    }
  }, [isOpen])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, goToPrevious, goToNext, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-5xl rounded-lg border border-border bg-card shadow-2xl">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute right-4 top-4 z-10 rounded-full bg-card/80 backdrop-blur-sm"
                aria-label="Close carousel"
              >
                <X className="size-4" />
              </Button>

              {/* Carousel Content */}
              <div className="relative">
                {/* Main Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={allImages[currentIndex]}
                        alt={`${project.title} - Image ${currentIndex + 1}`}
                        fill
                        className="object-contain"
                        sizes="100vw"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  {allImages.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="size-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card"
                        aria-label="Next image"
                      >
                        <ChevronRight className="size-5" />
                      </Button>
                    </>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge
                        key={`${project.id}-tech-${techIndex}-${tech}`}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        <ExternalLink className="size-4" />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        <Github className="size-4" />
                        View Code on GitHub
                      </a>
                    )}
                  </div>
                </div>

                {/* Dots Indicator */}
                {allImages.length > 1 && (
                  <div className="flex justify-center gap-2 pb-6">
                    {allImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={cn(
                          "h-2 rounded-full transition-all",
                          index === currentIndex
                            ? "w-8 bg-primary"
                            : "w-2 bg-muted-foreground/50 hover:bg-muted-foreground"
                        )}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isCarouselOpen, setIsCarouselOpen] = useState(false)

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsCarouselOpen(true)
  }

  const handleCloseCarousel = () => {
    setIsCarouselOpen(false)
    setSelectedProject(null)
  }

  return (
    <>
      <section
        id="projects"
        className="relative px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Section Header */}
            <motion.div
              variants={itemVariants}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Projects
              </h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                A selection of projects showcasing my work across web, mobile, and backend
                development
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  custom={index}
                  className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Project Image */}
                  <div className="relative aspect-video w-full overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    
                    {/* Mobile: Always visible indicator */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-primary/20 px-2.5 py-1.5 text-xs font-medium text-primary backdrop-blur-sm sm:hidden">
                      <Images className="size-3.5" />
                      <span>Tap</span>
                    </div>
                    
                    {/* Desktop: Hover indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 hidden sm:flex">
                      <div className="rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
                        View Images
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      {/* Mobile: Visible tap indicator */}
                      {/* <div className="flex items-center gap-1 text-xs text-muted-foreground sm:hidden">
                        <Images className="size-3.5" />
                        <span>Tap to view</span>
                      </div> */}
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge
                          key={`${project.id}-tech-${techIndex}-${tech}`}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                        >
                          <ExternalLink className="size-4" />
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <Github className="size-4" />
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Carousel Modal */}
      {selectedProject && (
        <ProjectCarousel
          project={selectedProject}
          isOpen={isCarouselOpen}
          onClose={handleCloseCarousel}
        />
      )}
    </>
  )
}
