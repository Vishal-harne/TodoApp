import { useState } from 'react'
import './App.css'

function App() {
  const [todos, settodos] = useState([{
    title:"go to gym",
    description:"go gym from 7 to 9",
    completed:false
  },{
    title:"study DSA",
    description:"study DSA from 9 to 11",
    completed:false
  }])

  return (
    <div>
     <Todo title="vishal" description="i am hitting devolopment"></Todo>
    </div>
  )
}


function Todo(props){
  return<div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}
export default App
