import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditTask = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [taskText, setTaskText] = useState(""); // Simulated data for now

  const saveTask = () => {
    console.log("Task saved:", { id: taskId, text: taskText });
    navigate("/");
  };

  return (
    <div className="p-10 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Edit Task</h1>

      <input
        type="text"
        className="border border-gray-300 rounded p-2 w-full mb-6"
        placeholder="Edit task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white text-center font-medium w-full py-2 rounded"
        onClick={saveTask}
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditTask;
