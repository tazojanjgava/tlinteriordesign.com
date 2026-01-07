const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Stats and intro */}
          <div>
            <span className="text-primary text-sm uppercase tracking-widest mb-4 block">
              About the Studio
            </span>
            <h2 className="heading-section text-foreground mb-8">
              Crafting Timeless<br />
              <span className="italic text-primary">Classical Interiors</span>
            </h2>
            
            <p className="text-elegant text-lg mb-8">
              With over a year of dedicated experience in classical interior design visualization, 
              I bring your vision of elegant, timeless spaces to life through photorealistic 3D Max renders. 
              Every project is crafted with meticulous attention to period-accurate details, 
              from ornate moldings to antique furniture selections.
            </p>

            <p className="text-elegant mb-12">
              My passion lies in translating the grandeur of classical architecture and design 
              into stunning visual representations that help clients envision their dream spaces 
              before any construction begins.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-serif text-4xl md:text-5xl text-primary mb-2">1+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl md:text-5xl text-primary mb-2">20+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl md:text-5xl text-primary mb-2">100%</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right: Image composition */}
          <div className="relative">
            <div className="aspect-[3/4] bg-secondary rounded-sm overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="heading-card text-foreground mb-3">3D Max Specialist</h3>
                  <p className="text-muted-foreground text-sm">
                    Creating photorealistic visualizations with industry-leading software
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-primary/30" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
