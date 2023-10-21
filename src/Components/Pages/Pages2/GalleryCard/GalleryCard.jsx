import React from 'react';
import { Link } from 'react-router-dom';

const GalleryCard = ({ Galleries }) => {
  const { img, name,id } = Galleries;

  return (
    <div className="hero my-5 ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={img}
          className="max-w-full lg:max-w-sm rounded-lg shadow-2xl mb-4 lg:mb-0"
        />
        <div className="lg:ml-4">
          <h1 className="text-3xl text-[#e64a19] font-bold mb-2 lg:mb-4">
            All Social Event Photo Gallery!
          </h1>
          <p className="py-2 lg:py-6 text-3xl font-semibold">
            This is enough service. If you want to see the gallery of all our
            services, then click on the More button
          </p>
          <button className="btn btn-primary">
            <Link to={`/galleries/${id}`}>Click more</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;