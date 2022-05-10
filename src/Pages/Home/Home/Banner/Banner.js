import React from 'react';
import chair from "../../../../assets/images/chair.jpg"
import bg from '../../../../assets/images/bg.png'
const Banner = () => {
    return (
        <div className="">
            <div className="hero min-h-screen">
                <img className='h-screen' src={bg} alt="" />
                <div className="hero-content  flex-col lg:flex-row-reverse justify-between">
                    <div>
                        < img src={chair} className="max-w-lg rounded-lg shadow-2xl" alt='chair-pic' />
                    </div>
                    <div className='pl-8 lg:pl-0 lg:pr-32'>
                        <h1 className="text-5xl font-bold text-accent">Making Health Care Better Together</h1>
                        <p className="py-6 ">To learn more about our clinical programs, browse our list of medical services alphabetically or search by keyword in the box below.</p>
                        <button className="btn font-bold text-white border-0 bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div >
            </div >
        </div>
    );
};

export default Banner;