import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


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
