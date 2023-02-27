import styled from 'styled-components';
import { webItems } from '../../data/webprojects';

const Lafarragua = () => {
  const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
  `;
  const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 35px;
    @media screen and (min-width: 768px) {
      height: 100%;
    }
  `;
  const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  `;

  const Image = styled.img`
    border-radius: 10px;
    border-bottom-right-radius: 10px solid #86e5f0;
    max-width: 70%;
    object-fit: cover;
  `;
  const Text = styled.p`
    height: 100%;
    width: 70%;
    padding-top: 10px;
    color: white;
  `;

  return (
    <>
      <Container>
        <Wrapper>
          {webItems.map((item) => (
            <ImgContainer>
              <Image src={item.lafarraguaimg} />
              <Text>{item.lafarraguadescription}</Text>
            </ImgContainer>
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default Lafarragua;
