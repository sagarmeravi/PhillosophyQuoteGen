
import { useState } from 'react';
import { Quote } from '@/data/quotes';
import VintageFrame from '@/components/VintageFrame';
import { Bookmark, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface QuoteCardProps {
  quote: Quote;
  onNewQuote: () => void;
}

const QuoteCard = ({ quote, onNewQuote }: QuoteCardProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = () => {
    const textToCopy = `"${quote.text}" - ${quote.author}`;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true);
        toast({
          title: "Copied to clipboard",
          description: "The quote has been copied to your clipboard",
        });
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        toast({
          title: "Failed to copy",
          description: "Please try again",
          variant: "destructive",
        });
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <VintageFrame className="w-full max-w-2xl mx-auto p-8 md:p-10 animate-fade-in">
      <div className="flex flex-col items-center">
        <div className="mb-6">
          {/* Quote marks decoration */}
          <span className="text-primary/30 font-playfair text-6xl leading-none">"</span>
        </div>
        
        <blockquote className="quote-text text-center mb-4">
          {quote.text}
        </blockquote>
        
        <div className="mt-2">
          {/* Quote marks decoration */}
          <span className="text-primary/30 font-playfair text-6xl leading-none">"</span>
        </div>
        
        <div className="vintage-divider w-1/2 mx-auto"></div>
        
        <cite className="quote-attribution text-center block not-italic">
          — {quote.author}
          {quote.period && (
            <span className="text-muted-foreground text-base block mt-1">
              {quote.period}
            </span>
          )}
        </cite>
        
        <div className="flex mt-8 space-x-4">
          <button 
            onClick={copyToClipboard}
            className="flex items-center justify-center px-4 py-2 border border-primary/30 rounded-md bg-secondary/30 hover:bg-secondary/60 transition-colors text-foreground"
            aria-label="Copy quote to clipboard"
          >
            {copied ? <Check size={18} /> : <Bookmark size={18} />}
            <span className="ml-2 font-lora">{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
      </div>
    </VintageFrame>
  );
};

export default QuoteCard;
