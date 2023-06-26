import React, { Fragment } from 'react';
import styles from "./loading.module.css"



import qiuqiu from "../../common/images/qiuqiu_remove.png"

function Loading() {
    return (
        <Fragment>
            <div className={styles.wrapper}>
                {/* <img src={qiuqiu} alt=''></img> */}
                <div className={styles.container}>
                  {/* <img src={qiuqiu} alt=''></img> */}
                </div>
            </div>
        </Fragment>

    );
}

export default Loading;