import { Card } from "../../components/card";
import { Layout } from "../../components/layouts";

const intern1 = [
    {
        name: 'Abhay Mehtre',
        subtext: 'Project Assistant',
        img: 'https://serc.iiit.ac.in/static/images/people/Abhay_I8qjezK.JPG'
    },
    {
        name: 'Dhiraj Shanmukha Mitra V',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/Dheeraj_HPsY4tH.jpeg'
    },
    {
        name: 'Dontineni Ganesh Sai',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/Ganesh_U3Rb17c.jpeg'
    },
    {
        name: 'Sai Raju Ram Chander Chikkala',
        subtext: '',
        img: 'https://serc.iiit.ac.in/static/images/people/Ramchander_yy4CDog.jpeg'
    }
];


const Intern = () => {
    return (
        <Layout >
            <h3>Full Time</h3>
            <div className='cards-wrapper'>
                {
                    intern1.map((intern, idx) => {
                        return <Card name={intern.name} img={intern.img} subtext={intern.subtext} />
                    })
                }
            </div>
        </Layout>
    )
}

export default Intern
