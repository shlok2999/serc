import { Card } from "../../components/card";
import { Layout } from "../../components/layouts";

const ms1 = [
    {
        name: 'M. Saraswati Soumya',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/Soumya.JPG'
    },
    {
        name: 'Shivang Shekhar',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/shiv.jpg'
    },
    {
        name: 'Raghav Mittal',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/Raghav.jpg'
    }
];

const ms2 = [
    {
        name: 'Anukul Sangwan',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/picture.jpg'
    },
    {
        name: 'Vivek Iyer',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/28460437_1988389268094763_900314689_o.jpg'
    },
    {
        name: 'Krutam Hathi',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/no_image_gXxSJBR_OoSZibO.png'
    },
    {
        name: 'Mohit Kuri',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/22467381_349747118786733_934236823640432709_o.jpg'
    }
];

const ms3 = [
    {
        name: 'Akash Agrawall',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/15151339_1433798099982341_1388853084_n.jpg'
    },
    {
        name: 'Shivam Khandelwal',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/pic129b75022f0d1d46263ffa69335b80d2.jpg'
    },
    {
        name: 'Siddharth Bhatore',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/download.png'
    },
    {
        name: 'Sai Krishna',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/12439484_10209386089515160_5072700934213511288_n.jpg'
    },
    {
        name: 'Neeraj Mathur',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/SERC_NEERAJ_PIC.jpg'
    },
    {
        name: 'Shriyansh Agrawal',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/sa.jpeg'
    },
    {
        name: 'Palash Agarwal',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/60393158_1048126982042088_2895764356526505984_n.jpg'
    }
];

const Ms = () => {
    return (
        <Layout >
            <h3>Full Time</h3>
            <div className='cards-wrapper'>
                {
                    ms1.map((ms, idx) => {
                        return <Card name={ms.name} img={ms.img} subtext={ms.subtext} />
                    })
                }
            </div>
            <h3>Dual Degree</h3>
            <div className='cards-wrapper'>
                {
                    ms2.map((ms, idx) => {
                        return <Card name={ms.name} img={ms.img} subtext={ms.subtext} />
                    })
                }
            </div>
            <h3>Graduated</h3>
            <div className='cards-wrapper'>
                {
                    ms3.map((ms, idx) => {
                        return <Card name={ms.name} img={ms.img} subtext={ms.subtext} />
                    })
                }
            </div>
        </Layout>
    )
}

export default Ms
