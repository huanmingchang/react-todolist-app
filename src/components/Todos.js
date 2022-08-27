const Todos = () => {
  return (
    <li>
      <label className='todoList_label'>
        <input className='todoList_input' type='checkbox' value='true' />
        <span>把冰箱發霉的檸檬拿去丟</span>
      </label>
      <a href='#'>
        <i className='fa fa-times'></i>
      </a>
    </li>
  )
}

export default Todos
