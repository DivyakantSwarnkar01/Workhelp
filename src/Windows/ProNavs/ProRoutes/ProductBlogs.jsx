import React from "react";
import { Navigate } from "react-router-dom";

const ProductBlogs = () => {

    const token = localStorage.getItem('token');

    if (!token) {
      return <Navigate to='/LogSign/Log_Sign' />;
    }





    return(
        <><p>This Product Blogs Components!!!</p>
        </>
    )
} 

export default ProductBlogs;