import styles from './rowCard.module.css';

const RowCard = (props) => {

    const { author, title, url, year, type } = props.item;

    const newTabProp = {
        target: '_blank'
    }

    const handleDelete = () => {
        props.handleDelete(props.idx, props.type);
    }

    return (
        <div className={`${styles.root}`}>
            <div className={`${styles.left}`}>
                <p className={`${styles.author}`}>
                    {author}
                </p>
                <a href={url} {...(url.length > 0 ? newTabProp : {})} >
                    <p className={`${styles.title}`}>
                        {title}
                    </p>
                </a>
                <p className={`${styles.type}`}>
                    {type}
                </p>
                <p className={`${styles.year}`}>
                    {year}
                </p>
            </div>
            {
                props.handleDelete &&
                <div className={`${styles.right}`}>
                    <button type='button' className='btn btn-danger' onClick={handleDelete} >Delete</button>
                </div>
            }
        </div>
    )
}

export default RowCard
