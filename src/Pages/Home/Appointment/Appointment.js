import React from 'react';
import appointmentpic from "../../../assets/images/doctor-small.png"
import bgPic from "../../../assets/images/appointment.png"

const Appointment = () => {
    return (
        <div className="hero mt-40">
            <img style={{ height: "396px" }} className="w-full" src={bgPic} alt="background-pic" />
            <div className="hero-content flex-col lg:flex-row">
                <img className='relative bottom-32 hidden lg:block' src={appointmentpic} alt="doctor-pic" />
                <div className='text-white'>
                    <p className='text-primary mb-2'>Appointment</p>
                    <h1 className="text-5xl font-bold">Make Your Appointment Now</h1>
                    <p className="py-6">Our service is free for all the time. You can book your appointment any time. Our assistants are very cooperative.</p>
                    <button className="btn font-bold text-white border-0 bg-gradient-to-r from-primary to-secondary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;