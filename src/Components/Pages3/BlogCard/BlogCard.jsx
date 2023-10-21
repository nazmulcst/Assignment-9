import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blogs}) => {
       const {title, img, id} = blogs;
       return (
         <div>
           <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto my-4">
             <figure>
               <img src={img} alt="Shoes" />
             </figure>
             <div className="card-body">
               <h2 className="card-title">{title}</h2>
               <p>
                 Embark on a visual journey through a lively social event, where
                 smiles are contagious, and friendships are forged. Experience
                 the essence of community in this dynamic video blog.
               </p>

               <div className="card-actions">
                 <button className="btn btn-primary">
                   <Link to={`/blogs/${id}`}>Click more</Link>
                 </button>
               </div>
             </div>
           </div>
         </div>
       );
};

export default BlogCard;