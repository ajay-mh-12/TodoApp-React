
import styles from "./todoItem.module.css";
export default function TodoItem({ item }) {
    function handleDelete(){
        console.log("delete")
    }
  return (

    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
        <span>
          <button onClick={handleDelete} className={styles.deleteBtn}>x</button>
        </span>
      </div>
      
      <hr className={styles.line} />
    </div>
  );
}
