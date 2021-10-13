import { Layout } from "../../components/layouts"
import styles from './FocusArea.module.css';
import FOCUS_AREA from "../../constants/message";
import { ColCard } from "../../components/col-card";

const FocusArea = () => {
    return (
        <Layout>
            <h3>Focus Area</h3>
            <div className={styles.root}>
                {
                    FOCUS_AREA.map((item) => {
                        return <ColCard item={item} />
                    })
                }
            </div>
        </Layout>
    )
}

export default FocusArea
