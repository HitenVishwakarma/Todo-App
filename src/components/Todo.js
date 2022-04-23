import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Todo({ todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  return (
    <div className="todo">
      <li className="text">{todo.text}</li>
      <button>
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button>
        <FontAwesomeIcon icon={faTrashCan} onClick={deleteHandler} />
      </button>
    </div>
  );
}

export default Todo;
