import { useState, useEffect } from "react";
import { setTodo, getTodo } from "../utils/localStorage";

export default function useTodos() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [activeFilter, setActiveFilter] = useState("All");
  const categoryList = [...new Set(todos.map(todo => todo.category))];

  // Log whenever todos change
  useEffect(() => {
    const savedTodos = getTodo("todos");
    if (savedTodos) {
        setTodos(savedTodos)
    }
    setHasInitialized(true);
  }, []);

  useEffect(() => {
  if (hasInitialized) {
    setTodo("todos", todos);
  }
}, [todos, hasInitialized]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //todo object
  const generateToDo = () => ({
    text: inputValue,
    date: new Date(),
    id: crypto.randomUUID(),
    completed: false,
    isEditing: false,
    category: selectedCategory
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const newTodo = generateToDo();
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEdit = (id) => {
    setTodos(
        todos.map((todo) => 
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        )
    );
  };

  const handleConfirmEdit = (id, newText) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id
        ? { ...todo, text: newText, isEditing: false }
        : todo
    )
  );
};

  const handleCancelEdit = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id
        ? { ...todo, isEditing: false }
        : todo
    )
  );
};

const updateActiveFilter = (category) => {
  if (activeFilter === category) {
    setActiveFilter("All")
  } else {
  setActiveFilter(category)
  }
};


  return {
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
    activeFilter,
    setActiveFilter,
    categoryList,
    updateActiveFilter
  };
}
