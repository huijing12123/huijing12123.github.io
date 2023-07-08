import React from 'react';
import { SpringValue, animated } from '@react-spring/web';


interface AnimatedContainerProps {

  /**
   * AnimatedContainerProps 接口定义了组件的 props 类型。
   * rest 被注解为 SpringValue<any> 类型，表示 @react-spring/web 库中的动画值类型。
   * size 被注解为 number 类型。
   * onClick 被注解为可选的函数类型。
   * children 被注解为 React 节点类型 (React.ReactNode)。
   */
  rest: SpringValue<any>;
  size: string;

  onClick?: () => void;
  children: React.ReactNode;
}

function AnimatedContainer({ rest, size, onClick, children }: AnimatedContainerProps) {
  return (
    <animated.div style={{ ...rest as any, width: size, height: size }} onClick={onClick}>
      {children}
    </animated.div>
  );
}

export default AnimatedContainer;
