import * as React from 'react';
import style from './style.css'
import {SignUp} from "../SignUP/SignUp";
import {SignIn} from "../SignIn/SignIn";
import {Route} from "react-router-dom";
import {Footer} from "../Footer/Footer";
import {Error} from "../404/Error"
import {Coming} from "../comingSoon/Coming"
import {CiSearch} from "react-icons/ci"
import {CiHeart} from "react-icons/ci";
import {CiShoppingCart} from "react-icons/ci";
import {BsPerson} from "react-icons/bs"

import logo from "./logo.png"
import {icons} from "react-icons";

export const Navbar = () => {
    return (
        <>
            <div className={"start"}>
                <div className={"navbar"}>
                    <img className={"home-logo"} src={logo} style={{width: "150px", height: "50px"}}/>
                    <div className={"navbar-links"}>
                        <a className={"navbar-link"}><h5>Home</h5></a>
                        <a className={"navbar-link"}><h5>Shop</h5></a>
                        <a className={"navbar-link"}><h5>About</h5></a>
                        <a className={"navbar-link"}><h5>Contact</h5></a>
                    </div>
                    <NavbarIcons/>
                </div>
            </div>
        </>
    )
}

export const NavbarIcons = ()=>{
    return(
        <div className={"nav-icons"}>
            <CiSearch className={"nav-icon"}/>
            <CiHeart className={"nav-icon"}/>
            <CiShoppingCart className={"nav-icon"}/>
            <BsPerson className={"nav-icon"}/>
        </div>
        )
}

export function Home() {
    return (
        <>
            <Navbar/>
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
