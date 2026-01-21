import type { Project, Achievement } from "@/types"

// Static portfolio data
// Update this file with your actual content

export const projects: Project[] = [
  {
    id: "1",
    title: "Fixnear",
    description: "FixNear is a TypeScript full-stack monorepo that connects users to verified local artisans (mechanics, carpenters, electricians, tailors, etc.) based on location and availability. This Application contains the frontend (User Web, Artisan Web & Admin Web) and backend code for the FixNear platform.",
    techStack: ["Next.js", "TypeScript", "MongoDB", "React JS", "Shadcn UI", "JavaScript", "Tailwind CSS", "Express JS", "Node JS", "Axios", "JWT", "bcrypt"],
    image: "/fixnear/image3.png",
    images: ["/fixnear/image1.png", "/fixnear/image2.png", "/fixnear/image3.png", "/fixnear/image4.png", "/fixnear/image5.png", "/fixnear/image6.png", "/fixnear/image7.png", "/fixnear/image8.png", "/fixnear/image9.png", "/fixnear/image10.png", "/fixnear/image11.png", "/fixnear/image12.png", "/fixnear/image13.png", "/fixnear/image14.png", "/fixnear/image15.png"],
    github: "https://github.com/Kobi-Okiti/fixnear",
  },
  {
    id: "2",
    title: "Fullstack iOS Twitter Clone",
    description: "A fullstack iOS Twitter clone that mimics the functionality of the Twitter mobile app built with SwiftUI, Swift, Node.js, Express, MongoDB, and Javascript",
    techStack: ["SwiftUI", "Swift", "Node.js", "Express", "MongoDB", "Javascript"],
    image: "/twitter-project/image1.png",
    images: ["/twitter-project/image2.png", "/twitter-project/image1.png", "/twitter-project/image3.png", "/twitter-project/image4.png", "/twitter-project/image5.png", "/twitter-project/image6.png", "/twitter-project/image7.png", "/twitter-project/image8.png", "/twitter-project/image9.png", "/twitter-project/image10.png", "/twitter-project/image11.png"],
    github: "https://github.com/Kobi-Okiti/fullstack-twitter-clone-ios",
  },
  {
    id: "3",
    title: "Full-Stack Recipe App",
    description: "A mobile recipe application built with React Native that consumes a third-party meals API while managing user favorites through a custom backend. Favorites are fetched from the external API and persisted in a PostgreSQL database via a REST API.",
    techStack: ["React Native", "Expo", "React JS", "Javascript","Expo Navigation", "Express JS", "Node JS", "PostgreSQL", "Drizzle ORM", "Drizzle Kit", "Clerk authentication"],
    image: "/recipe-app/image3.png",
    images: ["/recipe-app/image1.png", "/recipe-app/image2.png", "/recipe-app/image3.png", "/recipe-app/image4.png", "/recipe-app/image5.png", "/recipe-app/image6.png"],
    github: "https://github.com/Kobi-Okiti/notes-app-react-native",
  },
  {
    id: "4",
    title: "iOS Notes App",
    description: "A simple iOS Notes app that connects to a backend API and allows you to create, edit, and delete notes. Built with SwiftUI, Swift, and Xcode.",
    techStack: ["SwiftUI", "Swift", "Xcode", "Express JS", "Node JS", "MongoDB", "Javascript"],
    image: "/ios-notes/image1.png",
    images: ["/ios-notes/image1.png", "/ios-notes/image2.png", "/ios-notes/image3.png", "/ios-notes/image4.png", "/ios-notes/image5.png",],
    github: "https://github.com/Kobi-Okiti/ios-notes-app",
  },
  {
    id: "5",
    title: "School Payment and Receipt Management System",
    description: "A web application that allows students to make payments to schools, schools to manage student payments and generate receipts.",
    techStack: ["Vite", "React JS", "TypeScript", "Tailwind CSS", "Shadcn UI", "react-pdf/renderer", "Javascript"],
    image: "/school-payment/image1.png",
    images: ["/school-payment/image1.png", "/school-payment/image2.png", "/school-payment/image3.png", "/school-payment/image4.png", "/school-payment/image5.png", "/school-payment/image6.png",],
    link: "https://bank-payment-receipt-generator.netlify.app/",
    github: "https://github.com/Kobi-Okiti/payment-receipt-generator",
  },
  {
    id: "6",
    title: "React Native Notes App",
    description: "A simple React Native Notes app that connects to a backend API and allows you to create, edit, and delete notes.",
    techStack: ["React Native", "TypeScript", "Expo", "React JS", "Javascript","React Native Navigation", "Axios", "Express JS", "Node JS", "MongoDB", "Javascript"],
    image: "/rn-notes/image1.png",
    images: ["/rn-notes/image1.png", "/rn-notes/image2.png", "/rn-notes/image3.png", "/rn-notes/image4.png",],
    github: "https://github.com/Kobi-Okiti/notes-app-react-native",
  },
]

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Secondary School Valedictorian",
    description: "Attended Lyncrest Iternational College for Secondary School Education and Graduated as Valedictorian",
    date: "2016 - 2021",
    type: "experience",
  },
  {
    id: "2",
    title: "Aptech Computer Education",
    description: "Graduated with Magnum Cum Laude, ADSE (Advanced Diploma in Software Engineering)",
    date: "2021 - 2023",
    type: "achievement",
  },
  {
    id: "3",
    title: "Wise Soft Lab, Sri Lanka",
    description: "Software Engineering, worked on dashboard applications and web applications",
    date: "2024 - Present",
    type: "experience",
  },
  {
    id: "4",
    title: "Cibred UK",
    description: "Software Engineer, contributed heavily to frontend of Care Management System, started 2024 to present",
    date: "2024 - Present",
    type: "experience",
  },
  {
    id: "5",
    title: "Meta Certifications (Coursera)",
    description: "Meta React & Meta iOS Developer Certifications",
    date: "2025",
    type: "certification",
  },
  {
    id: "6",
    title: "AI Integration Specialist",
    description: "Pioneered AI-assisted development workflows, reducing development time by 30% and improving code quality",
    date: "2024",
    type: "achievement",
  },
]
