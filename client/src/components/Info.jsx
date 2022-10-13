import PropTypes from 'prop-types';
import styled from 'styled-components';
import container from './Container';
import Preloader from './Preloader';

const Placeholder = styled.div`
  position: relative;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  text-align: center;
  flex-direction: column;
`;
const Text = styled.div`
    font-size:1.2em;
    margin-bottom: 20px;
`;
const Image = styled.img`
    width: 100%
`;
const SubText = styled.div`
    font-size: 0.8em;
    color: #8c8c8c;
`;
const Container = styled(container)`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 0 20px -15px #000;
`;

function Info({
  text, image, subText, loading,
}) {
  return (
    <Container>
      {loading
        ? (
          <Placeholder>
            <Preloader />
          </Placeholder>
        )
        : (
          <>
            <Text>{text}</Text>
            <Image src={image} />
            <SubText>
              {subText}
            </SubText>
          </>
        )}
    </Container>
  );
}

Info.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  subText: PropTypes.string,
  loading: PropTypes.bool,
};

Info.defaultProps = {
  text: '',
  image: '',
  subText: '',
  loading: true,
};

export default Info;
