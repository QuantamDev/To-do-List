import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="Todo flex justify-between align-center bg-[#8758ff] text-white px-2 py-3 rounded-xl mb-4">
        <p className={`${task.completed ? "completed text-red-700 line-through cursor-pointer" : "incompleted text-white cursor-pointer"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div >
        <FontAwesomeIcon className="edit-icon cursor-pointer" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="delete-icon cursor-pointer" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
  }
  