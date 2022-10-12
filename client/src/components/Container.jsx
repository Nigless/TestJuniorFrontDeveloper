import styled from 'styled-components';
import PropTypes from 'prop-types';

const Root = styled.div`
  max-width: 1000px;
  margin: auto;
`;

function Container({ className, children }) {
  return (
    <Root className={className}>
      {children}
    </Root>
  );
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Container.defaultProps = {
  className: '',
  children: [],
};
export default Container;
