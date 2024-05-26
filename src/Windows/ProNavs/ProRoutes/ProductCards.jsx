import React from "react";
import { Navigate } from "react-router-dom";

const ProductCards = () => {

    const token = localStorage.getItem('token');

    if (!token) {
      return <Navigate to='/LogSign/Log_Sign' />;
    }





    return(
        <><p>This is Product Cards Components!!!</p>
        </>
    )
} 

export default ProductCards;