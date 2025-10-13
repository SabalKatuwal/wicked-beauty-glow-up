import { useState } from "react";
import { Card } from "@/components/ui/card";
// import sprayTanImage from "@/assets/service-spray-tan.jpg";
// import lashesImage from "@/assets/service-lashes.jpg";
// import browsImage from "@/assets/service-brows.jpg";
// import hennaImage from "@/assets/service-henna.jpg";

import lashesImage from "@/assets/works-eyelashes.png";
import henna1Image from "@/assets/works-henna1.jpg";
import henna3Image from "@/assets/works-henna3.jpg.webp";
import lamination1Image from "@/assets/works-lamination1.png";
import lamination2Image from "@/assets/works-lamination2.jpeg";
import eyelashImage from "@/assets/eyelash-extension.png";


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: lamination1Image, alt: "Brow transformation", category: "Brows" },
    { src: lashesImage, alt: "Beautiful eyelash extensions", category: "Lashes" },
    { src: henna1Image, alt: "Henna hybrid browns", category: "Henna" },
    { src: henna3Image, alt: "Perfect brow lamination", category: "Henna" },
    { src: eyelashImage, alt: "Volume lash extensions", category: "Lashes" },
    { src: lamination2Image, alt: "Henna hybrid brows", category: "Browns" },
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See the stunning transformations and results from our expert beauty treatments
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-card hover:shadow-elegant transition-all duration-500 cursor-pointer group animate-scaleIn"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <span className="text-white font-semibold text-lg">{image.category}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
