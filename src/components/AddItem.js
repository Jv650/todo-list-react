import { useState } from "react";

import Button from "react-bootstrap/Button"; //imports button css from bootstrap

const AddItem = () => {
  const [task, setTask] = useState([]); //default state will be an empty array (no tasks added to the list)
  const [input, setInput] = useState(""); //ensure the default state of the add item box is empty

  const handleSubmit = (e) => {
    //e.preventDefault();
    setInput(e.target.value);
  };

  const addTask = () => {
    if (input !== "") {
      setTask((prevTasks) => [...prevTasks, input]);
      setInput("");
      console.log("item added:", input);
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleSubmit}
        value={input}
        placeholder="add item..."
      />
      {/* here Button is capitalized since I want to use styling from bootstrap */}
      <Button onClick={addTask}>ADD</Button>{" "}
      {task.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </div>
  );
};

export default AddItem;
