import SwiperComponent from './SwiperComponent';

const Top = () => {
  const images = [
    'https://res.cloudinary.com/dyu65fpse/image/upload/v1705308532/Screenshot-2024-01-09-at-18.48.06_acjxri_i7m4op.jpg',
    'https://res.cloudinary.com/dyu65fpse/image/upload/v1705005914/ilya-pavlov-OqtafYT5kTw-unsplash_uozevd.jpg',
    'https://res.cloudinary.com/dyu65fpse/image/upload/v1704997244/Screenshot-2024-01-11-at-19.18.55_qacbku.jpg',
    'https://res.cloudinary.com/dyu65fpse/image/upload/v1705000411/luca-bravo-XJXWbfSo2f0-unsplash_rswyds.jpg',
  ];

  const texts = [
    'née à Fukuoka, Japon',
    'parle le JAPONAIS, le FRANÇAIS, l’ANGLAIS',
    'développe des applications web pour des entreprises',
    'JavaScript, NodeJs, ReactJs, TypeScript',
  ]

  return (
    <SwiperComponent images={images} texts={texts} />
  )
}

export default Top