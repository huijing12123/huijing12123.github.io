import React from 'react';
import styles from './titleAndImage.module.css'; 

interface TitleAndImageProps {
  /**
   * TitleAndImageProps 接口定义了组件的 props 类型
   * 其中 title 和 imgSrc 被注解为 string 类型，onClick 被注解为可选的函数类型。
   * TitleAndImage 组件被注解为 React.FC<TitleAndImageProps>，表示它是一个函数组件，并接受 TitleAndImageProps 类型的 props。
   */
  title: string;
  imgSrc: string;
  onClick?: () => void;
}

const TitleAndImage: React.FC<TitleAndImageProps> = ({ title, imgSrc, onClick }) => (
  <div className={styles.titleAndImg}>
    <div className={styles.titleBox}>
      <span>{title}</span>
    </div>
    <div className={styles.imgBox} onClick={onClick}>
      <img src={imgSrc} alt="" />
    </div>
  </div>
);

export default TitleAndImage;
