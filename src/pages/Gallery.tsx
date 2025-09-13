import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, ArrowRight, Filter } from "lucide-react";
import ba1 from "@/assets/B&A1.jpg";
import ba2 from "@/assets/B&A2.jpg";
import ba3 from "@/assets/B&A3.jpg";
import ba4 from "@/assets/B&A4.jpg";
import ba5 from "@/assets/B&A5.jpg";
import ba6 from "@/assets/B&A6.jpg";
import client4Img from "@/assets/Client4.jpg";
import client5Img from "@/assets/Client5.jpg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "All Results" },
    { id: "facial", name: "Facial Treatments" },
    { id: "laser", name: "Laser Treatments" },
    { id: "body", name: "Body Treatments" },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "facial",
      title: "HydraFacial Results",
      description: "Immediate glow and hydration after treatment",
      beforeImage: ba1,
      afterImage: ba2,
      treatment: "HydraFacial MD",
      timeframe: "Immediately after treatment"
    },
    {
      id: 2,
      category: "laser", 
      title: "Laser Hair Removal",
      description: "Smooth, hair-free skin after 6 sessions",
      beforeImage: ba3,
      afterImage: ba4,
      treatment: "Laser Hair Removal",
      timeframe: "After 6 sessions"
    },
    {
      id: 3,
      category: "facial",
      title: "Acne Scar Improvement",
      description: "Significant reduction in acne scarring",
      beforeImage: ba5,
      afterImage: ba6,
      treatment: "Microneedling Series",
      timeframe: "After 4 sessions"
    },
    {
      id: 4,
      category: "facial",
      title: "Age Spot Reduction",
      description: "Clearer, more even skin tone",
      beforeImage: ba2,
      afterImage: ba1,
      treatment: "IPL Photo Facial",
      timeframe: "After 3 treatments"
    },
    {
      id: 5,
      category: "body",
      title: "Body Contouring",
      description: "Visible fat reduction and skin tightening",
      beforeImage: ba4,
      afterImage: ba3,
      treatment: "Non-surgical Body Contouring",
      timeframe: "After 6 weeks"
    },
    {
      id: 6,
      category: "facial",
      title: "Skin Rejuvenation",
      description: "Overall skin texture and tone improvement",
      beforeImage: ba6,
      afterImage: ba5,
      treatment: "Chemical Peel Series",
      timeframe: "After 3 months"
    },
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-soft" data-aos="fade-up">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="heading-hero text-gradient mb-6">
              Before & After Gallery
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              See the amazing transformations our clients have achieved with our advanced treatments. 
              Real results from real people who trust us with their beauty journey.
            </p>
            <a href="#before-after-gallery">
              <Button className="btn-hero" asChild>
                <span>
                  <Eye className="mr-2 w-4 h-4" />
                  View All Results
                </span>
              </Button>
            </a>
          </div>
        </div>
      </section>

  {/* Filter Options */}
  <section id="before-after-gallery" className="py-8 bg-background border-b border-border/30">
        <div className="section-container">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground font-medium">Filter by treatment:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3" data-aos="fade-up" data-aos-delay="100">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground shadow-elegant"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card key={item.id} className="card-elegant overflow-hidden group" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative">
                  {/* Before/After Images */}
                  <div className="grid grid-cols-2 gap-1">
                    <div className="relative">
                      <img
                        src={item.beforeImage}
                        alt={`${item.title} - Before`}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-muted text-muted-foreground">
                        Before
                      </Badge>
                    </div>
                    <div className="relative">
                      <img
                        src={item.afterImage}
                        alt={`${item.title} - After`}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                        After
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link to="/contact">
                      <Button variant="secondary" className="bg-white text-primary" asChild>
                        <span>
                          <Eye className="mr-2 w-4 h-4" />
                          View Details
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">Treatment:</span>
                      <span className="text-sm text-primary">{item.treatment}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">Results shown:</span>
                      <span className="text-sm text-muted-foreground">{item.timeframe}</span>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button variant="outline" className="w-full btn-ghost" asChild>
                      <span>
                        Learn More About This Treatment
                        <ArrowRight className="ml-2 w-3 h-3" />
                      </span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <p className="text-muted-foreground mb-6">
              Results may vary. Individual results depend on skin type, condition, and adherence to treatment plans.
            </p>
            <Link to="/booking">
              <Button className="btn-hero" data-aos="fade-up" data-aos-delay="100" asChild>
                <span>Schedule Your Consultation</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="heading-section text-gradient mb-8">
              What Our Clients Say About Their Results
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-testimonial" data-aos="fade-up">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">
                    "I couldn't believe the difference after just one HydraFacial. My skin was glowing 
                    and felt so soft. The team was professional and made me feel comfortable throughout."
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={client4Img}
                      alt="Sarah M."
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-foreground">Sarah M.</div>
                      <div className="text-sm text-muted-foreground">HydraFacial Client</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-testimonial" data-aos="fade-up" data-aos-delay="100">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">
                    "After 6 laser hair removal sessions, I'm completely hair-free and couldn't be happier. 
                    The process was much more comfortable than I expected."
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={client5Img}
                      alt="Maria G."
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-foreground">Maria G.</div>
                      <div className="text-sm text-muted-foreground">Laser Hair Removal Client</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="section-container text-center">
          <div className="max-w-3xl mx-auto space-y-8" data-aos="fade-up">
            <h2 className="heading-section text-white">
              Ready to Achieve Your Own Amazing Results?
            </h2>
            <p className="text-xl text-white/90">
              Every transformation starts with a single step. Book your free consultation today 
              and let us create a personalized treatment plan for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="100">
              <Link to="/booking">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/20 hover:border-white border-2 border-transparent" asChild>
                  <span>Book Free Consultation</span>
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white text-primary font-bold hover:bg-white/20" asChild>
                  <span>View Our Services</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;