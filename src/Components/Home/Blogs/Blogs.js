function Blogs(props) {
    return (
        <section id={props.title} className="blog blog-grid bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <div className="heading heading-2 text-center mb-70">
                            <h2 className="heading--title">BLOGS</h2>
                            <p className="heading--desc">Duis aute irure dolor in reprehed in volupted velit esse dolore</p>
                        </div>
                    </div>
                </div>
                <div className="row mb-50">
                    {props.data && props.data.map(blog => {
                        return (
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="blog-entry">
                                    <div className="entry--img">
                                        <a href="#">
                                            <img src={props.blog} alt="entry image" />
                                        </a>
                                    </div>
                                    <div className="entry--content">
                                        <div className="entry--meta">
                                            <a href="#">{blog.modified}</a><a href="#">{blog.posted_by}</a>
                                        </div>
                                        <div className="entry--title">
                                            <h4><a href="#">{blog.title}</a></h4>
                                        </div>
                                        <div className="entry--bio">
                                            {blog.title}...
                                        </div>
                                        <div className="entry--more">
                                            <a href="#">Read More<i className="fa fa-angle-double-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Blogs