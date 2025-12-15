export function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1695712576568-be85f78a4881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwZGVzc2VydHxlbnwxfHx8fDE3NjUzNTk0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Pisang Ijo segar'
    },
    {
      url: 'https://images.unsplash.com/photo-1674456720100-0edcdce5572b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGJhbmFuYSUyMGRlc3NlcnR8ZW58MXx8fHwxNzY1MzU5NDc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Menu spesial'
    },
    {
      url: 'https://images.unsplash.com/photo-1552590635-27c2c2128abf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZvb2R8ZW58MXx8fHwxNzY1Mjc0NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
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
