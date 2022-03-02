import React from 'react'
import Todo from './todocomponent'

export default function Todolist({todos, toggletodo}) {
  return (
   todos.map(item => {
       return <Todo key={item.id} toggletodo={toggletodo} todo = {item}/>})
 
   )
}
