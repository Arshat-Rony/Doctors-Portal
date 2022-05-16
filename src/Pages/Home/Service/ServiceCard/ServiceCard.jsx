import React from 'react';

const ServiceCard = ({ img, heading, text }) => {
    return (
        <div className="card  bg-base-100 shadow-xl pt-14 pb-9 px-14">
            <figure className="px-10 pt-10">
                <img className='w-auto' src={img} alt="teeth-img" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{heading}</h2>
                <p>{text.slice(0, 50)}</p>
            </div>
        </div>
    );
};

export default ServiceCard;