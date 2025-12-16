import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

export function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/articles/index.json');
        if (!response.ok) {
          throw new Error('Gagal memuat artikel');
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <section id="artikel" className="py-20 bg-[#f5f0e3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1a5540] mx-auto mb-4"></div>
          <p className="text-[#1a5540]">Memuat artikel...</p>
        </div>
      </section>
    );
  }
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
                <Link to={`/artikel/${article.slug}`}>
                  <h3 className="text-xl text-[#1a5540] font-medium mb-3 line-clamp-2 hover:text-[#2a6550] transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                </Link>
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