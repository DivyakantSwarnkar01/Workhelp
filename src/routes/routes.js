import React from 'react';
import Home from '../Windows/Home';
import Downloader from '../Windows/Downloader';
import Jobs from '../Windows/jobs'; // Adjust the import as needed
import Converter from '../Windows/Converter';
import EditorX from '../Windows/EditorX';
import LogSign from '../Windows/LogSign/Log_Sign'; // Fixed the import path
import Protected from '../Windows/ProNavs/Protected'; // Fixed the import path
import { Route } from 'react-router-dom';

const routes = [
  { path: "/", element: Home },
  { path: "/Downloader", element: Downloader },
  { path: "/jobs", element: Jobs },
  { path: "/Converter", element: Converter },
  { path: "/EditorX", element: EditorX },
  { path: "/LogSign/Log_Sign", element: LogSign },
  { path: "/ProNavs/Protected", element: Protected }
];

export default routes;
