import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorHandle from '../pages/ErrorHandle/ErrorHandle';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorHandle></ErrorHandle>,
    children:[
      {
        index:true,
        Component:Home,
      }
    ]
  },
]);