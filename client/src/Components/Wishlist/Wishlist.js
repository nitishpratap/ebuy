import React, {useEffect} from 'react';
import './Wishlist.css'
import picture1 from './product-01.png'
import picture2 from './product-02.png'
import picture3 from './product-03.png'

import {MdOutlineCancel} from 'react-icons/md'
import image from "./Swipe.png"
import {BsArrowLeft} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
import {useState} from "react";
import {Footer} from "../Footer/Footer";


/**
 *
 * @type {[{button: string, image: string, product: string, Stock_Status: string, icon: JSX.Element, Unit_Price: string},{button: string, image: string, product: string, Stock_Status: string, icon: JSX.Element, Unit_Price: string}]}
 */
const wishList = [
    {
        icon: <MdOutlineCancel/>,
        image: `${picture1}`,
        product: "Wireless PS Handler",
        Unit_Price: "$124.00",
        Stock_Status: "In Stock",
        button: "Add to Cart",
        line: <hr className={"line"}/>,
    },
    {
        icon: <MdOutlineCancel/>,
        image: `${picture2}`,
        product: "Wireless PS Handler",
        Unit_Price: "$124.00",
        Stock_Status: "In Stock",
        button: "Add to Cart",
        line: <hr className={"line"}/>,

    },
    {
        icon: <MdOutlineCancel/>,
        image: `${picture3}`,
        product: "Wireless PS Handler",
        Unit_Price: "$124.00",
        Stock_Status: "In Stock",
        button: "Add to Cart",
        line: <hr className={"line"}/>,
    },

]


/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export function Wishlist() {
    const [data, setData] = useState(wishList);


    /**
     * To delete an element from the array
     * @param id
     */
    const deleteItem = (id) => {
        const newData = data;
        data.splice(id, 1)
        setData([...data, newData]);
        console.log("id ::::", id)
        console.log("data ::::", wishList)
    }


    return (
        <>
            <div className={"mainDiv"}>
                <header>
                    <div className="head-text">
                        <div className="head-image">
                            <img src={image}/>
                        </div>
                        <div className='text-on-image'>

                            <div className={"text"}>
                                <span><BsArrowLeft className={"leftArrow "}/></span>
                                <span className={"image-text"}>STUDENT NOW GET 10% OFF: <u>GET OFFER </u></span>
                                <span><BsArrowRight className={"rightArrow "}/></span>
                            </div>
                        </div>
                    </div>
                </header>
                <h2>My Wish List on eTrade </h2>
            </div>
            <div className={"nav"}>
                <tr className={"Row"}>
                    <div className={"product"}>
                        <th className={"thead"}>Product</th>
                    </div>

                    <div className={"status"}>
                        <th className={"thead Unit"}>Unit Price</th>
                        <th className={"stock-status"}>Stock Status</th>
                    </div>
                </tr>
            </div>
            <div className={"table"}>
                <table>
                    {data && data.map((val, key) => {
                        return (
                            <>
                                <tr className={"row"} key={key}>
                                    <td>
                                        <div onClick={() => {
                                            deleteItem(key)
                                        }} className={"icon"}>{val.icon}</div>
                                    </td>
                                    <td><img className={"img"} src={val.image}/></td>
                                    <td>{val.product}</td>
                                    <td className={"unit"}>{val.Unit_Price}</td>
                                    <td className={"col"}>{val.Stock_Status}</td>
                                    <td>
                                        {val.button && <button className={"button"}>{val.button}</button>}
                                    </td>
                                </tr>
                                <div>{val.line}</div>


                            </>

                        )
                    })}
                </table>
            </div>
                    s


        </>
    );
}