import React from "react";
import { db } from "../../Model/DbCon";
import RealDB from "./realtime-feeder/RealDB"


const ProductNewsHindi = () =>{


    return (
        <div className="flex flex-col max-w-96 h-auto bg-green-700 mt-32 ml-24 mr-10 rounded-md hover:shadow-lg">
            <div className=" flex flex-row">
            <svg class="h-7 w-7 text-neutral-400 mt-2 ml-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />  <line x1="8" y1="8" x2="12" y2="8" />  <line x1="8" y1="12" x2="12" y2="12" />  <line x1="8" y1="16" x2="12" y2="16" /></svg>
               <p className="text-white font-semibold text-lg mt-2 ">Product News in Hindi:</p>
            </div>
            <div className="bg-green-500 text-slate-700 m-5 p-5">
              
              <RealDB/>
             
            </div>
    
        
         </div>
    )
}

export default ProductNewsHindi;