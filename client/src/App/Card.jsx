import styled from 'styled-components';
import PropTypes from 'prop-types';

const Root = styled.div`
    background: #eee;
    border-radius: 4px;
    overflow: hidden;
    font-weight: bold;
    position: relative;
`;
const Header = styled.div`
    display: flex;
    padding: 10px;
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
    display:block;
    max-width:100%;
`;
const Label = styled.div`
    background: #8c8b8c;
    color:white;
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 5px;
    line-height: 1
`;

function Card({
  className = '', title = '', subTitle = '', image = '', label = '',
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
      <Image src={image} />
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
