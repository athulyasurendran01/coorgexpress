import { SocialIcon } from 'react-social-icons';
import footer_logo from '../../assets/images/home/footer-logo.png'
import './Footer.css';

function Footer() {
    return (
        <footer id="footer" className="footer footer-1 bg-white">
            <div className="footer-widget">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4 widget--about">
                            <div className="widget--content">
                                <div className="footer--logo">
                                    <img src={footer_logo} alt="footer logo" />
                                </div>
                                <p>Coorgexpress is ethical travel portal focused on sustainable &
                                    responsible tourism in Coorg. We represents everything ingenious
                                    to the place and it's people. We specialize in curating unique &
                                    authentic experiences, organizing exclusive interactive tours.</p>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-4 col-md-3">
                            <div className="widget--title">
                                <h5>Connect Us</h5>
                            </div>
                            <div className="widget--content">
                                <p>CoorgExpress,#203, <br />Sapthagiriri Springs, BTS Layout,<br /> Arekere, Banglore - 560076, <br />Karnataka</p>
                                <ul className="list-unstyled mb-0 contact-details">
                                    <li><i className="fa fa-phone"></i> <a href="tel:+91 96323 38111">+91 96323 38111</a></li>
                                    <li><i className="fa fa-envelope"></i> <a href="mailto:info@coorgexpress.com">info@coorgexpress.com</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-4 col-md-2 widget--links col-md-offset-1">
                            <div className="widget--title">
                                <h5>Company</h5>
                            </div>
                            <div className="widget--content">
                                <ul className="list-unstyled mb-0">
                                    <li><a href="/about-coorg">About us</a></li>
                                    <li><a href="/stay">Stay</a></li>
                                    <li><a href="/experiences">Experience</a></li>
                                    <li><a href="/events">Events</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-3 col-md-2 widget--newsletter">
                            <div className="widget--title">
                                <h5>Get In Touch</h5>
                            </div>
                            <div className="widget--content">
                                <div className="social-icons">
                                    <a href="#">
                                        <SocialIcon network="twitter" bgColor="#ff5a01" style={{ height: 30, width: 30 }}/>
                                    </a>
                                    <a href="#">
                                        <SocialIcon network="facebook" bgColor="rgb(59, 89, 152)" style={{ height: 30, width: 30 }}/>
                                    </a>
                                    <a href="#">
                                        <SocialIcon network="linkedin" bgColor="rgb(0, 127, 177)" style={{ height: 30, width: 30 }}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="footer--copyright text-center">
                <div className="container">
                    <div className="row footer--bar">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <span>© 2022 <a href="#">Coorg Express</a>, All Rights Reserved.</span>
                        </div>

                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer