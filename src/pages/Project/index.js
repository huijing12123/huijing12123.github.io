import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
} from '@react-spring/web';
import AnimatedContainer from '../../components/AnimatedContainer';
import resume from '../../common/files/HannaWong_MonashUniversity_2022.pdf';

import styles from './project.module.css';


function Project() {
    const [openGrosaver, setOpenGrosaver] = useState(false);
    const [openInternship, setOpenInternship] = useState(false);
    const [openAnalyse, setOpenAnalyse] = useState(false);
    const [openPersonal, setOpenPersonal] = useState(false);

    const handleDownload = () => {
        // 执行PDF下载操作
        saveAs(resume, 'HannaResume.pdf');
    };

    const springApi = useSpringRef();
    const { size, ...rest } = useSpring({
        ref: springApi,
        config: { ...config.stiff, friction: 15 }, // 在config.stiff的基础上增加friction参数
        from: {
            size: '80%',
            background: '#eebbc3',
            boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        to: {
            size: openGrosaver ? '100%' : '80%',
            background: openGrosaver ? 'white' : '#eebbc3',
           
        },
    });

    const transApi = useSpringRef();
    const transition = useTransition(openGrosaver ? [{}] : [], {
        ref: transApi,
        trail: 400,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        // leave: { opacity: 0, scale: 0 ,display:"none"},
    });

    const springApiInternship = useSpringRef();
    const { size: sizeInternship, ...restInternship } = useSpring({
        ref: springApiInternship,
        config: { ...config.stiff, friction: 15 }, // 在config.stiff的基础上增加friction参数
        from: {
            size: '80%',
            background: '#b8c1ec',
            boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        to: {
            size: openInternship ? '100%' : '80%',
            background: openInternship ? 'white' : '#b8c1ec',
        },
    });

    const transApiInternship = useSpringRef();
    const transitionInternship = useTransition(openInternship ? [{}] : [], {
        ref: transApiInternship,
        trail: 400,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        // leave: { opacity: 0, scale: 0,display:"none" },
    });

    const springApiAnalyse = useSpringRef();
    const { size: sizeAnalyse, ...restAnalyse } = useSpring({
        ref: springApiAnalyse,
        config: { ...config.stiff, friction: 15 }, // 在config.stiff的基础上增加friction参数
        from: {
            size: '80%',
            background: '#abcdef', // 替换为你想要的背景颜色
            boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        to: {
            size: openAnalyse ? '100%' : '80%',
            background: openAnalyse ? 'white' : '#abcdef', // 替换为你想要的背景颜色
        },
    });

    const transApiAnalyse = useSpringRef();
    const transitionAnalyse = useTransition(openAnalyse ? [{}] : [], {
        ref: transApiAnalyse,
        trail: 400,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        // leave: { opacity: 0, scale: 0,display:"none" },
    });


    const springApiPersonal = useSpringRef();
    const { size: sizePersonal, ...restPersonal } = useSpring({
        ref: springApiPersonal,
        config: { ...config.stiff, friction: 15 }, // 在config.stiff的基础上增加friction参数
        from: {
            size: '80%',
            background: '#eebbc3', // 替换为你想要的背景颜色
            boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        to: {
            size: openPersonal ? '100%' : '80%',
            background: openPersonal ? 'white' : '#eebbc3', // 替换为你想要的背景颜色
        },
    });

    const transApiPersonal = useSpringRef();
    const transitionPersonal = useTransition(openPersonal ? [{}] : [], {
        ref: transApiPersonal,
        trail: 400,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },

    });

    const toggleGrosaver = () => {
        setOpenGrosaver((prevOpenGrosaver) => !prevOpenGrosaver);
        setOpenInternship(false);
        setOpenAnalyse(false);
        setOpenPersonal(false);
    };

    const toggleInternship = () => {
        setOpenInternship((prevOpenInternship) => !prevOpenInternship);
        setOpenGrosaver(false);
        setOpenAnalyse(false);
        setOpenPersonal(false);
    };

    const toggleAnalyse = () => {
        setOpenAnalyse((prevOpenAnalyse) => !prevOpenAnalyse);
        setOpenGrosaver(false);
        setOpenInternship(false);
        setOpenPersonal(false);
    };
    const togglePersonal = () => {
        setOpenPersonal((prevOpenPersonal) => !prevOpenPersonal);
        setOpenGrosaver(false);
        setOpenInternship(false);
        setOpenAnalyse(false);
    };
    // 第一个动画序列
    useChain(
        openPersonal && !openAnalyse && !openInternship
            ? [springApi, transApi]
            : [transApi, springApi],
        [0, openGrosaver ? 0.1 : 0.6]
    );

    // 第二个动画序列
    useChain(
        openPersonal && !openGrosaver && !openInternship
            ? [springApiInternship, transApiInternship]
            : [transApiInternship, springApiInternship],
        [0, openInternship ? 0.1 : 0.6]
    );

    // 第三个动画序列
    useChain(
        openPersonal && !openGrosaver && !openInternship
            ? [springApiAnalyse, transApiAnalyse]
            : [transApiAnalyse, springApiAnalyse],
        [0, openAnalyse ? 0.1 : 0.6]
    );

    // 第四个动画序列
    useChain(
        openAnalyse && !openGrosaver && !openInternship && !openPersonal
            ? [springApiPersonal, transApiPersonal]
            : [transApiPersonal, springApiPersonal],
        [0, openPersonal ? 0.1 : 0.6]
    );
    return (
        <div className={styles.wrapper}>
            <button style={{ width: "25%", backgroundColor: "#fffffe", color: "#121629", fontSize: "18px", marginBottom: "10px", fontFamily: "Comic Sans MS", fontWeight: "800", boxShadow: "8px 8px 10px rgba(0, 0, 0, 0.2)" }} onClick={handleDownload}>Download resume</button>
            <AnimatedContainer rest={rest} size={size} onClick={toggleGrosaver}>
                <div className={styles.animationContainerOne} style={{ color: '#fffffe', fontWeight: '900' }}>Website Development Project: "Grosaver"</div>
                {transition((style, item) => (
                    <animated.div
                        className={styles.item}
                        style={{
                            ...style,
                            overflow: 'auto',
                            maxHeight: '400px',
                        }}
                    >
                        <p>
                            Recognized with a Graduate Industry Practice Award for GroSaver.
                        </p>
                        <br></br>
                        Developed a website to assist low-income families in Australia with maintaining a healthier diet within limited budgets.
                        Implemented features such as a budget calculator, nutrition education, and gardening tips for growing fresh produce.
                        Collaborated on the initial development of the project using WordPress.
                        <br></br>
                        <p>Key Achievements:</p>
                        <ul>
                            <li>Independently replicated and optimized all functionalities of the project using Vue.js.</li>
                            <li>Utilized Vue directives, event handling, computed properties, and throttling functions to create a responsive and interactive automatic slideshow feature.</li>
                            <li>Integrated the Leaflet library to display interactive maps, including loading map data, marking points, and drawing areas, in conjunction with backend APIs.</li>
                            <li>Developed a diet budget calculator that calculates total and optimized budgets based on user-selected meal plans and input parameters.</li>
                            <li>Implemented user registration forms and identity authentication using Vue.js and AWS Amplify.</li>
                            <li>Built a complete user authentication and data management system using Express.js, JWT, MySQL, CORS, Vue.js, Vuex, and Vue Router.</li>
                            <li>Managed expenditure data by recording and storing it in AWS DynamoDB, providing visualization with line charts, and enabling date-based queries.</li>
                            <li>Developed various components, including a pagination component, dynamic table component with sorting, searching, and pagination functionality, an image zooming component using a magnifier effect, and a popup component for controlling the visibility of the navigation bar.</li>
                        </ul>
                        <br></br>
                        <p>  Technical Stack:</p>
                        <ul>
                            <li>Front-end: Vue.js, CSS, JavaScript, HTML, Leaflet library</li>
                            <li>Backend: Express.js, JWT, MySQL, CORS</li>
                            <li>Additional Tools: AWS Amplify, AWS DynamoDB, Chart.js, Canvas</li>
                        </ul>
                        <br></br>
                        <p> Notable Skills:</p>
                        <ul>
                            <li>Proficient in component-based development using Vue.js, creating responsive user interfaces, and familiarity with Vue Router and Vuex.</li>
                            <li>Strong command of CSS, JavaScript, and HTML, enabling precise styling and layout design, and proficient in ES6 syntax.</li>
                            <li>Experienced in using Git/GitHub for version control and collaboration, with excellent code management and teamwork skills.</li>
                            <li>Familiar with AWS Amplify, seamlessly integrating user authentication and other services into applications.</li>
                            <li>Proficient in utilizing the Leaflet library for interactive map integration, providing map display and interaction capabilities.</li>
                            <li>Skilled in responsive layout design, adapting to different screen sizes and devices to deliver an exceptional user experience.</li>
                            <li>Sound understanding of component communication, effectively utilizing props to facilitate data transfer between parent and child components, enhancing component reusability and maintainability.</li>
                            <li>Proficient in using Axios to handle HTTP requests with servers, including user login/registration and data retrieval interactions.</li>
                        </ul>
                    </animated.div>
                ))}
            </AnimatedContainer>
            <AnimatedContainer rest={restInternship} size={sizeInternship} onClick={toggleInternship}>
                <div className={styles.animationContainerTwo} style={{ color: '#fffffe', fontWeight: '900' }}>XIANGCAI SECURITIES CO., LTD. Quantitative Investment Department</div>
                {transitionInternship((style, item) => (
                    <animated.div
                        className={styles.item}
                        style={{
                            ...style,
                            overflow: 'auto',
                            maxHeight: '400px',
                        }}
                    >
                        <p>
                            Internship at XIANGCAI SECURITIES CO., LTD.
                        </p>
                        During my internship, I was responsible for extracting and cleaning stock data from Wind Financial Terminal. I utilized a multi-factor model for stock selection and employed neural networks to develop models that identified robust factors for predicting returns. Additionally, I assisted the operations department in enhancing efficiency by utilizing web scraping techniques to gather real-time dynamic data.
                        <br></br>
                        <p> Key highlights of my internship include:</p>
                        <ul>
                            <li>Extracting and cleaning stock data from Wind Financial Terminal</li>
                            <li>Applying a multi-factor model for stock selection</li>
                            <li>Building neural network models to identify powerful factors for return prediction</li>
                            <li>Assisting the operations department in acquiring real-time dynamic data through web scraping</li>
                        </ul>
                    </animated.div>
                ))}
            </AnimatedContainer>
            <AnimatedContainer rest={restAnalyse} size={sizeAnalyse} onClick={toggleAnalyse}>
                <div className={styles.animationContainerThree} style={{ color: '#fffffe', fontWeight: '900' }}>Business Analysis Experience</div>
                {transitionAnalyse((style, item) => (
                    <animated.div
                        className={styles.item}
                        style={{
                            ...style,
                            overflow: 'auto',
                            maxHeight: '400px',
                        }}
                    >
                        <p>
                            Conducted comprehensive business analysis of Xiaomi Group, encompassing data from Q1 2018 to 2020
                        </p>
                        <ul>
                            <li>Utilized methods such as penetration rate analysis and industry concentration analysis to gain in-depth insights into industry trends and competitive landscape.</li>
                            <li>Emphasized the calculation and comparison of key financial indicators during analysis to accurately evaluate company performance and operational conditions.</li>
                        </ul>
                        <br></br>
                        <p>
                            JobReady Virtual Work Experience Program (Consulting Industry and Automotive Performance Enhancement)
                        </p>
                        <ul>
                            <li>Use common management consulting model to analyze business strategic direction</li>
                            <li>Utilized methods such as penetration rate analysis and industry concentration analysis to gain in-depth insights into industry trends and competitive landscape.</li>
                            <li>Emphasized the calculation and comparison of key financial indicators during analysis to accurately evaluate company performance and operational conditions.</li>
                        </ul>
                    </animated.div>
                ))}
            </AnimatedContainer>
            <AnimatedContainer rest={restPersonal} size={sizePersonal} onClick={togglePersonal}>
                <div className={styles.animationContainerFour} style={{ color: '#fffffe', fontWeight: '900' }}>Personal Website</div>
                {transitionPersonal((style, item) => (
                    <animated.div
                        className={styles.item}
                        style={{
                            ...style,
                            overflow: 'auto',
                            maxHeight: '400px',
                        }}
                    >
                        <p>
                            Personal Website Developed Using React Framework
                        </p>
                        <br></br>
                        <p>
                            Technology Stack:
                        </p>
                        <ul>
                            <li>React: Utilized the React framework to build components, leveraging functional components and Hooks API for dynamic interactions and state management.</li>
                            <li>CSS Modules: Employed CSS Modules for modular and organized style management, enhancing style maintainability and reusability.</li>
                            <li>JavaScript: Implemented logic and auxiliary functions using JavaScript, including debounce functions and animation effects.</li>
                            <li>React Spring: Integrated the React Spring library to achieve animation and transition effects, encompassing the creation of transitions, animations, animation sequences, and configuration of animation behavior.</li>
                            <li>React Router: Implemented routing and navigation functionality using the React Router library, creating navigation links through the Link component.</li>
                            <li>ES6 Module Syntax: Utilized ES6 module syntax for resource imports.</li>
                            <li>Debounce Function: Implemented debounce functions to optimize event handling performance and enhance user experience.</li>
                            <li>Component Reusability: Leveraged reusable child components within components, passing data and handling click events through props.</li>
                            <li>State Management: Managed component state using React's useState hook to enable dynamic toggling and content display.</li>
                            <li>Loading State Management: Controlled the visibility of loading components to provide improved user feedback.</li>
                            <li>Component Communication: Utilized state to track selected components and dynamically render corresponding content based on the selection.</li>
                            <li>CSS Transitions: Implemented animation effects using CSS transitions, triggering animations by adding transition class names.</li>
                            <li>requestAnimationFrame: Utilized the requestAnimationFrame function to achieve smooth animation effects.</li>
                        </ul>

                    </animated.div>
                ))}
            </AnimatedContainer>
        </div>
    );
}

export default Project;
