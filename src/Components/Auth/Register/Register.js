import "./Register.css"

function Register (){
    return(
        <>
        <div className="tab-content registration-modal">
            <div className="tab-pane active" id="signup">
                <form className="mb-0">
                    <a href="#" className="btn btn--facebook btn--block"><i className="fa fa-facebook-square"></i>Register with Facebook</a>
                    <div className="or-text">
                        <span>or</span>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="user-name" id="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="first-name" id="first-name" placeholder="First Name" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="last-name" id="last-name" placeholder="Last Name" />
                    </div>
                    
                    <div className="form-group">
                        <input type="date" className="form-control" name="dob" id="dob" placeholder="DOB" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" name="register-email" id="register-email" placeholder="Email Address" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="register-password" id="register-password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="repeat-password" id="repeat-password" placeholder="Repeat Password" />
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