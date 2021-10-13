import styles from './footer.module.css';

const Footer = () => {
    return (
        <div>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            <div class={styles.footer}>
                <div class="container mt-5">
                    <div class="text-center mb-3">
                        <h3 style={{ color: 'white' }}>Contact us</h3>
                    </div>
                    <div class="row g-2">
                        <div class="col-md-6">
                            <div class="card">
                                <h5>Address</h5>
                                <p>International Institute of Information Technology <br />Prof. C R Rao Road Gachibowli, Hyderabad 500 032 <br />Telangana, INDIA <br />Phone : +91-40-6653 1000 <br /> Fax : +91-40-6653 1413</p>
                            </div>
                        </div>
                        <div class="col-md-6" style={{ alignItems: 'flex-end', textAlign: 'right', display: 'flex', flexDirection: 'column' }}>
                            <div class="card">
                                <a href="mailto:query@iiit.ac.in" target="_blank" rel="noopener"><img style={{width: '32px'}} class="footylogo" src="/images/pngwing.com_mail.png" /> </a>
                                <h5>Email</h5>
                                <p>query@iiit.ac.in</p>
                            </div>
                            <div class="card">
                                <h5>Social Media</h5>
                                <p>
                                    <a href="https://www.facebook.com/SERC.IIITH/"><img class="footylogo" src="/images/facebook_wSKMJGY.png" /></a>
                                    <a href="https://www.linkedin.com/company/serciiith/?originalSubdomain=in"><img style={{width: '29px', margin: '0px 5px'}} class="footylogo" src="/images/download.png " /></a>
                                    <a href="https://twitter.com/SERC_IIITH"><img class="footylogo" src="/images/twitter-32x32.png " /></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
