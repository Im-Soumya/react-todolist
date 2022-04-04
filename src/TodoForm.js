import React, { useState } from "react";
import { GrFormAdd } from "react-icons/gr";

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
    <div className="flex items-center mb-3 border-2 border-indigo-200 rounded-lg">
      <form
        className="flex items-center"
        onSubmit={addTodo}
      >
        <input
          className="text-white placeholder-white px-3 py-2 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
          type="text"
          value={value}
          placeholder="Enter a task"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <button
        className="text-lg font-medium py-2 px-2 rounded-md hover:bg-indigo-500 transition duration-200"
        onClick={addTodo}
      >
        Add</button>
    </div>
  )
}

export default TodoForm;