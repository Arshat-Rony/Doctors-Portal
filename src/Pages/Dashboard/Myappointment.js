import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebaseinit';

const Myappointment = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        const url = `https://doctors-potal-server-side.herokuapp.com/bookings?patient=${user?.email}`
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    navigate("/home")
                }
                console.log(res)
                return res.json()
            })
            .then(data => {
                setBookings(data)
            })
    }, [user, navigate])
    console.log(bookings)
    return (
        <div>
            <h2 className='text-2xl text-secondary font-bold text-center mt-10'>Welcome to Your Dahsboard </h2>
            <p className='text-sm text-center mb-10'> Total Appointment <span className='badge font-bold'>{bookings.length}</span></p>
            <div className="overflow-x-hidden">
                <table className="table w-full">
                    <thead>
                        <tr className=''>
                            <th>S/L No</th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            bookings.map((booking, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td className='capitalize'>{booking.patient}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.slots}</td>
                                    <td>{booking.date}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myappointment;