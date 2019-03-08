import React from "react"
import classes from "./DoublePicture.module.css"

export default ({ img1, img2 }) =>(
    <div 
        className={ classes.img1 }
        style={{
            background: `url(${img1}) center center / cover no-repeat` ,
        }}
    >
        <div 
            className={ classes.img2 }
            style={{
                background: `url(${img2}) center center / cover no-repeat` ,
            }}
        ></div>
    </div>
)