
import headingImg from '../../assets/images/home/stay_head.png'
import about1 from '../../assets/images/home/resort.png'
import Slider from '../Slider/Slider'


function Layout() {
    return (
        <>
            <main id="main">
                <div id="about" className="about-area area-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <img src={headingImg} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="well-left">
                                    <div className="single-well">
                                        <a href="#">
                                            <img src={about1} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="well-left">
                                    <div className="single-well">
                                        <a href="#">
                                            <img src={about1} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> <br />

                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="well-left">
                                    <div className="single-well">
                                        <a href="#">
                                            <img src={about1} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="well-left">
                                    <div className="single-well">
                                        <a href="#">
                                            <img src={about1} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}
export default Layout