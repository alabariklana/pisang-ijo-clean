export function Gallery() {
  const images = [
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/pisang-ijo-evi.firebasestorage.app/o/pisang-ijo-product.webp?alt=media&token=ee401a9e-7439-4676-81e0-b368c78e4e4a',
      alt: 'Pisang Ijo segar'
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/pisang-ijo-evi.firebasestorage.app/o/pisang-ijo-table.webp?alt=media&token=8c9affe3-b3c3-4612-aa5e-2eaed0b3054a',
      alt: 'Menu spesial'
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/pisang-ijo-evi.firebasestorage.app/o/pisang-ijo-banner.webp?alt=media&token=2c154155-6348-4821-a4bf-90a7184e2f34',
      alt: 'Kuliner tradisional'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#e8dcc4] via-[#f5f0e3] to-[#d4c8a8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#1a5540] mb-4">
            Galeri
          </h2>
          <div className="w-24 h-1 bg-[#f4d87f] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Lihat kelezatan Pisang Ijo Evi
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 group aspect-square"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a5540]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-[#f5f0e3] transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Lihat lebih banyak foto di Instagram kami
          </p>
          <a
            href="https://instagram.com/pisangijoevi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1a5540] text-[#f5f0e3] px-8 py-4 rounded-full hover:bg-[#2a6550] transition-colors"
          >
            @pisangijoevi
          </a>
        </div>
      </div>
    </section>
  );
}
