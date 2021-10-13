import Link from 'next/link';
import styles from './card.module.css';

const Card = (props) => {

    const { img, name, subtext, href } = props;

    return (
        <>
            {
                href ?
                    <Link href={href}>
                        <div class={styles.root}>
                            <img src={img} alt={name} height="300px" />
                            <div class={styles.body}>
                                <h4><b>{name}</b></h4>
                                <p>{subtext}</p>
                            </div>
                        </div>
                    </Link>
                    :
                    <div class={styles.root}>
                        <img src={img} alt={name} height="300px" />
                        <div class={styles.body}>
                            <h4><b>{name}</b></h4>
                            <p>{subtext}</p>
                        </div>
                    </div>
            }
        </>
    )
}

export default Card
