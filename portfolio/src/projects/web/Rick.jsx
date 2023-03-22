import styled from 'styled-components';
import { webItems } from '../../data/webprojects';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Fluidra = () => {
  const Container = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #d23f5a;
    border: 3px solid #df728e;
    box-shadow: inset 0 0 10px #e9879c, 0 0 10px #ec879f;
    border-radius: 10px;
    padding: 40px;
  `;
  const Wrapper = styled.div`
    display: flex;

    @media screen and (min-width: 768px) {
      height: 100%;
    }
  `;
  const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Image = styled.img`
    border-radius: 10px;
    max-width: 100%;
    margin-bottom: 20px;
  `;
  const Text = styled.p`
    padding-top: 10px;
    color: white;
    font-weight: bold;
  `;

  return (
    <>
      <Container>
        <Wrapper>
          {webItems.map((item) => (
            <ImgContainer>
              <Zoom>
                <Image width="150" src={item.rickimg} />
              </Zoom>
              <Text>{item.rickdescription}</Text>
            </ImgContainer>
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default Fluidra;
