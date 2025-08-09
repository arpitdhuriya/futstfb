import { useState } from "react";
import payNow from "./PayNow";
import { projects } from "../data/projects";
import { stories as allStories } from "../data/stories";
import ProjectList from "../components/ProjectList";
import KanbanBoard from "../components/KanbanBoard";

const currentUser = "alice"; // Replace with actual logged-in user

const LandingPageUser = ({ onLogout }: { onLogout: () => void }) => {
  // Only allow one project assignment
  const [assignedProject, setAssignedProject] = useState<number | null>(null);
  const [stories, setStories] = useState(allStories);

  const handlePayment = () => {
    payNow({
      amount: 2000,
      description: "Professional Plan - 1 Month",
      onSuccess: (paymentId) => {
        alert("Payment successful! ID: " + paymentId);
      },
    });
  };

  const handleEnroll = (projectId: number) => {
    if (!assignedProject) {
      setAssignedProject(projectId);
      alert("Enrolled in project!");
    }
  };

  const handleStatusChange = (storyId: number, newStatus: string) => {
    setStories(stories =>
      stories.map(story =>
        story.id === storyId ? { ...story, status: newStatus as any } : story
      )
    );
  };

  // Find the assigned project object
  const project = assignedProject ? projects.find(p => p.id === assignedProject) : null;

  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <span className="font-bold">User Dashboard</span>
        <div>
          <button onClick={onLogout} className="bg-red-500 px-4 py-1 rounded mr-2">Logout</button>
          <button onClick={handlePayment} className="bg-blue-500 px-4 py-1 rounded">Pay Now</button>
        </div>
      </nav>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Welcome, User!</h2>
        <p>This is your dashboard. Explore the features and start learning!</p>
        {!assignedProject && (
          <>
            <h3 className="text-xl font-bold mt-8 mb-4">Available Projects</h3>
            <ProjectList
              projects={projects}
              onEnroll={handleEnroll}
            />
          </>
        )}

        {project && (
          <>
            <h3 className="text-xl font-bold mt-12 mb-4">Your Project: {project.name}</h3>
            <KanbanBoard
              stories={stories.filter(s => s.projectId === project.id)}
              currentUser={currentUser}
              onStatusChange={handleStatusChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default LandingPageUser;