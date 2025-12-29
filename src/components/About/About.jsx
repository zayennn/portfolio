import React from 'react'
import { motion } from 'framer-motion'
import styles from './About.module.css'

const About = () => {
    return (
        <motion.div
            className={styles.about__container}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className={styles.section__title} data-cursor="hover">
                About <span>Me</span>
            </h2>

            <div className={styles.about__content}>
                <div className={styles.about__text}>
                    <p className={styles.about__desc} data-cursor="hover">
                        As a passionate Fullstack Web Developer, I specialize in building scalable, responsive, and user-friendly web applications. I work with a modern tech stack including HTML5, CSS3, Bootstrap 5, JavaScript, PHP, Laravel, and React.js. I take pride in writing clean, efficient code and creating seamless user experiences.
                        <br/><br/>
                        I thrive in team environments where collaboration and continuous learning are key. Keeping up with the latest technologies and best practices is part of my daily routine, ensuring that the solutions I develop are not only functional but also future-ready. Whether it's front-end design or back-end logic, I enjoy bringing ideas to life through code and solving real-world problems with smart digital solutions. I'm always eager to learn new technologies and take on new challenges, and I'm committed to delivering high-quality results to my clients.
                    </p>

                    <div className={styles.about__details}>
                        <div className={styles.detail__item}>
                            <span className={styles.detail__label}>Name:</span>
                            <span className={styles.detail__value}>Elang Atha Zahran</span>
                        </div>
                        <div className={styles.detail__item}>
                            <span className={styles.detail__label}>Location:</span>
                            <span className={styles.detail__value}>Indonesia</span>
                        </div>
                        <div className={styles.detail__item}>
                            <span className={styles.detail__label}>Email:</span>
                            <span className={styles.detail__value}>athazahranel@gmail.com</span>
                        </div>
                        <div className={styles.detail__item}>
                            <span className={styles.detail__label}>Availability:</span>
                            <span className={styles.detail__value}>Open to Opportunities</span>
                        </div>
                    </div>

                    <button className={styles.about__btn} data-cursor="hover">
                        Download CV <i className="fa-solid fa-download"></i>
                    </button>
                </div>

                <motion.div
                    className={styles.about__image}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img src={`${process.env.PUBLIC_URL}/images/hero-vector.svg`} alt="About Illustration" />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About