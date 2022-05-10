import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'
import InfoCard from '../InfoCard/InfoCard';
import { accent, primary } from 'daisyui/src/colors';
const Info = () => {
    return (
        <div >
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-6'>
                <InfoCard text="24hrs over Phone, 0900-0000 Except sunday" heading={"Opening Hours"} color="bg-gradient-to-r from-primary to-secondary" clock={clock}></InfoCard>
                <InfoCard text="Nila-Vobon,Mirpur,Dhaka-1206,Bangladesh" heading={"Visit Our Location"} color="bg-accent" clock={marker}></InfoCard>
                <InfoCard text="+880-12899834798" heading={"Contact Us"} color="bg-gradient-to-r from-primary to-secondary" clock={phone}></InfoCard>
            </div>

        </div>
    );
};

export default Info;