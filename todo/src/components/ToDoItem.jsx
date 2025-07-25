import "../ToDoItem.css"
import { FaTrash, FaEdit } from "react-icons/fa";


const ToDoItem = ({inputValue}) => {
  return (
  <div className="item-div">
    <div className="item-content">
        <li className="item-name">Title: {inputValue.text}</li>
        <p className="item-date">Date: {inputValue.date.toLocaleString()}</p>
    </div>
    <div className="icon-buttons">
        <FaEdit />
        <FaTrash />
    </div>
  </div>
);
}

export default ToDoItem

        {/* .toLocaleString() stops the "Unable to render object" error 
        by turning the date object into a string*/}