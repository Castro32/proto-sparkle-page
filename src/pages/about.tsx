import React from "react";

const AvyaSpaPage = () => {
  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{
        fontFamily: "'Montserrat', 'Open Sans', sans-serif",
      }}
    >
      {/* Hero Section */}
      <section
        className="relative h-screen overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=400&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative h-full flex items-end pb-20 px-4">
          <div className="text-left text-white max-w-2xl">
            <p
              className="text-sm tracking-widest mb-3 uppercase opacity-90"
              style={{ fontFamily: "'Hatton', sans-serif" }}
            >
              Where Science Meets Beauty
            </p>
            <h1
              className="text-5xl md:text-6xl font-light mb-6 leading-tight"
              style={{ fontFamily: "'Hatton', sans-serif" }}
            >
              Nairobi's Premier<br />Longevity Beauty Spa
            </h1>
            <p
              className="text-base leading-relaxed opacity-90"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              At Avya, beauty is science — and science is personal. We are Kenya's first salon dedicated to science-meets-beauty treatments, combining advanced technology, global techniques, and luxury beauty rituals. Whether you're seeking a transformative experience or simply in search of a high-performance beauty partner, we deliver real results in a space designed for comfort, wellness, and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-2/5 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&h=500&fit=crop"
                  alt="Beauty Treatment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5">
              <h2
                className="text-4xl font-light mb-6 text-gray-800"
                style={{
                  fontFamily: "'Hatton', sans-serif",
                  color: "#262626",
                }}
              >
                Beauty is Science, And Science is Personal
              </h2>
              <p
                className="text-base leading-relaxed text-gray-600"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  color: "#595959",
                }}
              >
                Avya is where the future of beauty meets luxurious indulgence, exclusively. As Kenya's first science-meets-beauty salon and hair factory salon, Avya is redefining beauty standards for a discerning clientele. We fuse advanced scientific research with artistry within an elevated, exclusive environment. Avya is not just a salon; it is Nairobi's premier longevity beauty spa, offering advanced treatments, rare international techniques, and premium glam services, all tailored to meet the unique needs of each guest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "#E2DBDF" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-4xl font-light mb-2 text-gray-800"
            style={{
              fontFamily: "'Hatton', sans-serif",
              color: "#262626",
            }}
          >
            What Makes Avya Different
          </h2>
          <p
            className="text-base mb-16 text-gray-600"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              color: "#595959",
            }}
          >
            Innovation, Expertise, and Care in Every Service
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Advanced Tricology", description: "Evidence-based hair and scalp solutions using cutting-edge technology." },
              { title: "Premium Glam Services", description: "Luxury hair, skin, and aesthetic treatments for transformative results." },
              { title: "Longevity Focus", description: "Treatments that go beyond surface beauty, promoting wellness." },
              { title: "Exclusive Experience", description: "Aesthetics, appointments, and ambiance who demanded the best." },
              { title: "Expert-Led Personalized Care", description: "Every service is tailored by internationally trained experts." },
              { title: "Special Pricing Events", description: "Exclusive moments to enjoy your trusted treatments at a special cost." },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl text-left hover:bg-opacity-60 transition-all duration-300"
                style={{
                  backgroundColor: "#C1B5C6",
                  color: "#262626",
                }}
              >
                <div className="mb-4" style={{ color: "#B0C2B0" }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3
                  className="text-xl mb-3 font-light"
                  style={{
                    fontFamily: "'Hatton', sans-serif",
                    color: "#262626",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    color: "#595959",
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AvyaSpaPage;
