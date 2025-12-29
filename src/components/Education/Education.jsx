import React from 'react'
import { motion } from 'framer-motion'
import styles from './Education.module.css'

const Education = () => {
    const educationData = [
        {
            id: 1,
            year: '2018 - 2021',
            title: 'SMK Wikrama Bogor',
            institution: 'As PPLG',
            description: 'The Software and Game Engineering Department at SMK Wikrama Bogor provides website and application development skills, as well as practical experience in frontend and backend technologies.'
        },
        {
            id: 2,
            year: 'August - December 2024',
            title: 'Global Gengou Gakko',
            institution: 'Learning Japanese Language',
            description: 'The intensive Japanese course at Global Gengou Gakko improved my Japanese language skills to N4 level, covering grammar, vocabulary, and speaking and writing skills.'
        }
    ];

    const experienceData = [
        {
            id: 1,
            year: 'July - December 2023',
            title: 'Frontend Web Developer Intern',
            company: 'PT. Kreasi Sawala Nusantara',
            description: 'As a Frontend Intern at PT Kreasi Sawala Nusantara, I develop and optimize the appearance and user experience of websites using HTML, CSS, and JavaScript.'
        },
        {
            id: 2,
            year: 'May 2024',
            title: 'Competence Test',
            company: 'SMK Wikrama Bogor',
            description: 'Taking the Competency Test by creating a website using Laravel as an evaluation of the eligibility of graduating from SMK. This process involves designing, developing, and completing projects according to industry standards.'
        },
        {
            id: 3,
            year: 'March 2024 - Present',
            title: 'Freelance',
            company: 'Junior Web Developer',
            description: 'As a freelance web developer, I work on website development projects with a focus on responsive design and optimal user experience, as well as communicating directly with clients.'
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
            <h2 className={styles.section__title} data-cursor="hover">
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
                                data-cursor="hover"
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
                                data-cursor="hover"
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