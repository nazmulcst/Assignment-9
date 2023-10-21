import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({cards}) => {
       const { img, price, title, description, id} = cards;
       return (
         <div className="card  bg-base-100 shadow-xl">
           <figure>
             <img className="w-96" src={img} alt="Shoes" />
           </figure>
           <div className="card-body bg-white">
             <h1 className="card-title">{title}</h1>
             <h2 className="card-title">{price}</h2>

             {description.length > 20 ? (
               <p>
                 {description.slice(0, 95)}{" "}
                 <Link className="">Read More</Link>
               </p>
             ) : (
               <p>{description}</p>
             )}
             <div className="card-actions justify-start">
               <button className="btn btn-primary ">
                 <Link to={`/card/${id}`}>Details</Link>
               </button>
             </div>
           </div>
         </div>
       );
};

export default Card;