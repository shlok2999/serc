import Head from 'next/head'
import { Header } from '../components/header'
import { Layout } from '../components/layouts'
import { announcements } from '../constants/announcements';
import { AnnouncementCard } from '../components/announcementCard';

const images = [
  'sercHome.jpg',
  'sercpos2.jpg',
  'sercpos3.jpg'
];

export default function Home() {
  return (
    <Layout>
      <div class="slides">
        <div class="container">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            {/* <!-- Indicators --> */}
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            {/* <!-- Wrapper for slides --> */}
            <div class="carousel-inner">
              {
                images.map((image, idx) => {
                  return (
                    <div class={`${idx === 0 ? 'active' : ''} item`}>
                      <img src={`/images/${image}`} alt={idx} style={{ margin: 'auto', display: 'block' }} />
                    </div>
                  )
                })
              }
            </div>
            {/* <!-- Left and right controls --> */}
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className='row margin-top-lg'>
        <div class="col-md-8 about">
          <h2>About</h2>
          <p>Software Engineering Research Center(SERC) has a eminent faculty with vast teaching and research experience in and outside India. Some of the key focus areas:</p>
          <ul>
            <li>Empirical Research and Process Improvement</li>
            <li>Formal Methods in Software Engineering</li>
            <li>Requirements Engineering and Quality Attributes</li>
            <li>Complex System Development</li>
            <li>Cloud Computing</li>
            <li>Education Technologies</li>
            <li>Usability Engineering</li>
          </ul>
          <br />
          <p>SERC has close collaboration with industry providing software services to large organizations, R&amp;D labs of various organizations and other academic institutes (India and abroad).  Organizations that SERC is working are diverse, stratified across banking and finance, government, equipment manufacture, ISVs building products for software industry, etc. </p>
        </div>
        <div class='col-md-4 row'>
          <div class='col-md-12 timeline' style={{ height: 300, overflowY: 'scroll' }}>
            <a class="twitter-timeline" href="https://twitter.com/SERC_IIITH?ref_src=twsrc%5Etfw">Tweets by SERC_IIITH</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
          <div className='col-md-12 announcements' style={{ marginTop: '3rem' }}>
            <h4>Announcements</h4>
            <ul style={{ overflowY: 'scroll', height: 300, padding: 0 }}>
              {
                announcements.map(a => {
                  return <AnnouncementCard a={a} />
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </Layout >
  )
}
