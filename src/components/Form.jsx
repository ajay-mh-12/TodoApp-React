import { useState } from "react"
import style from "./form.module.css"
export default function Form({dones,setDone}){
    // const [todo,setTodo] = useState("")
    const [todo,setTodo] = useState({name:"",complete:false})
  
    function handleClick(e){
        setTodo({name:e.target.value,complete:false})
        
    }
    function handleOk(e){
        e.preventDefault()
        setDone([...dones,todo])
        setTodo({name:"",complete:false});
       
    }
    
    return (
        <form onSubmit={handleOk} className={style.form}>
            <input className={style.modernInput} onChange={handleClick} value={todo.name} placeholder="enter todo item" type="text" />
            <button className={style.modernButton} type="submit">Add</button>
        </form>
    ) 
}
