import ProperyImage from '../../assets/images/stay/property-list_img-1.png'
import './PropertyTypeStrip.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropertyFilter from './PropertyFilter/PropertyFilter'
import SearchAutoComplete from './SearchAutoComplete';
import RangeSlider from './RangeSlider';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import pet_friendly from '../../assets/images/property/icons/pet-friendly.png'

const responsive1 = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
function PropertyTypeStrip({ propertyHighlight }) {

    // const filterListing = (filterType = 'basicSearch', type = 'pagination', pageNo = 1) => {
    //     let urlExtraParams = '';
    //     let data = `filterType=${filterType}`;
    //     data = `${data}&location=&property_type=`;

    //     if (type == 'pagination') {
    //         data = `${data}&rowcount=10&pagination_setting=`;
    //         urlExtraParams = '?page=' + pageNo;
    //     }
    // }

    // useEffect(() => {
    //     filterListing()
    // }, [])

    let url = "";
    return (
        <section id="properties-grid" style={{ "overflow": "inherit" }}>
            <div className="search-properties" >
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <form className="mb-0 ">
                                <div className="form-box col-lg-10">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <PropertyFilter data={propertyHighlight ? propertyHighlight.property_type : []}/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="widget widget-property">
                            <div className="widget--title">
                                <h5>PROPERTY SEARCH</h5>
                            </div>
                            <div className="input-checkbox">
                                <label className="label-checkbox">
                                    <span>Instant Booking</span>
                                    <input type="checkbox" />
                                    <span className="check-indicator"></span>
                                </label>
                            </div>

                            <div className="widget--content">
                                <div className="form-group">
                                    <div className="select--box">
                                        <SearchAutoComplete
                                            data={propertyHighlight ? propertyHighlight.locations : []}
                                            title={'Location'}
                                            type={'multiple'} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="select--box">
                                        <SearchAutoComplete
                                            data={propertyHighlight ? propertyHighlight.property_type : []}
                                            title={'Property Type'} />
                                    </div>
                                </div>

                                <div className="widget--title">
                                    <h5>PRICE RANGE</h5>
                                </div>
                                <div className="widget--content">
                                    <RangeSlider />
                                </div>

                                <div className="widget--title">
                                    <h5>OTHER FILTERS</h5>
                                </div>
                                <div className="widget--content">
                                    {propertyHighlight && propertyHighlight.amenities &&
                                        propertyHighlight.amenities.map((item, idx) => {
                                            return (
                                                <div className="input-checkbox" key={idx}>
                                                    <label className="label-checkbox">
                                                        <span>{item.Amenity.amenity}</span>
                                                        <input type="checkbox" />
                                                        <span className="check-indicator"></span>
                                                    </label>
                                                </div>
                                            )
                                        })}
                                </div>
                            </div>
                            <input type="submit" value="Clear All" name="submit" className="btn btn--primary" style={{ "width": "135px" }} />
                            <input type="submit" value="Search" name="submit" className="btn btn--success" style={{ "width": "135px" }} />
                        </div>

                        <div className="widget widget-featured-property">
                            <div className="widget--title">
                                <h5>Featured Properties</h5>
                            </div>
                            <div className="widget--content">
                                <Carousel responsive={responsive1} autoPlaySpeed={4000} transitionDuration={200}
                                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                                    infinite={true}
                                    swipeable={false}
                                    draggable={true}
                                    showDots={true}
                                    ssr={false}
                                    autoPlay={true}>

                                    <div className="property-item">
                                        <div className="property--img">
                                            <img src={ProperyImage} alt="property image" className="img-responsive" />
                                        </div>
                                        <div className="property--content">
                                            <div className="property--info">
                                                <h5 className="property--title"><a href={url}>Property Name 1</a></h5>
                                                <p className="property--location">Address</p>
                                                <p className="property--price">Rs. 1200<span className="time">month</span></p>
                                                <div className="property-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="property-item">
                                        <div className="property--img">
                                            <img src={ProperyImage} alt="property image" className="img-responsive" />

                                        </div>
                                        <div className="property--content">
                                            <div className="property--info">
                                                <h5 className="property--title"><a href={url}>Property Name 2</a></h5>
                                                <p className="property--location">Address</p>
                                                <p className="property--price">Rs. 130,000<span className="time">month</span></p>
                                                <div className="property-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="property-item">
                                        <div className="property--img">
                                            <img src={ProperyImage} alt="property image" className="img-responsive" />
                                        </div>
                                        <div className="property--content">
                                            <div className="property--info">
                                                <h5 className="property--title"><a href={url}>Property Name 3</a></h5>
                                                <p className="property--location">Address</p>
                                                <p className="property--price">Rs. 70,000</p>
                                                <div className="property-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </Carousel>

                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-8">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="properties-filter clearfix">
                                    <div className="select--box pull-left">
                                        <label>Sort by:</label>
                                        <i className="fa fa-angle-up"></i>
                                        <i className="fa fa-angle-down"></i>
                                        {/* <select>
                                            <option selected="" value="Default">Default Sorting</option>
                                            <option value="Larger">Newest Items</option>
                                            <option value="Larger">oldest Items</option>
                                            <option value="Larger">Hot Items</option>
                                            <option value="Small">Highest Price</option>
                                            <option value="Medium">Lowest Price</option>
                                        </select> */}
                                    </div>

                                    <div className="view--type pull-right">
                                        <a id="switch-list" href="#" className=""><i className="fa fa-th-list"></i></a>
                                        <a id="switch-grid" href="#" className="active"><i className="fa fa-th-large"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="properties properties-grid row">
                                {propertyHighlight &&
                                    propertyHighlight.homestayLists &&
                                    propertyHighlight.homestayLists.map((stay, idx) => {
                                        const imageURL = `https://www.coorgexpress.com/${stay.HomestayFile[0].file_path}/${stay.HomestayFile[0].file_name}`
                                        return (
                                            <div className="col-xs-12 col-sm-6 col-md-6" key={idx}>
                                                <div className="property-item">
                                                    <div className="property--img">
                                                        <Link to={`/stay/${stay.Homestay.id}`}>
                                                            <img src={imageURL} alt="property image" className="img-responsive" />
                                                        </Link>
                                                    </div>
                                                    <div className="property--content">
                                                        <div className="property--info">
                                                            <h5 className="property--title">
                                                                <Link to={`/stay/${stay.Homestay.id}`}>{stay.Homestay.name}</Link>
                                                            </h5>
                                                            <p className="property--location">{stay.Homestay.address}</p>
                                                            <p className="property--price">Rs. {stay.Homestay.base_price}</p>
                                                            <div className="property-rating">
                                                                {Array.from({ length: parseInt(stay.Homestay.rating) }).map((_, idx) => (
                                                                    <i className="fa fa-star" key={idx}></i>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div className="property--features">
                                                            <ul className="list-unstyled mb-0">
                                                                <li><span className="feature">Beds:</span><span className="feature-num">{stay.Homestay.no_of_beds}</span></li>
                                                                <li><span className="feature">Baths:</span><span className="feature-num">{stay.Homestay.no_of_bathrooms}</span></li>
                                                                <li style={{float: "right"}}>
                                                                    <img src={pet_friendly} style={{width : "35px" }}/>   
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 text-center mt-50">
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

                </div>

            </div>
        </section>

    )
}

export default PropertyTypeStrip