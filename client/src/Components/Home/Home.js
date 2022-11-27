import * as React from 'react';
import style from './style.css'
import {SignUp} from "../SignUP/SignUp";
import {SignIn} from "../SignIn/SignIn";
import {Route} from "react-router-dom";
import {Footer} from "../Footer/Footer";

export function Home() {
    return (
        <>
            <h1>Hello home</h1>
            <div style={{textAlign : "center"}}>
            <a href={"/login"} style={{textDecoration : "none"}}>login</a>
            <br/>
            <a href={"/signup"} style={{textDecoration : "none"}}>signup</a>
                <br/>
                <a href={"/signup"} style={{textDecoration : "none"}}>signup</a>
            </div>
            <Footer></Footer>
        </>
    )
}
