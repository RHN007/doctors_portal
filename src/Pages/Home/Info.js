import React from 'react';
import InforCard from './InforCard';
import clock from '../../assets/icons/clock.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InforCard img={clock}></InforCard>
            <InforCard img={clock}></InforCard>
            <InforCard img={clock}></InforCard>
        </div>
    );
};

export default Info;