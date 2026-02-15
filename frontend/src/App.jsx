import { useState, useEffect } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  const [todos, setTodos] = useState([]);
  // we need to send the request to database and use it's response as our state here.
  // 1. basic approach -> (not good but just intution)
  // console.log("Gonna fetch url");
  // fetch("http://localhost:3000/todos")
  //   .then(async(res)=>{
  //     const json = await res.json();
  //     console.log(json);
  //     setTodos(json.todos);
  //   })
  // The above call makes it a infinite loop
  useEffect(() => {
    console.log("Gonna fetch url");
    fetch("http://localhost:3000/todos")
      .then(async(res)=>{
        const json = await res.json();
        console.log(json);
        setTodos(json.todos);
      })
  }, [])

  return (
    <>
     <div>
        <CreateTodo />
        <Todos todos = {todos} />
     </div>
    </>
  )
}

export default App
