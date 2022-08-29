import footer_logo from '../../assets/images/home/footer-logo.png'
import './Footer.css';

function Footer(){
    return(
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
                              	<p>CoorgExpress,#203, <br/>Sapthagiriri Springs, BTS Layout,<br/> Arekere, Banglore - 560076, <br/>Karnataka</p>
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
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Career</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Properties</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-xs-12 col-sm-3 col-md-2 widget--newsletter">
                            <div className="widget--title">
                                <h5>Get In Touch</h5>
                            </div>
                            <div className="widget--content">
                                <div className="social-icons">
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-vimeo"></i></a>
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