import * as React from 'react';
import style from './style.css'
import {SignUp} from "../SignUP/SignUp";
import {SignIn} from "../SignIn/SignIn";
import {Route} from "react-router-dom";
import {Footer} from "../Footer/Footer";
import {Error} from "../404/Error"
import {Coming} from "../comingSoon/Coming"
import {CiSearch, CiHeart, CiShoppingCart} from "react-icons/ci"
import {BsPerson} from "react-icons/bs"
import logo from "./logo.png"
import {AiFillFire} from "react-icons/ai"
import {starArray} from "../Utils/constant"


export const Navbar = () => {
    return (
        <>
            <div className={"start"}>

                <div className={"navbar"}>
                    <img className={"home-logo"} src={logo} style={{width: "150px", height: "50px"}}/>
                    <div className={"navbar-links"}>
                        <a className={"navbar-link"} href={"/"}><h5>Home</h5></a>
                        <a className={"navbar-link"} href={"/signup"}><h5>Signup</h5></a>
                        <a className={"navbar-link"} href={"/coming"}><h5>Coming</h5></a>
                        <a className={"navbar-link"}href= {"/wishlist"}><h5>Wishlist</h5></a>
                    </div>
                    <NavbarIcons/>
                </div>
                <BackgroundText productName="Mahansi Devi sisangiya"/>
            </div>
        </>
    )
}

const BackgroundText = (props) => {
    return (
        <div className={"background-text"}>
            <div className={"deals"}>
            <p style={{color : "red"}}><AiFillFire/> Hot deals In This Week</p>
            <h1>{props.productName}</h1>
            <div className={"flex buttons-star"}>
                <button>{CiShoppingCart} Shop Now</button>
                <div className="topbar-links inline-flex">
                    <ul style={{display: "flex"}}>
                        {starArray.map((Icon, i) => (
                            <li key={i} style={{listStyle: "none"}}>
                                <Icon/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            </div>

            <div className={"bigger-image home-bg-image"} >
                <img />
            </div>
            <div className={"shape2 home-bg-image"}>

            </div>

        </div>
    )
}

export const NavbarIcons = () => {
    return (
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
            <Footer></Footer>
        </>
    )
}
