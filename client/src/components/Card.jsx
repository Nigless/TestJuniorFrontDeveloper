import styled from 'styled-components';
import PropTypes from 'prop-types';
import Ratio from './Ratio';

const Root = styled.div`
    background: #eee;
    border-radius: 4px;
    overflow: hidden;
    font-weight: bold;
    position: relative;
    animation-name: card;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;

    @keyframes card {
      0% {
        transform: translateY(20px);
        opacity: 0;
      }
    }
`;
const Header = styled.div`
    display: flex;
    padding: 10px;
    white-space: nowrap;
`;
const Title = styled.div`
    width: 100%;
    margin-right: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const SubTitle = styled.div`
    color: #8c8b8c;
`;
const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    position: absolute;
`;
const Label = styled.div`
    background: #8c8b8c;
    color: white;
    position: absolute;
    right: 8px;
    bottom: 8px;
    padding: 5px;
    border-radius: 4px;
    line-height: 1
`;

function Card({
  className, title, subTitle, image, label,
}) {
  return (
    <Root className={className}>
      <Header>
        <Title>
          {title}
        </Title>
        <SubTitle>
          {subTitle}
        </SubTitle>
      </Header>
      <Ratio size={1 / 1.5}>
        <Image src={image} />
      </Ratio>
      {label
        && <Label>{label}</Label>}
    </Root>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  image: PropTypes.string.isRequired,
  label: PropTypes.string,
};

Card.defaultProps = {
  className: '',
  subTitle: '',
  label: '',
};

export default Card;
