import * as React from 'react';
import logo from './logo.png'
import picture from './picture.png'
import style from './first.css'

export function SignUp() {
    return (
        <>
            <div className={"parent"}>
                <div className={"color"}>
                    <img  className="logo" src={logo}/>
                    <h3 className="title" >We Offer the Best Products </h3>
                    <img className="picture" src={picture}/>

                </div>
                <div className={"non-color"}>
                    <div className="textAndButton">
                            <div>
                                <p className="Already-a-member">Already a member?</p>
                            </div>
                            <div className={"button"}>
                                 <button className={"signIn"}>Sign In</button>
                            </div>
                    </div>
                    <div className={"form-heading"}>
                        <h3 className={"heading"}>I'm New Here</h3>
                        <p className={"greyColoredText"}>Enter your detail below</p>
                    </div>
                    <div>
                        <div className={"text-fields"}>
                            <input className={"userName input"} type="text" placeholder={"mahimasharma"}/>
                            <input className={"Email input"} type ="Email" placeholder={"mahimasharmaynr@gmail.com"}/>
                            <input className={"password input"}  type ="password" placeholder={"*********"}/>
                        </div>

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
