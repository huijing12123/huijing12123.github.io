import React, { Fragment } from 'react';
import styles from "../Personality/personality.module.css"

function Personality() {
    return (
        <Fragment>
            <div className={styles.wrapper}>
                <div className={styles.titleBox}>
                    <div className={styles._title}>Turbulent Defender (ISFJ-T)</div>
                    <div className={styles._link}>
                        <a href=' https://www.16personalities.com/profiles/68118e48fd0cf'>learn more
                            <span style={{ marginLeft: "5px" }} >
                                <svg t="1687144286449" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3182" width="15" height="15">
                                    <path d="M303.307286 9.731785L194.095037 118.944034c-11.894403 11.894403-11.894403 32.439282 0 45.414995L541.195354 511.459345 194.095037 859.640971c-11.894403 11.894403-11.894403 32.439282 0 45.414995L303.307286 1014.268215c11.894403 11.894403 32.439282 11.894403 45.414995 0l366.563886-366.563886c1.081309-1.081309 3.243928-2.162619 4.325237-3.243928l110.293559-110.293558c6.487856-6.487856 9.731785-14.057022 9.731785-22.707498s-3.243928-16.219641-9.731785-22.707497L719.611404 379.539599c-1.081309-1.081309-2.162619-2.162619-4.325237-3.243928L348.722281 9.731785C335.746568-3.243928 316.282999-3.243928 303.307286 9.731785z" p-id="3183" fill="#fffffe">
                                    </path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <div className={styles.contentBox}>
                    <div className={[styles._box, styles._boxNature].join(" ")}>
                        <div className={styles._boxTitle}>NATURE</div>
                        <div className={styles._boxTitle} style={{ fontSize: "14px" }}>FEELING</div>
                        <div className={styles._boxSvg}>
                            <span>
                                <svg t="1687150551436" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5164" width="100" height="100">
                                    <text x="50%" y="20%" dominantBaseline="middle" textAnchor="middle" style={{ fontSize: '200px', fontWeight: "bold", fill: "#fffffe" }}>
                                        88%
                                    </text>
                                    <path d="M277.9 406.7L159.2 612.4c-41.3-14.5-71.1-53.9-71.1-99.9 0-29.1 11.9-55.6 31.1-74.7 19.2-19.2 45.6-31.1 74.7-31.1h84zM415.4 406.7L293.1 618.3h-61l122.2-211.6zM552.9 406.7L430.6 618.3h-61l122.2-211.6z" fill="#fffffe" p-id="5165">
                                    </path>
                                    <path d="M828.8 641.5H193.9c-71.1 0-129-57.9-129-129s57.9-129 129-129h634.9c71.1 0 129 57.9 129 129s-57.9 129-129 129zM193.9 429.8c-45.6 0-82.7 37.1-82.7 82.7s37.1 82.7 82.7 82.7h634.9c45.6 0 82.7-37.1 82.7-82.7s-37.1-82.7-82.7-82.7H193.9z" fill="#fffffe" p-id="5166">
                                    </path>
                                </svg>
                            </span>
                        </div>
                        <div className={styles._boxPara}>
                            <p>Mostly Introverted. <br></br>
                                Likely prefers fewer, yet deep and meaningful, social interactions and feels drawn to calmer environments.
                            </p>
                        </div>
                    </div>
                    <div className={[styles._box, styles._boxTactic].join(" ")}>
                        <div className={styles._boxTitle}>TACTIC</div>
                        <div className={styles._boxTitle} style={{ fontSize: "14px" }}>JUDGING</div>
                        <div className={styles._boxSvg}>
                            <span>
                                <svg t="1687150551436" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5164" width="100" height="100">
                                    <text x="50%" y="20%" dominantBaseline="middle" textAnchor="middle" style={{ fontSize: '200px', fontWeight: "bold", fill: "#fffffe" }}>
                                        88%
                                    </text>
                                    <path d="M277.9 406.7L159.2 612.4c-41.3-14.5-71.1-53.9-71.1-99.9 0-29.1 11.9-55.6 31.1-74.7 19.2-19.2 45.6-31.1 74.7-31.1h84zM415.4 406.7L293.1 618.3h-61l122.2-211.6zM552.9 406.7L430.6 618.3h-61l122.2-211.6z" fill="#fffffe" p-id="5165">
                                    </path>
                                    <path d="M828.8 641.5H193.9c-71.1 0-129-57.9-129-129s57.9-129 129-129h634.9c71.1 0 129 57.9 129 129s-57.9 129-129 129zM193.9 429.8c-45.6 0-82.7 37.1-82.7 82.7s37.1 82.7 82.7 82.7h634.9c45.6 0 82.7-37.1 82.7-82.7s-37.1-82.7-82.7-82.7H193.9z" fill="#fffffe" p-id="5166">
                                    </path>
                                </svg>
                            </span>
                        </div>
                        <div className={styles._boxPara}>
                            <p>Mostly Judging. <br></br>Likely decisive, thorough, and highly organized. <br></br>Values clarity and prefers planning to spontaneity. </p>
                        </div>
                    </div>
                    <div className={[styles._box, styles._boxEnergy].join(" ")}>
                        <div className={styles._boxTitle}>ENERGY</div>
                        <div className={styles._boxTitle} style={{ fontSize: "14px" }}>OBSERVANT</div>
                        <div className={styles._boxSvg}>
                            <span>
                                <svg t="1687150551436" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5164" width="100" height="100">
                                    <text x="50%" y="20%" dominantBaseline="middle" textAnchor="middle" style={{ fontSize: '200px', fontWeight: "bold", fill: "#fffffe" }}>
                                        88%
                                    </text>
                                    <path d="M277.9 406.7L159.2 612.4c-41.3-14.5-71.1-53.9-71.1-99.9 0-29.1 11.9-55.6 31.1-74.7 19.2-19.2 45.6-31.1 74.7-31.1h84zM415.4 406.7L293.1 618.3h-61l122.2-211.6zM552.9 406.7L430.6 618.3h-61l122.2-211.6z" fill="#fffffe" p-id="5165">
                                    </path>
                                    <path d="M828.8 641.5H193.9c-71.1 0-129-57.9-129-129s57.9-129 129-129h634.9c71.1 0 129 57.9 129 129s-57.9 129-129 129zM193.9 429.8c-45.6 0-82.7 37.1-82.7 82.7s37.1 82.7 82.7 82.7h634.9c45.6 0 82.7-37.1 82.7-82.7s-37.1-82.7-82.7-82.7H193.9z" fill="#fffffe" p-id="5166">
                                    </path>
                                </svg>
                            </span>
                        </div>
                        <div className={styles._boxPara}>
                            <p>Mostly Observant.<br></br> Likely pragmatic and down-to-earth, with a strong focus on what is happening or very likely to happen.</p>
                        </div>
                    </div>
                    <div className={[styles._box, styles._boxIdentity].join(" ")}>
                        <div className={styles._boxTitle}>IDENTITY</div>
                        <div className={styles._boxTitle} style={{ fontSize: "14px" }}>TURBULENT</div>
                        <div className={styles._boxSvg}>
                            <span>
                                <svg t="1687150551436" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5164" width="100" height="100">
                                    <text x="50%" y="20%" dominantBaseline="middle" textAnchor="middle" style={{ fontSize: '200px', fontWeight: "bold", fill: "#fffffe" }}>
                                        88%
                                    </text>
                                    <path d="M277.9 406.7L159.2 612.4c-41.3-14.5-71.1-53.9-71.1-99.9 0-29.1 11.9-55.6 31.1-74.7 19.2-19.2 45.6-31.1 74.7-31.1h84zM415.4 406.7L293.1 618.3h-61l122.2-211.6zM552.9 406.7L430.6 618.3h-61l122.2-211.6z" fill="#fffffe" p-id="5165">
                                    </path>
                                    <path d="M828.8 641.5H193.9c-71.1 0-129-57.9-129-129s57.9-129 129-129h634.9c71.1 0 129 57.9 129 129s-57.9 129-129 129zM193.9 429.8c-45.6 0-82.7 37.1-82.7 82.7s37.1 82.7 82.7 82.7h634.9c45.6 0 82.7-37.1 82.7-82.7s-37.1-82.7-82.7-82.7H193.9z" fill="#fffffe" p-id="5166">
                                    </path>
                                </svg>
                            </span>
                        </div>
                        <div className={styles._boxPara}>
                            <p>Mostly Turbulent. <br></br> Likely self-conscious, sensitive to stress, success-driven, perfectionistic, and eager to improve.</p>
                        </div>
                    </div>
                    <div className={[styles._box, styles._boxMind].join(" ")}>
                        <div className={styles._boxTitle}>MIND</div>
                        <div className={styles._boxTitle} style={{ fontSize: "14px" }}>INTROVERTED</div>
                        <div className={styles._boxSvg}>
                            <span>
                                <svg t="1687150551436" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5164" width="100" height="100">
                                    <text x="50%" y="20%" dominantBaseline="middle" textAnchor="middle" style={{ fontSize: '200px', fontWeight: "bold", fill: "#fffffe" }}>
                                        88%
                                    </text>
                                    <path d="M277.9 406.7L159.2 612.4c-41.3-14.5-71.1-53.9-71.1-99.9 0-29.1 11.9-55.6 31.1-74.7 19.2-19.2 45.6-31.1 74.7-31.1h84zM415.4 406.7L293.1 618.3h-61l122.2-211.6zM552.9 406.7L430.6 618.3h-61l122.2-211.6z" fill="#fffffe" p-id="5165">
                                    </path>
                                    <path d="M828.8 641.5H193.9c-71.1 0-129-57.9-129-129s57.9-129 129-129h634.9c71.1 0 129 57.9 129 129s-57.9 129-129 129zM193.9 429.8c-45.6 0-82.7 37.1-82.7 82.7s37.1 82.7 82.7 82.7h634.9c45.6 0 82.7-37.1 82.7-82.7s-37.1-82.7-82.7-82.7H193.9z" fill="#fffffe" p-id="5166">
                                    </path>
                                </svg>
                            </span>
                        </div>
                        <div className={styles._boxPara}>
                            <p> Mostly Introverted.<br></br> Likely prefers fewer, yet deep and meaningful, social interactions and feels drawn to calmer environments. </p>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>

    );
}

export default Personality;