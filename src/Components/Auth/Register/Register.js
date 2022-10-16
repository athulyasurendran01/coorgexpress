import { useState, useRef } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { authRegister } from '../../../reducers/authentication';
import AlertPopup from "../../Common/AlertPopup";
import { useForm } from "react-hook-form";

import "./Register.css"

function Register() {

    const dispatch = useDispatch();
    const validationMessageRef = useRef();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [isPopup, setIsPopup] = useState(false)

    const doRegister = (data) => {
        if (data.password !== data.cpassword) {
            setIsPopup(true)
            validationMessageRef.current?.scrollIntoView(true);
            setTimeout(() => {
                setIsPopup(false)
            }, 2000);
        } else {
            dispatch(authRegister(data))
        }
    }
    return (
        <>
            <div className="tab-content registration-modal" ref={validationMessageRef}>
                <div className="tab-pane active" id="signup">
                    <form className="mb-0" onSubmit={handleSubmit(doRegister)}>
                        <a href="#" className="btn btn--facebook btn--block"><i className="fa fa-facebook-square"></i>Register with Facebook</a>
                        <div className="or-text">
                            <span>or</span>
                        </div>
                        {isPopup && <AlertPopup message={'Error! Confirm Password Not Match'} type={'danger'} />}
                        <div className="form-group">
                            <input type="text" className="form-control"
                                name="user-name" id="username" placeholder="Username"
                                {...register("username", { required: true })} />
                            {errors.username && <p>Please check the Username</p>}
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="first-name"
                                id="first-name" placeholder="First Name"
                                {...register("firstname", { required: true })} />
                            {errors.firstname && <p>Please check the First Name</p>}
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="last-name"
                                id="last-name" placeholder="Last Name"
                                {...register("lastname", { required: true })} />
                            {errors.lastname && <p>Please check the Last Name</p>}
                        </div>

                        <div className="form-group">
                            <input type="date" className="form-control"
                                name="dob" id="dob" placeholder="DOB"
                                {...register("dob", { required: true })} />
                            {errors.dob && <p>Please check the DOB</p>}
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control"
                                name="register-email" id="register-email" placeholder="Email Address"
                                {...register("email",
                                    {
                                        required: true,
                                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                    })} />
                            {errors.email && <p>Please check the Email</p>}
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="register-password"
                                id="register-password" placeholder="Password"
                                {...register("password", { required: true })} />
                            {errors.password && <p>Please check the Password</p>}
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="repeat-password"
                                id="repeat-password" placeholder="Repeat Password"
                                {...register("cpassword", { required: true })} />
                            {errors.cpassword && <p>Please check the Confirm Password</p>}
                        </div>
                        <div className="input-checkbox">
                            <label className="label-checkbox">
                                <span>I agree with all <a href="#">Terms & Conditions</a></span>
                                <input type="checkbox" />
                                <span className="check-indicator"></span>
                            </label>
                        </div>
                        <input type="submit" className="btn btn--primary btn--block" value="Register" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register