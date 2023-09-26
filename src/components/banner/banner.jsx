import React, { useState } from 'react';
import banner from '../../assets/images/banner-image.png';
import "./banner.style.scss";
import ColorTip from '../colorTip/colorTip';
const Banner = () => {
    const [color,setColor]=useState("#D3D5D5");
    let colors=["#d3d5d5","#a4b0be", "#eab543", "#74b9ff" ];

    let setColorFromColorTip=(value)=>{
        console.log("value ",value);
        setColor(value);
    }
    return (
        <div className='banner-container' style={{backgroundColor:color}} >
            <div className='color-tip-container' >
                <ColorTip colors={colors} currentColor={colors[0]} setColorFromColorTip={setColorFromColorTip} />
            </div>
            <div>
                <p>
                    Technology
                    <br style={{marginBottom:"20px"}} />
                     Hack You Won't Get
                     </p> 
            </div>
            <div >
                <img src={banner} alt="smart watch" />
            </div>
        </div>
    );
};

export default Banner;