import React, { useEffect } from "react";

const Finished = ({ tasks, renderDropdown }) => {
  useEffect(() => {
    localStorage.setItem("finishedTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="column">
      <h3>Finished</h3>
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
      {renderDropdown("finished")}
    </div>
  );
};

export default Finished;
