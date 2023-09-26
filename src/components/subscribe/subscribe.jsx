import React, { useState } from 'react';
import "./subscribe.scss"
const Subscribe = () => {
    const [email,setEmail]=useState("");
    const submitData=(e)=>{
        e.preventDefault();
        alert("You email is submitted")
    }
    return (
        <div style={{ marginLeft:'60px', marginRight:'60px'}}>
            <div className='subscribe'>
                <div className=" left-section">
                    <div className="">
                        <h2 className="">Subscribe Us Now</h2>
                        <p>Get latest news, updates and deals directly mailed to your inbox.</p>
                    </div>
                </div>
                <div className="right-section">
                    <form className="">
                        <div className="">
                            <input className="email" type="email" name="EMAIL"
                             placeholder="Your email address here" required=""
                             onKeyUp={(e)=>setEmail(e.target.value)}
                            />
                            <button className="btn btn-medium " type="submit" onClick={(e)=>submitData(e)} >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
          
    );
};

export default Subscribe;