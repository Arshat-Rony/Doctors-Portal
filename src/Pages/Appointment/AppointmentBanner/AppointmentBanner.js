import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../../assets/images/chair.png'
import bgPic from '../../../../src/assets/images/bg.png'
import { format } from 'date-fns';
const AppointmentBanner = ({ date, setDate }) => {
    let footer = '';
    if (date) {
        footer = <div className='bg-accent p-3 rounded-lg text-white font-bold'>You picked <span className="text-primary">{format(date, 'PP')}</span>.</div>;
    }
    return (
        <section style={{ background: `url(${bgPic})` }}>
            <div class="card w-11/12 mx-auto card-side flex flex-col lg:flex-row-reverse justify-start pt-32">
                <figure className='flex-1 '>
                    <img src={chair} alt="Chair" />
                </figure>
                <div class="card-body flex-1 items-center ">
                    <DayPicker className='shadow-sm bg-white p-16 rounded-lg'
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                        footer={footer}
                    />

                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;