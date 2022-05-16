import { format } from 'date-fns';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebaseinit';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, slots, name } = treatment;

    const [user] = useAuthState(auth)


    const handleBookingBtn = e => {
        e.preventDefault()
        const slot = e.target.slot.value;

        const booking = {
            treatment: name,
            slots: slot,
            patient: user?.displayName,
            patientEmail: user?.email,
            date: format(date, "PP"),
            phone: e.target.phone.value,
        }
        const url = `http://localhost:5000/bookings`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success(`Your ${name} appointment is Booked on ${format(date, "PP")}`)
                } else {
                    toast.error(`You already have an appointment of ${name} on ${format(date, "PP")}`)
                }
                refetch()
                setTreatment(null)

            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-accent">Booking For : {name}</h3>
                    <form onSubmit={handleBookingBtn} className='booking-form text-center space-y-3 mt-10'>
                        <input disabled type="text" value={format(date, "PP")} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots?.map((slot, index) =>
                                    <option key={index}>{slot}</option>
                                )
                            }

                        </select>
                        <input type="text" disabled placeholder="Your name" value={user?.displayName || ''} name="name" className="input font-semibold input-bordered w-full max-w-xs" />
                        <input type="email" disabled placeholder="Your email" value={user?.email || ''} className="input input-bordered font-semibold w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Your phone" className="input input-bordered w-full max-w-xs font-semibold " />
                        <input type="submit" value="Book" className="btn btn-accent w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;