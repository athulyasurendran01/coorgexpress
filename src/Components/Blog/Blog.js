import Banner from "../Common/Banner"
import BlogImage from "../../assets/images/blog/blog_img.jpg"
import BlogThumbnail from "../../assets/images/blog/blog-thumbnail.jpg"
import './Blog.css'


function Blog() {
    return (
        <>
         <Banner category={'blog'} />   
        
        <section id="blog" className="blog blog-grid">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-8">
                        <div className="row mb-50">
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="blog-entry">
                                    <div className="entry--img">
                                        <a href="#">
											<img src={BlogImage} alt="entry image"/>
										</a>
                                    </div>
                                    <div className="entry--content">
                                        <div className="entry--meta">
                                            <a href="#">March 09, 2018</a><a href="#">3 Comments</a>
                                        </div>
                                        <div className="entry--title">
                                            <h4><a href="#">10 Quick Tips About Real Estate</a></h4>
                                        </div>
                                        <div className="entry--bio">
                                            In contrast with New York City’s urban atmosphere, the vast majority of the state...
                                        </div>
                                        <div className="entry--more">
                                            <a href="#">Read More<i className="fa fa-angle-double-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="blog-entry">
                                    <div className="entry--img">
                                        <a href="#">
										<img src={BlogImage} alt="entry image"/>
									</a>
                                    </div>
                                    <div className="entry--content">
                                        <div className="entry--meta">
                                            <a href="#">March 15, 2018</a><a href="#">7 Comments</a>
                                        </div>
                                        <div className="entry--title">
                                            <h4><a href="#">Marketing Ideas to Sell a Listing</a></h4>
                                        </div>
                                        <div className="entry--bio">
                                            Many Realtors, like most companies, continue to market their businesses
                                        </div>
                                        <div className="entry--more">
                                            <a href="#">Read More<i className="fa fa-angle-double-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="blog-entry">
                                    <div className="entry--img">
                                        <a href="#">
												<img src={BlogImage} alt="entry image"/>
											</a>
                                    </div>
                                    <div className="entry--content">
                                        <div className="entry--meta">
                                            <a href="#">April 05, 2018</a><a href="#">2 Comments</a>
                                        </div>
                                        <div className="entry--title">
                                            <h4><a href="#">Effective Real Estate Websites</a></h4>
                                        </div>
                                        <div className="entry--bio">
                                            In other words, if you’re not tracking your real estate website’s analytics to follow
                                        </div>
                                        <div className="entry--more">
                                            <a href="#">Read More<i className="fa fa-angle-double-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="blog-entry">
                                    <div className="entry--img">
                                        <a href="#">
											<img src={BlogImage} alt="entry image"/>
										</a>
                                    </div>
                                    <div className="entry--content">
                                        <div className="entry--meta">
                                            <a href="#">June 21, 2018</a><a href="#">1 Comments</a>
                                        </div>
                                        <div className="entry--title">
                                            <h4><a href="#">How to Make a Viral Video</a></h4>
                                        </div>
                                        <div className="entry--bio">
                                            A viral video is one that creatively promotes a property, real estate company
                                        </div>
                                        <div className="entry--more">
                                            <a href="#">Read More<i className="fa fa-angle-double-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="blog-entry">
                                    <div className="entry--img">
                                        <a href="#">
											<img src={BlogImage} alt="entry image"/>
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
                            
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="blog-entry">
                                    <div className="entry--img">
                                        <a href="#">
											<img src={BlogImage} alt="entry image"/>
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
                            

                        </div>
                         
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 clearfix text--center">
                                <ul className="pagination">
                                    <li className="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">...</a></li>
                                    <li>
                                        <a href="#" aria-label="Next">
											<span aria-hidden="true"><i className="fa fa-angle-right"></i></span>
										</a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                         
                    </div>
                    
                    <div className="col-xs-12 col-sm-12 col-md-4">
                        
                        
                        
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
                 
            </div>
           
        </section>

       
            
        </>
    )
}

export default Blog