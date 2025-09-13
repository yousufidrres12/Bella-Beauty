import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  CreditCard, 
  CheckCircle, 
  ArrowLeft,
  ArrowRight,
  Star
} from "lucide-react";

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: ""
  });

  const services = [
    { id: "hydrafacial", name: "HydraFacial MD", price: "$150", duration: "60 min", popular: true },
    { id: "laser-hair", name: "Laser Hair Removal", price: "$99", duration: "30-90 min", popular: true },
    { id: "chemical-peel", name: "Chemical Peel", price: "$120", duration: "45 min", popular: false },
    { id: "microneedling", name: "Microneedling", price: "$200", duration: "75 min", popular: false },
    { id: "ipl", name: "IPL Photo Facial", price: "$180", duration: "45 min", popular: false },
    { id: "body-contouring", name: "Body Contouring", price: "$299", duration: "90 min", popular: false },
    { id: "consultation", name: "Free Consultation", price: "Free", duration: "30 min", popular: false },
  ];

  const availableDates = [
    "2024-12-20", "2024-12-21", "2024-12-23", "2024-12-27", "2024-12-28", "2024-12-30"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleServiceSelect = (serviceId: string) => {
    setBookingData(prev => ({ ...prev, service: serviceId }));
  };

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const selectedService = services.find(s => s.id === bookingData.service);

  return (
    <div className="min-h-screen bg-gradient-soft" data-aos="fade-up">
      <div className="section-container section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="heading-hero text-gradient mb-4">
              Book Your Appointment
            </h1>
            <p className="text-xl text-muted-foreground">
              Schedule your beauty treatment in just a few simple steps
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[
                { step: 1, label: "Service", icon: Star },
                { step: 2, label: "Date & Time", icon: Calendar },
                { step: 3, label: "Your Details", icon: User },
                { step: 4, label: "Confirmation", icon: CheckCircle }
              ].map((item, index) => (
                <div key={item.step} className="flex items-center">
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                    currentStep >= item.step 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-secondary-foreground"
                  }`}>
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium text-sm">{item.label}</span>
                  </div>
                  {index < 3 && (
                    <ArrowRight className="w-4 h-4 mx-2 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <Card className="card-elegant">
            <CardContent className="p-8">
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <div>
                  <CardHeader className="p-0 mb-6">
                    <h2 className="text-2xl font-heading font-semibold text-gradient">
                      Choose Your Treatment
                    </h2>
                    <p className="text-muted-foreground">
                      Select the service you'd like to book
                    </p>
                  </CardHeader>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        onClick={() => handleServiceSelect(service.id)}
                        className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          bookingData.service === service.id
                            ? "border-primary bg-pastel-pink"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        {service.popular && (
                          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                            Popular
                          </Badge>
                        )}
                        <div className="space-y-2">
                          <h3 className="font-heading font-semibold text-lg">{service.name}</h3>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-primary">{service.price}</span>
                            <div className="flex items-center space-x-1 text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">{service.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time Selection */}
              {currentStep === 2 && (
                <div>
                  <CardHeader className="p-0 mb-6">
                    <h2 className="text-2xl font-heading font-semibold text-gradient">
                      Select Date & Time
                    </h2>
                    <p className="text-muted-foreground">
                      Choose your preferred appointment slot
                    </p>
                  </CardHeader>

                  {selectedService && (
                    <div className="mb-6 p-4 bg-pastel-pink rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground">{selectedService.name}</h3>
                          <p className="text-sm text-muted-foreground">{selectedService.duration}</p>
                        </div>
                        <span className="text-xl font-bold text-primary">{selectedService.price}</span>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <Label className="text-base font-medium mb-4 block">Available Dates</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {availableDates.map((date) => (
                          <button
                            key={date}
                            onClick={() => handleInputChange("date", date)}
                            className={`p-3 rounded-lg border text-sm transition-all duration-300 ${
                              bookingData.date === date
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            {new Date(date).toLocaleDateString('en-US', { 
                              weekday: 'short',
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-medium mb-4 block">Available Times</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => handleInputChange("time", time)}
                            disabled={!bookingData.date}
                            className={`p-3 rounded-lg border text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                              bookingData.time === time
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Personal Details */}
              {currentStep === 3 && (
                <div>
                  <CardHeader className="p-0 mb-6">
                    <h2 className="text-2xl font-heading font-semibold text-gradient">
                      Your Information
                    </h2>
                    <p className="text-muted-foreground">
                      Please provide your contact details
                    </p>
                  </CardHeader>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={bookingData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={bookingData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={bookingData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="notes">Special Notes (Optional)</Label>
                      <textarea
                        id="notes"
                        value={bookingData.notes}
                        onChange={(e) => handleInputChange("notes", e.target.value)}
                        placeholder="Any specific concerns, allergies, or preferences..."
                        className="w-full p-3 border border-border rounded-lg resize-none h-24"
                      />
                    </div>

                    <div className="bg-pastel-pink p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="font-medium text-primary">What to expect next:</span>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                        <li>Confirmation email within 1 hour</li>
                        <li>SMS reminder 24 hours before appointment</li>
                        <li>Consultation call if it's your first visit</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <div>
                  <CardHeader className="p-0 mb-6">
                    <h2 className="text-2xl font-heading font-semibold text-gradient">
                      Booking Summary
                    </h2>
                    <p className="text-muted-foreground">
                      Please review your appointment details
                    </p>
                  </CardHeader>

                  <div className="space-y-6">
                    <div className="bg-gradient-accent p-6 rounded-lg">
                      <h3 className="font-heading font-semibold text-lg mb-4">Appointment Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm font-medium text-muted-foreground">Service:</span>
                            <p className="font-semibold">{selectedService?.name}</p>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-muted-foreground">Date:</span>
                            <p className="font-semibold">
                              {bookingData.date && new Date(bookingData.date).toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm font-medium text-muted-foreground">Time:</span>
                            <p className="font-semibold">{bookingData.time}</p>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-muted-foreground">Duration:</span>
                            <p className="font-semibold">{selectedService?.duration}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-accent p-6 rounded-lg">
                      <h3 className="font-heading font-semibold text-lg mb-4">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-sm font-medium text-muted-foreground">Name:</span>
                          <p className="font-semibold">{bookingData.name}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-muted-foreground">Email:</span>
                          <p className="font-semibold">{bookingData.email}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-muted-foreground">Phone:</span>
                          <p className="font-semibold">{bookingData.phone}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/10 p-6 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-semibold">Total Cost:</span>
                        <span className="text-2xl font-bold text-primary">{selectedService?.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Payment will be collected at the time of service. We accept cash, credit cards, and digital payments.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-8 border-t border-border/30">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="btn-ghost"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Previous
                </Button>

                {currentStep < 4 ? (
                  <Button
                    onClick={handleNext}
                    disabled={
                      (currentStep === 1 && !bookingData.service) ||
                      (currentStep === 2 && (!bookingData.date || !bookingData.time)) ||
                      (currentStep === 3 && (!bookingData.name || !bookingData.email || !bookingData.phone))
                    }
                    className="btn-hero"
                  >
                    Continue
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                ) : (
                  <Button className="btn-hero">
                    <CheckCircle className="mr-2 w-4 h-4" />
                    Confirm Booking
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Booking;