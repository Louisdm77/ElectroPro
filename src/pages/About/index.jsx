import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
     
      <div
        className="relative bg-cover bg-center h-96 flex items-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            About ElectroPro
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            We’re a team of innovators pushing the boundaries of electronics to
            empower lives and businesses worldwide.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

    
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://i.pinimg.com/736x/e1/19/74/e1197441c6d28b32e8335ff5b52d8b60.jpg"
              alt="ElectroPro Team"
              className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 text-lg">
              Founded in 2015, ElectroPro has grown from a small startup to a
              global leader in electronics innovation. We specialize in
              designing and manufacturing state-of-the-art solutions—ranging
              from microchips to consumer devices—that blend cutting-edge
              technology with reliability and style. Our commitment to quality
              and sustainability drives everything we do, ensuring our products
              meet the needs of today while building a better tomorrow.
            </p>
          </div>
        </div>
      </div>

     
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                We strive to lead the industry by developing groundbreaking
                technologies that redefine what’s possible.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Reliability
              </h3>
              <p className="text-gray-600">
                Every product is engineered to perform consistently, earning the
                trust of our customers worldwide.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We’re committed to eco-friendly practices, minimizing our
                environmental impact at every step.
              </p>
            </div>
          </div>
        </div>
      </div>

   
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h2>
          <div className="space-y-12">
            {[
              {
                year: "2015",
                title: "Founded",
                desc: "ElectroPro began in a garage with a vision to revolutionize electronics.",
                img: "https://i.pinimg.com/736x/46/42/e6/4642e60b61d6b933934a625a7cfa38bc.jpg",
              },
              {
                year: "2018",
                title: "First Product Launch",
                desc: "Introduced the Smart Chip, setting a new standard in processing power.",
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
              },
              {
                year: "2020",
                title: "Global Expansion",
                desc: "Opened offices in Asia and Europe, reaching customers in over 50 countries.",
                img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
              },
              {
                year: "2025",
                title: "Today",
                desc: "A leader in electronics, innovating for a sustainable, connected future.",
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="md:w-1/3">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-md shadow-md"
                  />
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {event.year} - {event.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Alex Carter",
                role: "CEO & Founder",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
              },
              {
                name: "Maria Lin",
                role: "Chief Engineer",
                img: "https://i.pinimg.com/736x/d5/a8/e7/d5a8e799192537aae6c9301655d51d21.jpg",
              },
              {
                name: "James Patel",
                role: "Head of Design",
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
