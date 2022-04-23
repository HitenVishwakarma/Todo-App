import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

const Form = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

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
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
        <button type="submit" className="button">
          Add Task
        </button>
      </form>
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </>
  );
};

export default Form;
