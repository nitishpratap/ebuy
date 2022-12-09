import * as React from 'react';
import style from './style.css'
import {SignUp} from "../SignUP/SignUp";
import {SignIn} from "../SignIn/SignIn";
import {Route} from "react-router-dom";
import {Footer} from "../Footer/Footer";
import{Error} from "../404/Error"
import{Coming} from "../comingSoon/Coming"

export function Home() {
    return (
        <>
            <h1>Hello home</h1>
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

            </div>
            <Footer></Footer>
        </>
    )
}
