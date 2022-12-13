import React from 'react';
import './Wishlist.css'
import picture1 from './product-01.png'
import picture2 from './product-02.png'
import picture3 from './product-03.png'
import {MdOutlineCancel} from 'react-icons/md'
import image from "./Swipe.png"
import {BsArrowLeft} from 'react-icons/bs'

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
        button: "Add to Cart"
    },
    {
        icon: <MdOutlineCancel/>,
        image: `${picture2}`,
        product: "Wireless PS Handler",
        Unit_Price: "$124.00",
        Stock_Status: "In Stock",
        button: "Add to Cart"
    },

]


/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export function Wishlist() {
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
                                <div><BsArrowLeft className={"leftArrow"}/></div>
                                <div>STUDENT NOW GET 10% OFF: <u>GET OFFER </u></div>
                            </div>
                        </div>
                    </div>
                </header>
                <h2>My Wish List on eTrade </h2>
            </div>
            <div className={"nav"}>
                <tr>
                    <th>Product</th>
                    <th>Unit Price</th>
                    <th>Stock Status</th>
                </tr>
            </div>
            <div className={"table"}>
                <table>
                    {wishList.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.icon}</td>
                                <td><img src={val.image}/></td>
                                <td>{val.product}</td>
                                <td>{val.Unit_Price}</td>
                                <td>{val.Stock_Status}</td>
                                <td>{val.button}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </>
    );
}