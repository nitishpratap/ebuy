import React from "react";
import  "./footerStyle.css"
export function FirstView(props) {
    return (
        <>
            <div className={"parent"}>
                <img className="logo" src={props.image} />
                <div className={"title-subtitle"}>
                    <h4>{props.title}</h4>
                    <p className={"subtitle"}>{props.lowTitle}</p>
                </div>
            </div>

        </>
    )
}
