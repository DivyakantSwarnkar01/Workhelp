import React from 'react';
import Home from '../Windows/Home';
import Downloader from '../Windows/Downloader'; // Adjust the import as needed
import Converter from '../Windows/Converter';
import LiveTV from '../Windows/LiveTV';
import LogSign from '../Windows/LogSign/Log_Sign'; // Fixed the import path
import Protected from '../Windows/ProNavs/Protected'; // Fixed the import path
import Postdetails from '../Windows/Home/Postdetails';
import World from '../Windows/Home/naviHome/World';
import India from '../Windows/Home/naviHome/India';
import Polity from '../Windows/Home/naviHome/Polity';
import Science from '../Windows/Home/naviHome/Science';
import Society from '../Windows/Home/naviHome/Society';
import Environment from '../Windows/Home/naviHome/Environment';
import Health from '../Windows/Home/naviHome/Health';
import Sports from '../Windows/Home/naviHome/Sports';
import Economy from '../Windows/Home/naviHome/Economy';
import Technology from '../Windows/Home/naviHome/Technology';
import Countries from '../Windows/Home/naviHome/Countries';
import Business from '../Windows/Home/naviHome/Business';
import Tables from '../Windows/ProNavs/ProRoutes/Tables';
import ProductCards from '../Windows/ProNavs/ProRoutes/ProductCards';
import Projectmanagement from '../Windows/ProNavs/ProRoutes/Projectmanagement';
import ProductBlogs from '../Windows/ProNavs/ProRoutes/ProductBlogs';
import Products from '../Windows/ProNavs/ProRoutes/Product';
import HumanResources from '../Windows/ProNavs/ProRoutes/HumanResources';
import AddFeatures from '../Windows/ProNavs/ProRoutes/AddFeatures';
import NotFound from '../Windows/NotFound'; 
import Search from '../Windows/Home/HomeSub/Search';




const routes = [
  { path: "/", element: Home },
  { path: "/Downloader", element: Downloader },
  { path: "/Converter", element: Converter },
  { path: "/LiveTV", element: LiveTV },
  { path: "/LogSign/Log_Sign", element: LogSign },
  { path: "/ProNavs/Protected", element: Protected },
  { path: "/post/:postId", element: Postdetails},
  { path: "/World", element: World},
  { path: "/India", element: India},
  { path: "/Polity", element: Polity},
  { path: "/Business", element: Business},
  { path: "/Economy", element: Economy},
  { path: "/Countries", element: Countries},
  { path: "/Science", element: Science},
  { path: "/Society", element: Society},
  { path: "/Health", element: Health },
  { path: "/Environment", element: Environment},
  { path: "/Technology", element: Technology},
  { path: "/Sports", element: Sports},
  { path : "/ProNavs/Protected", element: Protected},
  { path : "/ProNavs/ProRoutes/Tables", element: Tables},
  { path : "/ProNavs/ProRoutes/AddFeatures", element: AddFeatures},
  { path : "/ProNavs/ProRoutes/HumanResources", element: HumanResources},
  { path : "/ProNavs/ProRoutes/Product", element: Products},
  { path : "/ProNavs/ProRoutes/ProductBlogs", element: ProductBlogs},
  { path : "/ProNavs/ProRoutes/Projectmanagement", element: Projectmanagement},
  { path : "/ProNavs/ProRoutes/ProductCards", element: ProductCards},
  { path : "/Search", element: Search},
  
    // Catch-all route for 404 page
    { path: "*", element: NotFound }

];

export default routes;
