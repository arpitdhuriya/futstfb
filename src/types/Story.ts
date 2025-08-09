export interface Story {
  id: number;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Completed";
  assignee: string; // username or user id
  projectId: number;
}
