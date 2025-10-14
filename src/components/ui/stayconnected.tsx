import React from "react";

const StayConnected: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FFFFFF]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-light text-[#2a2a2a]">
            STAY CONNECTED
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
            src="https://plus.unsplash.com/premium_photo-1674841252227-02aff6975847?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
            alt="Spa reception"
            className="w-full h-64 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&h=600&fit=crop"
            className="w-full h-64 object-cover"
            alt="Spa treatment room"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1674841253522-893a6a0077c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
            alt="Spa products"
            className="w-full h-64 object-cover"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1674841252680-652b820914ba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
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
            className="bg-[#262626] hover:bg-[#B0C2B0] text-white px-10 py-4 text-lg font-playfair tracking-wider"
          >
            Visit our Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default StayConnected;
