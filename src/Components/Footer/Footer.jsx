import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#FF76CE] mt-10'>
            <footer className="footer p-10 container mx-auto text-white">
                <aside>
                    <img className='size-[100px]' src="/fav.png" alt="" />
                    <p><span className='text-4xl font-rancho'>Canvas Creations</span>
                    <br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link to="/" className="link link-hover">Home</Link>
                    <Link to="/user-profile" className="link link-hover">Profile</Link>
                    <Link to="/all-art-craft-items" className="link link-hover">All art and craft</Link>
                    <Link to="/add-craft-items" className="link link-hover">Add Craft</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;