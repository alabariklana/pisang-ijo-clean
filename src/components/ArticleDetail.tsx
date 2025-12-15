import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';

const articles = {
  'mengenal-pisang-ijo-dessert-khas-makassar': {
    title: 'Mengenal pisang ijo, dessert khas Makassar',
    content: `
# Mengenal Pisang Ijo, Dessert Khas Makassar

Pisang ijo adalah salah satu hidangan penutup tradisional yang berasal dari Makassar, Sulawesi Selatan. Hidangan ini telah menjadi bagian dari budaya kuliner Indonesia dan sering disajikan dalam acara-acara spesial.

## Asal Usul

Pisang ijo pertama kali dikenal di daerah Makassar pada abad ke-19. Kata "ijo" dalam bahasa Makassar berarti hijau, yang merujuk pada warna hijau alami dari daun pandan yang digunakan sebagai bahan pewarna alami.

## Bahan Utama

- Pisang raja atau pisang kepok yang matang sempurna
- Tepung beras atau tepung sagu
- Daun pandan untuk pewarna dan aroma
- Santan kelapa
- Gula merah atau gula pasir

## Cara Pembuatan Tradisional

1. Pisang dikupas dan direbus sebentar
2. Adonan tepung dicampur dengan sari daun pandan
3. Pisang dibalut dengan adonan hijau
4. Dikukus hingga matang
5. Disajikan dengan saus santan

## Makna Budaya

Di Makassar, pisang ijo tidak hanya sebagai makanan, tetapi juga simbol keramahan dan kehangatan. Hidangan ini sering disajikan kepada tamu kehormatan sebagai bentuk penghargaan.

## Variasi Modern

Sekarang, pisang ijo hadir dalam berbagai variasi, mulai dari yang klasik hingga yang lebih kreatif dengan tambahan topping seperti coklat, keju, atau buah-buahan lainnya.
    `,
    image: 'https://source.unsplash.com/random?pisang+ijo'
  },
  'mengenal-kegunaan-daun-pandan': {
    title: 'Mengenal Kegunaan Daun Pandan',
    content: `
# Mengenal Kegunaan Daun Pandan

Daun pandan adalah tanaman tropis yang telah lama digunakan dalam kuliner Indonesia. Selain memberikan aroma dan warna hijau alami, daun pandan juga memiliki berbagai manfaat kesehatan.

## Manfaat Kesehatan

### Antioksidan Alami
Daun pandan mengandung antioksidan tinggi yang membantu melawan radikal bebas dalam tubuh.

### Mengontrol Gula Darah
Kandungan polifenol dalam daun pandan dapat membantu mengatur kadar gula darah.

### Anti-inflamasi
Sifat anti-inflamasi daun pandan membantu mengurangi peradangan dalam tubuh.

### Meningkatkan Pencernaan
Daun pandan dapat membantu melancarkan sistem pencernaan.

## Penggunaan dalam Kuliner

- Pewarna alami untuk kue dan makanan
- Aroma untuk nasi, minuman, dan dessert
- Bahan utama dalam pembuatan pisang ijo
- Esensi untuk berbagai masakan tradisional

## Cara Menggunakan Daun Pandan

1. Cuci bersih daun pandan
2. Giling atau blender dengan sedikit air
3. Peras untuk mendapatkan sari
4. Gunakan sebagai pewarna atau aroma

## Tips Menyimpan

- Simpan di kulkas dalam wadah tertutup
- Gunakan dalam 2-3 hari untuk kesegaran maksimal
- Atau keringkan untuk penyimpanan jangka panjang

Daun pandan adalah bahan alami yang tidak hanya menambah cita rasa, tetapi juga memberikan manfaat kesehatan bagi tubuh kita.
    `,
    image: 'https://source.unsplash.com/random?daun+pandan'
  },
  'resep-rahasia-pisang-ijo-enak': {
    title: 'Resep Rahasia Pisang Ijo Enak',
    content: `
# Resep Rahasia Pisang Ijo Enak

Berikut adalah resep autentik pisang ijo khas Makassar yang telah diwariskan turun-temurun. Rahasia kelezatannya terletak pada penggunaan bahan-bahan alami dan teknik pengukusan yang tepat.

## Bahan-bahan (untuk 10 porsi)

### Untuk Kulit Pisang:
- 500g tepung beras
- 100g tepung sagu
- 1 liter santan dari 2 buah kelapa
- 200g gula pasir
- 1/2 sdt garam
- 10 lembar daun pandan
- 10 buah pisang raja matang

### Untuk Saus Santan:
- 500ml santan kental
- 100g gula merah
- 1/2 sdt garam
- 2 lembar daun pandan

## Cara Membuat

### 1. Persiapan Sari Daun Pandan
- Cuci bersih daun pandan
- Blender dengan 500ml air
- Peras dan saring untuk mendapatkan sari hijau

### 2. Membuat Adonan Kulit
- Campur tepung beras, tepung sagu, dan gula
- Tuang santan sedikit demi sedikit sambil diaduk
- Tambahkan sari daun pandan
- Aduk hingga adonan licin dan tidak bergerindil
- Diamkan 30 menit

### 3. Mengukus Pisang
- Kupas pisang, potong menjadi 2-3 bagian
- Celupkan pisang ke adonan
- Kukus dalam dandang panas selama 20-25 menit
- Angkat dan dinginkan

### 4. Membuat Saus Santan
- Rebus santan dengan gula merah dan garam
- Tambahkan daun pandan
- Masak dengan api kecil sambil diaduk
- Angkat setelah mendidih

## Rahasia Kelezatan

1. **Pilih Pisang yang Tepat**: Gunakan pisang raja yang sudah matang sempurna
2. **Santan Segar**: Gunakan santan kelapa asli untuk rasa autentik
3. **Teknik Pengukusan**: Pastikan kukusan cukup panas dan uap cukup
4. **Waktu Istirahat**: Diamkan adonan minimal 30 menit untuk hasil maksimal

## Penyajian

- Tata pisang ijo dalam piring
- Siram dengan saus santan hangat
- Sajikan segera untuk kenikmatan maksimal

## Tips

- Pisang ijo paling enak disantap hangat
- Bisa ditambahkan es batu untuk versi dingin
- Simpan dalam kulkas untuk penyimpanan jangka pendek

Selamat mencoba resep rahasia pisang ijo ini di rumah!
    `,
    image: 'https://source.unsplash.com/random?resep+makanan'
  }
};

export function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug as keyof typeof articles] : null;

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-[#1a5540] mb-4">Artikel Tidak Ditemukan</h1>
          <Link to="/" className="text-[#1a5540] hover:text-[#2a6550]">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f0e3]">
      <Helmet>
        <title>{article.title} - Pisang Ijo Evi</title>
        <meta name="description" content={article.content.substring(0, 150)} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.content.substring(0, 150)} />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content={`https://pisang-ijo-evi.web.app/artikel/${slug}`} />
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
            <h1 className="text-3xl md:text-4xl text-[#1a5540] mb-6">
              {article.title}
            </h1>
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}