import React from "react";
import { Navigate } from "react-router-dom";

const AddFeatures = () => {

    const token = localStorage.getItem('token');

    if (!token) {
      return <Navigate to='/LogSign/Log_Sign' />;
    }





    return(
        <><p>Add Components right here in this place</p>
        </>
    )
} 

export default AddFeatures;