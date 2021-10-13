import { useState } from "react";
import { Layout } from "../../components/layouts"
import RowCard from "../../components/row-card/rowCard";
import { books_and_magazine, editorship, patent } from '../../constants/publications';

const ConferenceAndWorkshop = () => {

    const [state, setState] = useState({
        books_and_magazine: [...books_and_magazine],
        editorship: [...editorship],
        patent: [...patent]
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
            <h3>Books and Magazine</h3>
            {
                state.books_and_magazine.map((conf, idx) => {
                    return <RowCard item={conf} idx={idx} handleDelete={handleDelete} type='books_and_magazine' />
                })
            }
            <h3>Editorship</h3>
            {
                state.editorship.map((conf, idx) => {
                    return <RowCard item={conf} idx={idx} handleDelete={handleDelete} type='editorship' />
                })
            }
            <h3>Patent</h3>
            {
                state.patent.map((conf, idx) => {
                    return <RowCard item={conf} idx={idx} handleDelete={handleDelete} type='patent' />
                })
            }
        </Layout>
    )
}

export default ConferenceAndWorkshop
