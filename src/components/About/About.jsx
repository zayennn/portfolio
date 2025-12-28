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
            <h2 className={styles.section__title}>
                About <span>Me</span>
            </h2>
            
            <div className={styles.about__content}>
                <div className={styles.about__text}>
                    <p className={styles.about__desc}>
                        I'm a passionate Junior Fullstack Developer with expertise in modern web technologies. 
                        I enjoy creating responsive, user-friendly applications that solve real-world problems.
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
                            <span className={styles.detail__value}>elangathazahran@email.com</span>
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