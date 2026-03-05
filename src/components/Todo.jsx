import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";
export default function Todo() {
  const [done, setDone] = useState([]);
  const completedDone = done.filter((element) => element.complete).length;
  const totalDone = done.length;

  return ( 
    <div>
      <Form dones={done} setDone={setDone} />
      <TodoList dones={done} setDone={setDone} />
      <Footer completedDone={completedDone} totalDone={totalDone} />
    </div>
  );
}
