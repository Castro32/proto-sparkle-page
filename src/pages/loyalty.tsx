// import React, { useState, useEffect } from 'react';
// import { Gift, Star, Sparkles, Crown, Calendar, Bell, ShoppingBag, Award, ChevronRight, Check } from 'lucide-react';

// export default function LoyaltyProgram() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeTab, setActiveTab] = useState('overview');
//   const [particles, setParticles] = useState([]);

//   useEffect(() => {
//     setIsVisible(true);
//     const particleArray = Array.from({ length: 30 }, (_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       delay: Math.random() * 5,
//       duration: 8 + Math.random() * 4,
//     }));
//     setParticles(particleArray);
//   }, []);

//   const tiers = [
//     {
//       name: 'Blossom',
//       icon: Sparkles,
//       visits: '0-4 visits',
//       color: 'from-[#C1B5C6] to-[#D4C9D9]',
//       benefits: [
//         'Welcome bonus: 50 points',
//         'Earn 1 point per treatment',
//         'Birthday month surprise',
//         'Seasonal promotions access'
//       ]
//     },
//     {
//       name: 'Radiance',
//       icon: Star,
//       visits: '5-9 visits',
//       color: 'from-[#B0C2B0] to-[#C8D8C8]',
//       benefits: [
//         'All Blossom benefits',
//         'Earn 1.5 points per treatment',
//         'Free upgrade every 5th visit',
//         'Exclusive product samples',
//         'Priority booking access'
//       ]
//     },
//     {
//       name: 'Luxe',
//       icon: Crown,
//       visits: '10+ visits',
//       color: 'from-[#9FA89F] to-[#B0C2B0]',
//       benefits: [
//         'All Radiance benefits',
//         'Earn 2 points per treatment',
//         'Complimentary treatment quarterly',
//         'VIP event invitations',
//         'Personal beauty consultant',
//         '20% off exclusive bundles'
//       ]
//     }
//   ];

//   const perks = [
//     {
//       icon: Gift,
//       title: 'Birthday Perks',
//       description: 'Celebrate your special day with exclusive treatment add-ons and personalized gifts',
//       color: 'from-[#C1B5C6]/20 to-[#D4C9D9]/20'
//     },
//     {
//       icon: Award,
//       title: 'Reward Visits',
//       description: 'Earn free treatments or premium upgrades after every 10 visits',
//       color: 'from-[#B0C2B0]/20 to-[#C8D8C8]/20'
//     },
//     {
//       icon: Bell,
//       title: 'Early Access',
//       description: 'Be the first to experience our newest services and seasonal treatments',
//       color: 'from-[#C1B5C6]/20 to-[#B0C2B0]/20'
//     },
//     {
//       icon: ShoppingBag,
//       title: 'Exclusive Products',
//       description: 'Receive curated product samples and access to limited-edition bundles',
//       color: 'from-[#B0C2B0]/20 to-[#D4C9D9]/20'
//     },
//     {
//       icon: Star,
//       title: 'Special Events',
//       description: 'Join members-only pricing events and seasonal beauty workshops',
//       color: 'from-[#C1B5C6]/20 to-[#C8D8C8]/20'
//     },
//     {
//       icon: Calendar,
//       title: 'Priority Booking',
//       description: 'Skip the wait with preferred appointment slots and same-day availability',
//       color: 'from-[#9FA89F]/20 to-[#B0C2B0]/20'
//     }
//   ];

//   const howItWorks = [
//     {
//       step: '01',
//       title: 'Join the Circle',
//       description: 'Sign up in-salon or online and start earning points from your very first visit'
//     },
//     {
//       step: '02',
//       title: 'Earn Points',
//       description: 'Collect points with every treatment, service, and product purchase'
//     },
//     {
//       step: '03',
//       title: 'Unlock Rewards',
//       description: 'Redeem your points for complimentary treatments, upgrades, and exclusive perks'
//     },
//     {
//       step: '04',
//       title: 'Level Up',
//       description: 'Progress through tiers to unlock increasingly luxurious benefits'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-[#E2DBDF] relative overflow-hidden">
//       {particles.map((particle) => (
//         <div
//           key={particle.id}
//           className="fixed w-1.5 h-1.5 bg-gradient-to-br from-[#B0C2B0] to-[#C1B5C6] rounded-full pointer-events-none"
//           style={{
//             left: `${particle.x}%`,
//             top: `${particle.y}%`,
//             animationDelay: `${particle.delay}s`,
//             animationDuration: `${particle.duration}s`,
//             opacity: 0.3,
//             animation: 'float ease-in-out infinite, drift linear infinite',
//           }}
//         />
//       ))}

//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-30px); }
//         }
//         @keyframes drift {
//           0% { transform: translateX(0px); }
//           100% { transform: translateX(20px); }
//         }
//         @keyframes shimmer {
//           0% { background-position: -200% center; }
//           100% { background-position: 200% center; }
//         }
//         @keyframes glow {
//           0%, 100% { box-shadow: 0 0 30px rgba(176, 194, 176, 0.4); }
//           50% { box-shadow: 0 0 60px rgba(176, 194, 176, 0.7); }
//         }
//         @keyframes pulse-scale {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//         }
//       `}</style>

//       <section className="relative min-h-screen flex items-center justify-center px-4 md:px-12 lg:px-20 py-20 bg-gradient-to-br from-[#E2DBDF] via-[#D4C9D9] to-[#E2DBDF]">
//         <div className="absolute inset-0 opacity-40">
//           <div className="absolute top-20 left-20 w-96 h-96 bg-[#C1B5C6]/30 rounded-full blur-[120px] animate-[pulse-scale_8s_ease-in-out_infinite]" />
//           <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#B0C2B0]/30 rounded-full blur-[120px] animate-[pulse-scale_10s_ease-in-out_infinite]" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/20 rounded-full blur-[150px]" />
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto text-center">
//           <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//             <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-lg">
//               <Crown className="w-5 h-5 text-[#B0C2B0]" />
//               <p className="text-[#262626] text-sm font-semibold tracking-wider">EXCLUSIVE LOYALTY PROGRAM</p>
//             </div>
            
//             <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-[#262626] mb-6 leading-tight">
//               Introducing the
//               <br />
//               <span className="bg-gradient-to-r from-[#C1B5C6] via-[#B0C2B0] to-[#C1B5C6] bg-clip-text text-transparent font-light bg-[length:200%_auto] animate-[shimmer_4s_ease-in-out_infinite]">
//                 Avya Circle
//               </span>
//             </h1>
            
//             <p className="text-2xl md:text-3xl font-light text-[#595959] mb-8 leading-relaxed">
//               Experience Beauty With Benefits
//             </p>
            
//             <p className="text-lg md:text-xl text-[#595959]/90 max-w-3xl mx-auto leading-relaxed mb-12">
//               Our exclusive loyalty program rewards you for investing in your beauty and wellness journey. 
//               Earn points every visit and unlock elevated experiences along the way.
//             </p>
            
//             <div className="flex flex-wrap gap-4 justify-center">
//               <a
//                 href="#join"
//                 className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#595959] via-[#262626] to-[#595959] hover:from-[#262626] hover:via-[#595959] hover:to-[#262626] text-white font-semibold text-base transition-all duration-700 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 group bg-[length:200%_100%]"
//               >
//                 Join the Circle
//                 <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
//               </a>
              
//               <a
//                 href="#perks"
//                 className="px-10 py-5 rounded-2xl bg-white/60 backdrop-blur-md hover:bg-white text-[#262626] font-semibold text-base transition-all duration-700 border border-white/50 hover:border-white shadow-lg hover:shadow-xl hover:scale-105"
//               >
//                 Explore Benefits
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="perks" className="py-24 md:py-32 px-4 md:px-12 lg:px-20 bg-[#E2DBDF] relative">
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C1B5C6]/15 rounded-full blur-[120px]" />
//           <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#B0C2B0]/15 rounded-full blur-[120px]" />
//         </div>

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="mb-20 text-center">
//             <h2 className="text-4xl md:text-6xl font-light text-[#262626] mb-6 leading-tight">
//               Exclusive Member Perks
//             </h2>
//             <div className="h-1.5 w-32 bg-gradient-to-r from-[#C1B5C6] via-[#B0C2B0] to-[#C1B5C6] rounded-full mx-auto mb-6" />
//             <p className="text-lg md:text-xl text-[#595959] leading-relaxed max-w-3xl mx-auto">
//               Enjoy a world of benefits designed to enhance every aspect of your beauty journey
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//             {perks.map((perk, index) => (
//               <div
//                 key={index}
//                 className="p-8 rounded-[28px] bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 relative overflow-hidden group"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-br ${perk.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
//                 <div className="relative z-10">
//                   <div className="p-4 rounded-2xl bg-gradient-to-br from-[#C1B5C6]/20 via-[#B0C2B0]/15 to-[#C1B5C6]/20 inline-block mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
//                     <perk.icon className="w-8 h-8 text-[#B0C2B0]" />
//                   </div>
                  
//                   <h3 className="text-xl font-semibold text-[#262626] mb-3">
//                     {perk.title}
//                   </h3>
                  
//                   <p className="text-[#595959] leading-relaxed">
//                     {perk.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-24 md:py-32 px-4 md:px-12 lg:px-20 bg-gradient-to-b from-[#E2DBDF] to-[#D4C9D9] relative">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#B0C2B0]/20 rounded-full blur-[150px]" />
//         </div>

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="mb-20 text-center">
//             <h2 className="text-4xl md:text-6xl font-light text-[#262626] mb-6 leading-tight">
//               Membership Tiers
//             </h2>
//             <div className="h-1.5 w-32 bg-gradient-to-r from-[#C1B5C6] via-[#B0C2B0] to-[#C1B5C6] rounded-full mx-auto mb-6" />
//             <p className="text-lg md:text-xl text-[#595959] leading-relaxed max-w-3xl mx-auto">
//               Progress through our tiers and unlock increasingly luxurious rewards
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {tiers.map((tier, index) => (
//               <div
//                 key={index}
//                 className={`p-10 rounded-[32px] bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl border-2 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-3 relative overflow-hidden group ${
//                   index === 2 ? 'border-[#B0C2B0] lg:scale-105' : 'border-white/50'
//                 }`}
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
                
//                 {index === 2 && (
//                   <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-[#B0C2B0]/30 to-transparent rounded-full blur-2xl" />
//                 )}

//                 <div className="relative z-10">
//                   <div className={`p-5 rounded-2xl bg-gradient-to-br ${tier.color} inline-block mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 animate-[glow_3s_ease-in-out_infinite]`}>
//                     <tier.icon className="w-10 h-10 text-white" />
//                   </div>
                  
//                   <h3 className="text-3xl font-semibold text-[#262626] mb-2">
//                     {tier.name}
//                   </h3>
                  
//                   <p className="text-sm text-[#595959] font-medium mb-8 uppercase tracking-wider">
//                     {tier.visits}
//                   </p>
                  
//                   <div className="space-y-4">
//                     {tier.benefits.map((benefit, idx) => (
//                       <div key={idx} className="flex items-start gap-3">
//                         <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center mt-0.5`}>
//                           <Check className="w-3 h-3 text-white" />
//                         </div>
//                         <p className="text-[#595959] leading-relaxed text-sm">
//                           {benefit}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-24 md:py-32 px-4 md:px-12 lg:px-20 bg-[#D4C9D9] relative">
//         <div className="absolute inset-0 opacity-25">
//           <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#C1B5C6]/20 rounded-full blur-[120px]" />
//         </div>

//         <div className="max-w-6xl mx-auto relative z-10">
//           <div className="mb-20 text-center">
//             <h2 className="text-4xl md:text-6xl font-light text-[#262626] mb-6 leading-tight">
//               How It Works
//             </h2>
//             <div className="h-1.5 w-32 bg-gradient-to-r from-[#C1B5C6] via-[#B0C2B0] to-[#C1B5C6] rounded-full mx-auto mb-6" />
//             <p className="text-lg md:text-xl text-[#595959] leading-relaxed max-w-3xl mx-auto">
//               Start earning rewards in four simple steps
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {howItWorks.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative"
//               >
//                 <div className="p-8 rounded-[28px] bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 relative overflow-hidden group h-full">
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#C1B5C6]/5 via-transparent to-[#B0C2B0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
//                   <div className="relative z-10">
//                     <div className="text-6xl font-extralight text-[#B0C2B0]/30 mb-4">
//                       {item.step}
//                     </div>
                    
//                     <h3 className="text-xl font-semibold text-[#262626] mb-3">
//                       {item.title}
//                     </h3>
                    
//                     <p className="text-[#595959] leading-relaxed">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
                
//                 {index < howItWorks.length - 1 && (
//                   <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
//                     <ChevronRight className="w-6 h-6 text-[#B0C2B0]" />
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="join" className="py-24 md:py-32 px-4 md:px-12 lg:px-20 bg-gradient-to-br from-[#D4C9D9] via-[#E2DBDF] to-[#D4C9D9] relative">
//         <div className="absolute inset-0 opacity-40">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#C1B5C6]/20 to-[#B0C2B0]/20 rounded-full blur-[150px] animate-[pulse-scale_12s_ease-in-out_infinite]" />
//         </div>

//         <div className="max-w-4xl mx-auto relative z-10">
//           <div className="p-12 md:p-16 rounded-[40px] bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl border-2 border-white/60 shadow-2xl text-center relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#C1B5C6]/10 to-transparent rounded-full blur-3xl" />
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#B0C2B0]/10 to-transparent rounded-full blur-3xl" />
            
//             <div className="relative z-10">
//               <div className="p-5 rounded-2xl bg-gradient-to-br from-[#C1B5C6]/20 via-[#B0C2B0]/15 to-[#C1B5C6]/20 inline-block mb-8 shadow-lg animate-[glow_3s_ease-in-out_infinite]">
//                 <Crown className="w-12 h-12 text-[#B0C2B0]" />
//               </div>
              
//               <h2 className="text-4xl md:text-5xl font-light text-[#262626] mb-6 leading-tight">
//                 Ready to Join the Circle?
//               </h2>
              
//               <p className="text-lg text-[#595959] leading-relaxed mb-10 max-w-2xl mx-auto">
//                 Start your journey today and experience the difference of being an Avya Circle member. 
//                 Your first reward is just one visit away.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <a
//                   href="/contact"
//                   className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#595959] via-[#262626] to-[#595959] hover:from-[#262626] hover:via-[#595959] hover:to-[#262626] text-white font-semibold text-base transition-all duration-700 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3 group bg-[length:200%_100%]"
//                 >
//                   Sign Up Now
//                   <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
//                 </a>
                
//                 <a
//                   href="tel:+254116444433"
//                   className="px-10 py-5 rounded-2xl bg-white/60 backdrop-blur-md hover:bg-white text-[#262626] font-semibold text-base transition-all duration-700 border border-white/50 hover:border-white shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3"
//                 >
//                   Call to Enroll
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { Crown, Sparkles, Star, Gift, ChevronRight, Check } from 'lucide-react';

export default function LoyaltyProgram() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const benefits = [
    'Birthday perks and treatment add-ons',
    'Free treatments or upgrades after 10 visits',
    'Early access to new services',
    'Exclusive product samples & bundles',
    'Special pricing events',
    'Priority booking privileges'
  ];

  return (
    <div className="min-h-screen bg-[#E2DBDF] relative overflow-hidden">
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes scale-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes draw-line {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-12 lg:px-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute top-20 left-[10%] w-[600px] h-[600px] bg-[#C1B5C6]/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-[10%] w-[600px] h-[600px] bg-[#B0C2B0]/20 rounded-full blur-[150px]" />
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[15%] animate-[float-slow_8s_ease-in-out_infinite]">
            <Sparkles className="w-8 h-8 text-[#C1B5C6]/40" />
          </div>
          <div className="absolute top-[60%] right-[20%] animate-[float-slow_10s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}>
            <Star className="w-10 h-10 text-[#B0C2B0]/40" />
          </div>
          <div className="absolute bottom-[30%] left-[25%] animate-[float-slow_12s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}>
            <Crown className="w-12 h-12 text-[#C1B5C6]/30" />
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-8 px-8 py-4 rounded-full bg-gradient-to-r from-white/30 via-white/50 to-white/30 backdrop-blur-xl border border-white/40 shadow-xl animate-[scale-pulse_4s_ease-in-out_infinite]">
              <Crown className="w-6 h-6 text-[#B0C2B0]" />
              <span className="text-[#262626] text-sm font-bold tracking-[0.2em] uppercase">Exclusive Loyalty Program</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight text-[#262626] mb-4 leading-[0.95]">
              Introducing the
            </h1>
            <h2 className="text-7xl md:text-9xl lg:text-[11rem] font-light mb-8 leading-[0.95]">
              <span className="bg-gradient-to-r from-[#C1B5C6] via-[#B0C2B0] to-[#C1B5C6] bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_4s_ease-in-out_infinite]">
                Avya Circle
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-3xl md:text-4xl font-light text-[#595959] mb-6 italic">
              Experience Beauty With Benefits
            </p>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-[#595959]/80 max-w-4xl mx-auto leading-relaxed mb-16 font-light">
              Our exclusive loyalty program rewards you for investing in your beauty and wellness journey. 
              Earn points every visit and unlock elevated experiences along the way.
            </p>
            
            {/* CTA */}
            <a
              href="#benefits"
              className="inline-flex items-center gap-3 px-12 py-6 rounded-full bg-[#262626] hover:bg-[#595959] text-white text-lg font-medium transition-all duration-700 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:scale-105 group"
            >
              Discover Your Benefits
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
          <span className="text-sm text-[#595959]/60 tracking-wider">SCROLL</span>
          <div className="w-px h-16 bg-gradient-to-b from-[#595959]/60 to-transparent" />
        </div>
      </section>

      {/* Benefits Section - Minimal List Design */}
      <section id="benefits" className="py-32 md:py-48 px-4 md:px-12 lg:px-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Title */}
            <div>
              <h2 className="text-5xl md:text-7xl font-light text-[#262626] mb-6 leading-tight">
                Member
                <br />
                <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent">
                  Perks
                </span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] rounded-full mb-8" />
              <p className="text-xl text-[#595959] leading-relaxed font-light">
                Every visit brings you closer to exclusive rewards, personalized experiences, and luxury treatments.
              </p>
            </div>

            {/* Right Side - Benefits List */}
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 group cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#C1B5C6] to-[#B0C2B0] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-xl md:text-2xl text-[#262626] leading-relaxed font-light group-hover:translate-x-2 transition-transform duration-500">
                      {benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tiers Section - Timeline Design */}
      <section className="py-32 md:py-48 px-4 md:px-12 lg:px-20 bg-gradient-to-b from-transparent via-[#D4C9D9]/30 to-transparent relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-light text-[#262626] mb-6 leading-tight">
              Your Journey
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] rounded-full mx-auto mb-6" />
            <p className="text-xl text-[#595959] leading-relaxed font-light max-w-3xl mx-auto">
              Progress through three exclusive tiers, each unlocking more luxurious benefits
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C1B5C6] via-[#B0C2B0] to-[#C1B5C6]" />

            {/* Blossom */}
            <div className="relative mb-32 md:mb-40">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
                <div className="md:w-1/2 md:text-right md:pr-16">
                  <div className="inline-block md:float-right">
                    <Sparkles className="w-16 h-16 md:w-20 md:h-20 text-[#C1B5C6] mb-4 animate-[float-slow_6s_ease-in-out_infinite]" />
                    <h3 className="text-4xl md:text-5xl font-light text-[#262626] mb-2">Blossom</h3>
                    <p className="text-lg text-[#595959] mb-6 font-light">0-4 visits</p>
                    <p className="text-xl text-[#595959] leading-relaxed font-light max-w-md">
                      Begin your beauty journey with welcome bonuses, birthday surprises, and seasonal access.
                    </p>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#C1B5C6] to-[#D4C9D9] flex items-center justify-center shadow-2xl border-4 border-[#E2DBDF]">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                <div className="md:w-1/2 md:pl-16" />
              </div>
            </div>

            {/* Radiance */}
            <div className="relative mb-32 md:mb-40">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
                <div className="md:w-1/2" />
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-[#B0C2B0] to-[#C8D8C8] flex items-center justify-center shadow-2xl border-4 border-[#E2DBDF]">
                  <div className="w-4 h-4 rounded-full bg-white" />
                </div>
                <div className="md:w-1/2 md:pl-16">
                  <Star className="w-16 h-16 md:w-20 md:h-20 text-[#B0C2B0] mb-4 animate-[float-slow_7s_ease-in-out_infinite]" />
                  <h3 className="text-4xl md:text-5xl font-light text-[#262626] mb-2">Radiance</h3>
                  <p className="text-lg text-[#595959] mb-6 font-light">5-9 visits</p>
                  <p className="text-xl text-[#595959] leading-relaxed font-light max-w-md">
                    Elevate your experience with enhanced points, free upgrades, priority booking, and exclusive samples.
                  </p>
                </div>
              </div>
            </div>

            {/* Luxe */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
                <div className="md:w-1/2 md:text-right md:pr-16">
                  <div className="inline-block md:float-right">
                    <Crown className="w-16 h-16 md:w-24 md:h-24 text-[#9FA89F] mb-4 animate-[float-slow_8s_ease-in-out_infinite]" />
                    <h3 className="text-4xl md:text-5xl font-light text-[#262626] mb-2">Luxe</h3>
                    <p className="text-lg text-[#595959] mb-6 font-light">10+ visits</p>
                    <p className="text-xl text-[#595959] leading-relaxed font-light max-w-md">
                      Experience ultimate luxury with quarterly complimentary treatments, VIP events, personal consultants, and exclusive bundles.
                    </p>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-[#9FA89F] to-[#B0C2B0] flex items-center justify-center shadow-2xl border-4 border-[#E2DBDF] animate-[scale-pulse_3s_ease-in-out_infinite]">
                  <Crown className="w-10 h-10 text-white" />
                </div>
                <div className="md:w-1/2 md:pl-16" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section - Full Width Immersive */}
      <section className="relative py-48 px-4 md:px-12 lg:px-20 overflow-hidden">
        {/* Background with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C1B5C6] via-[#B0C2B0] to-[#9FA89F]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]" />
        
        {/* Animated Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/30 rounded-full blur-[100px] animate-[float-slow_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/30 rounded-full blur-[100px] animate-[float-slow_12s_ease-in-out_infinite]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-12 animate-[scale-pulse_3s_ease-in-out_infinite]">
            <Gift className="w-20 h-20 text-white mx-auto mb-8" />
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight">
            Ready to Join
            <br />
            the Circle?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-16 max-w-3xl mx-auto font-light">
            Start earning rewards from your very first visit. Your journey to exclusive beauty experiences begins now.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-12 py-6 rounded-full bg-white text-[#262626] text-lg font-semibold transition-all duration-700 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.4)] hover:scale-105 group"
            >
              Sign Up Now
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
            </a>
            
            <a
              href="tel:+254116444433"
              className="inline-flex items-center justify-center gap-3 px-12 py-6 rounded-full bg-white/10 backdrop-blur-xl text-white text-lg font-semibold transition-all duration-700 border-2 border-white/30 hover:bg-white/20 hover:border-white/50 shadow-xl hover:scale-105"
            >
              Call to Enroll
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}