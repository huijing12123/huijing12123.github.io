import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../common/style/global.css"
// 文字描边
// import TextStroke from 'react-text-stroke';

import styles from "../Welcome/welcome.module.css"
import meImage from '../../common/images/me.jpg';
import abaoImage from '../../common/images/abao.jpg';
import heihuImage from '../../common/images/heihu.jpg';
import memeImage from '../../common/images/meme.jpg';
import qiuqiuImage from '../../common/images/qiuqiu.jpg';
import xiaoheiImage from '../../common/images/xiaohei.jpg';
import xiaoheiziImage from '../../common/images/xiaoheizi.jpg';
import xiaohuaImage from '../../common/images/xiaohua.jpg';
import yinyuanImage from '../../common/images/yinyuan.jpg';
import yuanbaoImage from '../../common/images/yuanbao.jpg';

function Welcome() {
    const abaoImgStyle = [styles.catImg, styles.abaoImgStyle]
    const heihuImgStyle = [styles.catImg, styles.heihuImgStyle]
    const memeImgStyle = [styles.catImg, styles.memeImgStyle]
    const qiuqiuImgStyle = [styles.catImg, styles.qiuqiuImgStyle]
    const xiaoheiImgStyle = [styles.catImg, styles.xiaoheiImgStyle]
    const xiaoheiziImgStyle = [styles.catImg, styles.xiaoheiziImgStyle]
    const xiaohuaImgStyle = [styles.catImg, styles.xiaohuaImgStyle]
    const yinyuanImgStyle = [styles.catImg, styles.yinyuanImgStyle]
    const yuanbaoImgStyle = [styles.catImg, styles.yuanbaoImgStyle]

    // 控制猫猫的照片 持续放大缩小
    const [scale, setScale] = useState(1);
    useEffect(() => {
        const interval = setInterval(() => {
            setScale((prevScale) => (prevScale === 1 ? 1.2 : 1)); // 切换图像的放大和缩小状态
        }, 1000); // 每隔1秒触发一次变换

        return () => {
            clearInterval(interval); // 清除定时器
        };
    }, []);

    // 控制我的照片放大缩小
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Fragment>
            <div className={styles.titleBox} >
                <h1 className={styles.title} >
                    <span className={styles.strokeText}>
                        Welcome to my channel ~
                    </span>
                </h1>
            </div>
            <div className={styles.backBox}>
            </div>
            <div className={styles.frontBox}>
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
                        <svg t="1686712696778" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2496" width="100" height="100">
                            <path d="M959.562927 591.921951V293.513366c0-85.21678-42.658341-127.875122-127.875122-127.875122h-639.37561c-85.21678 0-127.875122 42.658341-127.875122 127.875122v298.308683c0 68.133463 27.672976 110.891707 83.118829 123.579317-2.097951 31.96878-10.689561 55.445854-21.379122 72.429268-8.59161 8.59161-12.787512 16.983415-12.787512 29.770927 0 10.689561 4.295805 21.379122 12.787512 29.870829 8.59161 6.393756 19.281171 10.689561 29.770927 10.689561 119.283512 0 196.108488-44.756293 234.471025-138.564683h441.16917c85.21678 0.199805 127.875122-42.458537 127.975025-127.675317zM831.587902 250.954927c29.770927 0 42.658341 14.985366 42.658342 42.658341v298.308683c0 29.770927-12.787512 42.658341-42.658342 42.658342H360.647805h-2.097951c-2.097951 0-6.393756 0-8.59161 2.097951h-2.097951c-8.59161 2.097951-12.787512 6.393756-19.281171 10.689561-4.295805 6.393756-8.59161 10.689561-10.689561 19.281171v2.097951c-17.083317 46.854244-46.854244 78.823024-89.512585 93.80839 4.295805-23.377171 6.393756-51.150049 4.295804-83.118829V677.338537c0-12.787512-4.295805-21.379122-10.68956-29.770927h-2.097952c-8.59161-8.59161-17.083317-12.787512-27.672975-12.787512h-2.097952c-27.672976 0-40.460488-14.985366-40.460487-42.658342V293.513366c0-27.672976 14.985366-42.658341 42.658341-42.658342h639.275707z" p-id="2497" fill="#121629">
                            </path>
                            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" style={{ fontSize: '120px', fontWeight: "bold" }}>
                                See more
                            </text>
                        </svg>
                    </div>
                )}
                <div className={styles.catsBox}>
                    <div className={styles.box} style={{ transform: 'rotate(-20deg)' }}>
                        <img src={abaoImage} className={abaoImgStyle.join(' ')} alt='abao' style={{ transform: `scale(${scale})`, transition: 'transform 1s ease' }}></img>
                    </div>
                    <div className={styles.box}>
                        <img src={heihuImage} className={heihuImgStyle.join(' ')} alt='heihu'></img>
                    </div>
                    <div className={styles.box}>
                        <img src={qiuqiuImage} className={qiuqiuImgStyle.join(' ')} alt='qiuqiu'></img>
                    </div>
                    <div className={styles.box}>
                        <img src={xiaoheiImage} className={xiaoheiImgStyle.join(' ')} alt='xiaohei'></img>
                    </div>
                    <div className={styles.box}>
                        <img src={xiaoheiziImage} className={xiaoheiziImgStyle.join(' ')} alt='xiaoheizi'></img>
                    </div>
                    <div className={styles.box}>
                        <img src={xiaohuaImage} className={xiaohuaImgStyle.join(' ')} alt='xiaohua'></img>
                    </div>
                    <div className={styles.box}>
                        <img src={memeImage} className={memeImgStyle.join(' ')} alt='meme'></img>
                    </div>
                    <div className={styles.box}>
                        <img src={yinyuanImage} className={yinyuanImgStyle.join(' ')} alt='yinyuan'></img>
                    </div>
                    <div className={styles.box}>
                        <img src={yuanbaoImage} className={yuanbaoImgStyle.join(' ')} alt='yuanbao'></img>
                    </div>
                </div>
            </div>
        </Fragment>

    );
}

export default Welcome;