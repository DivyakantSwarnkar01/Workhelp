import ExtractText from "./ExtractText.jsx";



function rghs(){


    return(
     <div className="flex flex-col mt-10 ml-24 mr-10 h-auto w-96">
        <div className="bg-green-600 p-4 mb-4 rounded-md hover:shadow-lg">
          <h2 className="text-lg font-bold text-green-800 mb-4"> Relevant Posts</h2>
           <div className="flex bg-slate-300">
              <div className='flex-row hover:bg-green-200'>
                <p className="font-bold text-pink-600 items-center">Top Rated Posts</p>
              </div>
              <div className='flex-row hover:bg-green-200'><p className="font-bold text-pink-600 items-center">Recently Added Posts</p></div>
              <div className='flex-row hover:bg-green-200'><p className="font-bold text-pink-600 items-center">Upcoming Posts</p></div>
           </div>
           <div className="flex bg-gray-500 text-lg text-gray-950 mt-3">
            <ExtractText/>
            
           </div>
        </div>


        <div className="bg-green-600 p-4 mt-32 rounded-md hover:shadow-lg">
          <h2 className="text-lg font-bold text-green-800 mb-4">Advertisement and Notice Board: </h2>
            <div className='bg-green-200'>
            <a href="https://amzn.to/3JogpKL" target="_blank" rel="noopener noreferrer">Product Link</a>
            </div>
         </div>
      </div>
    )
}

export default rghs;