import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import pisjoSvg from '../assets/pisjo.svg';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'https://firebasestorage.googleapis.com/v0/b/pisang-ijo-evi.firebasestorage.app/o/balla-lompoa.webp?alt=media&token=c1b36900-e3c4-447c-8423-f21c5d3f5d70',
    'https://firebasestorage.googleapis.com/v0/b/pisang-ijo-evi.firebasestorage.app/o/pantai-losari-1998.webp?alt=media&token=42d9e2cf-d4e7-43a4-92b5-4aa1382bd80f'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e8dcc4] via-[#f5f0e3] to-[#d4c8a8] pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #1a5540 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Background Image Slider */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-20' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${image}')`
          }}
        ></div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Logo */}
        <div className="mb-8 flex justify-center items-center flex-col gap-1">
          <img src={pisjoSvg} alt="Pisang Ijo" className="w-52 md:w-64 h-auto" />
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a5540] mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
              EVI
            </h1>
            <p className="text-2xl md:text-3xl text-[#1a5540] mb-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
              Makassar's Finest Dessert
            </p>
            <p className="text-sm md:text-base text-[#1a5540]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
              Crafted with local love<br />
              and authentic tradition
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <a
            href="https://instagram.com/pisangijoevi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a5540] text-[#f5f0e3] px-8 py-4 rounded-full hover:bg-[#2a6550] transition-all hover:scale-105 shadow-lg"
          >
            Pesan via Instagram
          </a>
          <button
            onClick={scrollToMenu}
            className="bg-[#f4d87f] text-[#1a5540] px-8 py-4 rounded-full hover:bg-[#e5c970] transition-all hover:scale-105 shadow-lg"
          >
            Lihat Menu
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <ChevronDown size={32} className="text-[#1a5540] mx-auto" />
        </div>
      </div>
    </section>
  );
}