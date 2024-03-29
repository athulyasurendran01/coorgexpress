import './PropertyTypeStrip.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropertyFilter from './PropertyFilter/PropertyFilter'
import SearchAutoComplete from './SearchAutoComplete';
import RangeSlider from './RangeSlider';
import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import pet_friendly from '../../assets/images/property/icons/pet-friendly.png'
import Checkbox from './Checkbox';
import Form from 'react-bootstrap/Form';

import { useSelector, useDispatch } from 'react-redux';
import { itemsArray, getItemsArray } from '../../reducers/propertyList';
import { serverURL } from "../../app/Config"
import Loader from "../Loader/Loader";
import { httpFilterGetService } from '../../app/httpHandler';
import Pagination from './Pagination/Pagination';
import DatePicker from 'react-datepicker';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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

const PageSize = 10

function PropertyTypeStrip(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [isPagination, setPagination] = useState(false);

    const [total, setTotal] = useState(1);

    const [responseData, setResponseData] = useState([])
    const [propertyArray, setPropertyArray] = useState([])
    const [locations, setLocations] = useState([])
    const [cities, setCities] = useState([])
    const [properties, setProperties] = useState()
    const [trialProperties, setTrialProperties] = useState()
    const [amenitiesArray, setAmenitiesArray] = useState([])
    const [priceRange, setPriceRange] = useState([500, 10000])
    const [propSelected, selectedProp] = useState()
    const [isSearch, searchEnable] = useState(false)
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const [listView, setListView] = useState(true)
    const [isLoader, setLoader] = useState(false)
    const [isVisible, setIsvisible] = useState(false)

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;


    const dispatch = useDispatch();
    let response = useSelector(itemsArray);
    const itemsDetails = response.value;
    const loadingStatus = response.status;

    const location = useLocation();

    useMemo(() => {
        setResponseData(itemsDetails.data)
        setTotal(itemsDetails.total)
    }, [response]);

    useMemo(() => {
        if (propSelected) {
            const searchOpts = `properties=${propSelected}&page=${currentPage}`
            dispatch(getItemsArray({ type: props.category, page: { currentPage }, option: searchOpts }))
        } else if (location.state && location.state.type) {
            const searchOpts = `properties=${location.state.type}&page=${currentPage}`
            dispatch(getItemsArray({ type: props.category, page: 1, option: searchOpts }))
        } else if (isSearch) {
            let locArray = [];
            for (let i = 0; i < locations.length; i++) {
                locArray.push(locations[i].key)
            }
            const searchOpts = `price_start=${priceRange[0]}&price_end=${priceRange[1]}&aminities=${amenitiesArray.join()}
            &locations=${locArray.join()}&properties=${properties && properties.key}&trialProperties=${trialProperties && trialProperties.key}&page=${currentPage}`
            dispatch(getItemsArray({ type: props.category, page: currentPage, option: searchOpts }))

        }
        else {
            if (props.category === 'stay') {
                if (startDate && endDate && isPagination) {
                    let date_ = startDate.toString()
                    let date__ = endDate.toString()
                    const searchOpts = `selected_date=${new Date(date_).toLocaleDateString("en-CA")}&selected_date_end=${new Date(date__).toLocaleDateString("en-CA")}&page=${currentPage}`
                    dispatch(getItemsArray({ type: props.category, page: currentPage, option: searchOpts }))
                }
                // isPagination && dispatch(getItemsArray({ type: props.category, page: (currentPage) }))
            } else {
                dispatch(getItemsArray({ type: props.category, page: (currentPage) }))
            }
        }
    }, [currentPage, location]);

    useMemo(() => {
        if(localStorage.getItem('searchdate')){
            let data = JSON.parse(localStorage.getItem('searchdate'))
            setIsvisible(true)
            // setDateRange([new Date(data.start), new Date(data.end)])
            const searchOpts = `selected_date=${new Date(data.start).toLocaleDateString("en-CA")}&selected_date_end=${new Date(data.end).toLocaleDateString("en-CA")}&page=${currentPage}`
            dispatch(getItemsArray({ type: props.category, page: currentPage, option: searchOpts }))
        }
    }, [startDate, endDate])

    const setLocOptions = (value) => {
        setLocations(value)
    }

    const setCitiesOptions = (value) => {
        setCities(value)
    }

    const setPropOptions = (value) => {
        setProperties(value)
    }

    const setTrialPropOptions = (value) => {
        setTrialProperties(value)
    }

    const handlePriceChange = (value) => {
        setPriceRange(value)
    }

    const handleClick = (id, value) => {
        if (value == false) {
            let idx = amenitiesArray.indexOf(id)
            amenitiesArray.splice(idx, 1)
            setAmenitiesArray(amenitiesArray)
        } else {
            const replacementList = [...amenitiesArray, id];
            setAmenitiesArray(replacementList);
        }
    }

    const clearAll = () => {
        console.log("Clear all...", locations)
        // setAmenitiesArray([])
        // setPriceRange([500, 10000])
        // setTrialProperties([])
        // setProperties([])
        // setProperties('')

        window.location.reload()
    }

    const onSearch = () => {
        searchEnable(true)
        setCurrentPage(1)
        let locArray = [];
        for (let i = 0; i < locations.length; i++) {
            locArray.push(locations[i].key)
        }
        let cityArray = [];
        for (let i = 0; i < cities.length; i++) {
            cityArray.push(cities[i].key)
        }
        const searchOpts = `price_start=${priceRange[0]}&price_end=${priceRange[1]}&aminities=${amenitiesArray.join()}
        &locations=${locArray.join()}&cities=${cityArray.join()}&properties=${properties && properties.key}&trialProperties=${trialProperties && trialProperties.key}&page=${currentPage}`
        dispatch(getItemsArray({ type: props.category, page: 1, option: searchOpts }))
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
        setCurrentPage(1)
        selectedProp(value)
        const searchOpts = `properties=${value}&page=${currentPage}`
        dispatch(getItemsArray({ type: props.category, page: 1, option: searchOpts }))
        // let arrayForSort = [...itemsDetails.data]
        // arrayForSort = arrayForSort.filter((item) => {
        //     return props.category === 'stay' ? item.property_type_id == value : item.experience_type == value;
        // });
        // setResponseData(arrayForSort);
    }

    const getDate = (inputDate) => {
        let date_ = inputDate.toString()
        return new Date(date_).toLocaleDateString("en-US")
    }

    const onSearchProperty = () => {
        console.log("startDate", startDate.toString())
        if (startDate) {
            setIsvisible(true)
            let date_ = startDate.toString()
            let date__ = endDate.toString()
            let data = {start: date_, end: date__}
            localStorage.setItem('searchdate', JSON.stringify(data))
            const searchOpts = `selected_date=${new Date(date_).toLocaleDateString("en-CA")}&selected_date_end=${new Date(date__).toLocaleDateString("en-CA")}&page=${currentPage}`
            dispatch(getItemsArray({ type: props.category, page: currentPage, option: searchOpts }))
        }else{
            return false
        }
    }

    const isOccupied = (id) => {
        const searchObject = itemsDetails.occupiedrooms && itemsDetails.occupiedrooms.find((property) => property.homeId == id);
        if (searchObject && searchObject.rooms.length > 0) {
            if (searchObject.roomdetails && searchObject.roomdetails.length > 0) {
                return searchObject.roomdetails.length
            }
            return 0
        }
        else {
            return -1
        }
    }

    const getOccupiedRoom = (id) => {
        const searchObject = itemsDetails.occupiedrooms && itemsDetails.occupiedrooms.find((property) => property.homeId == id);
        if (searchObject && searchObject.rooms.length > 0) {
            if (searchObject.roomdetails && searchObject.roomdetails.length > 0) {
                return searchObject.roomdetails
            }
            return []
        } else {
            return []
        }
    }
    if (!loadingStatus && isVisible) {
        return (
            <>
                <Loader />
            </>
        )
    } else {

        if (props.category === 'stay' && !isVisible) {
            return (
                <div className="loaderDiv" style={{ paddingTop: "100px" }}>
                    <div
                        className="modal show"
                        style={{ display: 'block', position: 'initial' }}
                    >
                        <Modal.Dialog>
                            <Modal.Header>
                                <Modal.Title>Select your travelling date</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div style={{ display: "inline-flex", width: "100%" }}>
                                    <DatePicker selectsRange={true}
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={new Date()}
                                        onChange={(update) => {
                                            setDateRange(update);
                                        }}
                                        isClearable={true}
                                        style={{ zIndex: 1 }}
                                    />
                                    <button type="button" onClick={onSearchProperty} className="btn btn-primary"
                                        style={{ background: "#fe0100", border: "1px solid #fe0100" }}
                                    >Search</button>
                                </div>
                            </Modal.Body>
                        </Modal.Dialog>
                    </div>
                </div>
            )
        } else {
            return (
                <section id="properties-grid" style={{ "overflow": "inherit" }}>
                    {props.category !== 'events' &&
                        <div className="search-properties" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                        <form className="mb-0 ">
                                            <div className="form-box col-lg-12">
                                                <div className="row">
                                                    <div className="col-xs-12 col-sm-12 col-md-12">
                                                        <PropertyFilter
                                                            type={props.category}
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

                                    <div className="widget--content" >
                                        {/* <div className="form-group">
                                            <div className="select--box">
                                                <SearchAutoComplete
                                                    data={itemsDetails.cities ? itemsDetails.cities : []}
                                                    title={'Cities'}
                                                    type={'multiple'} setOptions={setCitiesOptions} selectedVal={cities} />
                                            </div>
                                        </div> */}
                                        {props.category !== 'events' &&
                                            <>
                                                {props.category === 'stay' && <div className="form-group">
                                                    <div className="select--box">
                                                        <SearchAutoComplete
                                                            data={itemsDetails.locations ? itemsDetails.locations : []}
                                                            title={'Location'}
                                                            type={'multiple'} setOptions={setLocOptions} selectedVal={locations} />
                                                    </div>
                                                </div>}

                                                <div className="form-group">
                                                    <div className="select--box">
                                                        <SearchAutoComplete
                                                            data={itemsDetails.propety_types ? itemsDetails.propety_types : ''}
                                                            title={'Property Type'} setOptions={setPropOptions} selectedVal={properties} />
                                                    </div>
                                                </div>
                                            </>
                                        }
                                        {props.category === 'events' &&
                                            <div className="form-group">
                                                <div className="select--box">
                                                    <SearchAutoComplete
                                                        data={itemsDetails.trial_types ? itemsDetails.trial_types : []}
                                                        title={'Trial Type'} setOptions={setTrialPropOptions} selectedVal={trialProperties} />
                                                </div>
                                            </div>
                                        }
                                        <div className="form-group">
                                            <div className="widget--title">
                                                <h5>PRICE RANGE</h5>
                                            </div>
                                            <div className="widget--content">
                                                <RangeSlider handlePriceChange={handlePriceChange} selectedVal={priceRange} />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="widget--title">
                                                <h5>OTHER FILTERS</h5>
                                            </div>
                                            <div className="widget--content">
                                                {itemsDetails.amenities &&
                                                    itemsDetails.amenities.map((item, idx) => {
                                                        return (
                                                            <div className="input-checkbox" key={idx}>
                                                                <Checkbox label={item.amenity} id={item.id}
                                                                    selectedVal={amenitiesArray}
                                                                    handleClick={handleClick} />
                                                            </div>
                                                        )
                                                    })}
                                            </div>
                                        </div>
                                    </div>
                                    <input type="button" value="Clear All"
                                        className="btn btn--primary"
                                        style={{
                                            "width": "125px",
                                            "marginRight": "10px"
                                        }} onClick={clearAll} />
                                    <input type="submit" value="Go"
                                        className="btn btn--success"
                                        style={{ "width": "125px" }} onClick={onSearch} />
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


                            <div className="col-xs-12 col-sm-12 col-md-8" style={{ marginTop: '5px' }}>
                                <div className="row property-list">
                                    <div className="row">
                                        <div className="properties-filter clearfix col-xs-12 col-sm-12 col-md-12">
                                            <div className="select--box pull-left">
                                                <label>Sort by:</label>
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
                                                {props.category === 'stay' &&
                                                    <div className="input-checkbox" style={{ marginBottom: "0px" }}>
                                                        <div style={{ display: "inline-flex", width: "100%" }}>
                                                            <DatePicker selectsRange={true}
                                                                startDate={startDate}
                                                                endDate={endDate}
                                                                minDate={new Date()}
                                                                onChange={(update) => {
                                                                    setDateRange(update);
                                                                }}
                                                                isClearable={true}
                                                                style={{ zIndex: 10 }}
                                                            />
                                                            <button onClick={onSearchProperty} className="btn btn-primary"
                                                                style={{ background: "#fe0100", border: "1px solid #fe0100" }}>
                                                                Search
                                                            </button>
                                                        </div>
                                                        {/* <label className="label-checkbox"> */}
                                                        {/* <span>Instant Booking</span> */}
                                                        {/* <input type="checkbox" /> */}

                                                        {/* <Checkbox label="Instant Booking"
                                        handleClick={handleClick(label,value)} 
                                        /> */}
                                                        {/* <span className="check-indicator"></span>
                                        </label> */}
                                                    </div>
                                                }
                                            </div>

                                        </div>
                                    </div>
                                    {total === 0 && <p>No data found</p>}

                                    {props.category === 'stay' &&
                                        <div className="properties properties-grid row">
                                            {responseData && responseData.length > 0 &&
                                                responseData.map((stay, idx) => {
                                                    const imageURL = `https://www.coorgexpress.com/${stay.file_path}/${stay.file_name}`
                                                    return (
                                                        listView ? <div className="col-xs-12 col-sm-6 col-md-6" key={idx}>
                                                            <div className="property-item">


                                                                <div className="property--img">
                                                                    <Link to={`/stay/${stay.id}`} state={{ roomdata: getOccupiedRoom(stay.id), status: isOccupied(stay.id) }}>
                                                                        <img src={imageURL} alt="property image" className="img-responsive" />
                                                                    </Link>
                                                                </div>
                                                                <div className="property--content">
                                                                    <div className="property--info">
                                                                        <h5 className="property--title">
                                                                            <Link to={`/stay/${stay.id}`} state={{ roomdata: getOccupiedRoom(stay.id), status: isOccupied(stay.id) }}>{stay.name}</Link>
                                                                        </h5>
                                                                        <p className="property--location">{stay.address}</p>
                                                                        <p className="property--price">Rs. {stay.price}</p>
                                                                        <div className="property-rating">
                                                                            {Array.from({ length: parseInt(stay.rating) }).map((_, idx) => (
                                                                                <i className="fa fa-star" key={idx}></i>
                                                                            ))}
                                                                        </div>
                                                                        <h4 className='available-text'>
                                                                            {/* Availabe */}
                                                                            {isOccupied(stay.id) == -1 && ''}
                                                                            {isOccupied(stay.id) > 0 && 'Partially available'
                                                                                // `${isOccupied(stay.id)}room/s availabe`
                                                                            }
                                                                        </h4>
                                                                        <h4 className='notavailable-text'>
                                                                            {isOccupied(stay.id) == 0 && 'Not availabe'}
                                                                        </h4>
                                                                    </div>

                                                                    <div className="property--features">
                                                                        <ul className="list-unstyled mb-0">
                                                                            <li><span className="feature">Beds:</span><span className="feature-num">{stay.no_of_beds}</span></li>
                                                                            {/*<li><span className="feature">Baths:</span><span className="feature-num">{stay.no_of_bathrooms}</span></li>*/}
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
                                                                    <Link to={`/events/${item.id}`}>
                                                                        <img src={imageURL} alt="property image" className="img-responsive" />
                                                                    </Link>
                                                                </div>
                                                                <div className="property--content">
                                                                    <div className="property--info">
                                                                        <h5 className="property--title">
                                                                            <Link to={`/events/${item.id}`}>{item.name}</Link>
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

                                    <Pagination
                                        className="pagination-bar"
                                        currentPage={currentPage}
                                        totalCount={total}
                                        pageSize={PageSize}
                                        onPageChange={page => {
                                            setPagination(true)
                                            setCurrentPage(page)
                                        }}
                                    />
                                    {/* {itemsDetails.total && itemsDetails.total > 0 &&
                                    <ReactPaginate
                                        className='text-center'
                                        breakLabel="..."
                                        nextLabel="next >"
                                        onPageChange={(e) => getPaginationData(e)}
                                        pageRangeDisplayed={5}
                                        pageCount={Math.ceil(itemsDetails.total / 10)}
                                        previousLabel="< previous"
                                        renderOnZeroPageCount={null}
                                        activeClassName={"pagination-active"}
                                    />
                                }  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}

export default PropertyTypeStrip