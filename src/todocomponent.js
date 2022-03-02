import React from 'react'

export default function todocomponent({todo , toggletodo}) {
   function handleTodoClick(){
       toggletodo(todo.id)
   } 
  return (
      <div>
          <label>
             < input type ="checkbox" checked={todo.status} onChange = {handleTodoClick}/>
   {todo.name}
   </label>
   </div>
  )
}
