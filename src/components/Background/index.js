import React from 'react';
// import styles from '../Background/background.module.css';
import flower_1 from "../../common/images/flower1.svg"
import flower_2 from "../../common/images/flower2.svg"
import flower_3 from "../../common/images/flower3.svg"

const Background = () => {
    const backgroundImageCount = 40; // 背景图像的数量
    const backgroundImages = [];

    for (let i = 1; i <= backgroundImageCount; i++) {
        // const className = `${backgroundImage}${i}`;
        const imageNumber = i % 3 + 1; // 使用取余运算符循环使用3个不同的SVG图像

        let backgroundImage;
        if (imageNumber === 1) {
            backgroundImage = `url(${flower_1})`;
        } else if (imageNumber === 2) {
            backgroundImage = `url(${flower_2})`;
        } else if (imageNumber === 3) {
            backgroundImage = `url(${flower_3})`;
        }
        // const backgroundImage = flower_one;
        const left = getRandomNumber(-100, 1200); // 获取0到100之间的随机数作为left数值
        const top = getRandomNumber(-700, 700); // 获取0到100之间的随机数作为top数值
        const style = {
            backgroundImage,
            position: 'absolute', // 设置元素的定位方式为absolute
            left: `${left}px`,
            top: `${top}px`,
            width: "72px",
            height: "67px",
            zIndex: "-100",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
        };
        backgroundImages.push(
            <div key={i} style={style}></div>
        );
    }

    return <div >{backgroundImages}</div>;
}

// 辅助函数：获取指定范围内的随机整数
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Background;