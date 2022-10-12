import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from './Container';
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

function Info({
  text, image, subText, loading,
}) {
  return loading
    ? (
      <Placeholder>
        <Preloader />
      </Placeholder>
    )
    : (
      <Container>
        <Text>{text}</Text>
        <Image src={image} />
        <SubText>
          {subText}
        </SubText>
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
