import React from 'react';
const CardDetail = ({card}) => {
       console.log(card)
       const {img, title, description, price,} = card;

       return (
           <div className="card card-compact bg-base-100 shadow-xl relative">
             <figure className="">
               <img
                 className="w-[1000px] h-[400px] rounded-2xl"
                 src={img}
                 alt="Shoes"
               />
             </figure>
             <div className="card-body lg:ml-20">
               <h2 className="card-title text-2xl font-bold">{title}</h2>
               <h2 className="text-xl  font-semibold"> {price}</h2>
               <p>{description}</p>
             </div>

             <div>
             </div>
           </div>
       );
};

export default CardDetail;

