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
    <div className=" w-96 flex justify-between items-center mb-3 border-2 border-indigo-200 rounded-lg">
      <form
        className="flex items-center"
        onSubmit={addTodo}
      >
        <input
          className="text-white w-78 placeholder-white text-md font-medium pl-4 py-2 focus:outline-none"
          type="text"
          value={value}
          placeholder="Enter a task"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <button
        className="text-lg font-medium py-2 px-3 pr-4 rounded-md hover:bg-indigo-500 transition duration-200"
        onClick={addTodo}
        disabled={!value}
      >
        Add</button>
    </div>
  )
}

export default TodoForm;