import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  flex-shrink: 0;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <CarouselContainer>
      <ImageContainer style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <Image key={index} src={typeof image === 'string' ? image : image.src} alt={`Restaurant image ${index + 1}`} />
        ))}
      </ImageContainer>
      {images.length > 1 && (
        <>
          <PrevButton onClick={prevImage}>&lt;</PrevButton>
          <NextButton onClick={nextImage}>&gt;</NextButton>
        </>
      )}
    </CarouselContainer>
  );
};

export default ImageCarousel;
