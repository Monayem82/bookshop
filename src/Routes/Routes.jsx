import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorHandle from '../pages/ErrorHandle/ErrorHandle';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';
import ReadAndWishlist from '../pages/ReadAndWishlist/ReadAndWishlist';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorHandle></ErrorHandle>,
    children: [
      {
        index: true,
        loader: async () => {
          try {
            const res = await fetch('/booksData.json');
            if (!res.ok) throw new Error('Failed to load books data');
            return res.json();
          } catch (err) {
            throw new Response(`Not Found ${err}`, { status: 404 });
          }
        },
        Component: Home,
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: '/bookdetails/:bookId',
        loader:async({params})=>{
          console.log(params.bookId)
          const res=  await fetch('/booksData.json')
          console.log(res)
          return res
        },
        Component: BookDetails
      },
      {
        path:'ReadAndWishlist',
        loader:async()=>{
          const res=  await fetch('/booksData.json')
          return res
        },
        Component:ReadAndWishlist,
      }
    ]
  },
]);