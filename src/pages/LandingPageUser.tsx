import React, { useState } from "react";
import payNow from "./PayNow";
import { projects } from "../data/projects";
import ProjectList from "../components/ProjectList";

const LandingPageUser = ({ onLogout }: { onLogout: () => void }) => {
  const [enrolled, setEnrolled] = useState<number[]>([]);

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
    setEnrolled((prev) => [...prev, projectId]);
    alert("Enrolled in project!");
  };

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
        <h3 className="text-xl font-bold mt-8 mb-4">Available Projects</h3>
        <ProjectList
          projects={projects.filter((p) => !enrolled.includes(p.id))}
          onEnroll={handleEnroll}
        />
      </div>
    </div>
  );
};

export default LandingPageUser;