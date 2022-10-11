import styled from 'styled-components';
import PropTypes from 'prop-types';

const Root = styled.div`
    position: relative;
    padding-top: ${({ size }) => 100 * size}%
`;

function Ratio({
  className, children, size,
}) {
  return (
    <Root size={size} className={className}>
      {children}
    </Root>
  );
}

Ratio.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  size: PropTypes.number.isRequired,
};

Ratio.defaultProps = {
  className: '',
  children: [],
};

export default Ratio;
