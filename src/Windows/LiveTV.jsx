import React from "react";
import LoadingImage from '../assets/Loading.gif'
import { Helmet, HelmetProvider } from "react-helmet-async";


function LiveTV (){




    return(
        <HelmetProvider>
            <Helmet> <link rel="canonical" href='https://www.workhelper.shop/LiveTV' /> </Helmet>
        
        <h1> Watch Live TV with Hundreds of channel </h1>
        <img src={LoadingImage} className="h5 w-auto" alt="Coming Soon..."/>
       
        </HelmetProvider>
    )
}

export default LiveTV;