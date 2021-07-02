import React from 'react';
import loginImg from "./loginImg.png";

//login page
const Login = (props) => {

    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError, 
        clearErrors } = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <div className="image">
                    <img src={loginImg}/>
                </div>
                <label>Username</label>
                <input type="text" onClick = {clearErrors} autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" required value = {password} onChange={(e) => setPassword(e.target.value)} />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        //if has account, sign in
                        <>
                        <button onClick={handleLogin}>Sign In</button>
                        <p>Don't have an account? 
                            <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ) : (
                        //if doesn't have account, sign up
                        <>
                        <button onClick={handleSignup}>Sign Up</button>
                        <p>Have an account? 
                            <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login;
