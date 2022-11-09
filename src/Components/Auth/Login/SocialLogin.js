import React, { useState } from "react";

import GoogleLogin from 'react-google-login';
import FacebookLogin from "react-facebook-login";

function SocialLogin(props) {

    const responseGoogle = response => {
        console.log(response)
    }

    const responseFacebook = response => {
        console.log(response);
    }

    return (
        <>
            <GoogleLogin
                clientId="491004959702-3bgqo54pt777f77dgl7cqd6s7e7rii81.apps.googleusercontent.com"
                buttonText={`${'LOGIN WITH GOOGLE'}`}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                className="btn--google"
                style={{
                    backgroundColor : "#d0463b"
                }}

            />
            <div className="or-text">
                <span>or</span>
            </div>
            <FacebookLogin
                btnContent="LOGIN With Facebook"
                appId="185202659227880"
                fields="name,email,picture"
                onSuccess={responseFacebook}
                onFailure={responseFacebook}
                className="btn--facebook"
            />
        </>
    );
}

export default SocialLogin;
