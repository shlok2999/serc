import styles from './ColCard.module.css';

const ColCard = (props) => {

    const { item } = props;

    return (
        <div className={styles.root}>
            <h4 className={styles.heading}>{item.label}</h4>
            {
                item.value.map((v) => {
                    return <div className={styles['list-item-container']}>
                        {v}
                    </div>
                })
            }
        </div>
    )
}

export default ColCard
