import * as React from 'react';
import style from './style.css'
import {SignUp} from "../SignUP/SignUp";
import {SignIn} from "../SignIn/SignIn";
import {Route} from "react-router-dom";
import {Footer} from "../Footer/Footer";
import {Error} from "../404/Error"
import {Coming} from "../comingSoon/Coming"
import logo from "./logo.png"

export function Home() {
    return (
        <>
            <div className={"start"}>
                <div className={"navbar"}>
                    <img className={"home-logo"} src={logo} style={{width: "150px", height: "50px"}}/>
                    <div className={"navbar-links"}>
                        <a className={"navbar-link"}>Home</a>
                        <a className={"navbar-link"}>shop</a>
                        <a className={"navbar-link"}>about</a>
                        <a className={"navbar-link"}>contact</a>
                    </div>
                </div>
            </div>
            <div style={{textAlign: "center"}}>
                <a href={"/login"} style={{textDecoration: "none"}}>login</a>
                <br/>
                <br/>
                <a href={"/signup"} style={{textDecoration: "none"}}>signup</a>
                <br/>
                <br/>
                <a href={"/error"} style={{textDecoration: "none"}}>Error</a>
                <br/>
                <br/>

                <a href={"/coming"} style={{textDecoration: "none"}}>coming</a>
                <br/>
                <br/>

                <a href={"/wishlist"} style={{textDecoration: "none"}}>Wishlist</a>



            </div>
            <Footer></Footer>
        </>
    )
}
