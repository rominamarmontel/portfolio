import { useEffect, useState } from 'react';

const SwiperComponent = ({ images, texts }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const imageCount = images.length
  const textCount = texts.length

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
    if (textCount >= 1) {
      const interval = setInterval(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textCount)
      }, 3000)
      return () => {
        clearInterval(interval)
      }
    }
  }, [textCount])

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
          <p className={`slide-in ${currentTextIndex === 0 ? 'current-text' : 'next-text'}`}>
            {texts[currentTextIndex]}
          </p>
        </div>
      </div>
    </div>
  );
};
export default SwiperComponent;