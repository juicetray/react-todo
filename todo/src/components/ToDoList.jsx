import ToDoItem from "./ToDoItem"
import "../ToDoList.css";

const ToDoList = ({todos, handleDelete, handleCompletion}) => {
  return (
    <div className="item-container">
   {todos.map((todo) => (
    <ToDoItem
    key={todo.id}
    todo={todo}
    handleDelete={handleDelete}
    handleCompletion={handleCompletion}
    />
   ))}
    </div>
  )
}

export default ToDoList