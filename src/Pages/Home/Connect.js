import React from 'react';
import connect from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Connect = () => {
    return (
        <section className='mt-12 p-11' style={{ background: `url(${connect})` }}>
            <div className='flex flex-col items-center content-center'>
                <div>
                    <h1 className='text-secondary text-center'>Connect Us </h1>
                    <h2 className='lg:text-2xl text-center text-white'>Stay connected with us</h2>
                </div>

                <div className='md:w-1/3   p-12'>
                    <div className='flex  flex-col gap-6 items-center justify-center'>
                        <input type="text" placeholder="Email" className="input w-full max-w-xs " />
                        <input type="text" placeholder="Subject" className="input input-bordered input-primary w-full   max-w-xs" />
                        <textarea className="textarea w-full " placeholder="Text Here"></textarea></div>
                </div>
                <div >
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Connect;