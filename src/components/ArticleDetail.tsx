import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import fm from 'front-matter';
import { Footer } from './Footer';

interface ArticleData {
  title: string;
  description: string;
  canonical: string;
  image: string;
  keywords: string;
  author: string;
  date: string;
  content: string;
}

export function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;

      try {
        // Dynamic import of markdown files
        const module = await import(`../articles/${slug}.md?raw`);
        const text = module.default;
        const { attributes, body } = fm(text);

        setArticle({
          ...(attributes as ArticleData),
          content: body
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen scroll-smooth">
        <div className="bg-[#f5f0e3] min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1a5540] mx-auto mb-4"></div>
            <p className="text-[#1a5540]">Memuat artikel...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen scroll-smooth">
        <div className="bg-[#f5f0e3] min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl text-[#1a5540] mb-4">Artikel Tidak Ditemukan</h1>
            <p className="text-gray-600 mb-6">{error}</p>
            <Link to="/" className="text-[#1a5540] hover:text-[#2a6550]">
              Kembali ke Beranda
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen scroll-smooth">
      <div className="bg-[#f5f0e3] min-h-screen">
      <Helmet>
        <title>{article.title} - Pisang Ijo Evi</title>
        <meta name="description" content={article.description} />
        <meta name="keywords" content={article.keywords} />
        <meta name="author" content={article.author} />
        <link rel="canonical" href={article.canonical} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content={article.canonical} />
        <meta property="article:author" content={article.author} />
        <meta property="article:published_time" content={article.date} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.description} />
        <meta name="twitter:image" content={article.image} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-[#1a5540] hover:text-[#2a6550] mb-6"
        >
          <ArrowLeft size={20} className="mr-2" />
          Kembali ke Beranda
        </Link>

        <article className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="aspect-video overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <div className="mb-4">
              <span className="text-sm text-gray-500">
                {(article.date as any) instanceof Date ? (article.date as unknown as Date).toLocaleDateString('id-ID') : article.date}
              </span>
              <span className="text-sm text-gray-500 ml-4">Oleh {article.author}</span>
            </div>
            <h1 className="text-3xl md:text-4xl text-[#1a5540] mb-6">
              {article.title}
            </h1>
            <div className="prose prose-lg max-w-none prose-headings:text-[#1a5540] prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-[#1a5540] prose-a:text-[#2a6550] prose-a:hover:text-[#1a5540]">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl md:text-4xl text-[#1a5540] font-bold mb-6 mt-8 first:mt-0">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl text-[#1a5540] font-semibold mb-4 mt-8">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl text-[#1a5540] font-semibold mb-3 mt-6">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-700">
                      {children}
                    </li>
                  ),
                  strong: ({ children }) => (
                    <strong className="text-[#1a5540] font-semibold">
                      {children}
                    </strong>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="text-[#2a6550] hover:text-[#1a5540] underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>
          </div>
        </article>
      </div>
      </div>
      <Footer />
    </div>
  );
}
