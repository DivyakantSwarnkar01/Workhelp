import React from "react";
import { Link } from "react-router-dom";

function Sdbrlft() {
  return (
    <div className="bg-white h-full shadow-md p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Navigation</h2>
      <ul className="space-y-2">
        {['Dashboard', 'Posts', 'Analytics', 'Settings', 'Support'].map((item) => (
          <li key={item}>
            <Link
              to={`/ProNavs/${item.replace(/\s/g, '')}`}
              className="block text-gray-700 hover:bg-lime-200 hover:text-lime-800 px-3 py-2 rounded transition duration-200"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sdbrlft;
