
import React from 'react';
import { cn } from '@/lib/utils';

interface VintageFrameProps {
  children: React.ReactNode;
  className?: string;
}

const VintageFrame = ({ children, className }: VintageFrameProps) => {
  return (
    <div className={cn(
      "vintage-paper border-2 border-amber-800/20 shadow-lg relative",
      className
    )}>
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-800/40"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-800/40"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-800/40"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-800/40"></div>
      
      {children}
    </div>
  );
};

export default VintageFrame;
