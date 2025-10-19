// import { cn } from "@/lib/utils";
// import { LucideIcon } from "lucide-react";

// interface ServiceCardProps {
//   title: string;
//   description: string;
//   icon: LucideIcon;
//   className?: string;
// }

// export const ServiceCard = ({ title, description, icon: Icon, className }: ServiceCardProps) => {
//   return (
//     <div className={cn(
//       "group relative overflow-hidden rounded-lg border border-accent bg-card p-8 shadow-soft hover:shadow-elegant transition-smooth hover:-translate-y-1",
//       className
//     )}>
//       <div className="absolute top-0 right-0 w-32 h-32 gradient-secondary opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-smooth" />
      
//       <div className="relative">
//         <div className="mb-4 inline-flex p-3 rounded-lg gradient-primary">
//           <Icon className="h-6 w-6 text-primary" />
//         </div>
        
//         <h3 className="text-xl font-medium mb-3 text-foreground">
//           {title}
//         </h3>
        
//         <p className="text-muted-foreground leading-relaxed">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  variant?: "default" | "featured";
}

export const ServiceCard = ({
  title,
  description,
  icon: Icon,
  className,
  variant = "default",
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card border transition-all duration-300",
        "hover:shadow-elegant hover:-translate-y-1",
        variant === "featured" && "bg-gradient-secondary border-secondary/30",
        variant === "default" && "border-border shadow-soft",
        className
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

      <div className="relative p-8">
        {/* Icon container */}
        <div
          className={cn(
            "mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300",
            variant === "featured"
              ? "bg-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground"
              : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
          )}
        >
          <Icon className="h-7 w-7" />
        </div>

        {/* Content */}
        <h3
          className={cn(
            "text-xl font-medium mb-3 text-foreground transition-colors",
            variant === "featured" && "group-hover:text-secondary"
          )}
        >
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};
