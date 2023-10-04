import React, {useState} from 'react'

export const EditTodoForms = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input outline-none border-2 border-solid border-[#8758ff] px-10 py-2 mt-4 mb-8 w-18 text-[#8758ff]" placeholder='Update task' />
    <button type="submit" className='todo-btn bg-[#8758ff] text-white border-none p-2 py-2.5 cursor-pointer'>Add Task</button>
  </form>
  )
}

