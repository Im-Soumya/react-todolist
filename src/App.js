import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => {
    if (localStorage.getItem("Todos")) {
      return JSON.parse(localStorage.getItem("Todos"))
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="grid justify-items-center">
      <h1 className="m-7 font-medium text-3xl">Todo List</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      {todos?.map((todo, index) => (
        <Todo
          key={index}
          todos={todos}
          setTodos={setTodos}
          todo={todo}
        />
      ))}
    </div>
  )
}

export default App;