import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export const ServiceCard = ({ title, description, icon: Icon, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-lg border border-accent bg-card p-8 shadow-soft hover:shadow-elegant transition-smooth hover:-translate-y-1",
      className
    )}>
      <div className="absolute top-0 right-0 w-32 h-32 gradient-secondary opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-smooth" />
      
      <div className="relative">
        <div className="mb-4 inline-flex p-3 rounded-lg gradient-primary">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        
        <h3 className="text-xl font-medium mb-3 text-foreground">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
