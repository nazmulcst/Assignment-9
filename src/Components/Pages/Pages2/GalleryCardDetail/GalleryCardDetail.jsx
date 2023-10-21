import React from 'react';


const GalleryCardDetail = ({ galleryCard }) => {
  const { img, price } = galleryCard;
  console.log(galleryCard);

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={img}
          className=" w-[400px] h-[200px] rounded-lg shadow-2xl"
        />
       
      </div>
    </div>
  );
};

export default GalleryCardDetail;

