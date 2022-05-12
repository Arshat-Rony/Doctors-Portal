import React from 'react';

const AppointmentServiceSingle = ({ service, setTreatment }) => {
    const { slots, name } = service;
    return (
        <div class="card text-primary-content shadow-lg mt-5">
            <div class="card-body text-center space-y-2">
                <h2 class="text-center text-xl font-bold text-secondary">{name}</h2>
                <p>{
                    slots.length ?
                        <p className='uppercase text-xs'>{slots[0]}</p>
                        :
                        <p className='text-red-600 text-sm'>Please Try another day</p>
                }</p>
                <p>{
                    slots.length ?
                        <p className='uppercase text-xs'>{slots.length} spaces available</p>
                        :
                        <p className='text-red-600 text-sm'>No spaces available</p>
                }</p>
                <div class="card-actions justify-center">
                    <label for="booking-modal" onClick={() => setTreatment(service)} disabled={!slots.length} className="btn font-bold text-white border-0 bg-gradient-to-r from-primary to-secondary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentServiceSingle;