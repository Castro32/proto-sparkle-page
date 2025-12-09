import React from 'react';

import { 
  Sparkles, Star, Zap, Leaf, Flame, 
  ArrowRight
} from 'lucide-react';

export default function PamperPartiesPage() {
  
  const packages = [
    {
      name: "Holiday Parties",
      title: "CELEBRATE & INDULGE",
      desc: "Perfect for festive gatherings, office parties, or a special holiday treat with friends.",
      price: "Enquire for rates",
      image: "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg", // Placeholder, find a suitable image
      color: "text-yellow-400"
    },
    {
      name: "Bridal Packages",
      title: "PRE-WEDDING BLISS",
      desc: "Get wedding-ready with your bridal party – perfect for relaxation and pampering before the big day.",
      price: "Enquire for rates",
      image: "https://images.pexels.com/photos/3997374/pexels-photo-3997374.jpeg", // Placeholder, find a suitable image
      color: "text-cyan-400"
    },
    {
      name: "Girls Day Out",
      title: "FRIENDS & FUN",
      desc: "Gather your girlfriends for a luxurious day of beauty, laughter, and unforgettable memories.",
      price: "Enquire for rates",
      image: "https://images.pexels.com/photos/3865496/pexels-photo-3865496.jpeg", // Placeholder, find a suitable image
      color: "text-green-400"
    },
  ];


  return (
    <div className="min-h-screen font-sans bg-white text-[#E2DBDF]">
      
      <section className="relative py-32 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://images.pexels.com/photos/3762810/pexels-photo-3762810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay for better text readability */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-white text-center">
          <h1 className="text-6xl md:text-7xl font-hatton font-light mb-8 animate-fade-in-down">
            PAMPER – PARTIES
          </h1>
          <p className="text-xl md:text-2xl font-hatton mb-16 animate-fade-in-up delay-200">
            HOLIDAY PARTIES | BRIDAL PACKAGES | GIRLS DAY OUT
          </p>

          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-lg max-w-3xl mx-auto shadow-2xl animate-fade-in delay-400">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              A luxurious, closed-door beauty experience for 5-8 guests, with the entire salon reserved exclusively for your group.
            </p>
            <h2 className="text-3xl md:text-4xl font-hatton text-white mb-6">
              The Experience Includes:
            </h2>
            <ul className="list-none space-y-4 text-left text-lg md:text-xl max-w-sm mx-auto">
              <li className="flex items-center">
                <Sparkles className="mr-3 text-pink-300" size={24} /> Private DJ
              </li>
              <li className="flex items-center">
                <Star className="mr-3 text-yellow-300" size={24} /> Complimentary bottle of bubbly
              </li>
              <li className="flex items-center">
                <Zap className="mr-3 text-purple-300" size={24} /> 15% off when selecting 2-3 services
              </li>
            </ul>
             <a
              href="mailto:info@avyasalon.com" // Replace with actual contact email
              className="mt-12 inline-flex items-center justify-center 
                w-auto px-10 py-4 bg-[#FFC0CB] hover:bg-[#F0A8B8]
                text-[#262626] text-lg tracking-wider rounded-full transition-all duration-300 shadow-lg"
            >
              ENQUIRE NOW <ArrowRight className="ml-3" size={20} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#C1B5B6] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-start mb-16">
          <h2 className="text-4xl md:text-5xl font-hatton font-light text-[#262626] mb-4">
            Our Pamper Party Themes
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#A192A6] to-transparent mb-6" />
          <p className="text-[18px] md:text-[20px] text-[#595959] max-w-md font-hatton">
            Choose the perfect theme for your group's unforgettable pampering experience.
          </p>
        </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {packages.map((pkg, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center">
                
                <div className="relative w-full aspect-[3/4] mb-8 overflow-hidden rounded-t-[100px] rounded-b-[20px] border border-white/10 bg-white/5">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                 
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full flex items-center justify-center border shadow-xl z-10 bg-white">
                    <span className="text-[#262626] text-sm font-bold">{pkg.price}</span>
                  </div>

                </div>
                
                {/* Text Content */}
                <div className="space-y-3 px-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#262626] transition-colors">
                    {pkg.name}
                  </h3>
                  <h4 className="text-[#595959] text-l font-bold uppercase tracking-widest">
                    {pkg.title}
                  </h4>
                  <p className="text-white/90 text-l leading-relaxed max-w-[280px] mx-auto mb-6">
                    {pkg.desc}
                  </p>
                  <a
                    href="mailto:info@avyasalon.com" // Replace with actual contact email for booking enquiries
                    className="inline-flex items-center justify-center 
                      w-[198px] h-14 bg-[#595959] hover:bg-white
                      text-white hover:text-[#262626] 
                      text-sm tracking-wider rounded transition-all duration-300"
                  >
                    ENQUIRE NOW
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}