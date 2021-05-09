import React from "react";

const Todo = ({ clim, text, setTodos, todos, info }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== info.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === info.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`${info.completed ? "completed" : " "}`}> {text}</li>
      <button onClick={completeHandler}> check </button>
      <button onClick={deleteHandler}> delete </button>
    </div>
  );
};

export default Todo;
