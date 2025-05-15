
import { useState, useEffect } from 'react';
import VintageButton from '@/components/VintageButton';
import QuoteCard from '@/components/QuoteCard';
import { philosophyQuotes } from '@/data/quotes';
import { BookOpen } from 'lucide-react';

const Index = () => {
  const [currentQuote, setCurrentQuote] = useState(
    philosophyQuotes[Math.floor(Math.random() * philosophyQuotes.length)]
  );
  const [fadeIn, setFadeIn] = useState(true);

  const generateNewQuote = () => {
    setFadeIn(false);
    setTimeout(() => {
      const newQuote = philosophyQuotes[Math.floor(Math.random() * philosophyQuotes.length)];
      setCurrentQuote(newQuote);
      setFadeIn(true);
    }, 300);
  };

  return (
    <div className="min-h-screen w-full py-10 px-4 flex flex-col items-center">
      <header className="mb-10 text-center">
        <h1 className="vintage-header mb-3 flex items-center justify-center">
          <BookOpen className="mr-2" size={32} />
          Philosophical Wisdom
        </h1>
        <p className="vintage-text text-muted-foreground text-lg max-w-lg mx-auto">
          Timeless quotes from history's greatest philosophers to inspire your thoughts and reflections.
        </p>
      </header>

      <main className="w-full max-w-4xl flex-1 flex flex-col items-center">
        <div className={`transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <QuoteCard quote={currentQuote} onNewQuote={generateNewQuote} />
        </div>
        
        <div className="mt-10">
          <VintageButton 
            onClick={generateNewQuote} 
            className="px-8 py-3"
          >
            Next Quote
          </VintageButton>
        </div>
      </main>

      <footer className="mt-12 text-center text-muted-foreground">
        <p className="font-lora text-sm">
          © {new Date().getFullYear()} · Philosophical Wisdom Generator
        </p>
      </footer>
    </div>
  );
};

export default Index;
