import React from "react";

const StayConnected: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f5f1ed]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-light text-[#2a2a2a]">
            *STAY CONNECTED
          </h2>
          <p className="text-lg font-playfair text-[#2a2a2a]">
            Follow Us On Instagram
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=500&fit=crop"
            alt="Spa interior"
            className="w-full h-64 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=600&fit=crop"
            alt="Spa reception"
            className="w-full h-64 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=500&fit=crop"
            className="w-full h-64 object-cover"
            alt="Spa treatment room"
          />
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=600&fit=crop"
            alt="Spa products"
            className="w-full h-64 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=500&fit=crop"
            alt="Spa couple"
            className="w-full h-64 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=600&fit=crop"
            alt="Spa oils"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Visit Instagram Button */}
        <div className="flex justify-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#8b6f47] hover:bg-[#6d5638] text-white px-10 py-4 text-lg font-playfair tracking-wider"
          >
            Visit our Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default StayConnected;
