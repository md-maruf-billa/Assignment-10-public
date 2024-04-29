import React from 'react';
import { createBrowserRouter, useParams } from 'react-router-dom';
import Structure from '../Structure/Structure';
import Home from '../Home/Home';
import Error from '../../Components/Error/Error';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import AddCraftItems from '../AddCraftItems/AddCraftItems';
import CraftDetails from '../CraftDetails/CraftDetails';
import PrivetRout from '../PrivetRout/PrivetRout';
import AllArtAndCraft from '../AllArtAndCraft/AllArtAndCraft';
import MyCraftList from '../MyArtAndCraftList/MyCraftList';
import EditCraft from '../EditCraft/EditCraft';
import UserProfile from '../UserProfile/UserProfile';
import AllCategories from '../AllCategories/AllCategories';
import Categories from '../Categories/Categories';

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
                element:<PrivetRout><AddCraftItems/></PrivetRout>
            },
            {
                path:"details/:id",
                element:<PrivetRout><CraftDetails/></PrivetRout>
            },
            {
                path:"/all-art-craft-items",
                element:<AllArtAndCraft/>
            },
            {
                path:"/my-art-craft-list",
                element:<PrivetRout><MyCraftList/></PrivetRout>
            },
            {
                path:"/edit-craft",
                element:<PrivetRout><EditCraft/></PrivetRout>
            }
            ,
            {
                path:"/user-profile",
                element:<PrivetRout><UserProfile/></PrivetRout>
            },
            {
                path:"/all-categories",
                element:<AllCategories/>
            },
            {
                path:"/categories",
                element:<Categories/>
            }
        ]
    }
])

export default Router;