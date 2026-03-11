import React from 'react';
import Footer from '@/components/Footer';
import { Book, Computer } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Image with Overlay */}
      <div 
        className="w-full h-64 bg-goldsmiths-blue relative"
        style={{
          backgroundImage: "linear-gradient(rgba(141, 169, 214, 0.8), rgba(141, 169, 214, 0.8)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto h-full flex items-center justify-center px-4">
          <h1 className="font-druk text-3xl md:text-5xl text-white text-center">
            About Us
          </h1>
        </div>
      </div>
      
      {/* About the University Section */}
      <section className="py-16 bg-goldsmiths-beige">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-6">
            
            {/* University Image */}
            <div className="md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/university-main.webp" 
                alt="NIT Goa campus" 
                className="w-full h-64 object-cover rounded-lg shadow-lg border border-gray-200"
              />
            </div>
            
            {/* Text Section */}
            <div className="md:w-2/3">
              <h2 className="font-druk text-2xl md:text-3xl text-goldsmiths-text mb-6 border-b-4 border-goldsmiths-blue pb-2 inline-block">
                About the University
              </h2>
              
              <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6">
                
                <p className="font-publico text-lg text-goldsmiths-text mb-4 leading-relaxed">
                  National Institute of Technology Goa (NIT Goa) is one of India's premier engineering institutions, established to promote technical education and research. Known for its academic rigor, industry collaborations, and focus on sustainable development, NIT Goa continues to nurture future leaders in science and technology.
                </p>

                <p className="font-publico text-lg text-goldsmiths-text mb-4 leading-relaxed">
                  Since its inception in 2010, NIT Goa has grown steadily, attracting students from across India and abroad. The campus fosters a vibrant academic community and emphasizes cutting-edge research in engineering, sustainability, and technology.
                </p>

                <p className="font-publico text-lg text-goldsmiths-text leading-relaxed">
                  The institute features modern laboratories, research centers, and innovation hubs, fostering excellence in teaching and applied research. NIT Goa’s campus environment supports interdisciplinary collaboration and prepares students to address global challenges in sustainability and technology.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
