import { useRef } from 'react';
import '../styles/ToDoItem.css';
import { FaTrash, FaEdit, FaCheck, FaTimes } from "react-icons/fa";

const ToDoItem = ({ 
  handleDelete,
  todo,
  handleCompletion,
  handleEdit,
  handleConfirmEdit,
  handleCancelEdit}) => {
const inputRef = useRef(null);

 if (todo.isEditing) {
 return ( 
    <div className="item-div">
      <div className="item-content">
        <li className={`item-name ${todo.completed ? "completed" : ""}`}>Previous ToDo: {todo.text}</li>
        <input
        type="text"
        id="new-todo-input"
        className="input input__lg edit-input"
        name="text"
        autoComplete="off"
        placeholder="New Todo name here"
        ref={inputRef}
      />
        <p className="item-date">Date: {todo.date.toLocaleString()}</p>
      </div>
      <div className="icon-buttons">
        <FaCheck className="icon-confirm" onClick={() => handleConfirmEdit(todo.id, inputRef.current.value)
        } />
        <FaTimes className="icon-cancel" onClick={() => handleCancelEdit(todo.id)}
        />
      </div>
    </div>
  );
}
  return (
  <div className="item-div">
    <div className="item-content">
        <li className={`item-name ${todo.completed ? "completed" : ""}`}>Title: {todo.text}</li>
        <p className="item-category">Category: {todo.category}</p>
        <p className="item-date">Date: {todo.date.toLocaleString()}</p>
    </div>
    <div className="icon-buttons">
        <FaCheck className="icon-complete" onClick={() => handleCompletion(todo.id)} />
        <FaEdit className="icon-edit" onClick={() => handleEdit(todo.id)}/>
        <FaTrash className="icon-delete" onClick={() => handleDelete(todo.id)}/>
    </div>
  </div>
  );
}

export default ToDoItem