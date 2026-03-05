import TodoItem from "./TodoItem";
import styles from "./todolist.module.css"
export default function TodoList({ dones,setDone }) {
  const sortedDone = dones.slice().sort((a,b)=>Number(a.complete) -Number(b.complete))
  return (
    <div className={styles.listDiv}>
      {sortedDone.map((item) => {
        return <TodoItem key={item.name} item={item} done={dones} setDone={setDone} />;
      })}
    </div>
  );
}

