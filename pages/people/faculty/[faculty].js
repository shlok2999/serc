import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { Layout } from '../../../components/layouts';
import { RowCard } from '../../../components/row-card';
import { ENDPOINTS } from '../../../constants/endpoints';
import { publicationServices } from '../../../services/publication.services';
import styles from './faculty.module.css';
import { facultyDB } from '../../../constants/facultyDB';

const Faculty = () => {
    const router = useRouter()
    const { faculty } = router.query
    // console.log(faculty, router);

    if (!faculty) return <></>

    const { name, about, img, caption, website, email, mobile, endpoint, interests } = facultyDB[faculty];

    const [state, setState] = useState({
        publications: []
    })

    const { publications } = state;

    useEffect(() => {
        const url = `${ENDPOINTS.AUTHOR_PUBLICATIONS_API}${endpoint}:&format=json`
        publicationServices.fetchAuthorPubs(url).then(res => {
            setState({
                ...state,
                publications: res.result.hits.hit,
            });
        });
    }, []);

    return (
        <Layout>
            <div className={styles.root}>
                <div className={styles['about-section']}>
                    <div className={styles.left}>
                        <h2>{name}</h2>
                        <h4>About</h4>
                        <p>{about}</p>
                    </div>
                    <div className={styles.right}>
                        <img className={styles.image} src={img} />
                        <p className={styles.caption}>{caption}</p>
                        <div className={styles['icons-wrapper']}>
                            <a href={website}>
                                <span style={{margin: '0px 5px'}} class="glyphicon glyphicon-globe"></span>
                            </a>
                            <a href={`mailto:${email}`}>
                                <span style={{margin: '0px 5px'}} class="glyphicon glyphicon-envelope"></span>
                            </a>
                            <a href={`tel:${mobile}`}>
                                <span style={{margin: '0px 5px'}} class="glyphicon glyphicon-phone"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles['interests-section']}>
                    <h4>Research Interests</h4>
                    {
                        interests.map((interest) => {
                            return <div>{interest}</div>
                        })
                    }
                </div>
                <div className={styles['publications-section']}>
                    <h4>Publications</h4>
                    {
                        publications.map((publication) => {
                            //console.log(publication.info.authors.author);
                            const item = {
                                author:Array.isArray(publication.info.authors.author)? publication.info.authors.author.map(a => a.text).join(', '):"",
                                title: publication.info.title,
                                url: publication.info.url,
                                year: publication.info.year,
                                type: publication.info.type
                            }
                            return <RowCard item={item} />
                        })
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Faculty
