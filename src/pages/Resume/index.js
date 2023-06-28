import React, { Fragment, useState } from 'react';
import "../../common/style/global.css"
import styles from "../Resume/resume.module.css"

import PersonalityComponent from "../Personality"
import EducationComponent from "../Education"
import HobbyComponent from "../Hobby"
import ProjectComponent from "../Project"
import LoadingComponent from "../Loading"


import xiaohei from '../../common/images/xiaohei_remove.png';
import qiuqiu from '../../common/images/qiuqiu_remove.png';
import xiaohua from '../../common/images/xiaohua_remove.png';
import yinyuan from '../../common/images/yinyuan_remove.png';




function Resume() {
    // replaced repetitive code with a reusable component called TitleAndImage
    const TitleAndImage = ({ title, imgSrc, onClick }) => (
        <div className={styles.titleAndImg}>
            <div className={styles.titleBox}>
                <span>{title}</span>
            </div>
            <div className={styles.imgBox} onClick={onClick}> {/* 将 onClick 绑定到 imgBox */}
                <img src={imgSrc} alt="" />
            </div>
        </div>
    );


    // 我们使用了isLoading状态来控制加载组件的显示和隐藏。
    // 初始状态下，加载组件会显示（isLoading为true）。
    // 当点击其他组件时，通过调用handleComponentClick函数，我们更新了选中的组件和加载状态，使加载组件隐藏（isLoading变为false），同时显示选中的组件。

    // 处理 insideBox里组件的切换
    const [isLoading, setIsLoading] = useState(true);
    const [selectedComponent, setSelectedComponent] = useState('');

    // 在这里处理点击事件，更新选中的组件和加载状态
    const handleComponentClick = (component) => {
        setSelectedComponent(component);
        setIsLoading(false);
    };


    return (
        <Fragment>
            <div className={styles.wrapper}>
                <div className={`${styles.navigation} ${styles.slideInLeft}`}>
                    <TitleAndImage
                        title="MBTI"
                        imgSrc={xiaohua}
                        onClick={() => handleComponentClick('personality')} />
                    <TitleAndImage
                        title="Education"
                        imgSrc={xiaohei}
                        onClick={() => handleComponentClick('education')}
                    />
                    <TitleAndImage
                        title="Hobby"
                        imgSrc={yinyuan}
                        onClick={() => handleComponentClick('hobby')}
                    />
                    <TitleAndImage
                        title="Project & Internship"
                        imgSrc={qiuqiu}

                        onClick={() => handleComponentClick('project')} />
                </div>
                <div className={styles.insideBox}>
                    {isLoading ? (
                        <LoadingComponent />
                    ) : (
                        <>
                            {selectedComponent === 'personality' && <PersonalityComponent />}
                            {selectedComponent === 'education' && <EducationComponent />}
                            {selectedComponent === 'hobby' && <HobbyComponent />}
                            {selectedComponent === 'project' && <ProjectComponent />}
                        </>
                    )}
                </div>
            </div>
            {/* <FlowerBackground /> */}
        </Fragment>

    );
}

export default Resume;