import styles from "./todoItem.module.css";
export default function TodoItem({ item, done, setDone }) {
  function handleDelete(item) {
    console.log("delete", item);
    setDone(done.filter((search) => search !== item));
  }
  function hanndleClick(name) {
   setDone(done.map((element) =>
      element.name === name
        ? { ...element, complete: !element.complete }
        : element,
    ));
    console.log(done)
  }
  const className = item.complete ? styles.completed : ""
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => hanndleClick(item.name)}> {item.name}</span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteBtn}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
