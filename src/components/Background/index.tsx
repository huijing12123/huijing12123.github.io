import React, { useState, useEffect } from 'react';
import flower_1 from '../../common/images/flower1.svg';
import flower_2 from '../../common/images/flower2.svg';
import flower_3 from '../../common/images/flower3.svg';

// 辅助函数：获取指定范围内的随机整数
function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Background: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    // 获取实时视口 width & height
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // 在组件卸载时移除事件监听器
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const backgroundImageCount = 40; // 背景图像的数量

    const backgroundImages = Array.from({ length: backgroundImageCount }, (_, i) => {
        const imageNumber = i % 3 + 1; // 使用取余运算符循环使用3个不同的SVG图像

        const backgroundImage = `url(${imageNumber === 1 ? flower_1 : imageNumber === 2 ? flower_2 : flower_3})`;

        const left = getRandomNumber(0, windowWidth - 100); // 获取0到100之间的随机数作为left数值
        const top = getRandomNumber(0, windowHeight - 100); // 获取0到100之间的随机数作为top数值
        const style: React.CSSProperties = {
            backgroundImage,
            position: 'absolute', // 设置元素的定位方式为absolute
            left: `${left}px`,
            top: `${top}px`,
            width: '72px',
            height: '67px',
            zIndex: -100,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        };

        return <div key={i} style={style}></div>;
    });

    return <div>{backgroundImages}</div>;
};

export default Background;
