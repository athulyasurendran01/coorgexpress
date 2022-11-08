import './PropertyTypeStrip.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropertyFilter from './PropertyFilter/PropertyFilter'
import SearchAutoComplete from './SearchAutoComplete';
import RangeSlider from './RangeSlider';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import pet_friendly from '../../assets/images/property/icons/pet-friendly.png'
import Checkbox from './Checkbox';
import Form from 'react-bootstrap/Form';

import { useSelector, useDispatch } from 'react-redux';
import { itemsArray, getItemsArray } from '../../reducers/propertyList';
import { filterItem } from '../../reducers/filterProperty';
import { serverURL } from "../../app/Config"


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

function PropertyTypeStrip(props) {
    const [responseData, setResponseData] = useState([])
    const [propertyArray, setPropertyArray] = useState([])
    const [locations, setLocations] = useState([])
    const [properties, setProperties] = useState([])
    const [amenitiesArray, setAmenitiesArray] = useState([])
    const [priceRange, setPriceRange] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const [listView, setListView] = useState(true)

    const dispatch = useDispatch();

    const itemsDetails = useSelector(itemsArray)

    useEffect(() => {
        dispatch(getItemsArray({ type: props.category, page: 1 }))
    }, [])

    useEffect(() => {
        setResponseData(itemsDetails.data)
    }, [itemsDetails])

    const getPaginationData = (event) => {
        let responseData = itemsDetails.data
        let itemsPerPage = itemsDetails.total
        const newOffset = (event.selected * itemsPerPage) % responseData.length;
        setItemOffset(newOffset)
        dispatch(getItemsArray({ type: props.category, page: (event.selected + 1) }))
    }

    const setLocOptions = (value) => {
        setLocations(value)
    }

    const setPropOptions = (value) => {
        setProperties(value)
    }

    const handlePriceChange = (value) => {
        setPriceRange(value)
    }

    const handleClick = (id, value) => {
        setAmenitiesArray([id, ...amenitiesArray])
    }

    const onSearch = () => {
        let locArray = [];
        for (let i = 0; i < locations.length; i++) {
            locArray.push(locations[i].key)
        }
        const searchOpts = `price_start=${priceRange[0]}&price_end=${priceRange[1]}&aminities=${amenitiesArray.join()}&locations=${locArray.join()}&properties=${properties.key}`

        dispatch(filterItem({ type: props.category, page: 1, option: searchOpts }))
    }

    const onListSort = (e) => {
        let arrayForSort = [...itemsDetails.data]
        if (parseInt(e.target.value) === 4) {
            arrayForSort.sort(function (a, b) {
                return b.price - a.price;
            });
        } else if (parseInt(e.target.value) === 5) {
            arrayForSort.sort(function (a, b) {
                return a.price - b.price;
            });
        }
        setResponseData(arrayForSort);
    }

    const filterProperty = (value) => {
        let arrayForSort = [...itemsDetails.data]
        arrayForSort = arrayForSort.filter((item) => {
            console.log(item.property_type_id == value)
            return item.property_type_id == value;
        });
        setResponseData(arrayForSort);
    }

    return (
        <section id="properties-grid" style={{ "overflow": "inherit" }}>
            {props.category === 'stay' &&
                <div className="search-properties" >
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <form className="mb-0 ">
                                    <div className="form-box col-lg-10">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <PropertyFilter
                                                    data={itemsDetails.propety_types}
                                                    filterProperty={filterProperty} />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="widget widget-property">
                            <div className="widget--title">
                                <h5>PROPERTY SEARCH</h5>
                            </div>
                            <div className="input-checkbox">
                                <label className="label-checkbox">
                                    {/* <span>Instant Booking</span> */}
                                    {/* <input type="checkbox" /> */}

                                    <Checkbox label="Instant Booking"
                                    // handleClick={handleClick(label,value)} 
                                    />
                                    <span className="check-indicator"></span>
                                </label>
                            </div>

                            <div className="widget--content">
                                <div className="form-group">
                                    <div className="select--box">
                                        <SearchAutoComplete
                                            data={itemsDetails.locations ? itemsDetails.locations : []}
                                            title={'Location'}
                                            type={'multiple'} setOptions={setLocOptions} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="select--box">
                                        <SearchAutoComplete
                                            data={itemsDetails.propety_types ? itemsDetails.propety_types : []}
                                            title={'Property Type'} setOptions={setPropOptions} />
                                    </div>
                                </div>

                                <div className="widget--title">
                                    <h5>PRICE RANGE</h5>
                                </div>
                                <div className="widget--content">
                                    <RangeSlider handlePriceChange={handlePriceChange} />
                                </div>

                                <div className="widget--title">
                                    <h5>OTHER FILTERS</h5>
                                </div>
                                <div className="widget--content">
                                    {itemsDetails.amenities &&
                                        itemsDetails.amenities.map((item, idx) => {
                                            return (
                                                <div className="input-checkbox" key={idx}>
                                                    <Checkbox label={item.amenity} id={item.id}
                                                        handleClick={handleClick} />
                                                </div>
                                            )
                                        })}
                                </div>
                            </div>
                            <input type="submit" value="Clear All"
                                className="btn btn--primary"
                                style={{ "width": "135px" }} />&nbsp;
                            <input type="submit" value="Search"
                                className="btn btn--success"
                                style={{ "width": "135px" }} onClick={onSearch} />
                        </div>
                        {/* Featured Properties
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
                        </div> */}
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-8" style={{ marginTop: '63px' }}>
                        <div className="row property-list">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="properties-filter clearfix">
                                    <div className="select--box pull-left">
                                        <label>Sort by:</label>
                                        <i className="fa fa-angle-up"></i>
                                        <i className="fa fa-angle-down"></i>
                                        <Form.Select onChange={(e) => onListSort(e)}>
                                            {/* <option value="">Default Sorting</option> */}
                                            {/* <option value="1">Newest Items</option>
                                            <option value="2">Oldest Items</option>
                                            <option value="3">Hot Items</option> */}
                                            <option value="4">Highest Price</option>
                                            <option value="5">Lowest Price</option>
                                        </Form.Select>

                                    </div>

                                    <div className="view--type pull-right">
                                        <a id="switch-list" className="active" onClick={() => setListView(true)}><i className="fa fa-th-list"></i></a>
                                        <a id="switch-grid" className="" onClick={() => setListView(false)}><i className="fa fa-th-large"></i></a>
                                    </div>
                                </div>
                            </div>

                            {props.category === 'stay' &&
                                <div className="properties properties-grid row">
                                    {responseData && responseData.length > 0 &&
                                        responseData.map((stay, idx) => {
                                            const imageURL = `https://www.coorgexpress.com/${stay.file_path}/${stay.file_name}`
                                            return (
                                                listView ? <div className="col-xs-12 col-sm-6 col-md-6" key={idx}>
                                                    <div className="property-item">
                                                        <div className="property--img">
                                                            <Link to={`/stay/${stay.id}`}>
                                                                <img src={imageURL} alt="property image" className="img-responsive" />
                                                            </Link>
                                                        </div>
                                                        <div className="property--content">
                                                            <div className="property--info">
                                                                <h5 className="property--title">
                                                                    <Link to={`/stay/${stay.id}`}>{stay.name}</Link>
                                                                </h5>
                                                                <p className="property--location">{stay.address}</p>
                                                                <p className="property--price">Rs. {stay.price}</p>
                                                                <div className="property-rating">
                                                                    {Array.from({ length: parseInt(stay.rating) }).map((_, idx) => (
                                                                        <i className="fa fa-star" key={idx}></i>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            <div className="property--features">
                                                                <ul className="list-unstyled mb-0">
                                                                    <li><span className="feature">Beds:</span><span className="feature-num">{stay.no_of_beds}</span></li>
                                                                    <li><span className="feature">Baths:</span><span className="feature-num">{stay.no_of_bathrooms}</span></li>
                                                                    <li style={{ float: "right" }}>
                                                                        <img src={pet_friendly} style={{ width: "35px" }} />
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div> : <>No data</>
                                            )
                                        })}
                                </div>}
                            {props.category === 'experience' &&
                                <div className="properties properties-grid row">
                                    {responseData && responseData.length > 0 &&
                                        responseData.map((item, idx) => {
                                            const imageURL = `https://www.coorgexpress.com/${item.file_path}/${item.file_name}`
                                            return (
                                                listView ? <div className="col-xs-12 col-sm-6 col-md-6" key={idx}>
                                                    <div className="property-item">
                                                        <div className="property--img">
                                                            <Link to={`/experiences/${item.id}`}>
                                                                <img src={imageURL} alt="property image" className="img-responsive" />
                                                            </Link>
                                                        </div>
                                                        <div className="property--content">
                                                            <div className="property--info">
                                                                <h5 className="property--title">
                                                                    <Link to={`/experiences/${item.id}`}>{item.name}</Link>
                                                                </h5>
                                                                <p className="property--location">{item.address}</p>
                                                                <p className="property--location">{item.type}</p>
                                                                <p className="property--price">Rs. {item.price}</p>
                                                                <div className="property-rating">
                                                                    {Array.from({ length: parseInt(item.rating) }).map((_, idx) => (
                                                                        <i className="fa fa-star" key={idx}></i>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> : <>No data</>
                                            )
                                        })}
                                </div>
                            }
                            {props.category === 'events' &&
                                <div className="properties properties-grid row">
                                    {responseData && responseData.length > 0 &&
                                        responseData.map((item, idx) => {
                                            const imageURL = `https://www.coorgexpress.com/${item.file_path}/${item.file_name}`
                                            return (
                                                listView ? <div className="col-xs-12 col-sm-6 col-md-6" key={idx}>
                                                    <div className="property-item">
                                                        <div className="property--img">
                                                            <Link to={`/experiences/${item.id}`}>
                                                                <img src={imageURL} alt="property image" className="img-responsive" />
                                                            </Link>
                                                        </div>
                                                        <div className="property--content">
                                                            <div className="property--info">
                                                                <h5 className="property--title">
                                                                    <Link to={`/experiences/${item.id}`}>{item.name}</Link>
                                                                </h5>
                                                                <p className="property--location">{item.address}</p>
                                                                <p className="property--location">{item.type}</p>
                                                                <p className="property--price">Rs. {item.event_price}</p>
                                                                <div className="property-rating">
                                                                    {Array.from({ length: parseInt(item.rating) }).map((_, idx) => (
                                                                        <i className="fa fa-star" key={idx}></i>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> : <>No data</>
                                            )
                                        })}
                                </div>
                            }
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="next >"
                                onPageChange={(e) => getPaginationData(e)}
                                pageRangeDisplayed={5}
                                pageCount={Math.ceil(itemsDetails.total / 10)}
                                previousLabel="< previous"
                                renderOnZeroPageCount={null}
                                activeClassName={"pagination-active"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PropertyTypeStrip