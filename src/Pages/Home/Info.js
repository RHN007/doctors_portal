import React from 'react';
import InforCard from './InforCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InforCard img={clock} cardTitle="Opening Hours"  bgClass="bg-gradient-to-r from-secondary to-primary" cardDetails="Lorem Ipsum is simply dummy text of the pri"  ></InforCard>
            <InforCard img={marker} cardTitle="Visit our location" bgClass="bg-accent" cardDetails="Brooklyn, NY 10036, United States" ></InforCard>
            <InforCard img={phone} cardTitle="Contact us now" bgClass="bg-gradient-to-r from-secondary to-primary" cardDetails="+000 123 456789" ></InforCard>
        </div>
    );
};

export default Info;