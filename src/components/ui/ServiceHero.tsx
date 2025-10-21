import React from 'react';

interface ServiceHeroProps {
  title: string;
  titleGradient?: string;
  description: string;
  image: string;
  imageAlt: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  titleGradient,
  description,
  image,
  imageAlt,
}) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#262626]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-end pb-6 sm:pb-8 lg:pb-12 justify-start">
        <div className="w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 leading-tight max-w-4xl">
            {title}
            {titleGradient && (
              <>
                <br />
                <span className="bg-gradient-to-r from-[#C1B5C6] to-[#B0C2B0] bg-clip-text text-transparent font-light">
                  {titleGradient}
                </span>
              </>
            )}
          </h1>
          <p className="text-lg text-[#E2DBDF] max-w-2xl leading-relaxed font-light mb-12">
            {description}
          </p>
          <div className="flex flex-nowrap gap-2 sm:gap-4">
            <a
              href="#book"
              className="bg-white hover:bg-[#595959] text-[#262626] hover:text-white w-[180px] md:w-[198px] h-[52px] md:h-[56px] flex items-center justify-center text-sm tracking-wider mt-6 md:mt-0 rounded transition-colors"
            >
              BOOK APPOINTMENT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;