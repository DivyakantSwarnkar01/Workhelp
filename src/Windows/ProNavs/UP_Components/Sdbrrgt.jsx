import React from "react";

function Sdbrrgt() {
  return (
    <div className="bg-zinc-500 text-white h-full w-full mt-5 flex flex-col justify-between p-4">
      <div className="bg-lime-600 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">User Data</h2>
      </div>
      <div className="flex flex-col space-y-2 mt-4">
        {['Previous Post', 'Inbox', 'Reach', 'About', 'Contact Us!'].map((item) => (
          <a
            key={item}
            href="#"
            className="text-white hover:bg-gray-700 px-4 py-2 rounded transition duration-200"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Sdbrrgt;
