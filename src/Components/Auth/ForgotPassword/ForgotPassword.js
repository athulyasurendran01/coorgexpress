import "./ForgotPassword.css"
function ForgotPassword (){
    return(
        <>
            <div className="tab-content forgot-modal">
                <div className="tab-pane active" id="forgot-password">
                    <div className="signup-form-container text-center">
                        <form className="mb-0">
                            <div className="form-group">
                            <input type="email" className="form-control" name="login-email" id="login-email" placeholder="Email Address" />
                            </div>
                            <input type="submit" className="btn btn--primary btn--block" value="Forgot Password" />
                        </form>
                    </div>
                </div>
                </div>
        </>
    )
}

export default ForgotPassword