import { Instagram, Heart } from 'lucide-react';
import logo from '../assets/692b94be7bdcbbe7a55e608181015379d987020f.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a5540] text-[#f5f0e3] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="Pisang Ijo Evi" className="h-16 w-auto mb-4" />
            <p className="text-[#f5f0e3]/80 leading-relaxed">
              Makassar's Finest Dessert. Crafted with local love & authentic tradition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl text-[#f4d87f] mb-4">Menu Cepat</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('beranda')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#f5f0e3]/80 hover:text-[#f4d87f] transition-colors"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('tentang')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#f5f0e3]/80 hover:text-[#f4d87f] transition-colors"
                >
                  Tentang
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#f5f0e3]/80 hover:text-[#f4d87f] transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#f5f0e3]/80 hover:text-[#f4d87f] transition-colors"
                >
                  Kontak
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl text-[#f4d87f] mb-4">Ikuti Kami</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/pisangijoevi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#f5f0e3]/10 rounded-full flex items-center justify-center hover:bg-[#f4d87f] hover:text-[#1a5540] transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
            <p className="mt-4 text-[#f5f0e3]/80">
              @pisangijoevi
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#f5f0e3]/20 text-center">
          <p className="text-[#f5f0e3]/80 flex items-center justify-center gap-2 flex-wrap">
            <span>&copy; {currentYear} Pisang Ijo Evi. Made with</span>
            <Heart size={16} className="fill-[#f4d87f] text-[#f4d87f] inline" />
            <span>in Makassar</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
