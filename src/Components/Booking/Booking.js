import Banner from "../Common/Banner"
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom';
import "./Booking.css"

function Booking() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const propertyDetails = location.state;
    const cleaning_charge = 10;

    const getDate = (idx) => {
        let date_ = propertyDetails.daterange[idx].toString()
        return new Date(date_).toLocaleDateString("en-US")
    }

    const getDateFormat = () => {
        let date_ = propertyDetails.daterange.toString()
        return new Date(date_).toLocaleDateString("en-US")
    }

    const getNight = () => {
        let date_1 = new Date(propertyDetails.daterange[0].toString())
        let date_2 = new Date(propertyDetails.daterange[1].toString())
        let diff = date_2.getTime() - date_1.getTime();
        let daydiff = diff / (1000 * 60 * 60 * 24);
        return daydiff;
    }

    const confirmBooking = (data) => {
        console.log(data)
    }

    return (
        <>
            <Banner category={'property'} image={propertyDetails.image} />
            <section id="add-property" className="add-property">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-8 col-sm-8 col-md-8">
                            <form className="mb-0" onSubmit={handleSubmit(confirmBooking)}>
                                <div className="form-box" style={{ "position": "relative", "top": "0px" }}>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <h4 className="form--title">Billing Details</h4>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label for="property-title">Billing Name*</label>
                                                <input type="text" className="form-control" name="first-name"
                                                    id="first-name" placeholder="First Name"
                                                    {...register("firstname", { required: true })} />
                                                {errors.firstname && <p>Please check the name</p>}
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label for="property-title">Email*</label>
                                                <input type="email" className="form-control"
                                                    name="email"
                                                    placeholder="Email Address"
                                                    {...register("email",
                                                        {
                                                            required: true,
                                                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                                        })} />
                                                {errors.email && <p>Please check the Email</p>}
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label for="property-title">Phone*</label>
                                                <input type="text" className="form-control" name="phone"
                                                    id="phone" placeholder="Phone"
                                                    {...register("phone", { required: true })} />
                                                {errors.phone && <p>Please check the phone</p>}
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label for="address">Adderss*</label>
                                                <input type="text" className="form-control" name="address"
                                                    id="address" placeholder="Address"
                                                    {...register("address", { required: true })} />
                                                {errors.address && <p>Please check the address</p>}
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label for="postcode">Post Code*</label>
                                                <input type="text" className="form-control" name="postcode"
                                                    id="postcode" placeholder="Post Code"
                                                    {...register("postcode", { required: true })} />
                                                {errors.postcode && <p>Please check the post code</p>}
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label for="city">City*</label>
                                                <input type="text" className="form-control" name="city"
                                                    id="city" placeholder="City"
                                                    {...register("city", { required: true })} />
                                                {errors.city && <p>Please check the city</p>}
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label for="state">State*</label>
                                                <input type="text" className="form-control" name="state"
                                                    id="state" placeholder="State"
                                                    {...register("state", { required: true })} />
                                                {errors.state && <p>Please check the state</p>}
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label for="country">Country*</label>
                                                <input type="text" className="form-control" name="country"
                                                    id="country" placeholder="Country"
                                                    {...register("country", { required: true })} />
                                                {errors.country && <p>Please check the country</p>}
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="form-group">
                                                <label for="request">Special Request*</label>
                                                <textarea className="form-control" id="request" name="request" rows="4" cols="50"
                                                    {...register("request", { required: true })}></textarea>
                                                {errors.request && <p>Please check the request</p>}
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <h4 className="form--title"
                                                style={{ "marginBottom" : "20px"}}
                                            >Coupon</h4>
                                            <p>(If you have a valid offer code please enter below and click on "Redeem")</p>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="coupon"
                                                    id="coupon" placeholder="Coupon"
                                                    {...register("coupon")} />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="button" value="Redeem" name="submit" className="btn btn--primary" />
                                            </div>
                                        </div>
                                    </div>
                               
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <h4 className="form--title"
                                                style={{ "marginBottom" : "20px"}}
                                            >Payment Method</h4>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12">
                                            <div className="input-checkbox">
                                                <label className="label-checkbox">
                                                    <input type="radio" />&nbsp;&nbsp;
                                                    <span>Credit / Debit Card / Net Banking (Powered By CCAvenue)</span>
                                                    <span className="check-indicator"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" className="btn btn--primary btn--block" value="Confirm & Pay" />
                            </form>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-4">

                            <div className="widget widget-property-agent">
                                <div className="widget--title">
                                    <h5>Property Details</h5>
                                </div>
                                <div className="widget--content">
                                    {/*<a href="#">
                                        <div className="agent--img">
                                            <img src={propertyDetails.image} alt="agent" className="img-responsive" />
                                        </div>
                                    </a>*/}
                                    <div className="agent--info">
                                        <h5 className="agent--title">{propertyDetails.name}</h5>
                                    </div>
                                    <div className="property--details">
                                        <p><b>Location:</b> Address</p>
                                    </div>
                                    <div className="property--details">
                                        <p>This is dummy discription</p>
                                    </div>

                                </div>
                            </div>

                            <div className="widget widget-request booking-summary">
                                <div className="widget--title">
                                    <h5>Booking Summary</h5>
                                </div>
                                <div className="widget--content row">
                                    <div className="col-xs-12">
                                        <h6>Date
                                            {propertyDetails.category === 'stay' && <span>{getDate(0)} - {getDate(1)}</span>}
                                            {propertyDetails.category === 'experience' && <span>{getDateFormat()}</span>}
                                        </h6>
                                    </div>
                                    {propertyDetails.category === 'stay' &&
                                        <>
                                            <div className="col-xs-12">
                                                <h6>Check In Time <span>{propertyDetails.check_in_time}</span></h6>
                                            </div>
                                            <div className="col-xs-12">
                                                <h6>Check Out Time <span>{propertyDetails.check_out_time}</span></h6>
                                            </div>
                                        </>
                                    }
                                    <div className="col-xs-12">
                                        <h6 className="guest-detail">
                                            Guests <span>{propertyDetails.no_guest} Adult(s)
                                                {propertyDetails.category === 'stay' &&
                                                    <>
                                                        <br/>{propertyDetails.no_guest_child} Child < br/>
                                                        {propertyDetails.no_guest_infant} Infant(s)
                                                        
                                                    </>}</span></h6>
                                    </div>
                                    <div className="col-xs-12">
                                        {propertyDetails.category === 'stay' && <h6 className="amount-detail">
                                            Rs. {propertyDetails.total} X {getNight()} night(s)
                                            <span>Rs. {propertyDetails.total * getNight()}</span>
                                        </h6>}
                                        {propertyDetails.category === 'experience' && <h6 className="amount-detail">
                                            Rs. {propertyDetails.total} X {propertyDetails.no_guest} Guests
                                            <span>Rs. {propertyDetails.total * propertyDetails.no_guest}</span>
                                        </h6>}
                                    </div>
                                    <div className="col-xs-12">
                                        <h6 className="cleaning-detail">Cleaning Charges <span>Rs. {cleaning_charge}</span></h6>
                                    </div>
                                    <div className="col-xs-12">
                                        <h6 className="grand-total">Grand Total (INR)</h6>
                                        {propertyDetails.category === 'stay' && <h6 className="grand-total"><span>Rs. {propertyDetails.total * getNight() + cleaning_charge} (Inclusive of GST)</span></h6>}
                                        {propertyDetails.category === 'experience' && <h6 className="grand-total"><span>Rs. {propertyDetails.total * propertyDetails.no_guest + cleaning_charge} (Inclusive of GST)</span></h6>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* <form name="frmPayment" action="ccavRequestHandler.php" method="POST">
                <input type="hidden" name="merchant_id" value="<?php echo CCA_MERCHANT_ID; ?>" />
                <input type="hidden" name="language" value="EN" />
                <input type="hidden" name="amount" value="1" />
                <input type="hidden" name="currency" value="INR" />
                <input type="hidden" name="redirect_url" value="http://youdomain.com/payment-response.php" />
                <input type="hidden" name="cancel_url" value="http://youdomain.com/payment-cancel.php" />

                <input type="text" name="billing_name" value="" class="form-field" Placeholder="Billing Name" />
                <input type="text" name="billing_address" value="" class="form-field" Placeholder="Billing Address" />

                <input type="text" name="billing_state" value="" class="form-field" Placeholder="State" />
                <input type="text" name="billing_zip" value="" class="form-field" Placeholder="Zipcode" />

                <input type="text" name="billing_country" value="" class="form-field" Placeholder="Country" />
                <input type="text" name="billing_tel" value="" class="form-field" Placeholder="Phone" />

                <input type="text" name="billing_email" value="" class="form-field" Placeholder="Email" />

                <button class="btn-payment" type="submit">Pay Now</button>
            </form> */}

        </>
    )
}

export default Booking