import React, { useState } from 'react';
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
} from '@react-spring/web';
import AnimatedContainer from '../../components/AnimatedContainer';

import styles from './project.module.css';

function Project() {
    const [openGrosaver, setOpenGrosaver] = useState(false);
    const [openInternship, setOpenInternship] = useState(false);

    const springApi = useSpringRef();
    const { size, ...rest } = useSpring({
        ref: springApi,
        config: config.stiff,
        from: {
            size: '60%',
            background: '#eebbc3',
            boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        to: {
            size: openGrosaver ? '100%' : '60%',
            background: openGrosaver ? 'white' : '#eebbc3',
        },
    });

    const transApi = useSpringRef();
    const transition = useTransition(openGrosaver ? [{}] : [], {
        ref: transApi,
        trail: 400,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
    });

    const springApiInternship = useSpringRef();
    const { size: sizeInternship, ...restInternship } = useSpring({
        ref: springApiInternship,
        config: config.stiff,
        from: {
            size: '60%',
            background: '#b8c1ec',
            boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        to: {
            size: openInternship ? '100%' : '60%',
            background: openInternship ? 'white' : '#b8c1ec',
        },
    });

    const transApiInternship = useSpringRef();
    const transitionInternship = useTransition(openInternship ? [{}] : [], {
        ref: transApiInternship,
        trail: 400,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
    });

    const toggleGrosaver = () => {
        setOpenGrosaver((prevOpenGrosaver) => !prevOpenGrosaver);
        setOpenInternship(false);
    };

    const toggleInternship = () => {
        setOpenInternship((prevOpenInternship) => !prevOpenInternship);
        setOpenGrosaver(false);
    };

    // 第一个动画序列
    useChain(openGrosaver ? [springApi, transApi] : [transApi, springApi], [
        0,
        openGrosaver ? 0.1 : 0.6,
    ]);

    // 第二个动画序列
    useChain(
        openInternship ? [springApiInternship, transApiInternship] : [transApiInternship, springApiInternship],
        [0, openInternship ? 0.1 : 0.6]
    );

    return (
        <div className={styles.wrapper}>
            <AnimatedContainer rest={rest} size={size} onClick={toggleGrosaver}>
                <div style={{ color: '#fffffe', fontWeight: '900' }}>Grosaver Project</div>
                {transition((style, item) => (
                    <animated.p
                        className={styles.item}
                        style={{
                            ...style,
                            overflow: 'auto',
                            maxHeight: '400px',
                        }}
                    >
                        Recognized with a Graduate Industry Practice Award for GroSaver.
                        <br></br>
                        Developed a website to assist low-income families in Australia with maintaining a healthier diet within limited budgets.
                        Implemented features such as a budget calculator, nutrition education, and gardening tips for growing fresh produce.
                        Collaborated on the initial development of the project using WordPress.
                        <br></br>
                        Key Achievements:
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
                        Technical Stack:
                        <ul>
                            <li>Front-end: Vue.js, CSS, JavaScript, HTML, Leaflet library</li>
                            <li>Backend: Express.js, JWT, MySQL, CORS</li>
                            <li>Additional Tools: AWS Amplify, AWS DynamoDB, Chart.js, Canvas</li>
                        </ul>
                        <br></br>
                        Notable Skills:
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
                    </animated.p>
                ))}
            </AnimatedContainer>
            <AnimatedContainer rest={restInternship} size={sizeInternship} onClick={toggleInternship}>
                <div style={{ color: '#fffffe', fontWeight: '900' }}>Xiangcai Securities' quantitative investment department</div>
                {transitionInternship((style, item) => (
                    <animated.p
                        className={styles.item}
                        style={{
                            ...style,
                            overflow: 'auto',
                            maxHeight: '400px',
                        }}
                    >
                        During my internship at Xiangcai Securities' quantitative investment department, I was responsible for extracting and cleaning stock data from Wind Financial Terminal. I utilized a multi-factor model for stock selection and employed neural networks to develop models that identified robust factors for predicting returns. Additionally, I assisted the operations department in enhancing efficiency by utilizing web scraping techniques to gather real-time dynamic data.
                        <br></br>
                        Key highlights of my internship include:
                        <br></br>
                        <ul>
                            <li>Extracting and cleaning stock data from Wind Financial Terminal</li>
                            <li>Applying a multi-factor model for stock selection</li>
                            <li>Building neural network models to identify powerful factors for return prediction</li>
                            <li>Assisting the operations department in acquiring real-time dynamic data through web scraping</li>
                        </ul>
                    </animated.p>
                ))}
            </AnimatedContainer>
        </div>
    );
}

export default Project;
