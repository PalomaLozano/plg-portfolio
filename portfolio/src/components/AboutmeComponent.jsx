import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';

const AboutmeComponent = () => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    padding: 20px;
    @keyframes slide {
      0% {
        transform: translateX(-25%);
      }
      100% {
        transform: translateX(25%);
      }
    }

    @media screen and (min-width: 768px) {
      height: 100vh;
    }
  `;
  const Section = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  `;
  const Title = styled.h1`
    color: black;
    padding-bottom: 30px;
  `;
  const Image = styled.img``;
  const Description = styled.p`
    color: #686868;
    font-weight: bold;
    padding: 20px;
  `;
  const Background = styled.div`
    animation: slide 3s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #bb2649 50%, #fab7c9 50%);
    bottom: 0;
    left: -50%;
    position: fixed;
    right: -50%;
    top: 0;
    z-index: -1;
  `;

  return (
    <>
      <Container>
        <Background></Background>
        <Section>
          <Description>
            <Title>
              <h1>About me</h1>
            </Title>
            I'm Paloma, graduated from the School of Art of Talavera de la Reina
            in Advertising Graphics and completion of Bootcamp in Adalab
            asFront-End Developer.<br></br>I'm currently working as a front-end
            developer but I also do graphic design work. <br></br> Knowledge of
            design programmes such as Photoshop, Indesign, Illustrator,
            Premiere, Lightroom and Cinema 4D. <br></br>
          </Description>
          <Description>
            <h2>Technological stack:</h2>
            <br></br>
            Layout: HTML5, CSS3, Flexbox, CSS Grid, SASS, Bootstrap. <br></br>
            JavaScript (ES6) and third-party web services (APIs). <br></br>
            Version control with Git. Creation of simple SPAs with React.{' '}
            <br></br>APIs: data types, verbs, models. Node JS: usage, debugging
            and file system access. <br></br>Express: static servers, APIs,
            middlewares, template engines. <br></br>SQL: creation and management
            of table bases, modification, deletion and logical deletion of
            records. Slack, GitHub, GitHub projects, VSCode, Gulp, Terminal,
            Zeplin, Confluence, Jira. Experience in planning and executing
            projects under the Scrum framework.{' '}
          </Description>
          <Description>
            Focus on front-end web development and graphic design.{' '}
          </Description>
          <Description>Creative and efficient, problem solving.</Description>
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default AboutmeComponent;
