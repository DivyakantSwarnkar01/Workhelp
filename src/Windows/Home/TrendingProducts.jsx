import React from "react";
import Metero from '../../assets/Metero.svg';
import { db } from "../../Model/DbCon";

const TrendingProducts = () =>{


    return (
        <div className="flex flex-col w- 52 h-auto bg-green-700 mt-32 ml-24 mr-10 rounded-md hover:shadow-lg">
            <div className=" flex flex-row">
               <img src={Metero} alt="Trending_Products" className="h-7 w-7 ml-2 mt-2"/>
               <p className="text-white font-semibold text-lg mt-2">Trending Products:</p>
            </div>
            <div className="bg-green-500 text-slate-700 m-5 p-5">

             Hello Trending Products
            </div>
    
        
         </div>
    )
}

export default TrendingProducts;