import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='w-300 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;