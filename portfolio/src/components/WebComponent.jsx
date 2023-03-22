import styled from 'styled-components';
import React, { useState } from 'react';
import Fluidra from '../projects/web/Fluidra';
import Lafarragua from '../projects/web/Lafarragua';
import Cardgenerator from '../projects/web/Cardgenerator';
import Rick from '../projects/web/Rick';
import Rock from '../projects/web/Rock';
import Organizer from '../projects/web/Organizer';
import { categorySlider } from '../data/categoryslider';
import Footer from './Footer';

const WebComponent = () => {
  const [showFluidraProject, setShowFluidraProject] = useState(false);
  const [showFarraguaProject, setShowFarraguaProject] = useState(false);
  const [showCardGenerator, setShowCardGenerator] = useState(false);
  const [showRick, setShowRick] = useState(false);
  const [showOrganizer, setShowOrganizer] = useState(false);
  const [showRock, setShowRock] = useState(false);

  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    overflow: scroll;
    background-color: #ffff;

    @media screen and (min-width: 768px) {
      height: 100vh;
    }
  `;
  const Section = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
  `;
  const TextContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #fcb4c6;
    box-shadow: inset 0 0 10px #9e213c, 0 0 10px #81162f;
    border-radius: 10px;
    background-color: #bb2649;
    cursor: pointer;
    :hover {
      background-color: #d58194;
    }
  `;
  const Text = styled.p`
    font-size: 18px;
    text-transform: capitalize;
    font-weight: bold;
    color: white;
  `;
  const ContainerProjects = styled.div``;

  return (
    <>
      <Container>
        <Section>
          <TextContainer
            onClick={() => {
              setShowFarraguaProject(false);
              setShowCardGenerator(false);
              setShowRick(false);
              setShowOrganizer(false);
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
              setShowOrganizer(false);
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
              setShowOrganizer(false);
              setShowCardGenerator(!showCardGenerator);
            }}
          >
            <Text>Cards Generator</Text>
          </TextContainer>
          <ContainerProjects>
            {showCardGenerator ? <Cardgenerator /> : ''}
          </ContainerProjects>
        </Section>
        <Section>
          <TextContainer
            onClick={() => {
              setShowFluidraProject(false);
              setShowFarraguaProject(false);
              setShowCardGenerator(false);
              setShowRock(false);
              setShowOrganizer(false);
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
              setShowRock(false);
              setShowOrganizer(!showOrganizer);
            }}
          >
            <Text>Organizer</Text>
          </TextContainer>
          <ContainerProjects>
            {showOrganizer ? <Organizer /> : ''}
          </ContainerProjects>

          <TextContainer
            onClick={() => {
              setShowFluidraProject(false);
              setShowFarraguaProject(false);
              setShowCardGenerator(false);
              setShowRick(false);
              setShowOrganizer(false);
              setShowRock(!showRock);
            }}
          >
            <Text>Rock & EDM Festival</Text>
          </TextContainer>
          <ContainerProjects>{showRock ? <Rock /> : ''}</ContainerProjects>
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default WebComponent;
