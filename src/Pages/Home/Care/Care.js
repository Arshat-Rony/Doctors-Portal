import React from 'react';
import doctor from '../../../assets/images/doctor (1).png'
const Care = () => {
    return (
        <div class="hero min-h-screen mt-40">
            <div class="hero-content flex-col lg:flex-row">
                <img style={{ width: "458px", height: "576px" }} src={doctor} alt="Doctor-img" className="rounded-lg" />
                <div className='lg:ml-24'>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms.</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn font-bold text-white border-0 bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Care;