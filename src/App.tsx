import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Articles } from './components/Articles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ArticleDetail } from './components/ArticleDetail';

function Home() {
  return (
    <div className="min-h-screen scroll-smooth">
      <Helmet>
        <title>Pisang Ijo Evi - Dessert Khas Makassar</title>
        <meta name="description" content="Nikmati pisang ijo autentik, dessert khas Makassar yang terbuat dari pisang raja dengan balutan tepung berwarna hijau dari daun pandan." />
        <meta name="keywords" content="pisang ijo, dessert makassar, kuliner sulawesi selatan, makanan tradisional" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <Gallery />
      <Articles />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artikel/:slug" element={<ArticleDetail />} />
    </Routes>
  );
}