import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Appointment from '../Appointment/Appointment';
import Care from '../Care/Care';
import Contact from '../Contact/Contact';
import Info from '../Info/Info';
import Reviews from '../Reviews/Reviews/Reviews';
import Service from '../Service/Service';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <Care></Care>
            <Appointment></Appointment>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;