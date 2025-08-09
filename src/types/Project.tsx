export interface Project {
  id: number;
  name: string;
  description: string;
  technology: string[];
  durationWeeks: number;
  scrumCycles: number;
  startDate: string; // ISO date string
  manager: string;
}