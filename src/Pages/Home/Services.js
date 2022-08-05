import React from 'react';

import cavity from '../../assets/images/cavity.png'
import flouride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';


const Services = () => {
    const services=[
    {
        _id:1,
        name:'Floride Treatment',
        description:'Flaura Treatment is good',
        img: flouride
    },
    {
        _id:2,
        name:'Cavity Filling',
        description:'You can do it for your Broken Teeth',
        img: cavity
    },
    {
        _id:3,
        name:'Teeth Whitening',
        description:'You can do it by cleaning your teeth.',
        img: whitening
    }
    ]
    return (
        <div >
            <h1 className='text-secondary font-bold text-center'>OUR SERVICES</h1>
            <h2 className=' text-2xl font-bold text-center'>Services We Provide</h2>
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
           
           {
            services.map(service => <Service
            key={service._id}
            service={service}></Service>)
           }
            
            </div> 
        </div>
    );
};

export default Services;