import React, { useEffect, useState } from "react";
import "./App.css";

import Myform from "./components/form";
import TodoList from "./components/todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // runs once when the app starts ,, so array empty
  useEffect(() => {
    getlocaltodos();
  }, []);

  //  a  function,when there is a change in state
  useEffect(() => {
    filterHandler();
    savelocaltodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "failed":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const getlocaltodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  const savelocaltodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="App col-xs-12 za">
      <div className="col-xs-12 za  headertext">SPEEDY'S TODO LIST</div>

      <Myform
        inputText={inputText}
        setTodos={setTodos}
        todos={todos}
        setInputText={setInputText}
        setStatus={setStatus}
      />

      <div className="col-xs-12" style={{ padding: "30px" }}></div>

      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
