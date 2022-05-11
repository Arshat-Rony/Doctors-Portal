import React from 'react';
import bgPic from "../../../assets/images/appointment.png"
const Contact = () => {
    return (
        <section className='mt-40' style={{ background: `url(${bgPic})` }}>
            <p className='text-primary font-bold text-center pt-20'>Connect Us</p>
            <h2 className='text-3xl text-white text-center'>Stay connected with us</h2>
            <div >
                <form className='flex items-center flex-col py-10 '>
                    <input className='mt-4 p-3 rounded-lg w-3/4 lg:w-3/12' type="text" placeholder="Type here" />
                    <input className='mt-4 p-3 rounded-lg w-3/4 lg:w-3/12' type="text" placeholder="Type here" />
                    <input className='mt-4 p-3 rounded-lg w-3/4 lg:w-3/12' type="text" placeholder="Type here" />
                    <input className='mt-4 p-3 rounded-lg w-3/4 lg:w-3/12 h-24' type="text" placeholder="Type here" />
                    <button className="btn font-bold text-white border-0 bg-gradient-to-r from-primary to-secondary mt-4">Get Started</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;