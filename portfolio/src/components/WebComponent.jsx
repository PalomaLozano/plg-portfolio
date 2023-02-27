import styled from 'styled-components';
import React, { useState } from 'react';
import Fluidra from '../projects/web/Fluidra';
import Lafarragua from '../projects/web/Lafarragua';
import Cardgenerator from '../projects/web/Cardgenerator';

const WebComponent = () => {
  const [showFluidraProject, setShowFluidraProject] = useState(false);
  const [showFarraguaProject, setShowFarraguaProject] = useState(false);
  const [showCardGenerator, setShowCardGenerator] = useState(false);

  const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    background-color: #ffff;

    @media screen and (min-width: 768px) {
      height: 100vh;
    }
  `;
  const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  `;
  const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40%;
    background-color: black;
    border-bottom: 1px solid white;
  `;
  const Text = styled.p`
    font-size: 18px;
    text-transform: capitalize;
    font-weight: bold;
    -webkit-animation: glow 1s ease-in-out infinite alternate;
    -moz-animation: glow 1s ease-in-out infinite alternate;
    animation: glow 1s ease-in-out infinite alternate;

    @keyframes glow {
      from {
        color: #fff;
        text-shadow: 0 0 10px #8000ff, 0 0 20px #8000ff, 0 0 30px #8000ff,
          0 0 40px #8000ff, 0 0 50px #8000ff, 0 0 60px #8000ff, 0 0 70px #8000ff,
          0 0 90px #8000ff;
      }
      to {
        color: gray;
        text-shadow: 0 0 20px #8000ff, 0 0 30px #8000ff, 0 0 40px #8000ff,
          0 0 50px #8000ff, 0 0 60px #8000ff, 0 0 70px #8000ff, 0 0 80px #8000ff,
          0 1 90px #8000ff;
      }
    }
  `;

  return (
    <>
      <Container>
        <Section>
          <TextContainer
            onClick={() => {
              setShowFarraguaProject(false);
              setShowCardGenerator(false);
              setShowFluidraProject(!showFluidraProject);
            }}
          >
            <Text>Fluidra</Text>
          </TextContainer>
          {showFluidraProject ? <Fluidra /> : ''}

          <TextContainer
            onClick={() => {
              setShowFluidraProject(false);
              setShowCardGenerator(false);
              setShowFarraguaProject(!showFarraguaProject);
            }}
          >
            <Text>La Farragua</Text>
          </TextContainer>
          {showFarraguaProject ? <Lafarragua /> : ''}

          <TextContainer
            onClick={() => {
              setShowFluidraProject(false);
              setShowFarraguaProject(false);
              setShowCardGenerator(!showCardGenerator);
            }}
          >
            <Text>Cards Generator</Text>
          </TextContainer>
          {showCardGenerator ? <Cardgenerator /> : ''}

          <TextContainer>
            <Text>Rick & Morty</Text>
          </TextContainer>
          <TextContainer>
            <Text>Rock & EDM Festival</Text>
          </TextContainer>
        </Section>
      </Container>
    </>
  );
};

export default WebComponent;
