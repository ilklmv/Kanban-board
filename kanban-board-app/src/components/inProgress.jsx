import React, { useEffect } from "react";

const InProgress = ({ tasks, renderDropdown }) => {
  useEffect(() => {
    localStorage.setItem("inProgressTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="column">
      <h3>In Progress</h3>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("text/plain", task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>
      {renderDropdown("inProgress")}
    </div>
  );
};

export default InProgress;
