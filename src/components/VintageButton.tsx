
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface VintageButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'subtle';
  children: React.ReactNode;
  className?: string;
}

const VintageButton = ({ 
  variant = 'default', 
  children, 
  className, 
  ...props 
}: VintageButtonProps) => {
  const baseClasses = "font-playfair text-lg transition-all duration-300";
  
  const variantClasses = {
    default: "bg-primary/90 text-primary-foreground hover:bg-primary border border-amber-800/30 shadow-sm",
    outline: "bg-muted/50 text-muted-foreground hover:bg-muted border border-border shadow-sm",
    subtle: "bg-transparent text-primary hover:bg-accent/40 hover:text-primary border border-transparent"
  };
  
  return (
    <Button 
      className={cn(
        baseClasses, 
        variantClasses[variant],
        className
      )} 
      {...props}
    >
      {children}
    </Button>
  );
};

export default VintageButton;
