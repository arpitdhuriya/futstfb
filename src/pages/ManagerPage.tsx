import { useState } from "react";
import { projects } from "../data/projects";
import { stories as allStories } from "../data/stories";
import KanbanBoard from "../components/KanbanBoard";

const currentManager = "Alice Johnson"; // Replace with actual logged-in manager

const ManagerPage = ({ onLogout }: { onLogout: () => void }) => {
  // Projects managed by this manager
  const managedProjects = projects.filter(p => p.manager === currentManager);
  const [stories, setStories] = useState(allStories);

  // For creating a new story
  const [newStory, setNewStory] = useState({
    title: "",
    description: "",
    assignee: "",
    projectId: managedProjects[0]?.id || 0,
    status: "To Do",
  });

  const handleCreateStory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStory.title || !newStory.assignee || !newStory.projectId) return;
    setStories([
      ...stories,
      {
        id: stories.length + 1,
        ...newStory,
      },
    ]);
    setNewStory({ ...newStory, title: "", description: "" });
  };

return (
    <div>
      <nav className="bg-gray-900 text-white p-4 flex justify-between">
        <span className="font-bold">Manager Dashboard</span>
        <button onClick={onLogout} className="bg-red-500 px-4 py-1 rounded">Logout</button>
      </nav>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Projects You Manage</h2>
        {managedProjects.length === 0 ? (
          <div className="text-red-400 mb-8">You are not assigned to any projects.</div>
        ) : (
          <>
            <ul className="mb-8">
              {managedProjects.map(p => (
                <li key={p.id} className="mb-2">
                  <span className="font-semibold">{p.name}</span> &mdash; {p.technology.join(", ")}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mb-4">Create New Story (Epic/Task)</h3>
            <form onSubmit={handleCreateStory} className="mb-12 flex flex-col md:flex-row gap-4 items-end">
              <select
                className="p-2 rounded bg-gray-800 text-white"
                value={newStory.projectId}
                onChange={e => setNewStory({ ...newStory, projectId: Number(e.target.value) })}
              >
                {managedProjects.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
              <input
                className="p-2 rounded bg-gray-800 text-white"
                placeholder="Title"
                value={newStory.title}
                onChange={e => setNewStory({ ...newStory, title: e.target.value })}
              />
              <input
                className="p-2 rounded bg-gray-800 text-white"
                placeholder="Description"
                value={newStory.description}
                onChange={e => setNewStory({ ...newStory, description: e.target.value })}
              />
              <input
                className="p-2 rounded bg-gray-800 text-white"
                placeholder="Assignee (username)"
                value={newStory.assignee}
                onChange={e => setNewStory({ ...newStory, assignee: e.target.value })}
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Story
              </button>
            </form>

            {managedProjects.map(project => (
              <div key={project.id} className="mb-16">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">{project.name} - Scrum Board</h4>
                <KanbanBoard
                  stories={stories.filter(s => s.projectId === project.id)}
                  currentUser={currentManager}
                  onStatusChange={(storyId, newStatus) =>
                    setStories(stories =>
                      stories.map(story =>
                        story.id === storyId ? { ...story, status: newStatus as any } : story
                      )
                    )
                  }
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ManagerPage;