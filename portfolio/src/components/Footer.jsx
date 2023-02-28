import styled from 'styled-components';
const Footer = () => {
  const Container = styled.div`
    height: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
  `;
  const Text = styled.p`
    font-weight: 600;
    color: #ffffff;
    font-size: 12px;
  `;
  return (
    <Container>
      <Text>Paloma Logu Portfolio</Text>
    </Container>
  );
};
export default Footer;
