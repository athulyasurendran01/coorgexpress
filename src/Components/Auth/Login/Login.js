import "./Login.css"

function Login (){
    return(
        <>
        <div className="tab-content login-modal">
            <div className="tab-pane active" id="login">
                <div className="signup-form-container text-center">
                    <form className="mb-0">
                        <a href="#" className="btn btn--facebook btn--block"><i className="fa fa-facebook-square"></i>Login with Facebook</a>
                        <a href="#" className="btn btn--google btn--block"><i className="fa fa-facebook-square"></i>Login with Google</a>
                        
                        <div className="or-text">
                        <span>or</span>
                        </div>
                        <div className="form-group">
                        <input type="email" className="form-control" name="login-email" id="login-email" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                        <input type="password" className="form-control" name="login-password" id="login-password" placeholder="Password" />
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