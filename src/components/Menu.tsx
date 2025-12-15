import { Check } from 'lucide-react';

export function Menu() {
  const menuItems = [
    {
      name: 'Pisang Ijo Evi Cup',
      description: 'Pisang ijo klasik dengan kuah santan, sirup merah, dan es serut',
      price: 'Rp 12.000',
      image: 'https://firebasestorage.googleapis.com/v0/b/pisang-ijo-evi.firebasestorage.app/o/Pisang-ijo-cup.webp?alt=media&token=9c39bc57-c7cd-44e4-966d-07195ba09a86',
      features: ['Pisang hijau pilihan', 'Kuah santan original', 'Sirup merah manis', 'Es serut segar']
    },
    {
      name: 'Pisang Ijo Evi Original',
      description: 'Pisang ijo dengan tambahan topping istimewa',
      price: 'Rp 25.000',
      image: 'https://firebasestorage.googleapis.com/v0/b/pisang-ijo-evi.firebasestorage.app/o/pisang-ijo-ori.jpg?alt=media&token=d5a605e5-ccbf-460d-b5f2-f75beee271a6',
      features: ['Semua dari Original', 'Satu Pisang Utuh', 'Extra santan'],
      popular: true
    },
    {
      name: 'Pisang Ijo Frozen Keluarga',
      description: 'Ready to Heat untuk di Makan Bareng Keluarga!',
      price: 'Rp 75.000',
      image: 'https://firebasestorage.googleapis.com/v0/b/pisang-ijo-evi.firebasestorage.app/o/pisang-ijo-frozen.jpg?alt=media&token=5f2ca446-88ae-41e3-a54d-46640fc6d390',
      features: ['Porsi lebih besar', 'Triple pisang', 'Extra topping', 'Praktis dan mudah disajikan']
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-[#e8dcc4] via-[#f5f0e3] to-[#d4c8a8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#1a5540] mb-4 font-medium">
            Menu Kami
          </h2>
          <div className="w-24 h-1 bg-[#f4d87f] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Pilih varian Pisang Ijo favorit Anda
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 relative ${
                item.popular ? 'ring-4 ring-[#f4d87f]' : ''
              }`}
            >
              {item.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1a5540] text-[#f4d87f] px-6 py-2 rounded-full">
                  Paling Populer
                </div>
              )}
              
              <div className="mb-6 rounded-2xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="text-center mb-4">
                <h3 className="text-2xl text-[#1a5540] mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <div className="text-3xl text-[#1a5540]">
                  {item.price}
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {item.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check size={20} className="text-[#1a5540] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://instagram.com/pisangijoevi"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#1a5540] text-[#f5f0e3] py-3 rounded-full hover:bg-[#2a6550] transition-colors"
              >
                Pesan Sekarang
              </a>
            </div>
          ))}
        </div>

        {/* Custom Order CTA */}
        <div className="mt-16 text-center bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl text-[#1a5540] mb-4">
            Butuh Pesanan Khusus?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Kami melayani pesanan untuk acara, catering, dan paket spesial. 
            Hubungi kami untuk diskusi lebih lanjut!
          </p>
          <a
            href="https://instagram.com/pisangijoevi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#f4d87f] text-[#1a5540] px-8 py-4 rounded-full hover:bg-[#e5c970] transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}
