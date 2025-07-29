import ToDoItem from "./ToDoItem"
import '../styles/ToDoList.css';

const ToDoList = ({todos, handleDelete, handleCompletion, handleEdit, handleConfirmEdit, handleCancelEdit}) => {
  return (
    <div className="item-container">
   {
    todos.map((todo) => (
    <ToDoItem
    key={todo.id}
    todo={todo}
    handleDelete={handleDelete}
    handleCompletion={handleCompletion}
    handleEdit={handleEdit}
    handleConfirmEdit={handleConfirmEdit}
    handleCancelEdit={handleCancelEdit}
    />
   ))}
    </div>
  )
}

export default ToDoList