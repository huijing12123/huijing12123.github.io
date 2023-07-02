import React from 'react';
import PropTypes from 'prop-types';

import { animated } from '@react-spring/web';

function AnimatedContainer({ rest, size, onClick, children }) {
  return (
    <animated.div
      style={{ ...rest, width: size, height: size }}
      onClick={onClick}
    >
      {children}
    </animated.div>
  );
}

AnimatedContainer.propTypes = {
  rest: PropTypes.object,
  size: PropTypes.number,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default AnimatedContainer;
