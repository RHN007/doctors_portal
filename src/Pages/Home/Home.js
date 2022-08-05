import React from 'react';
import Banner from './Banner';
import Connect from './Connect';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services'
import Testimonial from './Testimonial';



const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Connect></Connect>
            
        </div>
    );
};

export default Home;