import { useState } from "react";
import { Layout } from "../../components/layouts"
import RowCard from "../../components/row-card/rowCard";
import { cw } from '../../constants/publications';

const ConferenceAndWorkshop = () => {

    const [state, setState] = useState({
        cw: [...cw]
    })

    const handleDelete = (idx, type) => {
        const newArr = [...state[type]];
        newArr.splice(idx, 1);
        setState({
            ...state,
            [type]: [...newArr]
        });
    }

    return (
        <Layout >
            <h3>Conferences &amp; Workshops</h3>
            {
                state.cw.map((conf, idx) => {
                    return <RowCard item={conf} handleDelete={handleDelete} idx={idx} type='cw' />
                })
            }
        </Layout>
    )
}

export default ConferenceAndWorkshop
