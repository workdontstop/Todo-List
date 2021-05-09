import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitToHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statushandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <div className="col-xs-12 zazp"></div>
      <div className="col-xs-2"></div>
      <div className="col-xs-8 form-group">
        <div className="col-xs-8  ">
          <input
            value={inputText}
            type="text"
            onChange={inputTextHandler}
            className="todo-input  input1 form-control "
          />
        </div>
        <div className="col-xs-2  ">
          <button
            onClick={submitToHandler}
            className="todo-button"
            type="submit"
          >
            <h1> + </h1>
          </button>
        </div>

        <div className="select  ">
          <select onChange={statushandler} name="todos" className="filter-todo">
            <option value="all"> All </option>
            <option value="completed"> Completed </option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default Form;
