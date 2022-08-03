import React from 'react';

const InforCard = ({img,cardTitle,bgClass,cardDetails}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`} >
        <figure className='pl-5'>
            <img src={img} alt="Album"/></figure>
        <div class="card-body text-white ">
          <h2 class="card-title">{cardTitle}</h2>
          <p>{cardDetails}</p>
         
        </div>
      </div>
    );
};

export default InforCard;