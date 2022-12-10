import React, { useState } from 'react';
import styled from 'styled-components';
import { BsArrowRightCircle } from 'react-icons/bs';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { sliderItems } from '../data';

const Container = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    height: 100vh;
  }
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
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '5px'};
  right: ${(props) => props.direction === 'right' && '1px'};
  margin: auto;
  cursor: pointer;
  opacity: 1;
  z-index: 2;
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

const Slide = styled.div`
  width: 100vw;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.bg};
  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
  //height: 100%auto;
`;

const Image = styled.img`
  height: 100px;
  padding-left: 50px;
  @media screen and (min-width: 768px) {
    height: 350px;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 5px;
`;

const Title = styled.h1`
  font-size: 25px;
  color: #ffffffe0;
  @media screen and (min-width: 768px) {
    font-size: 70px;
  }
`;
const Description = styled.p`
  max-width: 120px;
  margin: 10px 0px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 2px;
  color: #ffffffe0;
  padding: 5px 0 5px 0;
  @media screen and (min-width: 768px) {
    max-width: 320px;
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500px;
    letter-spacing: 3px;
  }
`;
const Button = styled.button`
  width: 80px;
  padding: 2px;
  font-size: 15px;
  border: 2px solid #6ebedcdf;
  border-radius: 5px;
  background-color: #6ebedcdf;
  color: #ffffffe0;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 10px;
    font-size: 20px;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <BsArrowLeftCircle />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Button>Ver más</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <BsArrowRightCircle />
      </Arrow>
    </Container>
  );
};

export default Slider;
