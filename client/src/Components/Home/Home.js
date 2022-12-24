import * as React from 'react';
import style from './style.css'
import {SignUp} from "../SignUP/SignUp";
import {SignIn} from "../SignIn/SignIn";
import {Route} from "react-router-dom";
import {Footer} from "../Footer/Footer";
import {CiSearch, CiHeart, CiShoppingCart, CiHeadphones} from "react-icons/ci"
import {BsPerson} from "react-icons/bs"
import logo from "./logo.png"
import {AiFillFire} from "react-icons/ai"
import {starArray} from "../Utils/constant"
import {FaTags} from "react-icons/fa"
import {BsArrowLeft, BsArrowRight,BsFillBasket2Fill} from "react-icons/bs"
import {categoryArray} from "../Utils/constant"
import headphone from "./headphone.png"
import Button from 'react-bootstrap/Button';

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
                        <a className={"navbar-link"} href={"/wishlist"}><h5>Wishlist</h5></a>
                    </div>
                    <NavbarIcons/>
                </div>
                <BackgroundText productName="Nitish Pratap Yadav"/>
            </div>
        </>
    )
}

const BackgroundText = (props) => {
    return (
        <div className={"background-text"}>
            <div className={"deals"}>
                <p style={{color: "red"}}><AiFillFire/> Hot deals In This Week</p>
                <h1>{props.productName}</h1>
                <div className={"flex buttons-star"}>
                    <button className={"shop-now-button"}>{CiShoppingCart} Shop Now</button>
                    <div className={"flex icon-text"}>
                        <div className="topbar-links inline-flex ">
                            <ul style={{display: "flex"}}>
                                {starArray.map((Icon, i) => (
                                    <li key={i} style={{listStyle: "none"}}>
                                        <Icon/>
                                    </li>
                                ))}
                                <li>
                                </li>
                            </ul>
                        </div>
                        <p className={"reviews-text"}>100+ reviews</p>
                    </div>

                </div>
            </div>

            <div className={"bigger-image home-bg-image"}>
                <img/>
            </div>
            <div className={"shape2 home-bg-image"}>

            </div>

        </div>
    )
}

export const Category = () => {
    return (
        <>
            <div className={"flex category-text-tag "}>
                <FaTags/>
                <h5 className={"category-text"}>Categories</h5>
            </div>
            <div
                className={"flex flex-center-align flex-justify-content-space-between category-btn four-rem-margin-right"}>
                <h1 className={"four-rem-margin-left"}>
                    Browse by Category</h1>
                <div>
                    <LeftArrowButton/>
                    <RightArrowButton/>
                </div>
            </div>

        </>
    )
}

export const LeftArrowButton = (props) => {
    return (
        <>
            <button className={"arrow-btn"}>
                <BsArrowLeft/>
            </button>
        </>
    )
}

export const RightArrowButton = (props) => {
    return (
        <>
            <button className={"arrow-btn"}>

                <BsArrowRight/>
            </button>
        </>
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

export const CategoryBox = (props) => {
    return (
        <>
            <div className={"category-box"}>
                <img src={props.image}/>
            </div>
        </>
    )
}

export const DoNotMiss = () => {
    return (
        <>
            <div className={"dont-miss-div four-rem-margin-left"}>

                <div className={"headphone-text flex four-rem-margin-left color-red"}>
                    <CiHeadphones/>
                    <p style={{marginLeft: "1rem", marginTop: 0}}>Don’t Miss!!</p>
                </div>
                <div className={"flex"}>
                    <div className={"dont-miss-div-text-circle "}>
                        <h1 className={"four-rem-margin-left"} style={{marginTop: 0}}>Enhance Your Music Experience</h1>
                        <div className={"flex four-rem-margin-left flex-justify-content-space-between"}>
                            <CircularBox time="0" text="Day"/><CircularBox time="0" text="Hrs"/><CircularBox time="0"
                                                                                                             text="Min"/><CircularBox
                            time="0" text="Sec"/>
                        </div>
                        <div className={"check-it-now-button"}>
                            <CreateButton title="Check it Now"/>
                        </div>
                    </div>
                    <img src={headphone} className={"headphone-image"}/>
                </div>
            </div>
        </>
    )
}

export const OurProduct = () => {
    return (
        <>
            <div className={"flex product-text-tag"}>
                <BsFillBasket2Fill/>
                <h5 className={"category-text"}>Our Products</h5>
            </div>
            <div
                className={"flex flex-center-align flex-justify-content-space-between category-btn four-rem-margin-right"}>
                <h1 className={"four-rem-margin-left"}>
                    Explore our Products
                </h1>
                <div>
                    <LeftArrowButton/>
                    <RightArrowButton/>
                </div>
            </div>

        </>
    )
}

export const CircularBox = (props) => {
    return (
        <>
            <div className={"circle flex"}>
                <p className={"circular-box-text"} style={{marginTop: "100", fontSize: "20px"}}>{props.time}</p>
                <p className={"circular-box-text"} style={{marginTop: "0"}}>{props.text}</p>
            </div>
        </>
    )
}

export const CreateButton = (props) => {
    return (
        <>
            <Button className={"button-component four-rem-margin-left"}><h4
                className={"noHover color-white"}>{props.title}</h4></Button>

        </>
    )
}

export const RectangularCard = (props)=>{
    return(
        <>
            <div className={"product-card four-rem-margin-left four-rem-margin-right"}>
                <div className={"product-rectangle"}>
                        <img src={props.image}/>
                </div>
                <div className={"flex flex-dir-column flex-justify-content-center .flex-align-items-center product-details"}>
                    <p>{props.title}</p>
                    <h3>{props.price}</h3>
                </div>

            </div>
        </>
    )
}


export function Home() {
    return (
        <>
            <Navbar/>
            <Category/>
            <div className={"flex category-box-div flex-justify-content-space-between four-rem-margin-left "}>
                {categoryArray.map((image, index) => {
                    return (
                        <CategoryBox image={image}/>
                    )
                })}
            </div>
            <DoNotMiss/>
            <OurProduct/>
            <RectangularCard image = {""} title = "Headphone" price = "RS 150"/>
            <Footer></Footer>
        </>
    )
}
