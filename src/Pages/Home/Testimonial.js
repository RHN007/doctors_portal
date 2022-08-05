import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [{
        _id:1, 
        name: 'Winson Harry',
        review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', 
        img: people1,
        location: 'California'
        
    },
    {
        _id:2, 
        name: 'Romana',
        review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', 
        img: people2,
        location: 'Washington DC'
    }
    ,
    {
        _id:3, 
        name: 'Shi jing Ping',
        review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', 
        img: people3,
        location: 'California'
    }
];

    return (
        <section className='mt-6'>
            <div className='flex flex-col lg:flex-row justify-center lg:justify-around items-center'>
                <div>
                    <h1 className='text-secondary text-bold font-bold'>Testimonial</h1>
                    <h2 className='text-xl md:text-2xl lg:text-3xl'>What Our Patients Says</h2>
                </div>
                <div> <img src={quote} className="w-24 lg:w-36 hidden lg:block" alt="" /></div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;