import React, { Fragment, useState } from 'react';
import "../../common/style/global.css"
import styles from "../Resume/resume.module.css"

import PersonalityComponent from "../Personality"
import EducationComponent from "../Education"
import HobbyComponent from "../Hobby"
import ProjectComponent from "../Project"


import xiaohei from '../../common/images/xiaohei_remove.png';
import xiaoheizi from '../../common/images/xiaoheizi_remove.png';
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

    // 处理 insideBox里组件的切换
    const [selectedComponent, setSelectedComponent] = useState(null);

    return (
        <Fragment>
            {/* <GridBackground /> */}
            <div className={styles.wrapper}>
                <div className={styles.navigation}>
                    <TitleAndImage
                        title="Personality"
                        imgSrc={xiaohua}
                        onClick={() => setSelectedComponent('personality')} />
                    <TitleAndImage
                        title="Education"
                        imgSrc={xiaohei}
                        onClick={() => setSelectedComponent('education')}
                    />
                    <TitleAndImage
                        title="Hobby"
                        imgSrc={yinyuan}
                        onClick={() => setSelectedComponent('hobby')}
                    />
                    <TitleAndImage
                        title="Project"
                        imgSrc={xiaoheizi}
                        onClick={() => setSelectedComponent('project')} />
                </div>
                <div className={styles.insideBox}>
                   
                    {selectedComponent === 'personality' && <PersonalityComponent />}
                    {selectedComponent === 'education' && <EducationComponent />}
                    {selectedComponent === 'hobby' && <HobbyComponent />}
                    {selectedComponent === 'project' && <ProjectComponent />}
                </div>

            </div>
            {/* <FlowerBackground /> */}
        </Fragment>

    );
}

export default Resume;