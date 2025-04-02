import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
     
      <div
        className="relative bg-cover bg-center h-96 flex items-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Our Products
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Discover ElectroPro’s innovative range of electronics—crafted for
            performance, durability, and the future.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Get a Quote
          </Link>
        </div>
      </div>

     
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Explore by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Components",
                desc: "High-performance chips and modules for tech enthusiasts and professionals.",
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
              },
              {
                name: "Smart Devices",
                desc: "IoT hubs and wearables to connect and enhance your daily life.",
                img: "https://i.pinimg.com/736x/4e/d4/e2/4ed4e2a37ce4a5d5e26844b7bc2880fe.jpg",
              },
              {
                name: "Consumer Electronics",
                desc: "Mobiles, cameras, and more for everyday innovation.",
                img: "https://i.pinimg.com/736x/70/07/76/700776b4bba996b0c7f762288c5fe85b.jpg",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.name}
                </h3>
                <p className="text-gray-600 mt-2">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Smart Chip Pro",
                desc: "Next-gen 5nm microchip with AI optimization and low power consumption.",
                img: "https://i.pinimg.com/736x/2a/05/0e/2a050e960a8303398078eaf7d3ee4e57.jpg",
                specs: ["5nm Architecture", "AI-Ready", "1.2W Power"],
                price: "$49.99",
              },
              {
                name: "IoT Hub Elite",
                desc: "Seamless connectivity for your smart home with Wi-Fi, Bluetooth, and Zigbee support.",
                img: "https://i.pinimg.com/736x/db/83/d1/db83d19f8f6240cda757e2ebca62ccba.jpg",
                specs: ["Multi-Protocol", "100m Range", "App-Controlled"],
                price: "$89.99",
              },
              {
                name: "Wearable Pulse X",
                desc: "Fitness tracker with heart rate monitoring, sleep tracking, and water resistance.",
                img: "https://i.pinimg.com/736x/4c/55/34/4c5534fa6d2f66ae1abbf52a7ec52078.jpg",
                specs: ["OLED Display", "IP68 Rating", "10-Day Battery"],
                price: "$129.99",
              },
              {
                name: "Power Module X",
                desc: "Efficient power supply for devices, with compact design and high output.",
                img: "https://i.pinimg.com/736x/bc/fe/57/bcfe57841c4cc4973fc3e732756848a9.jpg",
                specs: ["500W Output", "Compact Size", "Overload Protection"],
                price: "$69.99",
              },
              {
                name: "AudioSync Speaker",
                desc: "Wireless speaker with rich sound, multi-device pairing, and portable design.",
                img: "https://i.pinimg.com/736x/f2/22/91/f22291a8e4e14ffbc8ca28e4f1edb37c.jpg",
                specs: ["20W Output", "Bluetooth 5.0", "8-Hour Playtime"],
                price: "$99.99",
              },
              {
                name: "VisionCam 4K",
                desc: "Security camera with ultra-HD resolution, night vision, and cloud storage.",
                img: "https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
                specs: ["4K Video", "IR Night Vision", "Motion Detection"],
                price: "$149.99",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
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
                <ul className="mt-4 text-sm text-gray-500 list-disc list-inside">
                  {product.specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
                <p className="text-blue-600 font-bold mt-4">{product.price}</p>
                <button className="mt-6 w-full px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <div className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade Your Tech?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Contact us for custom solutions or bulk orders tailored to your
            needs.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
