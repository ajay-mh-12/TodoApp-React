import TodoItem from "./TodoItem";
import styles from "./todolist.module.css"
export default function TodoList({ dones,setDone }) {
  return (
    <div className={styles.listDiv}>
      {dones.map((item) => {
        return <TodoItem key={item} item={item} done={dones} setDone={setDone} />;
      })}
    </div>
  );
}

