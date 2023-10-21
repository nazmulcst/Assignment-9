import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-screen-md mx-auto p-4">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center p-8 rounded-md mb-8">
        <h1 className="text-4xl font-extrabold mb-4">
          Welcome to the Grand Social Event
        </h1>
        <p className="mt-2 text-lg">
          Where every moment is a celebration and connections become cherished
          memories.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Social Mission</h2>
        <p className="text-gray-800 leading-relaxed">
          At our core, we are committed to creating a vibrant space where joy,
          laughter, and lasting friendships thrive. Join us in bringing people
          together and creating unforgettable experiences.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Meet the Social Architects</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col items-center">
            <img
              src="https://i.ibb.co/BsGb3TZ/team.jpg"
              alt="Team Member 1"
              className="rounded-full w-32 h-32 object-cover mb-2 border-4 border-purple-600 hover:shadow-lg"
            />
            <p className="font-semibold text-lg">John Doe</p>
            <p className="text-gray-800">Master of Ceremonies</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://i.ibb.co/WGzztdS/team.webp"
              alt="Team Member 2"
              className="rounded-full w-32 h-32 object-cover mb-2 border-4 border-purple-600 hover:shadow-lg"
            />
            <p className="font-semibold text-lg">Jane Smith</p>
            <p className="text-gray-800">Celebration Specialist</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4">
          Get Involved in the Celebration
        </h2>
        <p className="text-gray-800 leading-relaxed">
          Whether you have questions, ideas, or just want to be part of the
          festivity, feel free to connect with us. Let's work together to make
          this event truly memorable!
        </p>
        <p className="mt-2 text-purple-600 font-semibold">
          Email: info@socialevent.com
        </p>
        <p className="text-purple-600 font-semibold">Phone: (555) 123-4567</p>
      </section>
      
    </div>
  );
};

export default AboutUs;