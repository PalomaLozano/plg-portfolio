import styled from 'styled-components';
import React, { useState } from 'react';
import Fluidra from '../projects/web/Fluidra';
import Lafarragua from '../projects/web/Lafarragua';
import Cardgenerator from '../projects/web/Cardgenerator';
import Rick from '../projects/web/Rick';
import Rock from '../projects/web/Rock';

const WebComponent = () => {
  const [showFluidraProject, setShowFluidraProject] = useState(false);
  const [showFarraguaProject, setShowFarraguaProject] = useState(false);
  const [showCardGenerator, setShowCardGenerator] = useState(false);
  const [showRick, setShowRick] = useState(false);
  const [showRock, setShowRock] = useState(false);

  const Container = styled.div`
    width: 100%;
    height: 100%;
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
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid white;
    background-color: black;
    cursor: pointer;
  `;
  const Text = styled.p`
    font-size: 18px;
    text-transform: capitalize;
    font-weight: bold;
    -webkit-animation: glow 3s ease-in-out infinite alternate;
    -moz-animation: glow 3s ease-in-out infinite alternate;
    animation: glow 3s ease-in-out infinite alternate;

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
  const ContainerProjects = styled.div`
    background-color: black;
    transition: 3s all ease;
  `;

  return (
    <>
      <Container>
        <Section>
          <TextContainer
            onClick={() => {
              setShowFarraguaProject(false);
              setShowCardGenerator(false);
              setShowRick(false);
              setShowRock(false);
              setShowFluidraProject(!showFluidraProject);
            }}
          >
            <Text>Fluidra</Text>
          </TextContainer>
          <ContainerProjects>
            {showFluidraProject ? <Fluidra /> : ''}
          </ContainerProjects>

          <TextContainer
            onClick={() => {
              setShowFluidraProject(false);
              setShowCardGenerator(false);
              setShowRick(false);
              setShowRock(false);
              setShowFarraguaProject(!showFarraguaProject);
            }}
          >
            <Text>La Farragua</Text>
          </TextContainer>
          <ContainerProjects>
            {showFarraguaProject ? <Lafarragua /> : ''}
          </ContainerProjects>

          <TextContainer
            onClick={() => {
              setShowFluidraProject(false);
              setShowFarraguaProject(false);
              setShowRick(false);
              setShowRock(false);
              setShowCardGenerator(!showCardGenerator);
            }}
          >
            <Text>Cards Generator</Text>
          </TextContainer>
          <ContainerProjects>
            {showCardGenerator ? <Cardgenerator /> : ''}
          </ContainerProjects>

          <TextContainer
            onClick={() => {
              setShowFluidraProject(false);
              setShowFarraguaProject(false);
              setShowCardGenerator(false);
              setShowRock(false);
              setShowRick(!showRick);
            }}
          >
            <Text>Rick & Morty</Text>
          </TextContainer>
          <ContainerProjects>{showRick ? <Rick /> : ''}</ContainerProjects>

          <TextContainer
            onClick={() => {
              setShowFluidraProject(false);
              setShowFarraguaProject(false);
              setShowCardGenerator(false);
              setShowRick(false);
              setShowRock(!showRock);
            }}
          >
            <Text>Rock & EDM Festival</Text>
          </TextContainer>
          <ContainerProjects>{showRock ? <Rock /> : ''}</ContainerProjects>
        </Section>
      </Container>
    </>
  );
};

export default WebComponent;
