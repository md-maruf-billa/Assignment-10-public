import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Structure from '../Structure/Structure';
import Home from '../Home/Home';
import Error from '../../Components/Error/Error';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import AddCraftItems from '../AddCraftItems/AddCraftItems';

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Structure/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/registration",
                element:<Registration/>
            },
            {
                path:"add-craft-items",
                element:<AddCraftItems/>
            }
        ]
    }
])

export default Router;