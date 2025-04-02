import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-20">

      <div
        className="relative bg-cover bg-center min-h-screen flex items-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Welcome to ElectroPro
          </h1>
          <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto">
            Innovate your world with our cutting-edge electronics—designed for
            performance, built for the future.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/products"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

    
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-600">10+</h3>
              <p className="mt-2 text-gray-600">Years of Innovation</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">50+</h3>
              <p className="mt-2 text-gray-600">Countries Served</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">1M+</h3>
              <p className="mt-2 text-gray-600">Products Sold</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">100%</h3>
              <p className="mt-2 text-gray-600">Customer Focus</p>
            </div>
          </div>
        </div>
      </div>

     
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Discover Our Top Electronics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Smart Chip Pro",
                desc: "Experience unparalleled processing power with our latest 5nm chip, optimized for AI and multitasking.",
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
                price: "$49.99",
              },
              {
                name: "IoT Hub",
                desc: "Control your smart home with ease—Wi-Fi, Bluetooth,Remote control, and Zigbee in one sleek package.",
                img: "https://i.pinimg.com/736x/f6/25/cc/f625cc9f7ba46e5373aa259b2214be3f.jpg",
                price: "$89.99",
              },
              {
                name: "Wearable Pulse",
                desc: "Track your fitness journey with real-time heart rate, sleep analysis, and a vibrant OLED display.",
                img: "https://i.pinimg.com/736x/89/b6/86/89b6867af095e09b61e1d01928c4aeff.jpg",
                price: "$129.99",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-md mb-6"
                />
                <h3 className="text-2xl font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-2">{product.desc}</p>
                <p className="text-blue-600 font-bold mt-4">{product.price}</p>
                <button className="mt-6 w-full px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>

      
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose ElectroPro?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="ElectroPro Team"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-blue-600 text-2xl mr-4">✓</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Unmatched Quality
                    </h3>
                    <p className="text-gray-600">
                      Every product undergoes rigorous testing to ensure top
                      performance and durability.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-2xl mr-4">✓</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Innovative Design
                    </h3>
                    <p className="text-gray-600">
                      Our engineers push the boundaries of what electronics can
                      achieve.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-2xl mr-4">✓</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Customer First
                    </h3>
                    <p className="text-gray-600">
                      Dedicated support and a satisfaction guarantee for every
                      purchase.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Connected
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for the latest product updates, tech
            tips, and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md text-white focus:outline-none border borer-2 border-blue-400"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-blue-600 font-semibold shadow-2xl rounded-md hover:bg-gray-100 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
