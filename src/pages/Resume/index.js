// React 导入
import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';


// 样式导入
import "../../common/style/global.css";
import styles from "../Resume/resume.module.css";

// 组件导入
import PersonalityComponent from "../Personality";
import EducationComponent from "../Education";
import HobbyComponent from "../Hobby";
import ProjectComponent from "../Project";
import LoadingComponent from "../Loading";
import ContactFormComponent from '../ContactForm';
import TitleAndImage from '../../components/TitleAndImage';

// 图片导入
import xiaohei from '../../common/images/xiaohei_remove.png';
import qiuqiu from '../../common/images/qiuqiu_remove.png';
import xiaohua from '../../common/images/xiaohua_remove.png';
import yinyuan from '../../common/images/yinyuan_remove.png';
import abao from "../../common/images/abao_remove.png";

function Resume() {
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

    let componentToRender;
    try {
        // 使用switch语句替代多个if语句来渲染选中的组件
        switch (selectedComponent) {
            case 'personality':
                componentToRender = <PersonalityComponent />;
                break;
            case 'education':
                componentToRender = <EducationComponent />;
                break;
            case 'hobby':
                componentToRender = <HobbyComponent />;
                break;
            case 'project':
                componentToRender = <ProjectComponent />;
                break;
            case 'contactForm':
                componentToRender = <ContactFormComponent />;
                break;
            default:
                componentToRender = null;
        }
    } catch (error) {
        // 处理渲染错误
        console.error('Error rendering component:', error);
        componentToRender = null; // 或者渲染一个错误信息的组件
    }

    return (
        <Fragment>
            <div className={styles.wrapper}>
                <div className={`${styles.navigation} ${styles.slideInLeft}`}>
                    <TitleAndImage
                        title="MBTI"
                        imgSrc={xiaohua}
                        onClick={() => handleComponentClick('personality')}
                    />
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
                        onClick={() => handleComponentClick('project')}
                    />
                    <TitleAndImage
                        title="Get in touch"
                        imgSrc={abao}
                        onClick={() => handleComponentClick('contactForm')}
                    />
                </div>
                <div className={styles.insideBox}>
                    {isLoading ? (
                        <LoadingComponent />
                    ) : (
                        <>
                            {componentToRender}
                        </>
                    )}
                </div>
            </div>
        </Fragment>
    );
}


// 使用PropTypes库来定义组件预期的props类型
Resume.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    selectedComponent: PropTypes.string.isRequired,
    handleComponentClick: PropTypes.func.isRequired,
  };

export default Resume;
