import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';

const SwiperComponent = ({ images, texts, textsEn }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentTextEnIndex, setCurrentTextEnIndex] = useState(0)
  const imageCount = images.length
  const textCount = texts.length
  const textCountEn = textsEn.length
  const { isEnglish } = useLanguage()

  useEffect(() => {
    if (imageCount >= 2) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCount)
      }, 3000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [imageCount]);

  useEffect(() => {
    if (textCount >= 1 || textCountEn >= 1) {
      const interval = setInterval(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textCount)
        setCurrentTextEnIndex((prevIndex) => (prevIndex + 1) % textCountEn)
      }, 3000)
      return () => {
        clearInterval(interval)
      }
    }
  }, [textCount, textCountEn])

  return (
    <div className='top'>
      <div className='image-container'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Film"
            className={`fade-in ${index === currentImageIndex ? 'current-image' : 'next-image'}`}
          />
        ))}
      </div>
      <div className='text-on-image'>
        <img src='https://res.cloudinary.com/dyu65fpse/image/upload/v1705312051/logo_hiromi_b1mycv.png' alt='logo' />
      </div>
      <div className='banner'>
        <div className='banner_container'>
          <p className={`slide-in ${currentTextIndex === 0 || currentTextEnIndex === 0 ? 'current-text' : 'next-text'}`}>
            {isEnglish ? textsEn[currentTextEnIndex] : texts[currentTextIndex]}
          </p>
        </div>
      </div>
    </div>
  );
};
export default SwiperComponent;