import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaClock, FaCalendar, FaCube} from "react-icons/fa";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskInput, date: new Date() }]);
      setTaskInput("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task Tracker</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 flex-grow"
          placeholder="Write a task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addTask}
        >
          + Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <div className="text-center text-gray-500">
          <FaCube size={80} className="mx-auto mb-2" />
          <p>No tasks yet!</p>
        </div>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center mb-2 border p-2 rounded"
            >
              <div>
                <span>{task.text}</span>
                <div className="text-sm text-gray-500 flex gap-2 mt-1">
                  <FaClock /> {task.date.toLocaleTimeString()}
                  <FaCalendar /> {task.date.toLocaleDateString()}
                </div>
              </div>
              <div>
                <Link
                  to={`/edit/${task.id}`}
                  className="bg-green-500 text-white px-1 py-1 rounded flex items-center"
                >
                  <FaEdit className="mr-1" /> 
                </Link>
                <button
                  className="bg-red-500 text-white px-1 py-1 rounded ml-2 flex items-center"
                  onClick={() => deleteTask(task.id)}
                >
                  <FaTrash className="mr-1" /> 
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
