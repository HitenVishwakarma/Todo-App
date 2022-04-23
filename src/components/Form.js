import React, { useState } from "react";
import TodoList from "./TodoList";

function Form() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  // const addTaskHandler = () => {
  //   setInputText("");
  // };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          className="input"
          onChange={inputHandler}
          value={inputText}
        />
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
        <button type="submit" className="button">
          Add Task
        </button>
      </form>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default Form;
