
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import AppointmentServiceSingle from '../AppointmentServiceSingle/AppointmentServiceSingle';
import BookingModal from '../BookingModal';

const AppointmentService = ({ date }) => {
    const [treatment, setTreatment] = useState({})
    const formattedDate = format(date, "PP")
    const { isLoading, data: services, refetch } = useQuery(['repoData', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='mt-36'>
            <>
                <h2 className='text-2xl text-secondary text-center  font-bold mb-20'>Available Appointments on  <span>{format(date, 'PP')}</span></h2>
            </>


            <div className="appointment_services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12">
                {
                    services.map(service =>
                        <AppointmentServiceSingle
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        ></AppointmentServiceSingle>
                    )
                }
            </div>
            {
                treatment && <BookingModal
                    setTreatment={setTreatment}
                    date={date}
                    treatment={treatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AppointmentService;