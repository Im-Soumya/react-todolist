import { useState, useEffect } from "react";
import EditTodo from "./EditTodo";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import './App.css';

function App() {
  const [editingTodoId, setEditingTodoId] = useState(null)
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
      {todos.map((todo, index) => (
        <div key={index}>
          {editingTodoId === todo.id ?
            <EditTodo
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              editingTodoId={editingTodoId}
              setEditingTodoId={setEditingTodoId}
            /> :
            <Todo
              key={index}
              todos={todos}
              setTodos={setTodos}
              todo={todo}
              editingTodoId={editingTodoId}
              setEditingTodoId={setEditingTodoId}
            />
          }
        </div>
      ))}
    </div>
  )
}

export default App;