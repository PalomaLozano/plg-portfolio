import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { sliderItems } from '../data/categoryslider';

const BannerCategories = () => {
  const MainComponent = styled.div`
    width: 100%;
    height: 30%;
  `;
  const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    @media screen and (min-width: 768px) {
      height: 100%;
    }
  `;

  const ImgContainer = styled.div`
    flex: 1;
  `;

  const Image = styled.img`
    max-width: 360px;
  `;

  const Arrow = styled.div`
    width: 50px;
    height: 50px;
    color: #ffffffe0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    padding-bottom: 30px;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === 'left' && '1px'};
    right: ${(props) => props.direction === 'right' && '1px'};
    margin: auto;
    cursor: pointer;
    opacity: 1;
    z-index: 2;
  `;

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  return (
    <>
      <MainComponent>
        <Arrow direction="left" onClick={() => handleClick('left')}>
          <BsArrowLeftCircle />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick('right')}>
          <BsArrowRightCircle />
        </Arrow>
      </MainComponent>
    </>
  );
};

export default BannerCategories;
