import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './component/CreateTodo'
import { Todos } from './component/Todo'

function App() {
  // const [count, setCount] = useState(0)
   const [todos,setTodos]=useState([]);

   fetch("http://localhost:3009/todos")
    .then(async function(res){
       const json=await res.json();
      setTodos(json.todos);
    })
    
  return (
    <div>
    <CreateTodo></CreateTodo>
    <Todos todos={[{
      title:"vishal",
      description:"password",
      completed:false
    }]}></Todos>
    </div>
  )
}

export default App
