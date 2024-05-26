import React from "react";
import { Navigate } from "react-router-dom";

const Products = () => {

    const token = localStorage.getItem('token');

    if (!token) {
      return <Navigate to='/LogSign/Log_Sign' />;
    }





    return(
        <><p>This is Products Components!!!</p>
        </>
    )
} 

export default Products;