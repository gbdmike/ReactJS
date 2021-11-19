import styles from "./layout.module.css";


export function Layout({ title, chat, messages }) {
    return (
        <div className={styles.body}>
            <div className={styles.title}>{title}</div>
            <div className={styles.content}>
                <div className={styles.listchat}>{chat}</div>
                <div className={styles.messages}>{messages}</div>
            </div>
        </div>
    )
}