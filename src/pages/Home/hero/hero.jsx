import React from 'react'
import styles from "./hero.module.css"

const Hero = () => {
    return (
        <section className={styles.section__hero}>
            <div className={styles.content}>
                <h2 className={styles.name}>
                    Hello, <span>I am Elang Atha Zahran</span>
                </h2>
                <h1 className={styles.level}>
                    junior fullstack <span>developer</span>
                </h1>
                <p className={styles.hero__desc}>
                    As a passionate Fullstack Web Developer, I specialize in building scalable, responsive, and user-friendly web applications. I work with a modern tech stack including HTML5, CSS3, Bootstrap 5, JavaScript, PHP, Laravel, and React.js. I take pride in writing clean, efficient code and creating seamless user experiences.
                </p>
                <div className={styles.hero__socials}>
                    <a href="/">
                        <div className={styles.social}>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </a>
                    <a href="/">
                        <div className={styles.social}>
                            <i class="fa-brands fa-tiktok"></i>
                        </div>
                    </a>
                    <a href="/">
                        <div className={styles.social}>
                            <i class="fa-brands fa-github"></i>
                        </div>
                    </a>
                </div>
            </div>
            <div className={styles.image__hero}>
                <img src="/images/hero-vector.svg" alt="" />
            </div>
        </section>
    )
}

export default Hero