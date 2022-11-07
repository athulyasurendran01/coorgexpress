import Banner from "../Common/Banner"
import BlogImage from "../../assets/images/blog/blog_img.jpg"
import BlogThumbnail from "../../assets/images/blog/blog-thumbnail.jpg"
import { serverURL } from "../../app/Config"
import React from 'react';

import './Blog.css'

class Blog extends React.Component {
    constructor(props) {
        super()
        this.state = {
            responseData: [],
            realatedPosts: [],
            itemsPerPage: 10,
            pageCount: 0,
            itemOffset: 0,
        }
    }

    componentDidMount() {
        fetch(`${serverURL}/blogs.php`)
            .then(response => response.json())
            .then(data => {
                this.setState({ responseData: data[0].data })
                this.setState({ realatedPosts: data[0].data })
                // this.setState({ pageCount: Math.ceil(data.total / 10) })
            })
    }

    // getPaginationData = (event) => {
    //     let { responseData, itemsPerPage } = this.state
    //     const newOffset = (event.selected * itemsPerPage) % responseData.length;
    //     this.setState({ itemOffset: newOffset })

    //     fetch(`${serverURL}/blogs.json?page=${event.selected + 1}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({ responseData: data.data })
    //         })
    // }

    render() {
        const { responseData, realatedPosts } = this.state
        if (responseData && responseData.length > 0) {
            return (
                <>
                    <Banner category={'blog'} />
                    <section id="blog" className="blog blog-grid">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-8">
                                    <div className="row mb-50">
                                        {responseData.map((blog, idx) => {
                                            return (
                                                <div className="col-xs-12 col-sm-6 col-md-6" key={idx}>
                                                    <div className="blog-entry">
                                                        <div className="entry--img">
                                                            <a href="#">
                                                                <img src={BlogImage} alt="entry image" />
                                                            </a>
                                                        </div>
                                                        <div className="entry--content">
                                                            <div className="entry--meta">
                                                                <a href="#">{blog.created}
                                                                    {/* March 09, 2018 */}
                                                                </a><a href="#">3 Comments</a>
                                                            </div>
                                                            <div className="entry--title">
                                                                <h4><a href="#">{blog.title}</a></h4>
                                                            </div>
                                                            <div className="entry--bio">
                                                                {blog.title}...
                                                                {/* <div dangerouslySetInnerHTML={{ __html: blog.BlogPost.content }} /> */}
                                                            </div>
                                                            <div className="entry--more">
                                                                <a href="#">Read More<i className="fa fa-angle-double-right"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        })
                                        }
                                    </div>

                                    {/* <div className="row">
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
                                    </div> */}

                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-4">
                                    <div className="widget widget-recent-posts">
                                        <div className="widget--title">
                                            <h5>recent posts</h5>
                                        </div>
                                        <div className="widget--content">

                                            {realatedPosts.map((item, idx) => {
                                                return (
                                                    <div className="entry" key={idx}>
                                                        <a href="property-single-gallery.html">
                                                            <img src={BlogThumbnail} alt="thumb" />
                                                        </a>
                                                        <div className="entry-desc">
                                                            <div className="entry-title">
                                                                <a href="#">{item.title}</a>
                                                            </div>
                                                            <div className="entry-meta">
                                                                <a href="#">April 05, 2018</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            }
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
        } else {
            return (
                <p></p>
            )
        }
    }
}

export default Blog