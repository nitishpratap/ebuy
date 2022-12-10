import React from 'react';
import picture1 from './product-01.png'
import picture2 from './product-02.png'
import picture3 from './product-03.png'
import {MdOutlineCancel} from 'react-icons/md'


const data = [
    {
        icon: "1",
        image: {picture1},
        product: "Wireless PS Handler",
        Unit_Price: "$124.00",
        Stock_Status: "In Stock",
        button: "Add to Cart"
    },
    {
        icon: "1",
        image: {picture2},
        product: "Wireless PS Handler",
        Unit_Price: "$124.00",
        Stock_Status: "In Stock",
        button: "Add to Cart"
    },

]

export function Wishlist() {
    return (
        <>
            <div className={"mainDiv"}>
                <h2>My Wish List on eTrade <MdOutlineCancel/></h2>
            </div>
            <div className={"table"}>
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Unit Price</th>
                        <th>Stock Status</th>
                    </tr>
                    {data.map((val, key) => {

                        return (
                            <tr key={key}>
                                <td>{val.icon}</td>
                                <td><img src={val.image.picture1}/></td>
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