import React from 'react'
import { motion } from 'framer-motion'
import styles from './Education.module.css'

const Education = () => {
    const educationData = [
        {
            id: 1,
            year: '2020 - Present',
            title: 'Bachelor of Computer Science',
            institution: 'University Name',
            description: 'Specialized in Software Engineering and Web Development'
        },
        {
            id: 2,
            year: '2022',
            title: 'Fullstack Web Development Bootcamp',
            institution: 'Coding Bootcamp',
            description: 'Intensive training in modern web technologies'
        }
    ];

    const experienceData = [
        {
            id: 1,
            year: '2023 - Present',
            title: 'Junior Fullstack Developer',
            company: 'Tech Company',
            description: 'Developing and maintaining web applications'
        },
        {
            id: 2,
            year: '2022 - 2023',
            title: 'Web Developer Intern',
            company: 'Startup Company',
            description: 'Assisted in frontend development and UI/UX implementation'
        }
    ];

    return (
        <motion.div 
            className={styles.education__container}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className={styles.section__title}>
                Education & <span>Experience</span>
            </h2>
            
            <div className={styles.timeline__wrapper}>
                <div className={styles.timeline__section}>
                    <h3 className={styles.timeline__title}>Education</h3>
                    <div className={styles.timeline}>
                        {educationData.map((item) => (
                            <motion.div 
                                key={item.id}
                                className={styles.timeline__item}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: item.id * 0.1 }}
                            >
                                <div className={styles.timeline__dot}></div>
                                <div className={styles.timeline__content}>
                                    <span className={styles.timeline__year}>{item.year}</span>
                                    <h4 className={styles.timeline__heading}>{item.title}</h4>
                                    <p className={styles.timeline__subtitle}>{item.institution}</p>
                                    <p className={styles.timeline__desc}>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                <div className={styles.timeline__section}>
                    <h3 className={styles.timeline__title}>Experience</h3>
                    <div className={styles.timeline}>
                        {experienceData.map((item) => (
                            <motion.div 
                                key={item.id}
                                className={styles.timeline__item}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: item.id * 0.1 }}
                            >
                                <div className={styles.timeline__dot}></div>
                                <div className={styles.timeline__content}>
                                    <span className={styles.timeline__year}>{item.year}</span>
                                    <h4 className={styles.timeline__heading}>{item.title}</h4>
                                    <p className={styles.timeline__subtitle}>{item.company}</p>
                                    <p className={styles.timeline__desc}>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Education