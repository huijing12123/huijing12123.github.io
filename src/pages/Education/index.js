import React, { Fragment, useState } from 'react';
import styles from "../Education/education.module.css";
import _2019 from "../../common/images/2019.jpg";
import _2021 from "../../common/images/2021.jpg";
import _2022 from "../../common/images/2022.jpg";
import bear from "../../common/images/bear.png";
import graduate from "../../common/images/graduate_2022.jpg";


// 防抖函数
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function Education() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const data = [
        { year: 2019, content: "Graduated from Monash University with a Bachelor of Commerce degree", image: bear, aspectRatio: "543/460" },
        { year: 2020, content: "FRM Program – Passed Part I", image: _2019, aspectRatio: "1502/1007" },
        { year: 2021, content: "CFA level 2 (passed)", image: _2021, aspectRatio: "1234/883" },
        { year: 2022, content: "Post Graduate Industry Experience Winner", image: _2022, aspectRatio: "1080/1080" },
        { year: 2023, content: "Graduated from Monash University in 2023 with a degree in Information Technology", image: graduate, aspectRatio: "1250/1250" },
    ];

    const delay = 300; // 设置延迟时间

    const handleLeftSwipe = debounce(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    }, delay); // Adjust the debounce delay as per your needs

    const handleRightSwipe = debounce(() => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));

    }, delay); // Adjust the debounce delay as per your needs







    return (
        <Fragment>
            <div style={{
                display: "flex", marginLeft: "80px", marginBottom: "20px", marginTop: "10px", width: "640px", boxShadow: "8px 8px 8px 10px rgba(0, 0, 0, 0.2)"
            }}>
                {data.map((item, index) => (
                    <div
                        key={item.year}
                        className={styles.years}
                        style={{
                            width: `${(data.length - 1) * 10}%`,
                            textAlign: "center",
                            backgroundColor: index <= currentIndex ? "#fffffe" : "rgba(0, 0, 0, 0)",
                            color: index <= currentIndex ? "#121629" : "#fffffe",
                            fontWeight: "900",

                        }}
                    >
                        {item.year}
                    </div>
                ))}
            </div>

            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <div className={styles.svgHoverStyle} onClick={handleLeftSwipe(delay)}>
                    <span>
                        <svg
                            t="1687334358999"
                            className="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="4737"
                            width="80"
                            height="80"
                        >
                            <path
                                d="M496.213333 329.856L315.306667 510.848l180.992 181.077333a42.666667 42.666667 0 1 1-60.330667 60.330667l-211.2-211.2a42.453333 42.453333 0 0 1-11.818667-22.613333l-0.597333-5.034667v-5.034667a42.496 42.496 0 0 1 12.373333-27.648l211.2-211.2a42.666667 42.666667 0 0 1 60.373334 60.330667z m298.666667 0l-180.949333 180.992 180.992 181.077333a42.666667 42.666667 0 1 1-60.330667 60.330667l-211.2-211.2a42.453333 42.453333 0 0 1-11.818667-22.613333l-0.597333-5.034667v-5.034667a42.496 42.496 0 0 1 12.373333-27.648l211.2-211.2a42.666667 42.666667 0 0 1 60.373334 60.330667z"
                                fill="#fffffe"
                                p-id="4738"
                            ></path>
                        </svg>
                    </span>
                </div>
                <div
                    style={{
                        display: "block",
                        overflow: "hidden",
                        boxShadow: "8px 8px 8px 10px rgba(0, 0, 0, 0.2)",
                        backgroundColor: "#232946"
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div className={styles.wrapper}>
                            {data.map((item, index) => (
                                <div
                                    key={item.year}
                                    className={styles.twoBox}
                                    style={{
                                        flexDirection: item.year % 2 === 0 ? "row-reverse" : "row",
                                        transform: `translateX(-${currentIndex * 100}%)`, // Slide animation based on currentIndex
                                        // transition: "transform 0.5s ease-in-out",
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
                                            opacity: index === currentIndex ? "1" : "0.5", // Highlight the active year
                                            justifyContent: "center",
                                            marginLeft: item.year % 2 === 0 ? "10px" : "none",
                                            marginRight: item.year % 2 !== 0 ? "10px" : "none",
                                        }}
                                    >
                                        <span style={{ width: "25%", textAlign: "center" }}>{item.year}</span>
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
                    </div>
                </div>
                <div className={styles.svgHoverStyle} onClick={handleRightSwipe(delay)}>
                    <span>
                        <svg
                            t="1687334829497"
                            className="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="8278"
                            width="80"
                            height="80"
                        >
                            <path
                                d="M523.477333 691.925333l180.992-180.992-180.992-181.077333a42.666667 42.666667 0 1 1 60.330667-60.330667l211.2 211.2c6.4 6.4 10.325333 14.336 11.818667 22.613334l0.597333 5.034667v5.034667a42.496 42.496 0 0 1-12.416 27.648l-211.2 211.2a42.666667 42.666667 0 0 1-60.330667-60.330667z m-298.666666 0l180.992-180.992L224.810667 329.813333a42.666667 42.666667 0 1 1 60.330666-60.330666l211.2 211.2c6.4 6.4 10.325333 14.336 11.818667 22.613333l0.597333 5.034667v5.034666a42.496 42.496 0 0 1-12.416 27.648l-211.2 211.2a42.666667 42.666667 0 0 1-60.330666-60.330666z"
                                fill="#fffffe"
                                p-id="8279"
                            ></path>
                        </svg>
                    </span>
                </div>
            </div>
        </Fragment>
    );
}

export default Education;
