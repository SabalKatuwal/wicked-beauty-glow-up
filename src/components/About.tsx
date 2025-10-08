import { Award, Heart, Star, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const certifications = [
    "Certified Lash Technician (Triple Certified)",
    "Professional Spray Tan Specialist",
    "Licensed Brow Lamination Expert",
    "Henna Hybrid Brow Specialist",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
              About Wicked Beauty
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Star className="h-5 w-5 text-accent fill-accent" />
              <Star className="h-5 w-5 text-accent fill-accent" />
              <Star className="h-5 w-5 text-accent fill-accent" />
              <Star className="h-5 w-5 text-accent fill-accent" />
              <Star className="h-5 w-5 text-accent fill-accent" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6 animate-slideUp">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    At Wicked Beauty, we believe every person deserves to feel confident and beautiful. 
                    We're dedicated to providing premium beauty treatments in a luxurious, welcoming environment 
                    where your beauty dreams truly come to life.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    Expert Care
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our certified technicians bring years of expertise and continuous training to ensure 
                    you receive the highest quality treatments using premium products and the latest techniques.
                  </p>
                </div>
              </div>
            </div>

            <Card className="border-none shadow-elegant animate-slideUp animation-delay-300">
              <CardContent className="p-8 bg-gradient-to-br from-primary/5 to-secondary/10">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Award className="h-6 w-6 text-accent mr-2" />
                  Certifications & Expertise
                </h3>
                <ul className="space-y-4">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground italic text-center">
                    "Committed to excellence in every treatment, every client, every time."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl animate-fadeIn">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
              Why Choose Wicked Beauty?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { title: "Premium Products", description: "Only the finest, safest products" },
                { title: "Personalized Service", description: "Tailored to your unique beauty goals" },
                { title: "Relaxing Atmosphere", description: "Luxurious, spa-like environment" },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
