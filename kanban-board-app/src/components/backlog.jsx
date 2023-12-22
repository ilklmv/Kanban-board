import React, { useEffect } from "react";

const Backlog = ({
  tasks,
  handleAddTask,
  handleMoveTask,
  newTaskText,
  setNewTaskText,
  selectedColumn,
  renderDropdown,
}) => {
  useEffect(() => {
    localStorage.setItem("backlogTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="column">
      <h3>Backlog</h3>
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
      <div>
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button onClick={() => handleAddTask("backlog")}>
          {newTaskText.trim() !== "" ? "Submit" : "+ Add Card"}
        </button>
      </div>
      {renderDropdown("backlog")}
    </div>
  );
};

export default Backlog;
