import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="">
      <ul>
        {filteredTodos.map((info) => (
          <Todo
            info={info}
            todos={todos}
            setTodos={setTodos}
            key={info.id}
            text={info.text}
            clim={info.completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
