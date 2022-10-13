import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Ratio from './Ratio';

const Root = styled(Link)`
    box-shadow: 0 0 20px -15px #000;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    font-weight: bold;
    position: relative;
    animation-name: card;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    color: inherit;
    text-decoration: none;

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
    ${({ disabled }) => (disabled ? 'color: #444' : '')}
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
    ${({ disabled }) => (disabled ? 'filter: grayscale(1);' : '')}
`;
const Label = styled.div`
    background: #50d7ff;
    position: absolute;
    right: 8px;
    bottom: 8px;
    padding: 5px;
    border-radius: 4px;
    line-height: 1;
    ${({ disabled }) => (disabled ? 'background: #fff;' : '')}   
`;

function Card({
  href, className, title, subTitle, image, label, disabled,
}) {
  return (
    <Root to={href} className={className}>
      <Header>
        <Title disabled={disabled}>
          {title}
        </Title>
        <SubTitle>
          {subTitle}
        </SubTitle>
      </Header>
      <Ratio size={1 / 1.5}>
        <Image src={image} disabled={disabled} />
      </Ratio>
      {label
        && <Label disabled={disabled}>{label}</Label>}
    </Root>
  );
}

Card.propTypes = {
  href: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  image: PropTypes.string.isRequired,
  label: PropTypes.string,
};

Card.defaultProps = {
  disabled: false,
  className: '',
  subTitle: '',
  label: '',
};

export default Card;
