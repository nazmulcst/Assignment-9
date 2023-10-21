import React from 'react';
import { useLoaderData } from 'react-router-dom';
import GalleryCardDetail from '../GalleryCardDetail/GalleryCardDetail';

const GalleriesCardDetails = () => {
       const galleryCard = useLoaderData()
       console.log(galleryCard);
       return (
              <div className='grid lg:grid-cols-3'>
                     {
                            
               galleryCard.map(galleryCard => <GalleryCardDetail key={galleryCard.id} galleryCard={galleryCard}></GalleryCardDetail>) 
                     }

                     
              </div>
       );
};

export default GalleriesCardDetails;
