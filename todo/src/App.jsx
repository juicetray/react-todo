import './styles/App.css';
import ToDoForm from "./components/ToDoForm";
import useTodos from "./hooks/useTodos";
import ToDoList from "./components/ToDoList";

function App() {
  const {
  inputValue,
  todos,
  handleChange,
  handleSubmit,
  handleDelete,
  handleCompletion,
  handleEdit,
  handleConfirmEdit,
  handleCancelEdit
} = useTodos();

  return (
    <>
      <div>
       <h1>ToDo App </h1>
        <ToDoForm
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        />
        <ToDoList
        todos={todos}
        handleDelete={handleDelete}
        handleCompletion={handleCompletion}
        handleEdit={handleEdit}
        handleConfirmEdit={handleConfirmEdit}
        handleCancelEdit={handleCancelEdit} />
      </div>
    </>
  )
}

export default App
