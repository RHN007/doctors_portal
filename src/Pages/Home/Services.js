import React from 'react';

import cavity from '../../assets/images/cavity.png'
import flouride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import care from '../../assets/images/treatment.png'
import Service from './Service';
import PrimaryButton from '../Shared/PrimaryButton';


const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Floride Treatment',
            description: 'Flaura Treatment is good',
            img: flouride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'You can do it for your Broken Teeth',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'You can do it by cleaning your teeth.',
            img: whitening
        }
    ]
    return (
        <div className='mt-16'>
            <h1 className='text-secondary font-bold text-center'>OUR SERVICES</h1>
            <h2 className=' text-2xl font-bold text-center'>Services We Provide</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}></Service>)
                }

            </div>
            <div className="care">
                <div class="hero min-h-screen bg-base-100">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={care} class="max-w-md rounded-lg shadow-2xl" />
                        <div className='w-1/2 ml-6'>
                            <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                          <PrimaryButton>Get Started</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;