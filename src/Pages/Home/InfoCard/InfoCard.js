import React from 'react';

const InfoCard = ({ clock, color, heading, text }) => {
    return (
        <div className={`card card-side ${color}  shadow-xl bg-accent py-14 px-8 text-white flex-col lg:flex-row`}>
            <figure>
                <img className='w-auto' src={clock} alt="Movie" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title font-bold">{heading}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default InfoCard;