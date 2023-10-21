import React from 'react';

const Team = () => {
       return (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5 p-2">
           <div className="card  bg-gray-400 h-[300px]">
             <img
               className="rounded-full object-cover h-20 mx-auto w-20 mt-10"
               src="https://i.ibb.co/tCQZkGJ/hd.jpg"
               alt="Shoes"
             />
             <div className="p-6">
               <h2 className="card-title text-center text-sm  h-5 mt-12">
                 Absolutely delighted with the birthday celebration organized by
                 this team! From personalized decor to seamless coordination,
                 they turned my special day into an extraordinary experience.
               </h2>
               <div className="card-actions justify-center "></div>
             </div>
           </div>
           <div className="card  bg-gray-400 h-[300px]">
             <img
               className=" object-cover rounded-full  h-20 mx-auto w-20 mt-10"
               src="https://i.ibb.co/nQtgZh8/images.jpg"
               alt="Shoes"
             />
             <div className="p-6">
               <h1 className="card-title text-center text-sm  h-5 mt-12">
                 The team's dedication and creativity added a special touch,
                 making it a day we'll forever cherish. Grateful for the
                 unforgettable memories they helped create on our anniversary!
               </h1>
               <div className="card-actions justify-center "></div>
             </div>
           </div>
           <div className="card  bg-gray-400 h-[300px]">
             <img
               className=" object-cover rounded-full  h-20 mx-auto w-20 mt-10"
               src="https://i.ibb.co/9GbL0qc/lovepik.png"
               alt="Shoes"
             />
             <div className="p-6">
               <h1 className="card-title text-center text-sm  h-5 mt-12">
                 The team's dedication and creativity added a special touch,
                 making it a day we'll forever cherish. Grateful for the
                 unforgettable memories they helped create on our anniversary!
               </h1>
               <div className="card-actions justify-center "></div>
             </div>
           </div>
         </div>
       );
};

export default Team;