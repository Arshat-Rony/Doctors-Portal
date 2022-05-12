import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, slots, name } = treatment;

    const handleBookingBtn = e => {
        e.preventDefault()
        const slot = e.target.slot.value;
        setTreatment(null)
        console.log(_id, format(date, "PP"), slot)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-accent">Booking For : {name}</h3>
                    <form onSubmit={handleBookingBtn} className='booking-form text-center space-y-3 mt-10'>
                        <input disabled type="text" value={format(date, "PP")} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots?.map((slot, index) =>
                                    <option key={index}>{slot}</option>
                                )
                            }

                        </select>
                        <input type="text" placeholder="Your name" name="name" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Book" class="btn btn-accent w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;