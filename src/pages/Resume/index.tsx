import React, { Fragment, useState } from 'react';


import '../../common/style/global.css';
import styles from '../Resume/resume.module.css';

import PersonalityComponent from '../Personality';
import EducationComponent from '../Education';
import HobbyComponent from '../Hobby';
import ProjectComponent from '../Project';
import LoadingComponent from '../Loading';
import ContactFormComponent from '../ContactForm';
import TitleAndImage from '../../components/TitleAndImage';

import xiaohei from '../../common/images/xiaohei_remove.png';
import qiuqiu from '../../common/images/qiuqiu_remove.png';
import xiaohua from '../../common/images/xiaohua_remove.png';
import yinyuan from '../../common/images/yinyuan_remove.png';
import abao from '../../common/images/abao_remove.png';

interface ResumeProps {
  isLoading: boolean;
  selectedComponent: string;
  handleComponentClick: (component: string) => void;
}

const Resume: React.FC<ResumeProps> = ({ }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedComponent, setSelectedComponent] = useState<string>('');

  const handleComponentClick = (component: string) => {
    setSelectedComponent(component);
    setIsLoading(false);
  };

  let componentToRender: JSX.Element | null;
  try {
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
    console.error('Error rendering component:', error);
    componentToRender = null;
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
            <>{componentToRender}</>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Resume;
