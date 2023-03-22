import styled from 'styled-components';
const Footer = () => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: #ffffff;
  `;
  const Text = styled.p`
    font-weight: 600;
    color: #bb2649;
    font-size: 12px;
  `;
  return (
    <Container>
      <Text>Paloma Logu Portfolio</Text>
    </Container>
  );
};
export default Footer;
