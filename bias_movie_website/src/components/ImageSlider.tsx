import React from 'react';
import { useState } from 'react';
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react';
import './image-slider.css';

type ImageSliderProps = {
  ImageUrls: string[];
};

const ImageSlider = ({ ImageUrls }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      className='relative'
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        {ImageUrls.map(url => (
          <img
            key={url}
            src={url}
            alt='Slider image'
            className='img-slider-img'
            style={{
              translate: `${-100 * currentIndex}%`,
            }}
          />
        ))}
      </div>
      {/* <img
        src={ImageUrls[currentIndex]}
        alt='Slider image'
        className='img-slider-img'
      /> */}
      <button
        onClick={() =>
          setCurrentIndex(prev =>
            prev === 0 ? ImageUrls.length - 1 : prev - 1
          )
        }
        className='img-slider-btn left'
        aria-label='View Previous Image'
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={() =>
          setCurrentIndex(prev =>
            prev === ImageUrls.length - 1 ? 0 : prev + 1
          )
        }
        className='img-slider-btn right'
        aria-label='View Next Image'
      >
        <ArrowBigRight />
      </button>
      <div
        style={{
          position: 'absolute',
          bottom: '.5rem',
          left: '50%',
          translate: '-50%',
          display: 'flex',
          gap: '.25rem',
        }}
      >
        {ImageUrls.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`View Image ${index}`}
            className='img-slider-dot-btn'
          >
            {index === currentIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
