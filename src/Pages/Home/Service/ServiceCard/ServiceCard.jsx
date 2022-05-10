import React from 'react';

const ServiceCard = ({ img, heading, text }) => {
    return (
        <div class="card  bg-base-100 shadow-xl pt-14 pb-9 px-14">
            <figure class="px-10 pt-10">
                <img className='w-auto' src={img} alt="teeth-img" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{heading}</h2>
                <p>{text.slice(0, 50)}</p>
            </div>
        </div>
    );
};

export default ServiceCard;