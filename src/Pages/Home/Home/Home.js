import React from 'react';
import Appointment from '../Appointment/Appointment';
import Care from '../Care/Care';
import Info from '../Info/Info';
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
        </div>
    );
};

export default Home;