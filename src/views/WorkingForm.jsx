import React, { useState } from "react";
import StreamingAvatar, { TaskMode, TaskType } from "@heygen/streaming-avatar";
import JotForm from "./JotForm";

const WorkingForm = ({ avatarRef }) => {
  const [currentSection, setCurrentSection] = useState("personal");
  const [currentJobIndex, setCurrentJobIndex] = useState(1);
  const [totalJobs, setTotalJobs] = useState(1);

  const speak = async (message) => {
    if (avatarRef.current) {
      try {
        await avatarRef.current.speak({
          text: message,
          taskType: TaskType.TALK,
          taskMode: TaskMode.SYNC,
        });
      } catch (error) {
        console.error("Error speaking:", error);
      }
    }
  };

  return (
    <div className="interactive-form-controller text-[var(--text-color)] h-[900px] overflow-y-auto">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl text-[var(--primary-color)] md:text-5xl font-bold mb-4">
            Adult Disability
          </h1>
          <p className="text-lg max-w-2xl text-[var(--primary-color)] mx-auto">
            Please fill out this form.
          </p>
        </div>
        <JotForm avatarRef={avatarRef} />
      </div>
    </div>
  );
};

export default WorkingForm;
