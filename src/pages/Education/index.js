import React, { Fragment } from 'react';
import styles from "../Education/education.module.css"
import _2019 from "../../common/images/2019.jpg"
import _2021 from "../../common/images/2021.jpg"
import _2022 from "../../common/images/2022.jpg"
import bear from "../../common/images/bear.png"
import graduate from "../../common/images/graduate_2022.jpg"


function Education() {
    const data = [
        { year: 2019, content: "Graduated from Monash University with a Bachelor of Commerce degree", image: bear, aspectRatio: "543/460" },
        { year: 2020, content: "FRM Program – Passed Part I", image: _2019, aspectRatio: "1502/1007" },
        { year: 2021, content: "CFA level 2 (passed)", image: _2021, aspectRatio: "1234/883" },
        { year: 2022, content: "Post Graduate Industry Experience Winner", image: _2022, aspectRatio: "1080/1080" },
        { year: 2023, content: "Graduated from Monash University in 2023 with a degree in Information Technology", image: graduate, aspectRatio: "1250/1250" },
    ];

    return (
        <Fragment>

            <div className={styles.wrapper}>
                {data.map((item) => (
                    <div
                        key={item.year}
                        className={styles.twoBox}
                        style={{
                            flexDirection: item.year % 2 === 0 ? "row-reverse" : "row",
                        }}
                    >
                        {/* Year */}
                        <div
                            style={{
                                width: "50%",
                                fontSize: "40px",
                                fontStyle: "italic",
                                fontWeight: "800",
                                display: "flex",
                                alignItems: "center",
                                opacity: "1",
                                justifyContent: "center",
                                marginLeft: item.year % 2 === 0 ? "10px" : "none",
                                marginRight: item.year % 2 !== 0 ? "10px" : "none",
                            }}
                        >
                            <span
                                style={{
                                    width: "25%",
                                    textAlign: "center",
                                }}
                            >
                                {item.year}
                            </span>
                        </div>

                        {/* Image */}
                        <div
                            className={styles.flipContainer}
                            style={{
                                width: "50%",
                                display: "flex",
                                justifyContent: item.year % 2 === 0 ? "flex-end" : "flex-start",
                            }}
                        >
                            <div className={styles.flipper}>
                                <div className={styles.front}>
                                    <img
                                        src={item.image}
                                        style={{
                                            width: "100%",
                                            aspectRatio: item.aspectRatio,
                                        }}
                                        alt=""
                                    />
                                </div>
                                <div className={styles.back}>
                                    <div className={styles.text}>{item.content}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </Fragment>

    );
}

export default Education;