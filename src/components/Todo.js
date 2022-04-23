import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Todo({ todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-text ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </li>
      <button>
        <FontAwesomeIcon icon={faCheck} onClick={completeHandler} />
      </button>
      <button>
        <FontAwesomeIcon icon={faTrashCan} onClick={deleteHandler} />
      </button>
    </div>
  );
}

export default Todo;
