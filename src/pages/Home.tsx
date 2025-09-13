import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sparkles, 
  Award, 
  Heart, 
  Shield, 
  Star, 
  ArrowRight,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/interior1.jpg";
import hydraFacialImg from "@/assets/Hydra-FacialMd.jpg";
import laserHairRemovalImg from "@/assets/Laser-Hair-Removal.jpg";
import antiAgingImg from "@/assets/Anti-Aging-Treatment.jpg";
import client1Img from "@/assets/Client1.jpg";
import client2Img from "@/assets/Client2.jpg";
import client3Img from "@/assets/Client3.jpg";

const Home = () => {
  const services = [
    {
      title: "HydraFacial",
      description: "Deep cleansing and hydrating facial treatment for radiant skin",
      price: "From $150",
      image: hydraFacialImg,
    },
    {
      title: "Laser Hair Removal",
      description: "Permanent hair reduction with advanced laser technology",
      price: "From $99",
      image: laserHairRemovalImg,
    },
    {
      title: "Anti-Aging Treatments",
      description: "Botox, fillers, and advanced skin rejuvenation",
      price: "From $299",
      image: antiAgingImg,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The best beauty clinic experience I've ever had! My skin has never looked better.",
      rating: 5,
      image: client1Img,
    },
    {
      name: "Maria Garcia",
      text: "Professional staff and amazing results. Highly recommend Bella Beauty!",
      rating: 5,
      image: client2Img,
    },
    {
      name: "Emily Chen",
      text: "Clean, luxurious environment and incredible attention to detail.",
      rating: 5,
      image: client3Img,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
  <section className="relative overflow-hidden bg-gradient-soft" data-aos="fade-up" data-aos-duration="1200">
        <div className="section-container section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1200">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-pastel-pink px-4 py-2 rounded-full animate-shimmer">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Premium Beauty Clinic</span>
                </div>
                <h1 className="heading-hero text-gradient">
                  Unveil Your Natural Beauty
                </h1>
                <p className="text-body text-muted-foreground max-w-lg">
                  Experience luxury treatments that enhance your confidence and reveal your inner glow. 
                  Our expert team is dedicated to helping you look and feel your absolute best.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
                <Link to="/contact">
                  <Button className="btn-hero" asChild>
                    <span>Book Free Consultation</span>
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="btn-ghost" asChild>
                    <span>
                      View Our Services
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    <AnimatedCounter end={500} duration={2500} />+
                  </div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    <AnimatedCounter end={5} duration={2500} />+
                  </div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    <AnimatedCounter end={15} duration={2500} />+
                  </div>
                  <div className="text-sm text-muted-foreground">Expert Staff</div>
                </div>
              </div>
            </div>

            <div className="relative animate-float" data-aos="flip-left" data-aos-delay="500" data-aos-duration="1200">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Bella Beauty Clinic Interior"
                  className="rounded-3xl shadow-elegant w-full h-[600px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 card-elegant bg-background p-6 max-w-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Award Winning</div>
                      <div className="text-sm text-muted-foreground">Best Beauty Clinic 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
  <section className="section-padding bg-background" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
        <div className="section-container">
          <div className="text-center mb-16" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            <h2 className="heading-section text-gradient">Why Choose Bella Beauty?</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with personalized care to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Licensed & Certified",
                description: "All our practitioners are licensed professionals with years of experience"
              },
              {
                icon: Heart,
                title: "Personalized Care",
                description: "Custom treatment plans tailored to your unique skin type and goals"
              },
              {
                icon: Sparkles,
                title: "Latest Technology",
                description: "State-of-the-art equipment for safe and effective treatments"
              },
              {
                icon: Star,
                title: "5-Star Results",
                description: "Consistently rated as the top beauty clinic in the city"
              }
            ].map((feature, index) => (
              <Card key={index} className="card-elegant hover:scale-105 transition-transform duration-300 animate-glow" data-aos="zoom-in-up" data-aos-delay={index * 150} data-aos-duration="1000">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
  <section className="section-padding bg-gradient-soft" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
        <div className="section-container">
          <div className="text-center mb-16" data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
            <h2 className="heading-section text-gradient">Featured Treatments</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular services designed to enhance your natural beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-treatment overflow-hidden group animate-float-sm" data-aos="zoom-in" data-aos-delay={index * 200} data-aos-duration="1000">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-primary">{service.price}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to="/services">
                    <Button variant="outline" className="w-full btn-ghost" asChild>
                      <span>Learn More</span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/services">
              <Button className="btn-hero">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
  <section className="section-padding bg-background" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
        <div className="section-container">
          <div className="text-center mb-16" data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
            <h2 className="heading-section text-gradient">What Our Clients Say</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Real stories from real clients who trust us with their beauty journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-testimonial animate-float-xs" data-aos="flip-up" data-aos-delay={index * 200} data-aos-duration="1000">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-6">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div className="flex items-center p-6 pt-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover mr-4 shadow-lg transition-shadow duration-500 hover:shadow-pink-200"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">Verified Client</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="section-padding bg-gradient-primary" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
        <div className="section-container text-center">
          <div className="max-w-3xl mx-auto space-y-8" data-aos="fade-up">
            <h2 className="heading-section text-white">
              Ready to Begin Your Beauty Journey?
            </h2>
            <p className="text-xl text-white/90">
              Book your free consultation today and discover how we can help you achieve your beauty goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/20 hover:border-white border-2 border-transparent" asChild>
                  <span>Book Free Consultation</span>
                </Button>
              </Link>
              <a href="tel:5551234567">
                <Button size="lg" variant="outline" className="border-white/80 text-primary font-bold hover:bg-white/20" asChild>
                  <span>Call (555) 123-4567</span>
                </Button>
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4 pt-4">
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="text-white/90">No consultation fees</span>
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="text-white/90">Personalized treatment plan</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;