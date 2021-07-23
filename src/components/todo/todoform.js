import React, { useEffect, useState } from "react";
import ListTask from "./ListTask";

const TodoForm = () => {
  const [task, setTask] = useState({});
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };
  const handleRemove = (item) => {
    const updatedTasks = taskList.filter((task) => task !== item);
    setTaskList(updatedTasks);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name) return;
    setTask("");
    setTaskList([...taskList, { ...task }]);
  };
  useEffect(() => {
    const ulist = JSON.parse(localStorage.getItem("users"));
    if (Array.isArray(ulist)) setTaskList(ulist);
  }, []);
  useEffect(() => {
    if (taskList.length > 0)
      localStorage.setItem("users", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <form onSubmit={handleSubmit} style={{ margin: "auto", width: "900px" }}>
      <h1>ToDo List</h1>

      <label htmlFor="name">My Tasks:</label>
      <input
        type="text"
        id="name"
        name="name"
        required=""
        onChange={handleChange}
      />
      <br />
      <button
        type="submit"
        style={{
          backgroundColor: "green",
          fontSize: "20px",
          margin: "20px",
          padding: "10px",
        }}
      >
        Add TODO
      </button>

      <hr />
      <ListTask items={taskList} handleRemove={handleRemove} />
    </form>
  );
};

export default TodoForm;
