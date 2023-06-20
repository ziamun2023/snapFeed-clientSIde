import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import Home from '../pages/home/Home';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        
            
        </>
    );
};

export default Layout;