import * as React from 'react';
import './coming.css'
import  picture from'./coming.jpeg';
import logo from './logo-large.png';

 export function Coming(){
    return(
        <>
           <div className={"mainDiv"}>
               <div className={"colored"}>
                   <img className={"image"} src={picture}/>



               </div>
               <div className={"non-colored"}>
                   <img className={"logo"} src ={logo}/>
                   <div className={"heading"}>
                       <h1>
                           Our new website is on the way
                       </h1>
                       <p>
                           We're coming soon! We're working hard to give you
                           the best experince.
                       </p>
                       <div className={"button"}>
                           <button className={"btn"}>0 DAy</button>
                           <button className={"btn"}>00 Hrs</button>
                           <button className={"btn"}>00 Min</button>
                           <button className={"btn"}>00 Sec</button>
                       </div>
                   </div>

               </div>
           </div>
        </>
    );
 }