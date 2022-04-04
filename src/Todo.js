import React from "react";
import { FaTrash } from "react-icons/fa"

const Todo = ({ todos, setTodos, todo }) => {

  const checkTodo = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="flex md:w-72 justify-between items-center bg-slate-200 my-3 rounded-md px-4 py-3 shadow-slate-600 shadow-md">
      <div className="bg-slate-200">
        <input
          className="w-4 h-4 mr-3"
          type="checkbox"
          id="checkbox"
          value={todo.checked}
          checked={todo.checked}
          onChange={() => checkTodo(todo.id)}
        />
        <label className="bg-slate-200 text-lg font-regular text-indigo-600">{todo.text}</label>
      </div>
      <div
        className="bg-indigo-500 rounded-md cursor-pointer p-2.5 shadow-slate-600 shadow-sm hover:bg-indigo-600 transition duration-200 ease-in-out"
      >
        <FaTrash
          className="bg-indigo-500 hover:bg-indigo-600"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  )
}

export default Todo;