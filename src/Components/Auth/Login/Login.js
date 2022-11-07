import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { userData, authLogin } from '../../../reducers/authentication';
import { useForm } from "react-hook-form";

import "./Login.css"
import SocialLogin from "./SocialLogin";

function Login() {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const doLogin = (data) => {
        dispatch(authLogin(data))
    }
    // const user = useSelector(userData);
    return (
        <>
            <div className="tab-content login-modal">
                <div className="tab-pane active" id="login">
                    <div className="signup-form-container text-center">
                        <form className="mb-0" onSubmit={handleSubmit(doLogin)}>
                            {/* <a href="#" className="btn btn--facebook btn--block"><i className="fa fa-facebook-square"></i>Login with Facebook</a>
                            <a href="#" className="btn btn--google btn--block"><i className="fa fa-facebook-square"></i>Login with Google</a> */}
                            <SocialLogin />
                            <div className="or-text">
                                <span>or</span>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control"
                                    name="login-email" id="login-email"
                                    placeholder="Email Address"
                                    {...register("email",
                                        {
                                            required: true,
                                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                        })} />
                                {errors.email && <p>Please check the Email</p>}
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control"
                                    name="login-password" id="login-password"
                                    placeholder="Password"
                                    {...register("password", {
                                        required: true,
                                        // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                                    })}
                                />
                                {errors.password && <p>Please check the password</p>}
                            </div>
                            <div className="input-checkbox">
                                <label className="label-checkbox">
                                    <span>Remember Me</span>
                                    <input type="checkbox" />
                                    <span className="check-indicator"></span>
                                </label>
                            </div>
                            <input type="submit" className="btn btn--primary btn--block" value="Sign In" />
                            <a href="#" className="forget-password">Forget your password?</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login