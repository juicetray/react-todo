import './App.css'
import { useState, useEffect } from "react"
import ToDoList from './components/ToDoList';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

     useEffect(() => {
      console.log("Updated todos:", todos)
    }, [todos])


  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  // made the todoitem return an object for better scaling and more customization

  const generateToDo = () => {
    return {
      text: inputValue,
      date: new Date(),
      id: crypto.randomUUID(),
      completed: false
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // pushing the todo object into the todos array to make an array of objects
    // plan on adding more to the object in the future (category, completed boolean, etc.)
    const newTodo = generateToDo(inputValue);
    setTodos([...todos,newTodo]);
}


//delete function
const handleDelete = (id) => {
  setTodos(todos.filter(todo => todo.id !== id))
}

const handleCompletion = (id) => {
  setTodos(todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo, completed: !todo.completed
      };
    }
    return todo;
  })
)};

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
      todos={todos}
      handleDelete={handleDelete}
      handleCompletion={handleCompletion} />
      </div>
    </>
  )
}

export default App
