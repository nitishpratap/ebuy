// @flow
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import style from './style.css'
import logo from './logo.png'
import icon from './login.png'
import axios from "axios";

const loginUser = ()=>{
    let user = axios.get("/login").then((res)=>{
        console.log(res)
    })
        .catch((e)=>{
            console.log(e)
        });

}

export function SignIn() {
    return (
        <div>
            <div className="parent">
                <div className="colored" style={style}>

                    <img className="logo" src={logo}/>
                    <h3 className="title">We Offer the Best Products</h3>
                    <img className="icon" src={icon}/>
                </div>
                <div className="non-colored">
                    <div className="textAndButton">
                        <div className={"not_a_member"}>
                            <p>Not a member?</p>
                        </div>

                        <div className={"btnAndForget"}>
                            <Button className={"signUp "}><h4 className={"noHover"}>Sign Up Now</h4></Button>
                        </div>
                    </div>
                    <div className="texts">
                        <h3>Sign in to eTrade.</h3>
                        <p className={"greyColoredText"}>Enter your detail below</p>
                    </div>
                    <div className="login">
                        <div className="inputs">
                            <input className="email input" type="email" placeholder="nitishpratap18@gmail.com"/>
                            <input className="password input" type="password" placeholder="********"/>
                        </div>
                    </div>
                    <div className={"loginSection"}>
                            <div className={"btnAndForget"}>
                                <Button className={"signIn"} onClick={loginUser}><h4 className={"noHover"}>Sign In</h4></Button>
                            </div>
                            <a href="" className="link">Forget password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
