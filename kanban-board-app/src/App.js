import React, { useState, useEffect } from "react";
//import Header from "./components/header/header";
import Backlog from "./components/backlog";
import Ready from "./components/ready";
import InProgress from "./components/inProgress";
import Finished from "./components/finished";
//import Footer from "./components/footer/footer";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const App = () => {
  const initialTasks = {
    backlog: JSON.parse(localStorage.getItem("backlogTasks")) || [],
    ready: JSON.parse(localStorage.getItem("readyTasks")) || [],
    inProgress: JSON.parse(localStorage.getItem("inProgressTasks")) || [],
    finished: JSON.parse(localStorage.getItem("finishedTasks")) || [],
  };

  const [tasks, setTasks] = useState(initialTasks);
  const [newTaskText, setNewTaskText] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("");

  useEffect(() => {
    localStorage.setItem("backlogTasks", JSON.stringify(tasks.backlog));
    localStorage.setItem("readyTasks", JSON.stringify(tasks.ready));
    localStorage.setItem("inProgressTasks", JSON.stringify(tasks.inProgress));
    localStorage.setItem("finishedTasks", JSON.stringify(tasks.finished));
  }, [tasks]);

  const handleAddTask = (status) => {
    if (newTaskText.trim() === "") return;

    const newTask = { id: Date.now(), text: newTaskText };
    setTasks((prevTasks) => ({
      ...prevTasks,
      [status]: [...prevTasks[status], newTask],
    }));
    setNewTaskText("");
    setSelectedColumn("");
  };

  const handleMoveTask = (id, destinationStatus) => {
    const sourceStatus = Object.keys(tasks).find((status) =>
      tasks[status].find((task) => task.id === id)
    );

    if (sourceStatus === destinationStatus) return;

    const taskToMove = tasks[sourceStatus].find((task) => task.id === id);
    setTasks((prevTasks) => {
      const updatedSourceTasks = prevTasks[sourceStatus].filter(
        (task) => task.id !== id
      );
      const updatedDestinationTasks = [
        ...prevTasks[destinationStatus],
        taskToMove,
      ];
      return {
        ...prevTasks,
        [sourceStatus]: updatedSourceTasks,
        [destinationStatus]: updatedDestinationTasks,
      };
    });
    setSelectedColumn("");
  };

  const renderDropdown = (status) => {
    if (status !== "backlog") {
      return (
        <div>
          <select
            value={selectedColumn}
            onChange={(e) => {
              setSelectedColumn(e.target.value);
              handleMoveTask(parseInt(e.target.value), status);
            }}
          >
            <option value="" disabled>
              +Add Card
            </option>
            {tasks.backlog.map((task) => (
              <option key={task.id} value={task.id}>
                {task.text}
              </option>
            ))}
          </select>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="App">
      <Header />
      <main>
      <div className="board">
        <div className="board__column">
          <Backlog
            tasks={tasks.backlog}
            handleAddTask={() => handleAddTask("backlog")}
            handleMoveTask={handleMoveTask}
            newTaskText={newTaskText}
            setNewTaskText={setNewTaskText}
            selectedColumn={selectedColumn}
            renderDropdown={renderDropdown}
          />
        </div>
        <div className="board__column">
          <Ready tasks={tasks.ready} renderDropdown={renderDropdown} />
        </div>
        <div className="board__column">
          <InProgress tasks={tasks.inProgress} renderDropdown={renderDropdown} />
        </div>
        <div className="board__column">
          <Finished tasks={tasks.finished} renderDropdown={renderDropdown} />
        </div>
      </div>
      <div
        className="board"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const taskId = e.dataTransfer.getData("text/plain");
          const destinationStatus = e.target
            .closest(".column")
            .querySelector("h3")
            .innerText.toLowerCase();
          handleMoveTask(parseInt(taskId), destinationStatus);
        }}
      ></div>
      </main>
      <Footer tasks={tasks} username="YourUsername" />
    </div>
  );
};

export default App;
