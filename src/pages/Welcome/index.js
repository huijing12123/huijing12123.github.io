import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../common/style/global.css"
import styles from "../Welcome/welcome.module.css"
import meImage from '../../common/images/me.jpg';
import circle from '../../common/images/Ellipse.png';

// import all the images
import abaoImage from '../../common/images/abao.jpg';
import heihuImage from '../../common/images/heihu.jpg';
import memeImage from '../../common/images/meme.jpg';
import qiuqiuImage from '../../common/images/qiuqiu.jpg';
import xiaoheiImage from '../../common/images/xiaohei.jpg';
import xiaoheiziImage from '../../common/images/xiaoheizi.jpg';
import xiaohuaImage from '../../common/images/xiaohua.jpg';
import yinyuanImage from '../../common/images/yinyuan.jpg';
import yuanbaoImage from '../../common/images/yuanbao.jpg';

const catImages = [
    { name: 'abao', image: abaoImage, rotation: 20 },
    { name: 'heihu', image: heihuImage, rotation: 10 },
    { name: 'meme', image: memeImage, rotation: 10 },
    { name: 'qiuqiu', image: qiuqiuImage, rotation: 345 },
    { name: 'xiaohei', image: xiaoheiImage, rotation: 0 },
    { name: 'xiaoheizi', image: xiaoheiziImage, rotation: 20 },
    { name: 'xiaohua', image: xiaohuaImage, rotation: 20 },
    { name: 'yinyuan', image: yinyuanImage, rotation: 20 },
    { name: 'yuanbao', image: yuanbaoImage, rotation: 345 }
];

function Welcome() {
    const [scale, setScale] = useState(1);
    useEffect(() => {
        const interval = setInterval(() => {
            setScale((prevScale) => (prevScale === 1 ? 1.2 : 1));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Fragment>
            <div className={`${styles.backBox} ${styles.slideInLeftBack}`}>
                <div className={styles.boxContainTitle}>
                    <div>
                        <img className={styles.circleStyle} src={circle} alt='circle'></img>
                    </div>
                    <div className={styles.titleBox} >
                        <h1 className={styles.title} >
                            <span className={styles.strokeText}>
                                Welcome to my channel ~
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className={`${styles.frontBox} ${styles.slideInLeftFront}`}>
                <Link to="/resume" className={styles.linkImage}>
                    <img
                        src={meImage}
                        className={styles.imgMe}
                        alt='me'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}></img>
                </Link>
                {isHovered && (
                    <div className={styles.svgContainer}>
                        <svg t="1686738464525" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1479" width="100" height="100">
                            <path d="M959.562927 591.921951V293.513366c0-85.21678-42.658341-127.875122-127.875122-127.875122h-639.37561c-85.21678 0-127.875122 42.658341-127.875122 127.875122v298.308683c0 68.133463 27.672976 110.891707 83.118829 123.579317-2.097951 31.96878-10.689561 55.445854-21.379122 72.429268-8.59161 8.59161-12.787512 16.983415-12.787512 29.770927 0 10.689561 4.295805 21.379122 12.787512 29.870829 8.59161 6.393756 19.281171 10.689561 29.770927 10.689561 119.283512 0 196.108488-44.756293 234.471025-138.564683h441.16917c85.21678 0.199805 127.875122-42.458537 127.975025-127.675317zM831.587902 250.954927c29.770927 0 42.658341 14.985366 42.658342 42.658341v298.308683c0 29.770927-12.787512 42.658341-42.658342 42.658342H360.647805h-2.097951c-2.097951 0-6.393756 0-8.59161 2.097951h-2.097951c-8.59161 2.097951-12.787512 6.393756-19.281171 10.689561-4.295805 6.393756-8.59161 10.689561-10.689561 19.281171v2.097951c-17.083317 46.854244-46.854244 78.823024-89.512585 93.80839 4.295805-23.377171 6.393756-51.150049 4.295804-83.118829V677.338537c0-12.787512-4.295805-21.379122-10.68956-29.770927h-2.097952c-8.59161-8.59161-17.083317-12.787512-27.672975-12.787512h-2.097952c-27.672976 0-40.460488-14.985366-40.460487-42.658342V293.513366c0-27.672976 14.985366-42.658341 42.658341-42.658342h639.275707z" p-id="1480" fill="#eebbc3">
                            </path>
                            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" style={{ fontSize: '150px', fontWeight: "bold", fill: "#fffffe" }}>
                                See more
                            </text>
                        </svg>
                    </div>
                )}
                <div className={styles.catsBox}>
                    {catImages.map((cat, index) => (
                        <div className={styles.box} key={index} style={{ transform: `rotate(-${cat.rotation}deg)` }}>
                            <img
                                src={cat.image}
                                className={[styles.catImg, styles[`${cat.name}ImgStyle`]].join(' ')}
                                alt={cat.name}
                                style={{ transform: `scale(${scale})`, transition: 'transform 1s ease' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}

export default Welcome;
