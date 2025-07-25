import './App.css'
import { useState } from "react"
import ToDoList from './components/ToDoList';

function App() {

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);


  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos,{text: inputValue, date: new Date() }]);
    console.log("New todo added:", {
      text: inputValue,
      date: new Date()
  });
}

  return (
    <>
      <div>
       <h1>ToDo App </h1>
        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <ToDoList
      todos={todos} />
      </div>
    </>
  )
}

export default App
