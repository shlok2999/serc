import { useState } from "react";
import { Layout } from "../../components/layouts"
import RowCard from "../../components/row-card/rowCard";
import { journal } from '../../constants/publications';

const Journal = () => {

    const [state, setState] = useState({
        journal: [...journal]
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
                state.journal.map((conf, idx) => {
                    return <RowCard item={conf} handleDelete={handleDelete} idx={idx} type='journal' />
                })
            }
        </Layout>
    )
}

export default Journal
