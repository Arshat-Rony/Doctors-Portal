import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import cavity from "../../../../src/assets/images/cavity.png"
import fluoride from "../../../../src/assets/images/fluoride.png"
import whitening from "../../../../src/assets/images/whitening.png"
const Service = () => {
    return (
        <div className='px-6 text-center mt-32'>
            <h2 className='font-bold  text-2xl text-secondary uppercase'>Our services</h2>
            <p className='text-4xl text-accent'>Service We Provide</p>

            <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 mt-14'>
                <ServiceCard heading="Fluoride Treatment" text="Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities. " img={fluoride}></ServiceCard>
                <ServiceCard heading="Cavity filling" text="The filling will replace the part of your tooth the decay destroyed. During the cavity filling process, your dentist will mold the filling to match the shape of your tooth. " img={cavity}></ServiceCard>
                <ServiceCard heading="Teeth Whitenning" text="The actual whitening process involves the dentist applying a gel made of 15% to 35% hydrogen peroxide to your front teeth. Hydrogen peroxide can penetrate the porous outer layer of your teeth and break apart stain compounds using a chemical reaction called oxidation " img={whitening}></ServiceCard>
            </div>
        </div>
    );
};

export default Service;