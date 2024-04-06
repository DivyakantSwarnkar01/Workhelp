import React from "react";


function rghs(){

    return(
     <div className="flex flex-col mt-10 ml-24 mr-10 h-40 w-96">
        <div className="bg-green-600 p-4 mb-4 rounded-md hover:shadow-lg">
          <h2 className="text-lg font-bold text-green-800 mb-4"> Recently Added Posts</h2>
          <div className='bg-green-200'><p>Content 1</p></div>
        </div>
        <div className="bg-green-600 p-4  mt-80 rounded-md hover:shadow-lg">
          <h2 className="text-lg font-bold text-green-800 mb-4">Advertisement</h2>
          <div className='bg-green-200'><p>Content 2</p></div>
         </div>
      </div>
    )
}

export default rghs;