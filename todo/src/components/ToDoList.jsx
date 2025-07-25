import ToDoItem from "./ToDoItem"
import "../ToDoList.css";

const ToDoList = ({todos}) => {
  return (
    <div className="item-container">
   {todos.map((todo, index) => (
    <ToDoItem
    key={index}
    inputValue={todo}
    />
   ))}
    </div>
  )
}

export default ToDoList