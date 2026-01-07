import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxurious classical interior design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl">
          <div className="divider-gold mb-8 animate-fade-up opacity-0" style={{ animationDelay: "200ms" }} />
          
          <h1 className="heading-display text-cream mb-6 animate-fade-up opacity-0" style={{ animationDelay: "300ms" }}>
            Classical <br />
            <span className="italic font-light">Elegance</span>
          </h1>
          
          <p className="text-cream/80 text-lg md:text-xl leading-relaxed max-w-xl mb-10 animate-fade-up opacity-0" style={{ animationDelay: "400ms" }}>
            Transforming spaces into timeless masterpieces through exquisite 3D visualization 
            and classical interior design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0" style={{ animationDelay: "500ms" }}>
            <button onClick={scrollToPortfolio} className="btn-primary bg-primary hover:bg-primary/90">
              View Portfolio
            </button>
            <button 
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline border-cream/30 text-cream hover:bg-cream hover:text-charcoal"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0" style={{ animationDelay: "1000ms" }}>
        <div className="flex flex-col items-center gap-2 text-cream/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-cream/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
