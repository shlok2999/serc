import styles from './announcementCard.module.css';

const AnnouncementCard = (props) => {

    const { a } = props;

    return (
        <div className={styles.root}>
            <div className={styles.left}>
                <p className={styles.day}>{a.day}</p>
                <p className={styles.month}>{a.month}</p>
            </div>
            <div className={styles.right}>
                <p className={styles.title}>{a.title}</p>
                <p className={styles.message}>{a.message}</p>
            </div>
        </div>
    )
}

export default AnnouncementCard
