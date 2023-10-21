import React from 'react';
import { useLoaderData } from 'react-router-dom';
import GalleryCard from '../GalleryCard/GalleryCard';
// import GalleryCard from '../GalleryCard/GalleryCard';


const Galleries = () => {
     
       const Galleries = useLoaderData()

       console.log(Galleries)
       return (
         <div>
           <h1 className="text-center text-4xl text-[#FBB03B] bg-[#1BFFFF] p-4 rounded-lg font-bold mt-5">
             Social Event Gallery
           </h1>
           <div>
              {
                     Galleries.map(Galleries =><GalleryCard Galleries={Galleries}></GalleryCard>)
              }
           </div>

           
         </div>
       );
};

export default Galleries;

