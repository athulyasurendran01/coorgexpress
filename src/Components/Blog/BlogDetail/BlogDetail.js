import Banner from "../../Common/Banner.js"
import './BlogDetail.css'
import BlogImage from "../../../assets/images/blog/blog_banner.jpg"
import BlogThumbnail from "../../../assets/images/blog/blog-thumbnail.jpg"

function BlogDetail() {
    return (
        <>
            <Banner category={'blog'} />
            <section id="blog" className="blog blog-single pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-8">
                        
                        <div className="blog-entry">
                            <div className="entry--img">
                                <img src={BlogImage} alt="entry image" />
                            </div>
                            <div className="entry--content">
                                <div className="entry--meta">
                                    <a href="#">March 09, 2018</a><a href="#">2 Comments</a>
                                </div>
                                <div className="entry--title">
                                    <h4>10 Quick Tips About Real Estate</h4>
                                </div>
                                <div className="entry--bio">
                                    <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis amusie tincidunt orci est, in vehicula nisi eleifend ut estibulm sagittis varius orci vitae.</p>
                                    <blockquote className="blockquote">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusod tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim venia quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                    </blockquote>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequ magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et eleifend ut estibulm sagittis varius orci vitae dolore aliquam.</p>
                                </div>
                                <div className="entry--share">
                                    <span className="share--title">share</span>
                                    <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                                    <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                                    <a href="#" className="pinterest"><i className="fa fa-pinterest-p"></i></a>
                                </div>
                                
                            </div>
                        </div>
                         

                        <div className="entry-widget entry-prev-next clearfix">
                            <div className="entry-prev">
                                <div className="entry-prev-content">
                                    <div className="entry-desc">
                                        <p><i className="lnr lnr-arrow-left"></i>previous</p>
                                        <a href="#">Top Photo and Video Apps for Real Estate Marketing</a>
                                    </div>
                                </div>
                            </div>
                            <div className="entry-next">
                                <div className="entry-next-content">
                                    <div className="entry-desc">
                                        <p>next<i className="lnr lnr-arrow-right"></i></p>
                                        <a href="#">Creative Real Estate Marketing Ideas to Sell a Listing</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div className="entry-widget entry-comments clearfix">
                            <div className="entry-widget-title">
                                <h4>3 Comments</h4>
                            </div>
                            <div className="entry-widget-content">
                                <ul className="comments-list">
                                    <li className="comment-body">
                                        <div className="avatar">
                                            R
                                        </div>
                                        <div className="comment">
                                            <h6>Ryan Printz</h6>
                                            <div className="date">Feb 12, 2018</div>
                                            <a className="reply" href="#"><i className="fa fa-reply"></i>reply</a>
                                            <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.</p>
                                        </div>
                                        <ul className="comment-children">
                                            <li className="comment-body">
                                                <div className="avatar">
                                                    S
                                                </div>
                                                <div className="comment">
                                                    <h6>Steve Martin</h6>
                                                    <div className="date">Jan 16, 2018</div>
                                                    <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.</p>
                                                </div>
                                            </li>
                                            
                                        </ul>
                                        
                                    </li>
                                    

                                    <li className="comment-body">
                                        <div className="avatar">
                                            N
                                        </div>
                                        <div className="comment">
                                            <h6>Nicole Smith</h6>
                                            <div className="date">Nov 25, 2017</div>
                                            <a className="reply" href="#"><i className="fa fa-reply"></i>reply</a>
                                            <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed eiusmod tempor incididun ut labore dolor magna aliqua enim minim veniam, quis nostrud.</p>
                                        </div>
                                    </li>
                                    
                                </ul>
                                
                            </div>
                        </div>
                        

                        <div className="entry-widget entry-add-comment clearfix">
                            <div className="entry-widget-title">
                                <h4>Leave a Comment</h4>
                            </div>
                            <div className="entry-widget-content">
                                <form id="post-comment" className="mb-0">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label for="name">Your Name*</label>
                                                <input type="text" className="form-control" id="name" required="" />
                                            </div>
                                        </div>
                                         
                                        <div className="col-xs-12 col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label for="email">Your Email*</label>
                                                <input type="email" className="form-control" id="email" required="" />
                                            </div>
                                        </div>
                                         
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="form-group">
                                                <label for="comment">Comment</label>
                                                <textarea className="form-control" id="comment" rows="2"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <button type="submit" className="btn btn--primary">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="col-xs-12 col-sm-12 col-md-4">
                        
                        <div className="widget widget-search">
                            <div className="widget--title">
                                <h5>Blog Search</h5>
                            </div>
                            <div className="widget--content">
                                <form className="form-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Type and hit enter" />
                                        <span className="input-group-btn">
											<button className="btn" type="button"><i className="fa fa-search"></i></button>
										</span>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                        
                        <div className="widget widget-recent-posts">
                            <div className="widget--title">
                                <h5>recent posts</h5>
                            </div>
                            <div className="widget--content">
                                
                                <div className="entry">
                                    <a href="property-single-gallery.html">
									<img src={BlogThumbnail} alt="thumb" />
									</a>
                                    <div className="entry-desc">
                                        <div className="entry-title">
                                            <a href="#">Effective Real Estate Websites</a>
                                        </div>
                                        <div className="entry-meta">
                                            <a href="#">April 05, 2018</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="entry">
                                    <a href="property-single-gallery.html">
									<img src={BlogThumbnail} alt="thumb" />
									</a>
                                    <div className="entry-desc">
                                        <div className="entry-title">
                                            <a href="#">3 Key Tips For Selling a Home</a>
                                        </div>
                                        <div className="entry-meta">
                                            <a href="#">June 21, 2018</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="entry">
                                    <a href="property-single-gallery.html">
									<img src={BlogThumbnail} alt="thumb" />
									</a>
                                    <div className="entry-desc">
                                        <div className="entry-title">
                                            <a href="#">Creating a Capitve Audience</a>
                                        </div>
                                        <div className="entry-meta">
                                            <a href="#">June 28, 2018</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="entry">
                                    <a href="property-single-gallery.html">
									<img src={BlogThumbnail} alt="thumb" />
									</a>
                                    <div className="entry-desc">
                                        <div className="entry-title">
                                            <a href="#">Real Estate Email Marketing</a>
                                        </div>
                                        <div className="entry-meta">
                                            <a href="#">October 17, 2018</a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="widget widget-categories">
                            <div className="widget--title">
                                <h5>Archives</h5>
                            </div>
                            <div className="widget--content">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#">December, 2017</a>
                                    </li>
                                    <li>
                                        <a href="#">November, 2017</a>
                                    </li>
                                    <li>
                                        <a href="#">October, 2017</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                         

                    </div>
                     
                </div>
                
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <div className="entry-widget entry-related clearfix">
                            <div className="entry-widget-title">
                                <h4>Related Posts</h4>
                            </div>
                            <div className="entry-widget-content blog-grid">
                                <div className="row">
                                   
                                    <div className="col-xs-6 col-sm-6 col-md-4">
                                        <div className="blog-entry">
                                            <div className="entry--img">
                                                <a href="#">
                                            <img src={BlogThumbnail} alt="entry image" />
                                        </a>
                                            </div>
                                            <div className="entry--content">
                                                <div className="entry--meta">
                                                    <a href="#">June 26, 2018</a><a href="#">4 Comments</a>
                                                </div>
                                                <div className="entry--title">
                                                    <h4><a href="#">Creating a Captive Audience</a></h4>
                                                </div>
                                                <div className="entry--bio">
                                                    More real estate companies and agents are finally understanding the importance
                                                </div>
                                                <div className="entry--more">
                                                    <a href="#">Read More<i className="fa fa-angle-double-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                         
                                    </div>
                                     
                                    
                                    <div className="col-xs-6 col-sm-6 col-md-4">
                                        <div className="blog-entry">
                                            <div className="entry--img">
                                                <a href="#">
                                            <img src={BlogThumbnail} alt="entry image" />
                                        </a>
                                            </div>
                                            <div className="entry--content">
                                                <div className="entry--meta">
                                                    <a href="#">October 17, 2018</a><a href="#">2 Comments</a>
                                                </div>
                                                <div className="entry--title">
                                                    <h4><a href="#">Real Estate Email Marketing</a></h4>
                                                </div>
                                                <div className="entry--bio">
                                                    As a Realtor, you are constantlylooking for new and improved ways to.connect with.
                                                </div>
                                                <div className="entry--more">
                                                    <a href="#">Read More<i className="fa fa-angle-double-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                         
                                    </div>
                                    
                                    <div className="col-xs-6 col-sm-6 col-md-4">
                                        <div className="blog-entry">
                                            <div className="entry--img">
                                                <a href="#">
                                            <img src={BlogThumbnail} alt="entry image" />
                                        </a>
                                            </div>
                                            <div className="entry--content">
                                                <div className="entry--meta">
                                                    <a href="#">January 09, 2018</a><a href="#">3 Comments</a>
                                                </div>
                                                <div className="entry--title">
                                                    <h4><a href="#">5 Ways to Boost Neighborhood</a></h4>
                                                </div>
                                                <div className="entry--bio">
                                                    One of the easiest ways to get information and updates from the people who live..
                                                </div>
                                                <div className="entry--more">
                                                    <a href="#">Read More<i className="fa fa-angle-double-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                         
                                    </div>
                                     


                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </section>
        </>
    )
}
export default BlogDetail
