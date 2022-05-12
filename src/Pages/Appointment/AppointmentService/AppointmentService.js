
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentServiceSingle from '../AppointmentServiceSingle/AppointmentServiceSingle';
import BookingModal from '../BookingModal';

const AppointmentService = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState({})

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    console.log(services)

    return (
        <div className='mt-36'>
            <>
                <h2 className='text-2xl text-secondary text-center  font-bold mb-20'>Available Appointments on  <span>{format(date, 'PP')}</span></h2>
            </>


            <div className="appointment_services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12">
                {
                    services.map(service =>
                        <AppointmentServiceSingle
                            key={service.id}
                            service={service}
                            setTreatment={setTreatment}
                        ></AppointmentServiceSingle>
                    )
                }
            </div>
            {
                treatment && <BookingModal setTreatment={setTreatment} date={date} treatment={treatment}></BookingModal>
            }
        </div>
    );
};

export default AppointmentService;