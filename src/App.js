import React,{useState,useRef,useEffect} from 'react'
import './App.css';
import Todolist from './Todolist'
import {v4 as uuidv4} from 'uuid'

const key = 'todoApp.todos'
function App() {
 const [todos, setTodos] =  useState([])
 const todonameref = useRef()

useEffect(()=>{
  const stdtodos = JSON.parse(localStorage.getItem(key))
  if(stdtodos) setTodos(stdtodos)
},[])

function toggletodo(id){
  const todocopy = [...todos]
  const todo = todocopy.find(todo=>todo.id === id)
  todo.status =!todo.status
  setTodos(todocopy)
}

function handlecleartodo(){
  const todocopy2= todos.filter(todo => !todo.status)
  setTodos(todocopy2)
}
 useEffect(()=>{
 localStorage.setItem(key,JSON.stringify(todos))
 },[todos])
 function handleaddtodo(event){
 const name = todonameref.current.value
 if(name === '') return
 setTodos(prevTodos => {
   return[...prevTodos, {id: uuidv4(), name: name, status: false}]
 })
}
  return (
    <>
 <Todolist todos = {todos} toggletodo = {toggletodo}/>
 < input ref={todonameref} type = "text"/>
 <button onClick={handleaddtodo}>Add Task</button>
 <button onClick={handlecleartodo}>Clear Task</button>
 <div>{todos.filter(todo => !todo.status).length} left to do</div>

 </>
 
  );
}

export default App;
