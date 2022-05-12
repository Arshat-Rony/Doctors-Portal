import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AppointmentService from '../AppointmentService/AppointmentService';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AppointmentService date={date} setDate={setDate}></AppointmentService>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;