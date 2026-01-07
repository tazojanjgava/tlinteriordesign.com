import portfolioDining from "@/assets/portfolio-dining.jpg";
import portfolioBedroom from "@/assets/portfolio-bedroom.jpg";
import portfolioStudy from "@/assets/portfolio-study.jpg";
import portfolioBathroom from "@/assets/portfolio-bathroom.jpg";

const projects = [
  {
    id: 1,
    title: "Grand Dining Hall",
    category: "Dining Room",
    image: portfolioDining,
    description: "Classical elegance with crystal chandeliers and mahogany accents",
  },
  {
    id: 2,
    title: "Royal Suite",
    category: "Bedroom",
    image: portfolioBedroom,
    description: "Four-poster luxury with silk canopy and antique furnishings",
  },
  {
    id: 3,
    title: "Private Library",
    category: "Study",
    image: portfolioStudy,
    description: "Rich mahogany bookshelves with leather Chesterfield seating",
  },
  {
    id: 4,
    title: "Marble Sanctuary",
    category: "Bathroom",
    image: portfolioBathroom,
    description: "Clawfoot elegance with gold fixtures and marble surfaces",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-cream-dark">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest mb-4 block">
            Selected Works
          </span>
          <h2 className="heading-section text-foreground mb-6">
            Portfolio
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="card-portfolio group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-gold-light text-xs uppercase tracking-widest mb-2">
                    {project.category}
                  </span>
                  <h3 className="heading-card text-cream mb-2">{project.title}</h3>
                  <p className="text-cream/70 text-sm">{project.description}</p>
                </div>
              </div>
              
              {/* Bottom info bar */}
              <div className="p-6 bg-card flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-1">
                    {project.category}
                  </span>
                  <h3 className="heading-card text-foreground">{project.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                  <svg 
                    className="w-4 h-4 text-foreground group-hover:text-primary-foreground transition-colors duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
