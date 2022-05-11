import React from 'react';
import doctor1 from "../../../../assets/images/people1.png"
import doctor2 from "../../../../assets/images/people2.png"
import doctor3 from "../../../../assets/images/people3.png"
import quote from '../../../../assets/icons/quote.svg'
import Review from '../Review/Review';
const reviews = [
    { id: 1, text: "The services that I receive from MediZone is excellent.  The staff are friendly and ensure that I am properly informed about my health and care. I would have no qualms in recommending them to friendly and friends", name: "Ankit Tiwari", place: "Chittagong", img: doctor1 },
    { id: 2, text: "Medizone is incredible. Not only has she taken great care of my health, but also they are lovely to speak with at every appointment. It’s rare to find a doctor that combines such personal touches and care for a patient as a person with outstanding quality of medical care. I highly recommend becoming the patient fo this clinic!", name: "Nila ambori", place: "California", img: doctor2 },
    { id: 3, text: "Wonderful experience with MediZone. Dr.Mishal was a wonderful surgeon, and the staff was always helpful and kind. They ensured I had a smooth prep, surgery, and follow-up. I am so glad I chose MediZone and would highly recommend to anyone.", name: "Mishita", place: "Jessore", img: doctor3 },
]
const Reviews = () => {
    return (
        <div className='mt-40 lg:mt-0'>
            <div className='text-start mb-24 flex justify-between items-center px-6'>
                <div>
                    <p className='text-primary'>Testimonial</p>
                    <h2 className='text-4xl text-accent'><span className='text-secondary font-bold '>MediZone </span> in the eyes of patient.</h2>
                </div>
                <img style={{ width: "300px" }} src={quote} alt="quote" />
            </div>

            <div className="reviews grid grid-cols-1 lg:grid-cols-3 gap-5 px-6">
                {
                    reviews.map(review =>
                        <Review key={review.id}
                            review={review}
                        ></Review>
                    )
                }
            </div>
        </div>
    );
};

export default Reviews;