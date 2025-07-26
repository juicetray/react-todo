import "../ToDoItem.css"
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";

const ToDoItem = ({ handleDelete, todo, handleCompletion}) => {
  return (
  <div className="item-div">
    <div className="item-content">
        <li className={`item-name ${todo.completed ? "completed" : ""}`}>Title: {todo.text}</li>
        <p className="item-date">Date: {todo.date.toLocaleString()}</p>
    </div>
    <div className="icon-buttons">
        <FaCheck className="icon-complete" onClick={() => handleCompletion(todo.id)} />
        <FaEdit className="icon-edit" />
        <FaTrash className="icon-delete" onClick={() => handleDelete(todo.id)}/>
    </div>
  </div>
);
}

export default ToDoItem

        {/* .toLocaleString() stops the "Unable to render object" error 
        by turning the date object into a string*/}