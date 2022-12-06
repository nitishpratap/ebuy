import * as React from 'react';
import './style.css'
import picture from "./error.png"

export default function Error (){
    return(
        <>

               <div className={"mainDiv"}>
                   <div className={"subDiv"}>
                     <div className={"textDiv"}>
                       <div className={"Text"}>
                           <p className={"smallaPara"}>
                               Oops! Somthing's missing.
                           </p>
                           <h1 className={"heading"}>Page not found</h1>
                           <p className={"paragraph"}>It seems like we dont find what you searched. The page you were
                               looking for doesn't exist, isn't available loading incorrectly.</p>

                       </div>
                       <div className={"button"}>
                           <button>Back to Home </button>

                       </div>


                   </div>
                   <div className={"imageDiv"}>
                       <img  className={"picture"} src ={picture}/>
                   </div>


               </div>
               </div>


        </>
    );

}