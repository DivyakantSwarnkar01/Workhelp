import React from 'react';
import Home from '../Windows/Home';
import Downloader from '../Windows/Downloader';
import Jobs from '../Windows/jobs'; // Adjust the import as needed
import Converter from '../Windows/Converter';
import EditorX from '../Windows/EditorX';
import LiveTV from '../Windows/LiveTV';
import Api from '../Windows/API'
import LogSign from '../Windows/LogSign/Log_Sign'; // Fixed the import path
import Protected from '../Windows/ProNavs/Protected'; // Fixed the import path
import { Route } from 'react-router-dom';
import NewBlogs from '../Windows/Home/HomeSub/NewBlogs';
import Quaries from '../Windows/Home/HomeSub/Quaries';
import Recent from '../Windows/Home/HomeSub/Recent';
import Search from '../Windows/Home/HomeSub/Search';
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






const routes = [
  { path: "/", element: Home },
  { path: "/Downloader", element: Downloader },
  { path: "/jobs", element: Jobs },
  { path: "/Converter", element: Converter },
  { path: "/EditorX", element: EditorX },
  { path: "/LiveTV", element: LiveTV },
  { path: "/Api", element: Api },
  { path: "/LogSign/Log_Sign", element: LogSign },
  { path: "/ProNavs/Protected", element: Protected },
  { path: "/Home/NewBlogs", element: NewBlogs },
  { path: "/Home/Quaries?", element: Quaries },
  { path: "/Home/Recent", element: Recent },
  { path: "/Home/Search", element:Search },
  { path: "/post/:postId", element: Postdetails},
  { path: "/Home/World", element: World},
  { path: "/Home/India", element: India},
  { path: "/Home/Polity", element: Polity},
  { path: "/Home/Business", element: Business},
  { path: "/Home/Economy", element: Economy},
  { path: "/Home/Countries", element: Countries},
  { path: "/Home/Science", element: Science},
  { path: "/Home/Society", element: Society},
  { path: "/Home/Health", element: Health },
  { path: "/Home/Environment", element: Environment},
  { path: "/Home/Technology", element: Technology},
  { path: "/Home/Sports", element: Sports}
];

export default routes;
