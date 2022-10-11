import styled from 'styled-components';
import PropTypes from 'prop-types';

const Root = styled.div`
    display: flex;
    overflow: hidden;
    padding: 4px 0;
    &>*+*{
        margin-left: 12px;
    }
`;
const Line = styled.div`
    width: 10px;
    height: 20px;
    background: #555;
    animation-name: loader;
    animation-duration: ${({ count }) => count}s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes loader {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-26px);
        }
        50.01% {
          transform: translateY(26px)
        }  
        100%{
          transform: translateY(0)
        }
      }      
`;

function Preloader({ className }) {
  return (
    <Root className={className}>
      <Line count={10} />
      <Line count={1} />
      <Line count={0.1} />
    </Root>
  );
}

Preloader.propTypes = {
  className: PropTypes.string,
};

Preloader.defaultProps = {
  className: '',
};

export default Preloader;
