import React, { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

const Contact = () => {
  const position = [37.7749, -122.4194]; // San Francisco
  const mapRef = useRef(null);
  const leafletMap = useRef(null);

  useEffect(() => {
    if (mapRef.current && !leafletMap.current) {
      leafletMap.current = L.map(mapRef.current, {
        center: position,
        zoom: 14,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(leafletMap.current);

      L.marker(position, { icon: customIcon })
        .addTo(leafletMap.current)
        .bindPopup("ElectroPro HQ")
        .openPopup();

      setTimeout(() => {
        leafletMap.current.invalidateSize();
      }, 100);
    }

    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, []);

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
    
      <div
        className="relative bg-contain bg-center h-96 flex items-center"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/4b/3b/c6/4b3bc6aae255bef0e86cbd14f4aa4b86.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Contact ElectroPro
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            We’re here to assist with inquiries, support, or partnerships. Reach
            out today!
          </p>
        </div>
      </div>

  
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6 text-gray-600">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@electropro.com"
                  className="text-blue-600 hover:text-blue-700 transition duration-300"
                >
                  support@electropro.com
                </a>
                <br />
                <strong>Phone:</strong> +1 (800) 555-1234
                <br />
                <strong>Address:</strong> 123 Tech Lane, San Francisco, CA 94105
              </p>
              <p>
                <strong>Sales:</strong>{" "}
                <a
                  href="mailto:sales@electropro.com"
                  className="text-blue-600 hover:text-blue-700 transition duration-300"
                >
                  sales@electropro.com
                </a>
                <br />
                <strong>Support:</strong> +1 (800) 555-5678
                <br />
                <strong>Hours:</strong> Monday - Friday, 9 AM - 5 PM PST
              </p>
            </div>
            <div
              ref={mapRef}
              className="mt-8 h-[500px] w-full rounded-lg shadow-lg z-0"
              style={{ height: "500px", width: "100%" }}
            ></div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

     
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Global Offices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: "San Francisco, USA",
                address: "123 Tech Lane, San Francisco, CA 94105",
                phone: "+1 (800) 555-1234",
                img: "https://i.pinimg.com/736x/5b/fd/bd/5bfdbd14763b6b4f2dc1e82d6ab24843.jpg",
              },
              {
                city: "Tokyo, Japan",
                address: "456 Innovation St, Shibuya, Tokyo 150-0002",
                phone: "+81 3-1234-5678",
                img: "https://i.pinimg.com/736x/f4/52/d2/f452d211b2b2e5638d74bbaacee347ff.jpg",
              },
              {
                city: "London, UK",
                address: "789 Circuit Rd, London EC1V 2NX",
                phone: "+44 20 1234 5678",
                img: "https://i.pinimg.com/736x/0f/aa/7d/0faa7de2d85ef66bc8ce724e8115f3aa.jpg",
              },
            ].map((office, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={office.img}
                  alt={office.city}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {office.city}
                </h3>
                <p className="text-gray-600 mt-2">{office.address}</p>
                <p className="text-gray-600 mt-1">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How can I reach customer support?",
                a: "Contact us via email at support@electropro.com or call +1 (800) 555-5678 during business hours.",
              },
              {
                q: "Do you offer bulk discounts?",
                a: "Yes, please reach out to sales@electropro.com for custom pricing on bulk orders.",
              },
              {
                q: "What is your return policy?",
                a: "We offer a 30-day return period for unused items in original packaging. See our support page for details.",
              },
              {
                q: "Can I visit an office?",
                a: "Our offices are open to visitors by appointment. Contact us to schedule a visit.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
