import React, { useEffect } from "react";

const Ready = ({ tasks, renderDropdown }) => {
  useEffect(() => {
    localStorage.setItem("readyTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="column">
      <h3>Ready</h3>
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
      {renderDropdown("ready")}
    </div>
  );
};

export default Ready;



/*
    const readyTasks = [
        { id: 3, title: 'Card 1', description: 'Shop page – performance issues', status: 'Ready' },
        { id: 4, title: 'Card 2', description: 'Checkout bugfix', status: 'Ready' },
        { id: 5, title: 'Card 3', description: 'Shop bug1', status: 'Ready' },
        { id: 6, title: 'Card 4', description: 'Shop bug2', status: 'Ready' },
        { id: 7, title: 'Card 5', description: 'Shop bug3', status: 'Ready' },
        { id: 8, title: 'Card 6', description: 'Shop bug4', status: 'Ready' },
        { id: 9, title: 'Card 7', description: 'Shop bug5', status: 'Ready' },
        { id: 10, title: 'Card 8', description: 'Shop bug6', status: 'Ready' },
        { id: 11, title: 'Card 9', description: 'Shop page – performance issues', status: 'Ready' },
    ]
  */ 
