import { Story } from "../types/Story";

export const stories: Story[] = [
  {
    id: 1,
    title: "Setup project repo",
    description: "Initialize GitHub repository and setup CI/CD.",
    status: "To Do",
    assignee: "alice",
    projectId: 1,
  },
  {
    id: 2,
    title: "Design chatbot UI",
    description: "Create wireframes for chatbot interface.",
    status: "To Do",
    assignee: "bob",
    projectId: 1,
  },
  // ...more stories
];