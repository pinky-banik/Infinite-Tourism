import React from 'react';
import Spots from '../Spots/Spots';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';

const Home = () => {
    return (
        <div >
            <NavigationBar></NavigationBar>
            <Header></Header>
            <Spots></Spots>
            <Footer></Footer>
        </div>
    );
};

export default Home;