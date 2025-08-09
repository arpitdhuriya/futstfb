import React from "react";
import { Project } from "../types/Project";

interface ProjectListProps {
  projects: Project[];
  onEnroll: (projectId: number) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, onEnroll }) => (
  <div className="grid md:grid-cols-2 gap-8">
    {projects.map((project) => (
      <div key={project.id} className="card-vscode p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-blue-400 mb-2">{project.name}</h3>
        <p className="text-gray-300 mb-2">{project.description}</p>
        <div className="mb-2">
          <span className="font-semibold text-gray-400">Technologies:</span>{" "}
          {project.technology.join(", ")}
        </div>
        <div className="mb-2">
          <span className="font-semibold text-gray-400">Duration:</span>{" "}
          {project.durationWeeks} weeks ({project.scrumCycles} scrum cycles)
        </div>
        <div className="mb-2">
          <span className="font-semibold text-gray-400">Start:</span>{" "}
          {new Date(project.startDate).toLocaleDateString()}
        </div>
        <div className="mb-2">
          <span className="font-semibold text-gray-400">Manager:</span>{" "}
          {project.manager}
        </div>
        <button
          className="btn-primary mt-4 w-full py-2 rounded"
          onClick={() => onEnroll(project.id)}
        >
          Enroll
        </button>
      </div>
    ))}
  </div>
);

export default ProjectList;