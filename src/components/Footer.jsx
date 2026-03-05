import styles from "./footer.module.css"
export default function Footer({completedDone,totalDone}){
    return <div className={styles.footer}>
        <span className={styles.item}>complete Done : {completedDone}</span>
        <span>total Done:{totalDone}</span>

    </div>
}
