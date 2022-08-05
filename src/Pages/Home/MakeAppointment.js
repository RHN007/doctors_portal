import React from 'react';
import doctor from '../../assets/images/doctor.png'
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center' style={{background:`url(${appointment})`}} >
            <div className='flex-1 hidden lg:block'> <img className='mt-[-150px]' src={doctor} alt="" /> </div>
            <div className='flex-1 justify-center align-middle flex flex-col gap-4 pr-8'>
                <h1 className='text-secondary text-3xl font-bold '>Appointment</h1>
                <h2 className='text-3xl font-semibold text-white'>Make An Appointment Today</h2>
                <p className='text-white text-ellipsis text-justify ' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                <PrimaryButton>Get Appointment</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;