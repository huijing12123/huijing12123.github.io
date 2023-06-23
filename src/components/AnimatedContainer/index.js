import React from 'react';
import { animated } from '@react-spring/web';
import styles from "./animatedContainer.module.css"

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

export default AnimatedContainer;
