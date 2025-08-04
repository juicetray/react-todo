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
  handleCancelEdit,
  selectedCategory,
  setSelectedCategory,
  categoryList,
  activeFilter,
  updateActiveFilter
} = useTodos();

const filteredTodos = activeFilter ? todos.filter(todo => todo.category === activeFilter) : todos

  return (
    <>
  <div className="app-container">
    <h1>ToDo App</h1>
    <div className="form-wrapper">
      <ToDoForm
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
    <div className="category-buttons">
    {categoryList.map((category) => (
    <button className="btn filter-btn" onClick={() => updateActiveFilter(category)}>{category}</button>
    ))}
    </div>
    <ToDoList
      todos={filteredTodos}
      handleDelete={handleDelete}
      handleCompletion={handleCompletion}
      handleEdit={handleEdit}
      handleConfirmEdit={handleConfirmEdit}
      handleCancelEdit={handleCancelEdit}
    />
  </div>
</>

  )
}

export default App
