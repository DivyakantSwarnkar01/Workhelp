import React from "react";
import { db } from "../../Model/DbCon";

const TrendsTopic = () =>{


    return (
        <div className="flex flex-col max-w-96 h-auto bg-green-700 mt-32 ml-24 mr-10 rounded-md hover:shadow-lg">
            <div className=" flex flex-row">
            <svg class="h-7 w-7 text-neutral-400 ml-2 mt-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>

               <p className="text-white font-semibold text-lg mt-2 ml-1 ">Trending Topics:</p>
            </div>
            <div className="bg-green-500 text-slate-700 m-5 p-5">

             There will be Top trending Topics
            </div>
    
        
         </div>
    )
}

export default TrendsTopic;