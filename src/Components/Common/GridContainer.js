
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

function GridContainer(props) {
    if (!props.response) {
        return <></>
    } else {
        return (
            <div id={props.data.title} className="about-area area-padding stay-property text-center pb-70  pt-60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12  text-center">
                            <div className='heading heading-2 text-center mb-70'>
                                <img src={props.data.img1} />
                                <p className='heading--desc pt-30'>Quintessential accommodations across Coorg to make your holiday cozy.</p>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <div className="well-left property-city-item">
                                <div className="single-well property--city-img">
                                    <a href="#">
                                        <img src={props.data.img2} alt="" />
                                        <div className='property--city-overlay'>
                                            <div className='property--item-content'>
                                                <h5 className='property--title'>{props.response[0].PropertyType.name}</h5>
                                                <p className='property--numbers'>Read More &nbsp;
                                                <FontAwesomeIcon icon={faAngleDoubleRight}/></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="well-left property-city-item">
                                <div className="single-well property--city-img">
                                    <a href="#">
                                        <img src={props.data.img3} alt="" />
                                        <div className='property--city-overlay'>
                                            <div className='property--item-content'>
                                                <h5 className='property--title'>{props.response[1].PropertyType.name}</h5>
                                                <p className='property--numbers'>Read More &nbsp;
                                                <FontAwesomeIcon icon={faAngleDoubleRight}/></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> <br />

                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="well-left property-city-item">
                                <div className="single-well property--city-img">
                                    <a href="#">
                                        <img src={props.data.img3} alt="" />
                                        <div className='property--city-overlay'>
                                            <div className='property--item-content'>
                                                <h5 className='property--title'>{props.response[2].PropertyType.name}</h5>
                                                <p className='property--numbers'>Read More &nbsp;
                                                <FontAwesomeIcon icon={faAngleDoubleRight}/></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <div className="well-left property-city-item">
                                <div className="single-well property--city-img">
                                    <a href="#">
                                        <img src={props.data.img2} alt="" />
                                        <div className='property--city-overlay'>
                                            <div className='property--item-content'>
                                                <h5 className='property--title'>{props.response[3].PropertyType.name}</h5>
                                                <p className='property--numbers'>Read More &nbsp;
                                                <FontAwesomeIcon icon={faAngleDoubleRight}/></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-md-offset-3">
                            <a href="#" className="btn btn--primary">View All</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GridContainer