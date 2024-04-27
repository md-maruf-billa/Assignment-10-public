import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../../Utils/Button';
import { userContext } from '../../Utils/DataProvider/DataProvider';
import { FaUser } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';
const Nav = () => {

    const navElement = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all-art-craft-items">All Art & craft Items</NavLink></li>
        <li><NavLink to="/add-craft-items">Add Craft Item</NavLink></li>
        <li><NavLink to="/my-art-craft-list">My Art&Craft List</NavLink></li>
    </>


    // -----------get user from context-----------
    const { currentUser, logOutUser } = useContext(userContext);

    // -----------Handel logOut user--------
    const logOut = () => {
        logOutUser()
            .then(res => {
                Swal.fire({
                    title: "Congratulation",
                    text: "You are successfully LogOut.",
                    icon: "success"
                });
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${err.message.split("/")[1].replace(")", "")}`,
                    footer: ''
                });
            })
    }
    return (
        <div className='z-50'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navElement
                            }
                        </ul>
                    </div>
                    <a className="text-common text-xl md:text-4xl font-rancho">Canvas Creations</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navElement
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        currentUser.email ?
                            <div>
                                <div className="dropdown dropdown-end z-50">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div data-tooltip-id="my-tooltip" className="w-10 rounded-full">
                                            {
                                                currentUser.photoURL ?
                                                    <img alt="Your Profile Image" src={currentUser?.photoURL} />
                                                    :
                                                    <FaUser className='text-4xl' />
                                            }
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li onClick={logOut}><a>Logout</a></li>
                                    </ul>
                                </div>
                                <Tooltip className='z-50' id='my-tooltip'>
                                    <div>
                                        <h3>{currentUser.displayName}</h3>
                                        <h3>{currentUser.email}</h3>
                                        
                                    </div>
                                </Tooltip>
                            </div>
                            :
                            <div className='space-x-2'>
                                <Link to={"/login"} ><Button btnName={"Login"} /></Link>
                                <Link to={"/registration"} ><Button btnName={"Register"} /></Link>
                            </div>
                    }


                </div>
            </div>
        </div>
    );
};

export default Nav;


