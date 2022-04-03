import React, { useState } from "react";

const TodoForm = ({ todos, setTodos }) => {
  const [value, setValue] = useState("")

  const addTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      id: todos?.length + 1,
      text: value,
      checked: false
    }
    setTodos([newTodo, ...todos])
    localStorage.setItem("Todos", JSON.stringify(todos))
    setValue("")
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={value}
          placeholder="Enter a task"
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default TodoForm;