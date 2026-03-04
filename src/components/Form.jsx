import { useState } from "react"
import style from "./form.module.css"
export default function Form({dones,setDone}){
    const [todo,setTodo] = useState("")
  
    function handleClick(e){
        setTodo(e.target.value)
        
    }
    function handleOk(e){
        e.preventDefault()
        setDone([...dones,todo])
        setTodo("");
       
    }
    return (
        <form onSubmit={handleOk} className={style.form}>
            <input className={style.modernInput} onChange={handleClick} value={todo} placeholder="enter todo item" type="text" />
            <button className={style.modernButton} type="submit">Add</button>
        </form>
    ) 
}