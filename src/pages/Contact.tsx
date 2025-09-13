import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Calendar,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredDate: "",
    preferredTime: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Clinic",
      details: ["123 Beauty Avenue", "Wellness City, WC 12345"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Available Mon-Sat 9AM-7PM"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@bellabeauty.com", "We respond within 24 hours"],
      action: "Send Email"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+1 (555) 123-4567", "Quick questions & booking"],
      action: "Chat Now"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 5:00 PM" },
  ];

  const services = [
    "HydraFacial Treatment",
    "Laser Hair Removal", 
    "Chemical Peel",
    "Microneedling",
    "IPL Photo Facial",
    "Body Contouring",
    "General Consultation"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-soft" data-aos="fade-up">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="heading-hero text-gradient mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Ready to start your beauty journey? We're here to help you every step of the way. 
              Contact us today to schedule your consultation or ask any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="100">
              <Link to="/booking">
                <Button className="btn-hero" asChild>
                  <span>
                    <Calendar className="mr-2 w-4 h-4" />
                    Book Appointment
                  </span>
                </Button>
              </Link>
              <a href="tel:5551234567">
                <Button variant="outline" className="btn-ghost" asChild>
                  <span>
                    <Phone className="mr-2 w-4 h-4" />
                    Call (555) 123-4567
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-elegant text-center hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className={`text-sm ${i === 0 ? 'font-medium text-foreground' : 'text-muted-foreground'} mb-1`}>
                      {detail}
                    </p>
                  ))}
                  <Link to="/">
                    <Button variant="ghost" className="mt-4 text-primary hover:bg-pastel-pink text-sm" asChild>
                      <span>{info.action}</span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gradient-soft">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div data-aos="fade-up">
              <Card className="card-elegant">
                <CardHeader>
                  <h2 className="heading-section text-gradient">Send us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours to discuss your beauty goals.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="Enter your phone"
                        />
                      </div>
                      <div>
                        <Label htmlFor="service">Service Interest</Label>
                        <Select onValueChange={(value) => handleChange("service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="preferredDate">Preferred Date</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleChange("preferredDate", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="preferredTime">Preferred Time</Label>
                        <Select onValueChange={(value) => handleChange("preferredTime", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9am">9:00 AM</SelectItem>
                            <SelectItem value="10am">10:00 AM</SelectItem>
                            <SelectItem value="11am">11:00 AM</SelectItem>
                            <SelectItem value="2pm">2:00 PM</SelectItem>
                            <SelectItem value="3pm">3:00 PM</SelectItem>
                            <SelectItem value="4pm">4:00 PM</SelectItem>
                            <SelectItem value="5pm">5:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your beauty goals or any questions you have..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full btn-hero">
                      Send Message
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>

                  <div className="bg-pastel-pink p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="font-medium text-primary">What happens next?</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                      <li>We'll review your message within 24 hours</li>
                      <li>Our team will contact you to discuss your needs</li>
                      <li>We'll schedule your consultation at your convenience</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Location & Hours */}
            <div className="space-y-8" data-aos="fade-up" data-aos-delay="100">
              {/* Map Placeholder */}
              <Card className="card-elegant" data-aos="fade-up">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-4">Our Location</h3>
                  <div className="bg-gradient-accent rounded-lg h-64 flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">123 Beauty Avenue, Wellness City</p>
                    </div>
                  </div>
                  <Link to="/">
                    <Button className="w-full btn-ghost" asChild>
                      <span>
                        <MapPin className="mr-2 w-4 h-4" />
                        Get Directions
                      </span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="card-elegant" data-aos="fade-up" data-aos-delay="100">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="font-heading font-semibold text-xl">Business Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{schedule.day}</span>
                        <span className="font-medium text-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-pastel-pink rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      Emergency appointments available upon request
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="card-elegant" data-aos="fade-up" data-aos-delay="200">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-4">Quick Questions?</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Do you offer free consultations?</h4>
                      <p className="text-sm text-muted-foreground">Yes! We provide complimentary consultations to discuss your beauty goals.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">How far in advance should I book?</h4>
                      <p className="text-sm text-muted-foreground">We recommend booking 1-2 weeks in advance, especially for weekend appointments.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Do you accept insurance?</h4>
                      <p className="text-sm text-muted-foreground">We accept various payment methods and offer financing options for treatments.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;