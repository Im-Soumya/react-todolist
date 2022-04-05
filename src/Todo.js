import React from "react";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

const Todo = ({ todos, setTodos, todo, editingTodoId, setEditingTodoId, value, setValue }) => {

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

  const handleEditClick = (id) => {
    setEditingTodoId(id)
    setValue(todo.text)
  }

  return (
    <div className="flex w-96 justify-between items-center bg-slate-200 my-3 rounded-md px-4 py-3 shadow-slate-600 shadow-md">
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
        className="flex bg-slate-200"
      >
        <AiFillEdit
          onClick={() => setEditingTodoId(todo.id)}
          className="ml-1 p-1 w-7 h-7 text-xl mr-2 bg-indigo-500 rounded-md cursor-pointer text-xl bg-indigo-500 hover:bg-green-600 transition duration-300 ease-in-out"
        />

        <FaTrash
          onClick={() => deleteTodo(todo.id)}
          className="p-2 w-7 h-7 text-xl bg-indigo-500 rounded-md cursor-pointer bg-indigo-500 hover:bg-red-500 transition duration-300 ease-in-out"
        />
      </div>
    </div>
  )
}

export default Todo;