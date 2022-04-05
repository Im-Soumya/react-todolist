import React, { useState } from "react";
import { BsCheck2 } from "react-icons/bs";

const EditTodo = ({ todo, todos, setTodos, editingTodoId, setEditingTodoId }) => {
  const [editValue, setEditValue] = useState("")

  const updateTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.text = editValue
      }
      return todo
    })
    setEditValue("")
    setTodos(updatedTodos)
    setEditingTodoId(null)
  }

  return (
    <div className=" w-96 flex justify-between items-center bg-slate-200 my-3 py-1 rounded-md shadow-slate-600 shadow-md rounded-lg">
      <form
        className="flex items-center"
        onSubmit={() => updateTodo(todo.id)}
      >
        <input
          className="w-80 text-lg font-regular text-indigo-600 bg-slate-200 placeholder-indigo-500 text-md font-regular pl-4 py-2 focus:outline-none"
          type="text"
          value={editValue}
          placeholder="Edit this todo"
          onChange={(e) => setEditValue(e.target.value)}
        />
      </form>
      <BsCheck2
        className="w-9 h-9 p-1 mr-2 bg-indigo-500 rounded-md hover:bg-indigo-600 transition duration-300 cursor-pointer"
        onClick={() => updateTodo(todo.id)}
      />
      {/* <button
        className="text-lg font-medium bg-indigo-400 py-2 px-3 pr-4 rounded-md hover:bg-indigo-600 transition duration-200"
        onClick={() => updateTodo(todo.id)}
      >
        Update</button> */}
    </div>
  )
}

export default EditTodo;