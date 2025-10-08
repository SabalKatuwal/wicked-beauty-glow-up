import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Sun, Eye, Brush } from "lucide-react";
import sprayTanImage from "@/assets/service-spray-tan.jpg";
import lashesImage from "@/assets/service-lashes.jpg";
import browsImage from "@/assets/service-brows.jpg";
import hennaImage from "@/assets/service-henna.jpg";

const Services = () => {
  const services = [
    {
      icon: Sun,
      title: "Spray Tans",
      description: "Achieve a flawless, sun-kissed glow without UV exposure. Our professional spray tan solutions give you a natural-looking tan that lasts.",
      image: sprayTanImage,
      features: ["Custom color matching", "Streak-free application", "Long-lasting results"],
    },
    {
      icon: Eye,
      title: "Eyelash Extensions",
      description: "Wake up with gorgeous lashes every day. Our certified technicians create customized lash looks that enhance your natural beauty.",
      image: lashesImage,
      features: ["Volume & Classic styles", "Premium materials", "2-3 weeks duration"],
    },
    {
      icon: Brush,
      title: "Brow Lamination",
      description: "Transform unruly brows into perfectly shaped, fuller-looking brows. A semi-permanent treatment that gives you beautifully styled brows.",
      image: browsImage,
      features: ["Fuller appearance", "6-8 weeks lasting", "Low maintenance"],
    },
    {
      icon: Sparkles,
      title: "Henna Hybrid Brows",
      description: "Combine the best of both worlds with our henna hybrid treatment. Natural definition with long-lasting color for stunning brows.",
      image: hennaImage,
      features: ["Natural ingredients", "Skin & hair tinting", "Up to 4 weeks"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expert beauty treatments tailored to enhance your natural radiance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="overflow-hidden border-none shadow-card hover:shadow-elegant transition-all duration-500 group animate-slideUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <div className="bg-primary p-2 rounded-full">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 bg-gradient-to-b from-card to-muted/20">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-foreground/80"
                      >
                        <Sparkles className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
