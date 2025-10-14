import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";
import heroImage from "@/assets/wicked-wallpaper.png";
// import wickedVideo from "@/assets/wickedVideo.mov";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Section */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Wicked Beauty Luxury Salon"
            className="w-full h-full object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--primary))]/70 to-[hsl(var(--primary))]/50" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 animate-pulse">
          <Sparkles className="h-8 w-8 text-white opacity-60" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-700">
          <Star className="h-6 w-6 text-white opacity-60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 pt-32">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            {/* Logo/Brand */}
            <div className="flex items-center justify-center space-x-3 animate-fadeIn">
              <Sparkles className="h-10 w-10 text-white" />
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-white">
                Wicked Beauty
              </h1>
              <Sparkles className="h-10 w-10 text-white" />
            </div>

            {/* Slogan */}
            <p className="text-xl md:text-3xl font-serif text-white italic">
              Where beauty dreams come true!
            </p>

            {/* Services Badges */}
            <div className="flex flex-wrap justify-center gap-4 py-6">
              {[
                "Spray Tans",
                "Eyelash Extensions",
                "Brow Lamination",
                "Henna Brows",
              ].map((service) => (
                <span
                  key={service}
                  className="px-6 py-2 bg-white/30 backdrop-blur-sm rounded-full text-white font-semibold border border-white/40"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all text-lg px-8 py-6 rounded-full"
              >
                Book Your Appointment
              </Button>
              <Button
                onClick={() => {
                  const element = document.getElementById("services");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full"
              >
                Explore Services
              </Button>
            </div>

            {/* Certification Badge */}
            <div className="pt-8">
              <p className="text-white text-sm font-medium tracking-wider">
                CERTIFIED LASH TECHNICIAN
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
