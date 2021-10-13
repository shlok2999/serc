import { Card } from "../../components/card";
import { Layout } from "../../components/layouts";

const btech1 = [
    {
        name: 'Dhruv Chauhan',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/no_image_gXxSJBR_8rkDxfA.png'
    }
];

const btech2 = [
    {
        name: 'Sourav Sarangi',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/IMG_20151111_160753.jpg'
    },
    {
        name: 'Soujanya Ponnapalli',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/serc3.jpg'
    },
    {
        name: 'Kushal Singh',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/11119115_920104571385718_3718824509230444694_n_u4ynqvr.jpg'
    },
    {
        name: 'Animesh Pathak',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/Animesh1.jpg'
    }
];

const Btech = () => {
    return (
        <Layout >
            <h3>Full Time</h3>
            <div className='cards-wrapper'>
                {
                    btech1.map((btech, idx) => {
                        return <Card name={btech.name} img={btech.img} subtext={btech.subtext} />
                    })
                }
            </div>
            <h3>Graduated Btech Students</h3>
            <div className='cards-wrapper'>
                {
                    btech2.map((btech, idx) => {
                        return <Card name={btech.name} img={btech.img} subtext={btech.subtext} />
                    })
                }
            </div>
        </Layout>
    )
}

export default Btech
