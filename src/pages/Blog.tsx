import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight, BookOpen } from "lucide-react";
import blog1Img from "@/assets/Blog1.jpg";
import blog2Img from "@/assets/Blog2.jpg";
import blog3Img from "@/assets/Blog3.jpg";
import blog4Img from "@/assets/Blog4.jpg";
import blog5Img from "@/assets/Blog5.jpg";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "The Ultimate Guide to HydraFacials: Everything You Need to Know",
    excerpt: "Discover why HydraFacial has become the most popular facial treatment worldwide and how it can transform your skin in just one session.",
  image: blog1Img,
    author: "Dr. Sarah Mitchell",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Treatment Guide",
    tags: ["HydraFacial", "Skincare", "Beauty Tips"]
  };

  const blogPosts = [
    {
      id: 2,
      title: "5 Signs You're Ready for Laser Hair Removal",
      excerpt: "Learn the key indicators that suggest laser hair removal might be the perfect solution for your needs.",
      image: blog2Img,
      author: "Emma Rodriguez",
      date: "December 12, 2024", 
      readTime: "5 min read",
      category: "Laser Treatments"
    },
    {
      id: 3,
      title: "Winter Skincare: How to Keep Your Glow All Season",
      excerpt: "Essential tips for maintaining healthy, radiant skin during the colder months.",
      image: blog3Img,
      author: "Dr. Sarah Mitchell",
      date: "December 10, 2024",
      readTime: "6 min read", 
      category: "Skincare Tips"
    },
    {
      id: 4,
      title: "Before & After: What to Expect from Microneedling",
      excerpt: "A comprehensive guide to microneedling results, timeline, and aftercare instructions.",
      image: blog4Img,
      author: "Michael Chen",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Treatment Guide"
    },
    {
      id: 5,
      title: "The Science Behind Chemical Peels",
      excerpt: "Understanding how chemical peels work and which type is right for your skin concerns.",
      image: blog5Img,
      author: "Dr. Sarah Mitchell", 
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "Education"
    },
    {
      id: 6,
      title: "Age Gracefully: Anti-Aging Treatments That Actually Work",
      excerpt: "Evidence-based anti-aging treatments that deliver real results without surgery.",
      image: blog1Img,
      author: "Emma Rodriguez",
      date: "December 3, 2024",
      readTime: "10 min read",
      category: "Anti-Aging"
    },
  ];

  const categories = [
    "All Posts",
    "Treatment Guides", 
    "Skincare Tips",
    "Laser Treatments",
    "Anti-Aging",
    "Beauty Trends"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-soft" data-aos="fade-up">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="heading-hero text-gradient mb-6 min-h-0 pt-4" style={{overflow: 'visible', display: 'inline-block'}}>
              Beauty Tips & Insights
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Stay informed with the latest beauty trends, treatment guides, and expert tips 
              from our professional team. Your guide to looking and feeling your best.
            </p>
            <Link to="/">
              <Button className="btn-hero" asChild>
                <span>
                  <BookOpen className="mr-2 w-4 h-4" />
                  Explore All Articles
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-semibold text-center mb-8 text-gradient">Featured Article</h2>
            
            <Card className="card-elegant overflow-hidden" data-aos="fade-up">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
                
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <Badge variant="outline" className="w-fit">
                      {featuredPost.category}
                    </Badge>
                    
                    <h3 className="font-heading font-bold text-2xl leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags?.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <Link to="/">
                        <Button className="btn-hero w-fit" asChild>
                          <span>
                            Read Full Article
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gradient-soft border-y border-border/30">
        <div className="section-container">
          <div className="text-center" data-aos="fade-up">
            <p className="text-muted-foreground mb-4">Browse by category:</p>
            <div className="flex flex-wrap justify-center gap-3" data-aos="fade-up" data-aos-delay="100">
              {categories.map((category) => (
                <Link to="/">
                  <Button 
                    key={category}
                    variant="outline" 
                    className="btn-ghost"
                    asChild
                  >
                    <span>{category}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="card-elegant overflow-hidden group" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-primary">
                    {post.category}
                  </Badge>
                </div>
                
                <CardHeader className="pb-4">
                  <h3 className="font-heading font-semibold text-lg leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-primary" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <Link to="/">
                      <Button variant="ghost" className="text-primary hover:bg-pastel-pink p-0 h-auto" asChild>
                        <span>
                          Read More
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/">
              <Button className="btn-hero" asChild>
                <span>Load More Articles</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-soft">
        <div className="section-container">
          <Card className="card-elegant max-w-2xl mx-auto" data-aos="fade-up">
            <CardContent className="p-8 text-center">
              <h2 className="font-heading font-bold text-2xl mb-4 text-gradient">
                Stay Updated with Beauty Tips
              </h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter and get the latest beauty tips, treatment guides, 
                and exclusive offers delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Link to="/">
                  <Button className="btn-hero" asChild>
                    <span>Subscribe</span>
                  </Button>
                </Link>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary">
        <div className="section-container text-center">
          <div className="max-w-3xl mx-auto space-y-8" data-aos="fade-up">
            <h2 className="heading-section text-white">
              Ready to Put These Tips into Practice?
            </h2>
            <p className="text-xl text-white/90">
              Book a consultation with our experts to create a personalized beauty plan based on your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="100">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/20 hover:border-white border-2 border-transparent" asChild>
                  <span>Book Consultation</span>
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

export default Blog;