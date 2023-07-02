import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './loading.module.css';

// 导入所有图片
import abaoImage from '../../common/images/abaobao.png';
import heihuImage from '../../common/images/heihuhu.jpg';
import memeImage from '../../common/images/mimi.jpg';
import qiuqiuImage from '../../common/images/qiuqiuzi.jpg';
import xiaoheiImage from '../../common/images/xiaohei.jpg';
import xiaoheiziImage from '../../common/images/xiaoheihei.jpg';
import xiaohuaImage from '../../common/images/huahua.jpg';
import yinyuanImage from '../../common/images/yinyuanyuan.jpg';
import yuanbaoImage from '../../common/images/yuanbaobao.jpg';

const catImages = [
    { name: 'Abao', image: abaoImage },
    { name: 'Huhu', image: heihuImage },
    { name: 'Meme', image: memeImage },
    { name: 'Qiuqiu', image: qiuqiuImage },
    { name: 'Xiaohei', image: xiaoheiImage },
    { name: 'Niuniu', image: xiaoheiziImage },
    { name: 'Huahua', image: xiaohuaImage },
    { name: 'Yuanyuan', image: yinyuanImage },
    { name: 'Yuanbao', image: yuanbaoImage }
];

function Loading() {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [selectedCat, setSelectedCat] = useState(null); // 新增选中猫猫的状态变量
    const [isHovered, setIsHovered] = useState(false);
    const [svgPosition, setSvgPosition] = useState({ x: 0, y: 0 });

    // 图片加载错误处理
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        const loadImage = (src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;

                img.onload = () => resolve();
                img.onerror = (error) => {
                    setError(true);
                    setErrorMessage(`Error loading image: ${src}`);
                    reject(error);
                };
            });
        };

        const preloadImages = async () => {
            try {
                const imagePromises = catImages.map((cat) => loadImage(cat.image));
                await Promise.all(imagePromises);
                setImagesLoaded(true);
            } catch (error) {
                console.error('Error preloading images:', error);
                setError(true);
                setErrorMessage('Error loading images. Please try again later.');
            }
        };

        preloadImages();
    }, []);

    const handleCatClick = (cat) => {
        setSelectedCat(cat); // 更新选中的猫猫对象
    };


    const handleMouseEnter = (event) => {
        setIsHovered(true);
        setSvgPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // 添加PropTypes检查
    Loading.propTypes = {
        // 确保catImages是一个数组
        catImages: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired
            })
        ).isRequired
    };

    return (
        <Fragment>
            {error ? (
                <div className={styles.error}>{errorMessage}</div>
            ) : imagesLoaded ? (
                <div className={styles.wrapper}>
                    <div className={styles._title}>Meet my whiskered darlings ~</div>
                    <div className={styles.container}>
                        <div className={styles.catsBox}>
                            {catImages.map((cat) => (
                                <div
                                    className={styles.box}
                                    key={cat.name}


                                >
                                    <img
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        src={cat.image}
                                        className={[styles.catImg, styles[`${cat.name}ImgStyle`]].join(' ')}
                                        alt={cat.name}
                                        onClick={() => handleCatClick(cat)

                                        }
                                    />
                                    {isHovered && (
                                        <div className={styles.svgContainer} style={{ left: svgPosition.x, top: svgPosition.y }}>
                                            <svg t="1687229279216" className="icon" viewBox="0 0 1122 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1806" width="50" height="50">
                                                <path d="M950.489872 664.477957c54.860255-16.765277 113.239149-43.901277 146.27949-102.606978 16.819745-29.053277 33.051234-79.730383 12.963404-144.689022-11.438298-45.557106-111.300085-198.427234-349.804936-122.683914 4.390128-105.123404-37.10366-217.044426-125.134979-261.99149C581.39234 2.919489 516.706043 3.180936 456.595064 33.574128c0 0-120.614128 59.577191-114.230468 267.765106-36.504511-11.961191-74.937191-21.002894-114.034383-20.403745-78.259745-3.333447-174.537532 35.371574-210.508256 117.825362 0 0-37.234383 83.379745 21.939745 173.753192 0 0 54.195745 81.190128 202.599489 121.147914-40.023149 81.723915-48.149787 152.140255-24.674042 213.514894 21.950638 58.052085 73.945872 98.086128 142.630128 110.047319 0 0 139.492766 26.068426 244.746893-139.372936 45.088681 65.830128 114.633532 137.117957 225.476085 144.427575 0 0 111.169362 6.982809 161.116596-86.103149 41.286809-77.410043 30.109957-169.101617-41.177872-271.708596" fill="#eebbc3" p-id="1807"></path><path d="M691.014809 237.317447c6.122213 44.15183-0.403064 88.706723 0.795234 133.12 3.660255 6.252936 10.566809 11.569021 17.625872 11.035234 63.629617-20.011574 128.653617-47.278298 195.213617-41.689872 63.901957 4.390128 124.002043 36.907574 148.741447 95.351829 8.97634 30.393191 10.436085 63.237447-6.514383 92.432341-35.578553 62.965106-124.14366 76.40783-186.574979 92.889872-7.309617 4.259404-12.963404 12.037447-13.028766 20.75234 13.355574 29.118638 39.69634 46.014638 57.311319 71.549277 40.491574 60.906213 69.414128 132.520851 33.574128 199.353192-17.887319 34.837787-60.971574 49.27183-97.541447 50.263149-107.91217-6.971915-168.023149-96.212426-216.358128-182.326469-5.653787-8.845617-18.878638-7.516596-26.994383-9.36851-20.610723 11.438298-28.127319 33.236426-37.103659 53.651064-36.373787 68.422809-105.254128 140.375149-191.891064 133.926127-39.630979-6.917447-76.52766-27.52817-91.88766-67.965276-26.602213-69.817191 14.357787-154.253617 51.461447-213.776341 4.248511-6.318298 1.394383-12.309787 1.459745-18.148766-6.187574-18.693447-29.587064-18.954894-45.350128-21.547574-73.401191-16.492936-149.798128-46.875234-196.21583-101.942468-21.809021-33.116596-29.521702-72.878298-16.558297-110.43949 23.682723-54.261106 94.687319-81.52783 150.146723-77.867574 56.04766-1.198298 118.282894 25.131574 171.748766 45.676936 7.843404-0.261447 16.754383-5.991489 20.87217-12.298894 1.26366-37.702809-7.647319-73.945872-6.383659-111.714042 3.387915-66.233191 21.275234-143.098553 78.597446-181.923404 37.964255-19.020255 80.318638-23.007319 117.76-1.198298 54.90383 27.789617 79.12034 95.820255 87.094469 152.205617" fill="#eebbc3" p-id="1808"></path><path d="M531.57583 519.91966C510.365957 473.436596 494.875234 286.120851 554.844596 284.323404c59.849532-1.92817 57.845106 197.032851 55.862468 220.16 42.61583-23.127149 198.939234-69.610213 218.155574-17.408 19.347064 52.060596-123.479149 94.556596-194.886808 75.198639 34.707064 19.347064 183.383149 135.189787 135.102638 175.681361-32.049021 26.929021-162.162383-48.269617-185.376681-131.268085-5.773617 61.777702-107.040681 177.282723-150.528 150.484426-34.772426-21.013787 44.413277-136.97634 90.754724-171.825022-81.113872 19.488681-196.738723-29.717787-189.222128-59.707914 9.629957-38.563404 138.893617-29.129532 196.869447-5.719149" fill="#eebbc3" p-id="1809">
                                                </path>
                                                <text x="50%" y="48%" dominantBaseline="middle" textAnchor="middle" style={{ fontSize: '200px', fontWeight: "bold", fill: "#fffffe" }}>
                                                    Click!
                                                </text>
                                            </svg>
                                        </div>
                                    )}
                                    <div className={styles.catName}>{cat.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.loading} >
                    <p>Loading...</p>
                </div>
            )}
            {selectedCat && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popup}>
                        <div className={styles.popupContent}>
                            <img src={selectedCat.image}
                                className={styles.popupImage}
                                alt={selectedCat.name}
                            />

                        </div>
                        <span className={styles.closeButton} onClick={() => setSelectedCat(null)}>
                            <svg t="1687927871595" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2267" width="50" height="50">
                                <path d="M622.8992 512l256.192-256.192c19.2576-19.264 22.5472-47.2128 7.3472-62.4064l-55.8592-55.8592c-15.2-15.2-43.1104-11.8656-62.4064 7.3856L512.0064 401.1136 255.8208 144.9344c-19.264-19.2832-47.2128-22.592-62.4128-7.3728l-55.8592 55.8656c-15.1936 15.1744-11.904 43.1232 7.3856 62.3872l256.192 256.1856-256.192 256.2048c-19.2576 19.2512-22.592 47.1808-7.3856 62.3808l55.8592 55.8656c15.2 15.2 43.1488 11.904 62.4128-7.3536l256.1984-256.2048 256.16 256.1664c19.296 19.3024 47.2064 22.592 62.4064 7.392l55.8592-55.8656c15.1936-15.2 11.904-43.1296-7.3472-62.4064L622.8992 512 622.8992 512zM622.8992 512" fill="#121629" p-id="2268">
                                </path>
                            </svg>
                        </span>
                    </div>
                </div>
            )}
        </Fragment>
    );
}

export default Loading;
