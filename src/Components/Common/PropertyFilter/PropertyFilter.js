import Carousel from "react-multi-carousel";
import { serverURL, serverURL_ } from "../../../app/Config";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function PropertyFilter({ data, filterProperty, type }) {
    if (data && data.length > 0) {
        return (
            <>
                <Carousel responsive={responsive} autoPlaySpeed={4000} transitionDuration={200}
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    infinite={true}
                    swipeable={false}
                    draggable={true}
                    showDots={false}
                    ssr={false}
                    autoPlay={true}>
                    {data.map((category, idx) => {
                        let url_ = ''
                        if (type === 'stay') {
                            if (category.title === 'Dormitory' || category.title === 'Tour' || category.title === 'Glamping') {
                                url_ = serverURL + '/stay'
                            } else{
                                url_ = serverURL_ + '/uploads/property_type'
                            }
                        } else {
                            url_ = serverURL + '/experience'
                        }
                        let logo_ = `${url_}/${category.logo ? category.logo : 'homestay.png'}`
                        return (
                            <div className="filter-stay-item" key={idx} onClick={() => filterProperty(category.key)}>
                                <div className="filter-stay-icon">
                                    <img src={logo_} alt="property image" className="img-responsive" />
                                </div>
                                <h6>{category.title}</h6>
                            </div>
                        )
                    })}
                </Carousel>
            </>
        )
    } else {
        return (
            <></>
        )
    }

}

export default PropertyFilter