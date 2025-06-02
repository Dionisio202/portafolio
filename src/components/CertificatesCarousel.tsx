import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, ExternalLink } from 'lucide-react';
import certificates from '../data/certificates'; 
const CertificatesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);



  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

 

  const handleCertificateClick = (url:any) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const currentCert = certificates[currentIndex];

  return (
    <section id="certificates" className="py-16 sm:py-12 lg:py-16 max-w-7xl mx-auto mt-16 ">
      <div className="mb-8 sm:mb-12 text-center">
        <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold mb-4 sm:mb-8 flex items-center  gap-2 ">
          <Award className="w-6 h-6 sm:w-8 sm:h-8" />
          Certificates & Achievements
        </h2>
      </div>

      <div className="relative rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        {/* Main Content */}
        <div className="flex flex-col">
          {/* Certificate Image - Clickable */}
          <div className="relative group">
            <div 
              className="h-64 sm:h-80 md:h-96 lg:h-[500px] relative overflow-hidden bg-gray-50 dark:bg-gray-800 cursor-pointer transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-750"
              onClick={() => handleCertificateClick(currentCert.verificationUrl)}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <img
                src={currentCert.image}
                alt={`${currentCert.title} Certificate`}
                className="w-full h-full object-contain object-center transition-all duration-700 group-hover:scale-105 p-4 sm:p-6 lg:p-8"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      <ExternalLink className="w-4 h-4" />
                      Click to verify certificate
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>

        {/* Navigation Controls */}
        <div className="absolute top-1/3 left-2 sm:left-4 flex items-center">
          <button
            onClick={prevSlide}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 group border border-gray-200 dark:border-gray-600"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            aria-label="Previous certificate"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
          </button>
        </div>

        <div className="absolute top-1/3 right-2 sm:right-4 flex items-center">
          <button
            onClick={nextSlide}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 group border border-gray-200 dark:border-gray-600"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            aria-label="Next certificate"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
          </button>
        </div>

       

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / certificates.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Mobile swipe indicator */}
      <div className="block sm:hidden text-center mt-4">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Tap image to verify • Swipe or use arrows to navigate
        </p>
      </div>
    </section>
  );
};

export default CertificatesCarousel;