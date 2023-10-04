import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm w-full mt-2">
    <input type="text" className="todo-input outline-none border-2 border-solid border-[#8758ff] px-10 py-2 mt-4 mb-8 w-18 text-[#8758ff]"  value={value} onChange={(e) => setValue(e.target.value)} placeholder='What is the task today?' />
    <button type="submit" className='todo-btn todo-btn bg-[#8758ff] text-white border-none p-2 py-2.5 cursor-pointer'>Add Task</button>
  </form>
  )
}
//value={value} onChange={(e) => setValue(e.target.value)}