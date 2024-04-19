import React from "react";
import { Link } from 'react-router-dom';
import AdSenseComponent02 from "../AdSense/AdSenseComponent02";
import './Home/PostDetails.css'



function jobs(){


        return(
            <div>
            <div className="flex-col box-border bg-lime-500 border-t-0 w-full h-36">
            </div>
             <h1 className="sr-only">Hello is jobs page </h1>
             <div className="flex min-h-screen bg-gray-200 ">
                <div className="flex-col m-5 bg-green-800 border-solid border-2 rounded-lg border-white w-72 h-auto z-20">
                  <div >
                    <ul>
                        <li className="ml-24 font-bold text-white ">Latest Jobs</li>
                    </ul>
                  </div>
                </div>
             </div>
            <div className=""><AdSenseComponent02/></div>
            </div>
        )








}
export default jobs;