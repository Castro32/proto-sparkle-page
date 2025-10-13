const Index = () => {
  const letters = Array(7).fill('a');

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8 md:gap-12">
          {letters.map((letter, index) => (
            <div
              key={index}
              className="flex items-center justify-center animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both',
              }}
            >
              <span 
                className="text-8xl md:text-9xl font-light text-foreground/80 hover:text-foreground transition-colors duration-300 cursor-default select-none"
                style={{
                  animation: `letter-float ${3 + index * 0.2}s ease-in-out infinite`,
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                {letter}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
