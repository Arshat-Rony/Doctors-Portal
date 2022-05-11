import React from 'react';

const Review = ({ review }) => {
    const { text, name, place, img } = review;
    return (
        <div className='drop-shadow-sm shadow-accent mt-16 lg:mt-0'>
            <div className='flex justify-start items-center gap-5 mb-10 bg-primary w-full pl-3 py-2'>
                <img src={img} alt="man-pic" />
                <div>
                    <p className='text-2xl font-bold'>{name}</p>
                    <p className=''>{place}</p>
                </div>
            </div>
            <p className='text-xl'>{text}</p>
        </div>
    );
};

export default Review;











// Github - Pick two best projects(add readme file and live website link)
// Linkedin Profile
// Personal website + Resume
// Minimum 5ta template - (color, logo, content add, netlify /)

// Amarbay.netlify.com
// amarbay.github.io

// Category:
// =======
// NFT Landing Page  (3-4ta templates) - minimum $200-300$
// Product Landing page (jkono niche) - (3templates)
// Business Website - 3-5 page
// Agency website - 3-5 page
// Restaurant -
// Photography -
// Personal (2ta demo)
// Saloon - (single template)
// Ecommerce - (single page ecommerce)
// Museum

// — html, css, bootstrap, tailwind, js, - (....)
// — react -
// Optional
// Hosting - 10gb
// ======
// .xyz, .fi, - kom dami domain er apnr best project gula host krben
