import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1f4a29]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Pisang Ijo Evi" className="h-20 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('beranda')}
              className="text-[#f5f0e3] hover:text-[#f4d87f] transition-colors"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection('tentang')}
              className="text-[#f5f0e3] hover:text-[#f4d87f] transition-colors"
            >
              Tentang
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-[#f5f0e3] hover:text-[#f4d87f] transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('kontak')}
              className="text-[#f5f0e3] hover:text-[#f4d87f] transition-colors"
            >
              Kontak
            </button>
            <a
              href="https://instagram.com/pisangijoevi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f4d87f] text-[#1a5540] px-6 py-2 rounded-full hover:bg-[#e5c970] transition-colors"
            >
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#f5f0e3] hover:text-[#f4d87f] transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1a5540] border-t border-[#2a6550]">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <button
              onClick={() => scrollToSection('beranda')}
              className="block w-full text-left text-[#f5f0e3] hover:text-[#f4d87f] py-2 transition-colors"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection('tentang')}
              className="block w-full text-left text-[#f5f0e3] hover:text-[#f4d87f] py-2 transition-colors"
            >
              Tentang
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left text-[#f5f0e3] hover:text-[#f4d87f] py-2 transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('kontak')}
              className="block w-full text-left text-[#f5f0e3] hover:text-[#f4d87f] py-2 transition-colors"
            >
              Kontak
            </button>
            <a
              href="https://instagram.com/pisangijoevi"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#f4d87f] text-[#1a5540] px-6 py-2 rounded-full hover:bg-[#e5c970] transition-colors mt-4"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
