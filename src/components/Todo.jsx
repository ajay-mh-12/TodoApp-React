import { useState } from "react"
import Form from "./Form"
import TodoList from "./TodoList"
export default function Todo() {
      const [done,setDone] = useState([])
    
    

    return <div>
        <Form dones={done} setDone={setDone} />
        <TodoList dones={done}/>
      
    </div>
}