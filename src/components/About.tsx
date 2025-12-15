import { Heart, Award, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Heart,
      title: 'Dibuat dengan Cinta',
      description: 'Setiap porsi dibuat dengan resep tradisional yang diwariskan turun-temurun'
    },
    {
      icon: Award,
      title: 'Kualitas Terbaik',
      description: 'Menggunakan bahan-bahan pilihan dan pisang hijau berkualitas premium'
    },
    {
      icon: Users,
      title: 'Dipercaya Banyak Orang',
      description: 'Telah melayani ribuan pelanggan di Makassar dan sekitarnya'
    }
  ];

  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#1a5540] mb-4 font-medium">
            Tentang Pisang Ijo
          </h2>
          <div className="w-24 h-1 bg-[#f4d87f] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Pisang Ijo adalah dessert khas Makassar yang legendaris. Terbuat dari pisang hijau pilihan
            yang dibalut dengan adonan tepung hijau pandan, disajikan dengan kuah santan manis, 
            sirup merah, dan es serut yang menyegarkan.
          </p>
        </div>

        {/* Product Image */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-xl w-full md:w-2/3 mx-auto">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/pisang-ijo-evi.firebasestorage.app/o/pisang-ijo-terbaik-makassar_converted.webp?alt=media&token=3d12dd2d-01da-4c25-80c4-052fb5c35b1c"
            alt="Pisang Ijo Terbaik Makassar"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#f5f0e3] to-[#e8dcc4] hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1a5540] rounded-full mb-4">
                  <Icon size={32} className="text-[#f4d87f]" />
                </div>
                <h3 className="text-xl text-[#1a5540] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Story */}
        <div className="bg-[#1a5540] rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl text-[#f4d87f] mb-4">
            Cerita Kami
          </h3>
          <p className="text-[#f5f0e3] leading-relaxed max-w-4xl mx-auto mb-8">
            Pisang Ijo Evi dimulai dari kecintaan kami terhadap kuliner tradisional Makassar.
            Dengan resep yang telah dipercaya selama bertahun-tahun, kami berkomitmen untuk
            menghadirkan cita rasa autentik Pisang Ijo yang legendaris. Setiap sajian dibuat
            dengan penuh kehati-hatian untuk memastikan kesegaran dan kualitas yang terbaik
            untuk Anda.
          </p>

          {/* Platform Cards */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f5f0e3] rounded-xl p-4 hover:bg-[#e8dcc4] transition-colors"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pisang-ijo-evi.firebasestorage.app/o/go-food.png?alt=media&token=aec431db-35d1-458c-81c9-401ace8c0a51"
                alt="GoFood"
                className="w-full h-12 object-contain"
              />
            </a>
            <a
              href="https://www.grab.com/id/download/?pid=inappsharing&c=6-C2ATGJBUN7EXVN&is_retargeting=true&af_force_deeplink=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f5f0e3] rounded-xl p-4 hover:bg-[#e8dcc4] transition-colors"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pisang-ijo-evi.firebasestorage.app/o/grabfood-vector-logo.png?alt=media&token=925f99f1-d0fb-45aa-b7ee-c3a1138d45ec"
                alt="GrabFood"
                className="w-full h-12 object-contain"
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f5f0e3] rounded-xl p-4 hover:bg-[#e8dcc4] transition-colors"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pisang-ijo-evi.firebasestorage.app/o/shopee-food.png?alt=media&token=f47db5dd-4b48-4fcc-afd4-efe1f157ef63"
                alt="ShopeeFood"
                className="w-full h-12 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
