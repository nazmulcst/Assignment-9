import React from 'react';
import Slider from '../../Header/Slider/Slider';
import ServicesCards from '../ServicesCards/ServicesCards';

import Card from '../Card/Card';
import { useLoaderData } from 'react-router-dom';
import Team from '../Team/Team';
import Review from '../Review/Review';



const Home = () => {

       const cards = useLoaderData()
       console.log(cards)

       return (
         <div className="space-y-8">
           <Slider></Slider>
           <ServicesCards></ServicesCards>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
             {cards.map((cards) => (
               <Card key={cards.id} cards={cards}></Card>
             ))}
           </div>

           <div>
             <h1 className="text-center text-3xl font-bold text-amber-700">
               Testimonial
             </h1>
             <Team></Team>
           </div>

           <div>
              <h1 className='text-center font-bold text-3xl mb-3'>Customer Review</h1>

              <Review></Review>
           </div>
         </div>
       );
};

export default Home;

