import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Pages/Home/Home'


import {
  RouterProvider,
} from "react-router-dom";
import Router from './Pages/Router/Router';
import DataProvider from './Utils/DataProvider/DataProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={Router}></RouterProvider>
    </DataProvider>
  </React.StrictMode>,
)
