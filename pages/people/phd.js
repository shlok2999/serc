import { Card } from "../../components/card";
import { Layout } from "../../components/layouts";

const phd1 = [
    {
        name: 'Lalit Mohan',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/Lalit_Mohan.jpg'
    }
];

const phd2 = [
    {
        name: 'Padmalata Nistala',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/padma_nistala.jpg'
    },
    {
        name: 'Sai Anirudh Karre',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/pp.jpg',
        href: '/people/phd/SaiAnirudh'
    },
    {
        name: 'Naveen N. Kulkarni',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/NNK1_eA6CvPl.JPG'
    },
    {
        name: 'Abhinav Gupta',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/WhatsApp_Image_2020-08-11_at_10.11.08_PM.jpeg'
    },
    {
        name: 'Mrityunjay Kumar',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/Mrutunjay.jpg'
    },
    {
        name: 'Amar Banerjee',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/pic.jpg'
    }
];

const phd3 = [
    {
        name: 'Sridhar Chimalakonda',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/Shridar_Chimalakonda.jpg'
    },
    {
        name: 'Sai Gollapudi',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/Sai_Gollapudi.jpg'
    },
    {
        name: 'Kirti Garg',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/3d3a939.jpg'
    },
    {
        name: 'Anand Kumar',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/no_image_Aut2SXN.png'
    }
];

const Phd = () => {
    return (
        <Layout >
            <h3>Full Time</h3>
            <div className='cards-wrapper'>
                {
                    phd1.map((phd, idx) => {
                        return <Card name={phd.name} img={phd.img} subtext={phd.subtext} />
                    })
                }
            </div>
            <h3>Part Time PHD Scholar</h3>
            <div className='cards-wrapper'>
                {
                    phd2.map((phd, idx) => {
                        return <Card name={phd.name} img={phd.img} subtext={phd.subtext} href={phd.href}/>
                    })
                }
            </div>
            <h3>Graduated PHD Scholar</h3>
            <div className='cards-wrapper'>
                {
                    phd3.map((phd, idx) => {
                        return <Card name={phd.name} img={phd.img} subtext={phd.subtext} />
                    })
                }
            </div>
        </Layout>
    )
}

export default Phd
