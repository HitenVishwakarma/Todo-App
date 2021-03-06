import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filterTodos }) => {
  return (
    <div>
      <ul>
        {filterTodos?.map((item) => (
          <Todo
            key={item.id}
            // text={item.text}
            todo={item}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
