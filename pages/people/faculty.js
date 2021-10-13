import Link from "next/link";
import { Card } from "../../components/card";
import { Layout } from "../../components/layouts";

const faculties1 = [
    {
        name: 'Raghu Reddy',
        subtext: 'Associate Professor & Head',
        img: 'https://serc.iiit.ac.in/static/images/people/6.jpg',
        href: '/people/faculty/raghu-reddy'
    },
    {
        name: 'Venkatesh Choppella',
        subtext: 'Associate Professor',
        img: 'https://serc.iiit.ac.in/static/images/people/Venkatesh_Choppella.jpg',
        href: '/people/faculty/VenkateshChopella'
    },
    {
        name: 'Vasudeva Varma',
        subtext: 'Professor & Dean (Research)',
        img: 'https://serc.iiit.ac.in/static/images/people/DSC_0320.jpg',
        href: '/people/faculty/VasudevaVarma'
    },
    {
        name: 'Ramesh Loganathan',
        subtext: 'PROFESSOR CO-INNOVATION',
        img: 'https://serc.iiit.ac.in/static/images/people/Ramesh.jpg',
        href: '/people/faculty/raghu-reddy'
    }
];

const faculties2 = [
    {
        name: 'Kesav V. Nori',
        subtext: 'Distinguished Professor',
        img: 'https://serc.iiit.ac.in/static/images/people/nori.jpg',
        href: '/people/faculty/KesavNori'
    },
    {
        name: 'Viswanath Kasturi',
        subtext: 'Research Professor of Eminence',
        img: 'https://serc.iiit.ac.in/static/images/people/Viswanath_Kasturi_bGLSrXt.JPG'
    }
];

const Faculty = () => {
    return (
        <Layout >
            <h3>Full Time</h3>
            <div className='cards-wrapper'>
                {
                    faculties1.map((faculty, idx) => {
                        return <Card name={faculty.name} img={faculty.img} subtext={faculty.subtext} href={faculty.href} />
                    })
                }
            </div>
            <h3>Distinguished/Adjunct/Visiting</h3>
            <div className='cards-wrapper'>
                {
                    faculties2.map((faculty, idx) => {
                        return <Card name={faculty.name} img={faculty.img} subtext={faculty.subtext} href={faculty.href} />
                    })
                }
            </div>
        </Layout>
    )
}

export default Faculty
