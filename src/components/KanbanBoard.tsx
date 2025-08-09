import React, { useState } from "react";
import { Story } from "../types/Story";

interface KanbanBoardProps {
  stories: Story[];
  currentUser: string;
  onStatusChange: (storyId: number, newStatus: Story["status"]) => void;
}

const statuses: Story["status"][] = ["To Do", "In Progress", "Completed"];

const KanbanBoard: React.FC<KanbanBoardProps> = ({ stories, currentUser, onStatusChange }) => {
  const [dragged, setDragged] = useState<number | null>(null);

  return (
    <div className="flex gap-4">
      {statuses.map((status) => (
        <div key={status} className="flex-1 bg-gray-800 rounded p-4 min-h-[300px]">
          <h4 className="text-lg font-bold text-blue-300 mb-4">{status}</h4>
          {stories.filter(s => s.status === status).map(story => (
            <div
              key={story.id}
              className={`mb-4 p-3 rounded shadow bg-gray-700 cursor-move ${
                story.assignee === currentUser ? "border-l-4 border-blue-400" : "border-l-4 border-gray-500"
              }`}
              draggable={story.assignee === currentUser}
              onDragStart={() => setDragged(story.id)}
              onDragEnd={() => setDragged(null)}
            >
              <div className="font-semibold text-white">{story.title}</div>
              <div className="text-gray-300 text-sm mb-2">{story.description}</div>
              <div className="text-xs text-gray-400">Assignee: {story.assignee}</div>
            </div>
          ))}
          <div
            className="h-10"
            onDragOver={e => e.preventDefault()}
            onDrop={() => {
              if (dragged !== null) {
                const story = stories.find(s => s.id === dragged);
                if (story && story.assignee === currentUser && story.status !== status) {
                  onStatusChange(dragged, status);
                }
                setDragged(null);
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;