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
import BlogPage from '../Windows/Home/Postdetails';
import Postdetails from '../Windows/Home/Postdetails';







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
  { path: "//post/:postId", element: Postdetails}
];

export default routes;
