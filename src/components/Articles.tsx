import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const articles = [
  {
    id: 1,
    title: "Mengenal pisang ijo, dessert khas Makassar",
    excerpt: "Pisang ijo adalah hidangan penutup tradisional dari Makassar yang terbuat dari pisang yang dibalut dengan adonan tepung berwarna hijau dari daun pandan...",
    image: "https://firebasestorage.googleapis.com/v0/b/pisang-ijo-evi.firebasestorage.app/o/artikel-apa-itu-pisang-ijo.webp?alt=media&token=a8cfac7e-f968-4e54-848a-7940870b6c58",
    slug: "mengenal-pisang-ijo-dessert-khas-makassar"
  },
  {
    id: 2,
    title: "Mengenal kegunaan daun pandan",
    excerpt: "Daun pandan bukan hanya memberikan aroma dan warna hijau alami pada makanan, tetapi juga memiliki berbagai manfaat kesehatan...",
    image: "https://firebasestorage.googleapis.com/v0/b/pisang-ijo-evi.firebasestorage.app/o/artikel-pandan-pisang-ijo.webp?alt=media&token=1d68f131-d896-47ab-bad0-41d418ce1016",
    slug: "mengenal-kegunaan-daun-pandan"
  },
  {
    id: 3,
    title: "Resep rahasia pisang ijo enak",
    excerpt: "Pelajari resep rahasia untuk membuat pisang ijo yang lezat dan autentik seperti di Makassar...",
    image: "https://firebasestorage.googleapis.com/v0/b/pisang-ijo-evi.firebasestorage.app/o/artikel-resep-pisang-ijo.webp?alt=media&token=3ded2fad-9744-42e0-a7fe-aa4f37fcb1dc",
    slug: "resep-rahasia-pisang-ijo-enak"
  }
];

export function Articles() {
  return (
    <section id="artikel" className="py-20 bg-[#f5f0e3]">
      <Helmet>
        <title>Artikel - Pisang Ijo Evi</title>
        <meta name="description" content="Baca artikel menarik tentang pisang ijo, dessert khas Makassar, dan resep-resep lezat." />
        <meta name="keywords" content="pisang ijo, dessert makassar, daun pandan, resep pisang ijo" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#1a5540] mb-4">
            Artikel
          </h2>
          <div className="w-24 h-1 bg-[#f4d87f] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Pelajari lebih dalam tentang pisang ijo dan dunia kuliner Makassar
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Helmet>
                <meta property="og:title" content={article.title} />
                <meta property="og:description" content={article.excerpt} />
                <meta property="og:image" content={article.image} />
                <meta property="og:url" content={`https://pisang-ijo-evi.web.app/#artikel/${article.slug}`} />
              </Helmet>
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-[#1a5540] mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <Link
                  to={`/artikel/${article.slug}`}
                  className="inline-block text-[#1a5540] hover:text-[#2a6550] font-medium"
                >
                  Baca Selengkapnya →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}