import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from '../BlogCard/BlogCard';

const Blog = () => {
  const Blogs =useLoaderData()
  console.log(Blogs)
  return (
    <div>
      <h1 className='text-center font-semibold text-3xl text-red-500'>This is Our Blog Section </h1>


      <div>
        {
          Blogs.map(blogs => <BlogCard key={blogs.id} blogs={blogs}></BlogCard>  )
        }
      </div>

      
    </div>
  );
};

export default Blog;

