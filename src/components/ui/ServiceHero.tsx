// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// interface HeroSectionProps {
//   title: string;
//   subtitle?: string;
//   description: string;
//   imageSrc: string;
//   primaryCta?: {
//     text: string;
//     onClick: () => void;
//   };
//   secondaryCta?: {
//     text: string;
//     onClick: () => void;
//   };
//   className?: string;
// }

// export const HeroSection = ({
//   title,
//   subtitle,
//   description,
//   imageSrc,
//   primaryCta,
//   secondaryCta,
//   className,
//   children, // Add children to the props
// }: HeroSectionProps & { children?: React.ReactNode }) => {
//   return (
//     <section className={cn("relative min-h-[100vh] flex items-center justify-center overflow-hidden", className)}>
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         <img
//           src={imageSrc}
//           alt={title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 gradient-hero" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-6 py-24 text-center">
//         {subtitle && (
//           <p className="text-secondary text-sm font-medium tracking-widest uppercase mb-4 animate-fade-in">
//             {subtitle}
//           </p>
//         )}

//         <h1 className="text-5xl md:text-7xl font-light text-primary-foreground mb-6 tracking-tight animate-fade-up">
//           {title}
//         </h1>

//         <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 leading-relaxed font-light animate-fade-up" style={{ animationDelay: '0.1s' }}>
//           {description}
//         </p>

//         {/* Render children if they exist */}
//         {children}

//         {/* Render primaryCta and secondaryCta if they exist */}
//         {(primaryCta || secondaryCta) && (
//           <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
//             {primaryCta && (
//               <Button
//                 variant="hero"
//                 size="lg"
//                 onClick={primaryCta.onClick}
//               >
//                 {primaryCta.text}
//               </Button>
//             )}
//             {secondaryCta && (
//               <Button
//                 variant="premium"
//                 size="lg"
//                 onClick={secondaryCta.onClick}
//               >
//                 {secondaryCta.text}
//               </Button>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Decorative gradient orbs */}
//       <div className="absolute top-1/4 left-1/4 w-64 h-64 gradient-primary opacity-20 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-1/4 right-1/4 w-64 h-64 gradient-secondary opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
//     </section>
//   );
// };
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  primaryCta?: {
    text: string;
    onClick: () => void;
  };
  secondaryCta?: {
    text: string;
    onClick: () => void;
  };
  className?: string;
}

export const HeroSection = ({
  title,
  subtitle,
  description,
  imageSrc,
  primaryCta,
  secondaryCta,
  className,
  children,
}: HeroSectionProps & { children?: React.ReactNode }) => {
  return (
    <section className={cn("relative min-h-[100vh] flex overflow-hidden", className)}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container - Positioned at bottom-left */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-end pb-6 sm:pb-8 lg:pb-12 justify-start">
        <div className="max-w-4xl">
          {subtitle && (
            <p className="text-secondary text-sm font-medium tracking-widest uppercase mb-4 animate-fade-in font-hatton">
              {subtitle}
            </p>
          )}
          <h1 className="text-5xl md:text-7xl font-hatton font-light text-primary-foreground mb-6 tracking-tight animate-fade-up">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 leading-relaxed font-hatton font-light animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {description}
          </p>

          {/* Children (Button) - Aligned to the left */}
          <div className="flex justify-start">
            {children}
          </div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 gradient-primary opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 gradient-secondary opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};
