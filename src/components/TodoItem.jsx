
import styles from "./todoItem.module.css";
export default function TodoItem({ item,done,setDone }) {
    function handleDelete(item){
        console.log("delete",item)
        setDone(done.filter((search)=> search !== item))
    }
  return (

    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
        <span>
          <button onClick={()=>handleDelete(item)} className={styles.deleteBtn}>x</button>
        </span>
      </div>
      
      <hr className={styles.line} />
    </div>
  );
}
