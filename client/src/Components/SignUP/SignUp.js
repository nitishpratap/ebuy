import * as React from 'react';
import style from './style.css'
import logo from './logo.png'
import picture from './picture.png'

export function SignUp() {
    return (
        <>
            <div className={"parent"}>
                <div className={"color"}>
                    <img  className="logo" src={logo} alt={}/>
                    <h3 className="title" >We Offer the Best Products </h3>
                    <img className="picture" src={picture} alt={}/>

                </div>
                <div className={"non-color"}>
                    <div className="textAndButton">
                            <div>
                                <p className="Already a member">Already a member?</p>
                            </div>
                            <div>
                                 <button className={"signIn"}>Sign In</button>
                            </div>
                    </div>
                    <div className={"form-heading"}>
                        <h3 className={"heading"}>I'm New Here</h3>
                        <p className={"greyColoredText"}>Enter your detail below</p>
                    </div>

                    <div className={"text-fields"}>
                        <input className={"userName"} type={"text"} placeholder={"mahimasharma"}/>
                        <input className={"Email"} type ="Email" placeholder={"mahimasharmaynr@gmail.com"}/>
                        <input className={"password"}  type ="password" placeholder={"*********"}/>
                    </div>

                    <div className={"createAccount"}>
                        <button className={"createAccountButton"}>
                            Create Account
                        </button>
                    </div>

                    
                </div>
            </div>
        </>
    )
}
