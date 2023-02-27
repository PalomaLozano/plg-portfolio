import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Web = () => {
  const Container = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    position: relative;
    overflow: hidden;
    @media screen and (min-width: 768px) {
      height: 100vh;
    }
  `;
  return (
    <Container>
      <div className="App">
        <NavBar />
      </div>
    </Container>
  );
};

export default Web;
