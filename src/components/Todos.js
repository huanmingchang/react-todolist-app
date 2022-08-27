const Todos = (props) => {
  const { todos, setTodos } = props

  const changeCompleted = (item) => {
    setTodos(
      todos.map((todo) =>
        todo.id === item.id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <>
      {todos.map((item) => {
        return (
          <li key={item.id}>
            <label className='todoList_label'>
              <input
                className='todoList_input'
                type='checkbox'
                value={item.completed}
                checked={item.completed ? 'checked' : ''}
                onChange={() => changeCompleted(item)}
              />
              <span>{item.content}</span>
            </label>
            <a href='#'>
              <i className='fa fa-times'></i>
            </a>
          </li>
        )
      })}
    </>
  )
}

export default Todos
