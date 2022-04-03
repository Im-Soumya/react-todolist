import React from "react";

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
    <div>
      <input
        type="checkbox"
        id="checkbox"
        value={todo.checked}
        checked={todo.checked}
        onChange={() => checkTodo(todo.id)}
      />
      <label>{todo.text}</label>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  )
}

export default Todo;