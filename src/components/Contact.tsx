import { MapPin, Phone, Instagram, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#1a5540] mb-4">
            Hubungi Kami
          </h2>
          <div className="w-24 h-1 bg-[#f4d87f] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Kunjungi kami atau hubungi untuk informasi lebih lanjut
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#f5f0e3] to-[#e8dcc4] rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1a5540] rounded-full flex items-center justify-center">
                  <MapPin className="text-[#f4d87f]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl text-[#1a5540] mb-2">Alamat</h3>
                  <p className="text-gray-700">
                    Makassar, Sulawesi Selatan<br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f5f0e3] to-[#e8dcc4] rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1a5540] rounded-full flex items-center justify-center">
                  <Phone className="text-[#f4d87f]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl text-[#1a5540] mb-2">Telepon</h3>
                  <p className="text-gray-700">
                    Hubungi via Instagram untuk order
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f5f0e3] to-[#e8dcc4] rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1a5540] rounded-full flex items-center justify-center">
                  <Instagram className="text-[#f4d87f]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl text-[#1a5540] mb-2">Instagram</h3>
                  <a
                    href="https://instagram.com/pisangijoevi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a5540] hover:text-[#2a6550]"
                  >
                    @pisangijoevi
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f5f0e3] to-[#e8dcc4] rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1a5540] rounded-full flex items-center justify-center">
                  <Clock className="text-[#f4d87f]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl text-[#1a5540] mb-2">Jam Buka</h3>
                  <p className="text-gray-700">
                    Senin - Minggu<br />
                    09:00 - 21:00 WITA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="flex items-center">
            <div className="w-full bg-[#1a5540] rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-3xl text-[#f4d87f] mb-4">
                Siap Memesan?
              </h3>
              <p className="text-[#f5f0e3] mb-8 leading-relaxed">
                Pesan Pisang Ijo Evi sekarang melalui Instagram kami. 
                Kami siap melayani pesanan Anda dengan cepat dan ramah!
              </p>
              <a
                href="https://instagram.com/pisangijoevi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#f4d87f] text-[#1a5540] px-8 py-4 rounded-full hover:bg-[#e5c970] transition-colors"
              >
                Pesan via Instagram
              </a>
              
              <div className="mt-8 pt-8 border-t border-[#f5f0e3]/30">
                <p className="text-[#f5f0e3] text-sm mb-4">
                  Atau scan QR Code untuk langsung ke Instagram
                </p>
                <div className="inline-block bg-white p-4 rounded-xl">
                  <div className="w-32 h-32 bg-[#f5f0e3] rounded flex items-center justify-center">
                    <Instagram size={48} className="text-[#1a5540]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
