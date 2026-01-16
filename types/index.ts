// Shared TypeScript types for the portfolio

export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  image: string
  images?: string[] // Array of additional images for carousel
  link?: string
  github?: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  type: "experience" | "achievement" | "milestone" | "certification"
}

export interface ContactForm {
  name: string
  email: string
  message: string
}
