import React from 'react';
import {FirstView} from "./FirstView";
import service1 from "./service1.png"
import service2 from "./service2.png"
import service3 from "./service3.png"
import service4 from "./service4.png"
import qr from "./qr.png"
import playStore from "./play-store.png"
import appStore from "./app-store.png"
import "./style.css"
import {AiOutlineMail} from "react-icons/ai"
import {BsPhone} from "react-icons/bs"
import {GrFacebookOption} from "react-icons/gr"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {FaLinkedinIn} from "react-icons/fa"
import {FaPaypal, FaCcMastercard, FaCcVisa} from "react-icons/fa"
// import {FaCcMastercard} from "react-icons/fa"
// import {FaCcVisa} from "react-icons/fa"
const socialMedia = [GrFacebookOption, AiOutlineInstagram, AiOutlineTwitter, FaLinkedinIn]
const payments = [FaPaypal, FaCcMastercard, FaCcVisa]
const ColoredLine = ({color}) => (
    <hr
        style={{
            marginTop: "3rem",
            color: color,
            backgroundColor: "#F6F7FB",
            height: 1,
            width: "90vw",
        }}

    />
);


const Support = () => (
    <div>
        <h3>Support</h3>
        <address className={"address"}>685 Market Street,<br/>
            Las Vegas, LA 95820,<br/>
            United States.
        </address>
        <p><a href="mailto:someone@example.com"><AiOutlineMail/>example@domain.com</a></p>
        <a href="tel:123-456-7890"><BsPhone/>123-456-7890</a>
    </div>
)

const Account = () =>
    (
        <div>
            <h3>Account</h3>
            <a href={""}>My Account</a><br/><br/>
            <a href={""}>Login / Register</a><br/><br/>
            <a href={""}>Cart</a><br/><br/>
            <a href={""}>Wishlist</a><br/><br/>
            <a href={""}>Shop</a>
        </div>
    )

const QuickLinks = () =>
    (
        <div>
            <h3>Quick Link</h3>
            <a href={""}>Privacy Policy</a><br/><br/>
            <a href={""}>Login / Register</a><br/><br/>
            <a href={""}>Terms Of Use</a><br/><br/>
            <a href={""}>FAQ</a><br/><br/>
            <a href={""}>Contact</a>
        </div>
    )

const DownloadApp = () => (
    <div>
        <h3>Download App</h3>
        <p>Save $3 With App & New User only</p>
        <div className={"download-logo"}>
            <img src={qr}/>
            <div>
                <a href={""}><img src={playStore}/></a>
                <br/><br/>
                <a href={""}><img src={appStore}/></a>
            </div>
        </div>
    </div>
)

const SocialLinks = () => (
    <div>
        {socialMedia.map((Icon, i) => (
            <>
                <a href={""}><Icon className = "icon icon-wrap"/></a>
            </>

        ))}
    </div>
)

const RightText = () => (
    <p>© 2022. All rights reserved by Mahima & Nitish.</p>
)

const Accept = () => (
    <div className = "accept">
        <p>Accept For </p>
        {payments.map((Icon, i) => (
            <Icon className = "icon accept-icon "/>
        ))}
    </div>
)


export function Footer() {
    return (
        <>

            <div className={"first"}>
                <div className={"dev"}>
                    <FirstView title="Fast & Secure Delivery" lowTitle="Tell about your service." image={service1}/>
                    <FirstView title="Money Back Guarantee" lowTitle="Within 10 days.." image={service2}/>
                    <FirstView title="24 Hour Return Policy" lowTitle="No question ask." image={service3}/>
                    <FirstView title="Pro Quality Support" lowTitle="24/7 Live support." image={service4}/>
                </div>
                <ColoredLine/>
                <div className={"headers"}>
                    <Support/>
                    <Account/>
                    <QuickLinks/>
                    <DownloadApp/>
                </div>
                <ColoredLine/>
                <div className={"bottom"}>
                        <SocialLinks></SocialLinks>
                        <RightText></RightText>
                        <Accept ></Accept>
                </div>
            </div>
        </>
    )
}
