import Banner from "../Common/Banner"
import PropertyImage from "../../assets/images/property/property_image.jpg"
import { useLocation } from 'react-router-dom';
import "./Booking.css"

function Booking() {
    const location = useLocation();
    const propertyDetails = location.state;
    const getDate = (idx) => {
        let date_ = propertyDetails.daterange[idx].toString()
        return new Date(date_).toLocaleDateString("en-US")
    }

    const confirmBooking = () => {
        fetch(`https://www.coorgexpress.com/booking.json`, {
            method: 'POST',
            body: JSON.stringify({
                order_id: 1665909419,
                no_of_days: 2
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Banner category={'blog'} />
            <section id="add-property" className="add-property">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-8 col-sm-8 col-md-8">
                            <form className="mb-0 booking-div">
                                <div className="form-box" style={{ "position": "relative", "top": "0px" }}>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <h4 className="form--title">Billing Details</h4>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label for="property-title">Billing Name*</label>
                                                <input type="text" className="form-control" name="property-title" id="property-title" required />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label for="property-title">Email*</label>
                                                <input type="email" className="form-control" name="property-title" id="property-title" required />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label for="property-title">Phone*</label>
                                                <input type="text" className="form-control" name="property-title" id="property-title" required />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label for="property-title">Adderss*</label>
                                                <input type="text" className="form-control" name="property-title" id="property-title" required />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label for="property-title">Post Code*</label>
                                                <input type="text" className="form-control" name="property-title" id="property-title" required />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label for="property-title">City*</label>
                                                <input type="email" className="form-control" name="property-title" id="property-title" required />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label for="property-title">State*</label>
                                                <input type="text" className="form-control" name="property-title" id="property-title" required />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label for="property-title">Country*</label>
                                                <input type="email" className="form-control" name="property-title" id="property-title" required />
                                            </div>
                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="form-group">
                                                <label for="property-description">Special Request*</label>
                                                <textarea className="form-control" name="property-description" id="property-description" rows="2"></textarea>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="form-box" style={{ "position": "relative", "top": "0px" }}>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <h4 className="form--title">Coupon</h4>
                                            <p>(If you have a valid offer code please enter below and click on "Redeem")</p>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="property-title" id="property-title" required />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="button" value="Redeem" name="submit" className="btn btn--primary" />
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="form-box" style={{ "position": "relative", "top": "0px" }}>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <h4 className="form--title">Payment Method</h4>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="input-checkbox">
                                                <label className="label-checkbox">
                                                    <span>Credit / Debit Card / Net Banking (Powered By CCAvenue)</span>
                                                    <input type="radio" />
                                                    <span className="check-indicator"></span>
                                                </label>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                                <input type="button" value="Confirm and Pay" name="submit" className="btn btn--primary" onClick={() => confirmBooking()} />
                            </form>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-4">

                            <div className="widget widget-property-agent">
                                <div className="widget--title">
                                    <h5>Property Details</h5>
                                </div>
                                <div className="widget--content">
                                    <a href="#">
                                        <div className="agent--img">
                                            <img src={propertyDetails.image} alt="agent" className="img-responsive" />
                                        </div>
                                        <div className="agent--info">
                                            <h5 className="agent--title">{propertyDetails.name}</h5>
                                        </div>
                                    </a>

                                </div>
                            </div>

                            <div className="widget widget-request booking-summary">
                                <div className="widget--title">
                                    <h5>Booking Summary</h5>
                                </div>
                                <div className="widget--content row">
                                    <div className="col-xs-12">
                                        <h6>Date <span>{getDate(0)} - {getDate(1)}</span></h6>
                                    </div>
                                    <div className="col-xs-12">
                                        <h6>Check In Time <span>{propertyDetails.check_in_time}</span></h6>
                                    </div>
                                    <div className="col-xs-12">
                                        <h6>Check Out Time <span>{propertyDetails.check_out_time} AM</span></h6>
                                    </div>
                                    <div className="col-xs-12">
                                        <h6 className="guest-detail">Guests <span>{propertyDetails.no_guest} Adult(s) & 0 Child & 1 Infant(s)</span></h6>
                                    </div>
                                    <div className="col-xs-12">
                                        <h6 className="amount-detail">Rs. 4,250.00 X 1 night(s) <span>Rs. 4,250.00</span></h6>
                                    </div>
                                    <div className="col-xs-12">
                                        <h6 className="cleaning-detail">Cleaning Charges <span>Rs. 0</span></h6>
                                    </div>
                                    <div className="col-xs-12">
                                        <h6 className="grand-total">Grand Total(INR)</h6>
                                        <h6 className="grand-total"><span>Rs. {propertyDetails.total}(Inclusive of GST)</span></h6>
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

export default Booking