import React from 'react';
import styles from './titleAndImage.module.css'; 

const TitleAndImage = ({ title, imgSrc, onClick }) => (
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
  