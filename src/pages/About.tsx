import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Heart, Users, Clock, CheckCircle, ArrowRight } from "lucide-react";
import doctor1Img from "@/assets/Doctor1.jpg";
import doctor2Img from "@/assets/Doctor2.jpg";
import doctor3Img from "@/assets/Doctor3.jpg";
import interiorImg from "@/assets/interior1.jpg";
import treatmentRoomImg from "@/assets/treatmentroom.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Medical Director & Dermatologist",
      experience: "15+ years experience",
      specialization: "Anti-aging, Laser treatments",
      image: doctor1Img,
      bio: "Board-certified dermatologist specializing in cosmetic dermatology and advanced aesthetic treatments.",
    },
    {
      name: "Emma Rodriguez",
      role: "Senior Aesthetician",
      experience: "8+ years experience", 
      specialization: "Facials, Chemical peels",
      image: doctor2Img,
      bio: "Licensed aesthetician with expertise in advanced skincare treatments and personalized beauty solutions.",
    },
    {
      name: "Michael Chen",
      role: "Laser Specialist",
      experience: "6+ years experience",
      specialization: "Laser hair removal, Skin resurfacing",
      image: doctor3Img,
      bio: "Certified laser technician specializing in safe and effective laser treatments for all skin types.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every client with empathy, respect, and genuine care for their wellbeing and confidence."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every treatment, using only the highest quality products and techniques."
    },
    {
      icon: Users,
      title: "Personalized Approach",
      description: "Every treatment plan is customized to meet your unique needs, skin type, and beauty goals."
    },
    {
      icon: CheckCircle,
      title: "Safety First",
      description: "Your safety is our top priority. We maintain the highest standards of hygiene and safety protocols."
    },
  ];

  const milestones = [
    { year: "2019", event: "Bella Beauty Clinic Founded" },
    { year: "2020", event: "Introduced Advanced Laser Technology" },
    { year: "2021", event: "Expanded to Include Medical Aesthetics" },
    { year: "2022", event: "Became Award-Winning Beauty Clinic" },
    { year: "2023", event: "Opened Second Location" },
  { year: "2025", event: "500+ Happy Clients Milestone" },
  ];

  return (
    <div className="min-h-screen">
  {/* Hero Section */}
  <section className="section-padding bg-gradient-soft" data-aos="fade-up">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="heading-hero text-gradient mb-6">
              About Bella Beauty
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We are a premier beauty and wellness clinic dedicated to helping you discover your most radiant self. 
              With years of expertise and a passion for beauty, we provide personalized treatments that enhance 
              your natural beauty and boost your confidence.
            </p>
            <a href="#team">
              <Button className="btn-hero" asChild>
                <span>
                  Meet Our Team
                  <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Our Story */}
  <section className="section-padding bg-background" data-aos="fade-up">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6" data-aos="fade-up" data-aos-delay="100">
              <h2 className="heading-section text-gradient">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Bella Beauty was born from a simple yet powerful vision: to create a sanctuary where 
                  beauty, wellness, and confidence converge. Founded in 2019 by Dr. Sarah Mitchell, 
                  our clinic has grown from a small practice to a renowned beauty destination.
                </p>
                <p>
                  We believe that true beauty comes from feeling confident and comfortable in your own skin. 
                  That's why we've dedicated ourselves to staying at the forefront of aesthetic innovation, 
                  continuously training in the latest techniques and investing in cutting-edge technology.
                </p>
                <p>
                  Today, we're proud to have helped hundreds of clients achieve their beauty goals, 
                  and we continue to grow our services to meet the evolving needs of our community.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-6" data-aos="fade-up" data-aos-delay="200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    <AnimatedCounter end={500} duration={2500} />+
                  </div>
                  <div className="text-sm text-muted-foreground">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    <AnimatedCounter end={5000} duration={2500} />+
                  </div>
                  <div className="text-sm text-muted-foreground">Treatments Performed</div>
                </div>
              </div>
            </div>

            <div className="relative" data-aos="zoom-in" data-aos-delay="300">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={interiorImg}
                  alt="Clinic interior"
                  className="rounded-2xl shadow-card h-64 object-cover"
                />
                <img
                  src={treatmentRoomImg}
                  alt="Treatment room"
                  className="rounded-2xl shadow-card h-64 object-cover mt-8"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 card-elegant bg-background p-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">5+ Years of Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gradient-soft">
        <div className="section-container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="heading-section text-gradient">Our Values</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape every interaction with our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-elegant text-center hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

  {/* Meet Our Team */}
  <section id="team" className="section-padding bg-background">
        <div className="section-container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="heading-section text-gradient">Meet Our Expert Team</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Our passionate professionals are dedicated to helping you achieve your beauty goals with expertise and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-elegant overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.experience}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Specialization:</p>
                    <p className="text-sm text-muted-foreground">{member.specialization}</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section-padding bg-gradient-soft">
        <div className="section-container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="heading-section text-gradient">Our Journey</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our commitment to excellence and innovation in beauty and wellness
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <Card key={index} className="card-elegant" data-aos="fade-up" data-aos-delay={index * 100}>
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="section-container text-center">
          <div className="max-w-3xl mx-auto space-y-8" data-aos="fade-up">
            <h2 className="heading-section text-white">
              Ready to Experience the Bella Beauty Difference?
            </h2>
            <p className="text-xl text-white/90">
              Join hundreds of satisfied clients who trust us with their beauty journey. Book your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/20 hover:border-white border-2 border-transparent" asChild>
                  <span>Book Free Consultation</span>
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white/80 text-primary font-bold hover:bg-white/20 hover:border-white border-2 border-transparent" asChild>
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

export default About;