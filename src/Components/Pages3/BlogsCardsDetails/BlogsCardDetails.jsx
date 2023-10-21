import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';

const BlogsCardsDetails = ({blogs}) => {
  const {img, title} = blogs;

       return (
         <div className="w-full flex-row my-6">
           <Card className="m-0 w-full md:w-2/3 lg:w-full flex flex-col md:flex-row">
             <CardHeader
               shadow={false}
               floated={false}
               className="w-full md:w-3/5 lg:w-2/5 rounded-t md:rounded-r-none md:rounded-l-lg"
             >
               <img
                 src={img}
                 alt="card-image"
                 className="h-full w-full object-cover rounded-t md:rounded-t-none md:rounded-l-lg md:rounded-r-none"
               />
             </CardHeader>
             <CardBody className="w-full md:w-2/3 lg:w-3/5">
               <Typography variant="h6" color="gray" className="mb-4 uppercase">
                 startups
               </Typography>
               <Typography variant="h4" color="blue-gray" className="mb-2">
                 {title}
               </Typography>
               <Typography color="gray" className="mb-8 font-normal">
                 {description}
               </Typography>
               <a href="#" className="inline-block">
                 <Button variant="text" className="flex items-center gap-2">
                   Learn More
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     strokeWidth={2}
                     className="h-4 w-4"
                   >
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                     />
                   </svg>
                 </Button>
               </a>
             </CardBody>
           </Card>
         </div>
       );
};

export default BlogsCardsDetails;