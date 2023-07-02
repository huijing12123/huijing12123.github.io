import React, { Fragment, useEffect, useRef } from 'react';
import styles from "../Hobby/hobby.module.css"

import badmintonCourt from '../../common/images/badmintonCourt.jpg';
import climb from '../../common/images/climb.jpg';
import B52 from '../../common/images/B52.jpg';
import badminton from '../../common/images/badminton.jpg';
import catLover from '../../common/images/catlovershow.jpg';
import bartender from '../../common/images/bartenderSchool.jpg';
import marathon from '../../common/images/marathon.jpg';
import lift from '../../common/images/powerlifting.jpg';
import coding from '../../common/images/coding.jpg';
import vodka from '../../common/images/vodka.jpg';
import racket from '../../common/images/racket.png';
import pashan from '../../common/images/pashan.png';
import ball from '../../common/images/ball.png';
import cat from '../../common/images/cat.png';
import cocktail from '../../common/images/cocktail.png';
import run from '../../common/images/run.png';
import gym from '../../common/images/gym.png';
import alcohol from '../../common/images/alcohol.png';
import code from '../../common/images/code.png';


// 防抖函数
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function Hobby() {
    const parentRef = useRef(null);
    const childRef = useRef(null);
    const animationIdRef = useRef(null);

    useEffect(() => {
        const parentElement = parentRef.current;
        const childElement = childRef.current;

        const scrollWidth = childElement.offsetWidth - parentElement.offsetWidth;
        let startTime;

        const animate = (timestamp) => {
            if (startTime === undefined) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / 30000, 1);
            let translateX = -scrollWidth * progress;

            childElement.style.transform = `translate3d(${translateX}px, 0, 0)`;



            if (progress < 1) {
                animationIdRef.current = requestAnimationFrame(animate);
            } else {
                startTime = undefined;
                animationIdRef.current = requestAnimationFrame(animate);
            }
        };

        animationIdRef.current = requestAnimationFrame(animate);

        const handleMouseEnter = debounce(() => {
            cancelAnimationFrame(animationIdRef.current);
        }, 200); // 设置延迟时间为200毫秒

        const handleMouseLeave = debounce(() => {
            animationIdRef.current = requestAnimationFrame(animate);
        }, 200); // 设置延迟时间为200毫秒

        parentElement.addEventListener('mouseenter', handleMouseEnter);
        parentElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            parentElement.removeEventListener('mouseenter', handleMouseEnter);
            parentElement.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationIdRef.current);
        };
    }, []);


    return (
        <Fragment>
            <div ref={parentRef} style={{ display: "block", overflow: "hidden", whiteSpace: "nowrap", boxShadow: "8px 8px 8px 10px rgba(0, 0, 0, 0.2)" }}>
                <div ref={childRef} className={styles.wrapper}>
                    <div className={styles._box}>
                        <div style={{ marginBottom: "20px" }}>
                            <div style={{ width: "180px", aspectRatio: "896/665", position: "relative" }}>
                                <img style={{ width: "180px", aspectRatio: "896/665" }} src={badmintonCourt} alt='badmintonCourt'></img>
                                <div className={styles.overlay}>
                                    <img style={{ width: "100px", aspectRatio: "200/200", boxShadow: "none" }} src={racket} alt="racket"></img>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div style={{ width: "140px", aspectRatio: "1279/1760", position: "relative" }}>
                                <img style={{ width: "140px", aspectRatio: "1279/1760" }} src={climb} alt='climb'></img>
                                <div className={styles.overlay}>
                                    <img style={{ width: "100px", aspectRatio: "200/200", boxShadow: "none" }} src={pashan} alt="pashan"></img>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={styles._box}>
                        <div style={{ marginBottom: "20px" }}>
                            <div style={{ width: "140px", aspectRatio: "1080/1440", position: "relative" }}>
                                <img style={{ width: "140px", aspectRatio: "1080/1440" }} src={B52} alt='b52'></img>
                                <div className={styles.overlay}>
                                    <p style={{ fontSize: "50px", color: "#fffffe", fontWeight: "800" }}>B52</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ width: "180px", aspectRatio: "1836/1284", position: "relative" }}>
                                <img style={{ width: "180px", aspectRatio: "1836/1284" }} src={badminton} alt='badminton'></img>
                                <div className={styles.overlay}>
                                    <img style={{ width: "100px", aspectRatio: "200/200", boxShadow: "none" }} src={ball} alt="ball"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles._box}>
                        <div style={{ marginBottom: "20px" }}>
                            <div style={{ width: "180px", aspectRatio: "1440/1080", position: "relative" }}>
                                <img style={{ width: "180px", aspectRatio: "1440/1080" }} src={catLover} alt='catlover'></img>
                                <div className={styles.overlay}>
                                    <img src={cat} style={{ width: "100px", aspectRatio: "200/200", boxShadow: "none" }} alt='cat'></img>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div style={{ width: "140px", aspectRatio: "1080/1440", position: "relative" }}>
                                <img style={{ width: "140px", aspectRatio: "1080/1440" }} src={bartender} alt='bartender'></img>
                                <div className={styles.overlay}>
                                    <img style={{ width: "100px", aspectRatio: "200/200", boxShadow: "none" }} src={cocktail} alt="cocktail"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles._box}>
                        <div style={{ marginBottom: "20px" }}>
                            <div style={{ width: "160px", aspectRatio: "1080/1440", position: "relative" }}>
                                <img style={{ width: "160px", aspectRatio: "1080/1440" }} src={marathon} alt='marathon'></img>
                                <div className={styles.overlay}>
                                    <img style={{ width: "100px", aspectRatio: "200/200", boxShadow: "none" }} src={run} alt="marathon"></img>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ width: "160px", aspectRatio: "1286/1328", position: "relative" }}>
                                <img style={{ width: "160px", aspectRatio: "1286/1328" }} src={lift} alt='powerLift'></img>
                                <div className={styles.overlay}>
                                    <img style={{ width: "100px", aspectRatio: "200/200", boxShadow: "none" }} src={gym} alt="gym"></img>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={styles._box}>
                        <div style={{ marginBottom: "20px" }}>
                            <div style={{ width: "180px", aspectRatio: "1440/1080", position: "relative" }}>
                                <img style={{ width: "180px", aspectRatio: "1440/1080" }} src={coding} alt='coding'></img>
                                <div className={styles.overlay}>
                                    <img style={{ width: "100px", aspectRatio: "200/200", boxShadow: "none" }} src={code} alt="code"></img>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div style={{ width: "160px", aspectRatio: "1080/1440", position: "relative" }}>
                                <img style={{ width: "160px", aspectRatio: "1080/1440" }} src={vodka} alt='vodka'></img>
                                <div className={styles.overlay}>
                                    <img style={{ width: "100px", aspectRatio: "200/200", boxShadow: "none" }} src={alcohol} alt="alcohol"></img>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* 实现无缝 */}
                    <div className={styles._box}>
                        <div style={{ marginBottom: "20px" }}>
                            <div style={{ width: "180px", aspectRatio: "896/665", position: "relative" }}>
                                <img style={{ width: "180px", aspectRatio: "896/665" }} src={badmintonCourt} alt='badmintonCourt'></img>
                                <div className={styles.overlay}>
                                    <img style={{ width: "100px", aspectRatio: "200/200", boxShadow: "none" }} src={racket} alt="racket"></img>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div style={{ width: "140px", aspectRatio: "1279/1760", position: "relative" }}>
                                <img style={{ width: "140px", aspectRatio: "1279/1760" }} src={climb} alt='climb'></img>
                                <div className={styles.overlay}>
                                    <img style={{ width: "100px", aspectRatio: "200/200", boxShadow: "none" }} src={pashan} alt="pashan"></img>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={styles._box}>
                        <div style={{ marginBottom: "20px" }}>
                            <div style={{ width: "140px", aspectRatio: "1080/1440", position: "relative" }}>
                                <img style={{ width: "140px", aspectRatio: "1080/1440" }} src={B52} alt='b52'></img>
                                <div className={styles.overlay}>
                                    <p style={{ fontSize: "50px", color: "#fffffe", fontWeight: "800" }}>B52</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ width: "180px", aspectRatio: "1836/1284", position: "relative" }}>
                                <img style={{ width: "180px", aspectRatio: "1836/1284" }} src={badminton} alt='badminton'></img>
                                <div className={styles.overlay}>
                                    <img style={{ width: "100px", aspectRatio: "200/200", boxShadow: "none" }} src={ball} alt="ball"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles._box}>
                        <div style={{ marginBottom: "20px" }}>
                            <div style={{ width: "180px", aspectRatio: "1440/1080", position: "relative" }}>
                                <img style={{ width: "180px", aspectRatio: "1440/1080" }} src={catLover} alt='catlover'></img>
                                <div className={styles.overlay}>
                                    <img src={cat} style={{ width: "100px", aspectRatio: "200/200", boxShadow: "none" }} alt='cat'></img>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div style={{ width: "140px", aspectRatio: "1080/1440", position: "relative" }}>
                                <img style={{ width: "140px", aspectRatio: "1080/1440" }} src={bartender} alt='bartender'></img>
                                <div className={styles.overlay}>
                                    <img style={{ width: "100px", aspectRatio: "200/200", boxShadow: "none" }} src={cocktail} alt="cocktail"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles._box}>
                        <div style={{ marginBottom: "20px" }}>
                            <div style={{ width: "160px", aspectRatio: "1080/1440", position: "relative" }}>
                                <img style={{ width: "160px", aspectRatio: "1080/1440" }} src={marathon} alt='marathon'></img>
                                <div className={styles.overlay}>
                                    <img style={{ width: "100px", aspectRatio: "200/200", boxShadow: "none" }} src={run} alt="marathon"></img>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ width: "160px", aspectRatio: "1286/1328", position: "relative" }}>
                                <img style={{ width: "160px", aspectRatio: "1286/1328" }} src={lift} alt='powerLift'></img>
                                <div className={styles.overlay}>
                                    <img style={{ width: "100px", aspectRatio: "200/200", boxShadow: "none" }} src={gym} alt="gym"></img>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </Fragment>

    );
}

export default Hobby;