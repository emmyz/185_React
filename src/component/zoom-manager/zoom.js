import { useState, useEffect } from "react";
import Tasks from "./tasks";
import AddTask from "./add-task";
import UpdateTask from "./update-task";
import Header from "./header";

import "./zoom.css";

const Zoom = () => {
  const [tasks, setTasks] = useState([]);
  const [onFullSchedule, setFullSchedule] = useState(true);
  const [isUpdate, setUpdate] = useState(false);
  const [updateID, setUpdateID] = useState("");

  //   like componentdidmount, run after render
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();
    return data;
  };

  const fetchTask = async (id) => {
    const response = await fetch("http://localhost:5000/tasks/" + id);
    const data = await response.json();
    return data;
  };

  const deleteTask = async (id) => {
    const response = await fetch("http://localhost:5000/tasks/" + id, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = async (task) => {
    const response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    setTasks([...tasks, data]);
  };

  const updateTask = async ({ title, day, important, textInfor }) => {
    const taskToToggle = await fetchTask(updateID);
    const updTask = { ...taskToToggle, title, day, important, textInfor };
    const response = await fetch("http://localhost:5000/tasks/" + updateID, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    // const data = await response.json();
    setTasks(
      tasks.map((task) =>
        task.id === updateID
          ? { ...taskToToggle, title, day, important, textInfor }
          : task
      )
    );
  };

  return (
    <div className="zoom-container">
      <Header
        title="Zoom Meeting Manager"
        onFullSchedule={onFullSchedule}
        setFullSchedule={setFullSchedule}
      />
      {onFullSchedule ? (
        tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            setUpdate={setUpdate}
            setUpdateID={setUpdateID}
          />
        ) : (
          <h3>No Avaliable Meetings</h3>
        )
      ) : (
        <AddTask onAdd={addTask} />
      )}
      {isUpdate && (
        <UpdateTask
          onUpdate={updateTask}
          fetchTask={fetchTask}
          updateID={updateID}
          setUpdate={setUpdate}
        />
      )}
    </div>
  );
};

export default Zoom;
