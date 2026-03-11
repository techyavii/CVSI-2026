import React from 'react';
import Footer from '@/components/Footer';
import { Map, MapPin, Building } from 'lucide-react';

const ConferenceVenue = () => {
  const venueImages = [
    {
      src: "/lovable-uploads/university-main.webp",
      alt: "NIT Goa campus aerial view"
    },
    {
      src: "/lovable-uploads/dongNai2.webp",
      alt: "NIT Goa campus students"
    },
    {
      src: "/lovable-uploads/dongNai3.webp",
      alt: "NIT Goa building"
    },
    {
      src: "/lovable-uploads/dongNai5.webp",
      alt: "NIT Goa campus walkway"
    }
  ];

  const locationImages = [
    { src: "/lovable-uploads/beinHoa.jpg", alt: "Goa coastline" },
    { src: "/lovable-uploads/veitnam1.jpeg", alt: "Goa architecture" },
    { src: "/lovable-uploads/veitnam2.jpg", alt: "Academic City Goa" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">VENUE</h1>
          
          {/* Main Venue Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="grid grid-cols-2 gap-4">
              {venueImages.map((image, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">NATIONAL INSTITUTE OF TECHNOLOGY GOA</h2>
              <div className="flex items-start gap-3 mb-3">
                <Building className="mt-1 flex-shrink-0" size={20} />
                <p>National Institute of Technology Goa (NIT Goa) is an autonomous public technical university in India, established to foster excellence in engineering education and research. The institute is committed to innovation, sustainability, and industry collaboration.</p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="mt-1 flex-shrink-0" size={20} />
                <p>National Institute of Technology Goa, India</p>
              </div>
              <a 
                href="https://maps.google.com/?q=National+Institute+of+Technology+Goa"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline mt-2"
              >
                <Map className="mr-1" size={16} />
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Location Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">LOCATION</h2>
              <p className="text-justify">
                National Institute of Technology Goa, India.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <iframe 
                src="https://www.google.com/maps?q=National+Institute+of+Technology+Goa&output=embed"
                width="100%" 
                height="300" 
                style={{border: 0}} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Visa Section */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">VISA</h2>
            
            <p className="mb-6 text-justify">
              International attendees should verify India visa requirements based on their nationality. Some visitors are eligible for visa-on-arrival or e‑visa, while others require prior approval. Processing times vary, so early preparation is advised.
            </p>

            <p className="text-justify mb-4 text-sm text-gray-600">
              If you need an official invitation letter for visa purposes, please register for the conference and email the conference secretariat at{' '}
              <a href="mailto:cvsi.congress@gmail.com" className="text-blue-600 hover:underline">
                cvsi.congress@gmail.com
              </a>.  
              Invitation letters are issued upon request and after registration/payment confirmation. Note that this does not guarantee visa approval.
            </p>
          </div>

          {/* Goa Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">GOA</h2>
            
            <p className="mb-6 text-justify">
              Goa, a coastal state in India known for its scenic beaches, vibrant culture, and rich heritage, provides a serene yet stimulating environment for academic events. Visitors can enjoy a unique blend of Indian and Portuguese influences, local cuisine, and natural beauty.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {locationImages.map((image, index) => (
                <div key={index} className="bg-black p-2 rounded-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConferenceVenue;
