import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Structure from '../Structure/Structure';
import Home from '../Home/Home';
import Error from '../../Components/Error/Error';

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Structure/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    }
])

export default Router;