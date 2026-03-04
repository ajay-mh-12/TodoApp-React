import TodoItem from "./TodoItem";
import styles from "./todolist.module.css"
export default function TodoList({ dones }) {
  return (
    <div className={styles.listDiv}>
      {dones.map((item) => {
        return <TodoItem key={item} item={item} />;
      })}
    </div>
  );
}

