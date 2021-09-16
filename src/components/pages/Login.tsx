import React from 'react';
import LoginForm from "../login/LoginForm";


const Login = ({history}: any) => {
    return (
        <LoginForm history={history} />
    );
}

export default Login;

/*
<div className="main">
            <div className="container">
                <LoginForm />
            </div>
        </div>
*/