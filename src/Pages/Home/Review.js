import React from 'react';

const Review = ({review}) => {
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <p>{review.review}</p>
                </div>
                <div className='flex gap-5 justify-center align-middle'>
                    <div class="avatar p-5">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} />
                        </div>
                    </div>
                <div className='flex justify-center align-middle flex-col'>
                    <h2 className='font-bold'>{review.name}</h2>
                    <p>{review.location}</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Review;