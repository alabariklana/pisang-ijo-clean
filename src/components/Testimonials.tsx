import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Siti Nurhaliza',
      location: 'Makassar',
      rating: 5,
      text: 'Pisang Ijo Evi ini benar-benar enak! Rasanya autentik seperti yang dulu saya makan waktu kecil. Santan dan sirupnya pas banget.'
    },
    {
      name: 'Budi Santoso',
      location: 'Jakarta',
      rating: 5,
      text: 'Saya dari Jakarta dan pertama kali coba Pisang Ijo di sini. Ketagihan! Sekarang kalau ke Makassar pasti mampir ke Pisang Ijo Evi.'
    },
    {
      name: 'Andi Rahman',
      location: 'Makassar',
      rating: 5,
      text: 'Langganan saya dan keluarga. Pelayanan ramah, harga terjangkau, dan yang paling penting rasanya mantap!'
    },
    {
      name: 'Mira Kusuma',
      location: 'Gowa',
      rating: 5,
      text: 'Topping-nya lengkap dan fresh. Pisangnya lembut, santannya creamy. Favorit saya yang spesial dengan kelapa muda!'
    },
    {
      name: 'Hendra Wijaya',
      location: 'Makassar',
      rating: 5,
      text: 'Sudah coba berbagai Pisang Ijo di Makassar, tapi Pisang Ijo Evi juaranya! Recommended banget untuk oleh-oleh atau makan sendiri.'
    },
    {
      name: 'Fatimah Az-Zahra',
      location: 'Sungguminasa',
      rating: 5,
      text: 'Enak dan halal. Cocok buat buka puasa atau cemilan sore. Anak-anak di rumah suka banget!'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#1a5540] mb-4">
            Kata Mereka
          </h2>
          <div className="w-24 h-1 bg-[#f4d87f] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Testimoni dari pelanggan setia Pisang Ijo Evi
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#f5f0e3] to-[#e8dcc4] rounded-2xl p-6 hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 text-[#1a5540] opacity-20" size={40} />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-[#f4d87f] text-[#f4d87f]" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="pt-4 border-t border-[#1a5540]/20">
                <p className="text-[#1a5540]">
                  {testimonial.name}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
