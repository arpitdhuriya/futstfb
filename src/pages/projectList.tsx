import { Project } from "../types/Project";
export const projects: Project[] = [
  {
    id: 1,
    name: "AI Chatbot",
    description: "Build a chatbot using NLP and React.",
    technology: ["Python", "FastAPI", "React"],
    durationWeeks: 4,
    scrumCycles: 2,
    startDate: "2025-08-20",
    manager: "Alice Johnson",
  },
  {
    id: 2,
    name: "E-Commerce Dashboard",
    description: "Create a dashboard for sales analytics.",
    technology: ["Node.js", "Express", "Vue.js"],
    durationWeeks: 6,
    scrumCycles: 3,
    startDate: "2025-09-01",
    manager: "Bob Smith",
  },
];