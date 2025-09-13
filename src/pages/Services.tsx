import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Zap, 
  Heart, 
  Star, 
  Clock, 
  DollarSign,
  ArrowRight,
  CheckCircle 
} from "lucide-react";
import hydraFacialImg from "@/assets/Hydra-FacialMd.jpg";
import laserHairRemovalImg from "@/assets/Laser-Hair-Removal.jpg";
import antiAgingImg from "@/assets/Anti-Aging-Treatment.jpg";
import chemicalPeelImg from "@/assets/facial-chemical-peel.jpg";
import microneedlingImg from "@/assets/micro-needling.jpg";
import iplImg from "@/assets/IPD-photo-facial.jpg";
import bodyContouringImg from "@/assets/Body-Coturing.jpg";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Services", icon: Sparkles },
    { id: "facial", name: "Facial Treatments", icon: Heart },
    { id: "laser", name: "Laser Treatments", icon: Zap },
    { id: "body", name: "Body Treatments", icon: Star },
  ];

  const services = [
    {
      id: 1,
      category: "facial",
      name: "HydraFacial MD",
      tagline: "Most Popular",
      description: "Deep cleansing, exfoliation, and hydration treatment that leaves skin glowing and refreshed.",
      price: "$150",
      duration: "60 min",
      image: hydraFacialImg,
      features: [
        "Deep pore cleansing",
        "Gentle exfoliation", 
        "Intense hydration",
        "Immediate results"
      ],
      benefits: "Improves skin texture, reduces fine lines, and provides instant glow"
    },
    {
      id: 2,
      category: "laser",
      name: "Laser Hair Removal",
      tagline: "FDA Approved",
      description: "Permanent hair reduction using advanced laser technology. Safe for all skin types.",
      price: "$99",
      duration: "30-90 min",
      image: laserHairRemovalImg,
      features: [
        "FDA-approved technology",
        "Suitable for all skin types",
        "Permanent results",
        "Minimal discomfort"
      ],
      benefits: "Permanent hair reduction with smooth, silky skin"
    },
    {
      id: 3,
      category: "facial",
      name: "Chemical Peel",
      tagline: "Skin Renewal",
      description: "Customized peels to improve skin texture, reduce acne scars, and even skin tone.",
      price: "$120",
      duration: "45 min",
      image: chemicalPeelImg,
      features: [
        "Customized formulation",
        "Multiple peel depths",
        "Minimal downtime",
        "Professional application"
      ],
      benefits: "Smoother texture, reduced acne scars, and brighter complexion"
    },
    {
      id: 4,
      category: "facial",
      name: "Microneedling",
      tagline: "Collagen Boost",
      description: "Stimulate collagen production for firmer, younger-looking skin with minimal downtime.",
      price: "$200",
      duration: "75 min",
      image: microneedlingImg,
      features: [
        "Collagen stimulation",
        "Minimal downtime",
        "Natural healing",
        "Long-lasting results"
      ],
      benefits: "Reduces fine lines, improves skin texture, and minimizes pores"
    },
    {
      id: 5,
      category: "laser",
      name: "IPL Photo Facial",
      tagline: "Age Reversal",
      description: "Intense Pulsed Light therapy to reduce sun damage, age spots, and improve skin tone.",
      price: "$180",
      duration: "45 min",
      image: iplImg,
      features: [
        "Reduces sun damage",
        "Evens skin tone",
        "Non-invasive",
        "Quick treatment"
      ],
      benefits: "Clearer, more even-toned skin with reduced pigmentation"
    },
    {
      id: 6,
      category: "body",
      name: "Body Contouring",
      tagline: "Non-Surgical",
      description: "Non-invasive body sculpting to reduce stubborn fat and tighten skin.",
      price: "$299",
      duration: "90 min",
      image: bodyContouringImg,
      features: [
        "Non-invasive procedure",
        "No surgery required",
        "Immediate results",
        "Comfortable treatment"
      ],
      benefits: "Reduced fat, tighter skin, and improved body contours"
    },
  ];

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-soft" data-aos="fade-up">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="heading-hero text-gradient mb-6">
              Our Premium Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Discover our comprehensive range of advanced beauty treatments designed to enhance your natural radiance 
              and boost your confidence. Each service is performed by our expert team using the latest technology.
            </p>
            <Link to="/booking">
              <Button className="btn-hero" asChild>
                <span>Book Free Consultation</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up" data-aos-delay="100">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-elegant"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <Card key={service.id} className="card-elegant overflow-hidden group" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {service.tagline}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-bold text-primary">{service.price}</span>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-semibold text-xl">{service.name}</h3>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4" />
                      <span>Starting at {service.price}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-pastel-pink p-3 rounded-lg">
                    <p className="text-sm font-medium text-primary">Benefits:</p>
                    <p className="text-xs text-muted-foreground mt-1">{service.benefits}</p>
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <Link to="/booking" className="flex-1">
                      <Button className="w-full btn-hero text-sm" asChild>
                        <span>Book Now</span>
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" className="w-full btn-ghost text-sm" asChild>
                        <span>
                          Learn More
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="section-padding bg-gradient-soft">
        <div className="section-container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="heading-section text-gradient">Popular Treatment Packages</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Save more with our curated treatment packages designed for maximum results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-treatment" data-aos="fade-up">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Glow Package</h3>
                <p className="text-3xl font-bold text-primary mb-4">$399</p>
                <p className="text-muted-foreground mb-6">Perfect for maintaining radiant skin</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">2 HydraFacials</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">1 Chemical Peel</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Skincare consultation</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="w-full btn-hero" asChild>
                    <span>Choose Package</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="card-treatment ring-2 ring-primary" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-8 text-center">
                <Badge className="mb-4 bg-primary text-primary-foreground">Most Popular</Badge>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Transformation Package</h3>
                <p className="text-3xl font-bold text-primary mb-4">$699</p>
                <p className="text-muted-foreground mb-6">Complete skin renewal program</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">3 HydraFacials</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">2 Microneedling sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">1 IPL Photo Facial</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Premium skincare kit</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="w-full btn-hero" asChild>
                    <span>Choose Package</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="card-treatment" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Luxury Package</h3>
                <p className="text-3xl font-bold text-primary mb-4">$999</p>
                <p className="text-muted-foreground mb-6">Ultimate beauty experience</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">5 HydraFacials</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">3 Microneedling sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">2 IPL treatments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">1 Body contouring session</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="w-full btn-hero" asChild>
                    <span>Choose Package</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="section-container text-center">
          <div className="max-w-3xl mx-auto space-y-8" data-aos="fade-up">
            <h2 className="heading-section text-white">
              Not Sure Which Treatment Is Right for You?
            </h2>
            <p className="text-xl text-white/90">
              Book a free consultation with our experts to create a personalized treatment plan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/20 hover:border-white border-2 border-transparent" asChild>
                  <span>Free Consultation</span>
                </Button>
              </Link>
              <a href="tel:5551234567">
                <Button size="lg" variant="outline" className="border-white/80 text-primary font-bold hover:bg-white/20 hover:border-white border-2 border-transparent" asChild>
                  <span>Call (555) 123-4567</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;