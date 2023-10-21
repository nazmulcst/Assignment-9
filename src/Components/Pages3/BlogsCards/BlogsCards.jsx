import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogsCardsDetails from '../BlogsCardsDetails/BlogsCardDetails';


const BlogsCards = () => {
       const blogs = useLoaderData();
       console.log(blogs);
       return (
              <div className=" my-10 ">
                     {
                            blogs.map(blogs => <BlogsCardsDetails key={blogs.id} blogs={blogs}></BlogsCardsDetails> )

                     }
                     
              </div>
       );
};

export default BlogsCards;
