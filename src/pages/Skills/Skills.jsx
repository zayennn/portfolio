import React from 'react'
import { motion } from 'framer-motion'
import styles from './Skills.module.css'

const Skills = () => {
    const skills = [
        { name: 'HTML5', level: 95, category: 'frontend' },
        { name: 'CSS3', level: 90, category: 'frontend' },
        { name: 'JavaScript', level: 85, category: 'frontend' },
        { name: 'TypeScript', level: 70, category: 'frontend' },
        { name: 'React.js', level: 75, category: 'frontend' },
        { name: 'Vite', level: 75, category: 'frontend' },
        { name: 'Bootstrap', level: 90, category: 'frontend' },
        { name: 'Tailwind', level: 75, category: 'frontend' },
        { name: 'Node.js', level: 65, category: 'backend' },
        { name: 'Express', level: 50, category: 'backend' },
        { name: 'Python', level: 50, category: 'backend' },
        { name: 'Flask', level: 50, category: 'backend' },
        { name: 'Django', level: 30, category: 'backend' },
        { name: 'PHP', level: 70, category: 'backend' },
        { name: 'Laravel', level: 70, category: 'backend' },
        { name: 'MySQL', level: 75, category: 'database' },
        { name: 'Git', level: 85, category: 'tools' },
        { name: 'Figma', level: 70, category: 'tools' }
    ];

    const categories = [
        { id: 'all', name: 'All Skills' },
        { id: 'frontend', name: 'Frontend' },
        { id: 'backend', name: 'Backend' },
        { id: 'database', name: 'Database' },
        { id: 'tools', name: 'Tools' }
    ];

    const [activeCategory, setActiveCategory] = React.useState('all');

    const filteredSkills = activeCategory === 'all' 
        ? skills 
        : skills.filter(skill => skill.category === activeCategory);

    return (
        <div className={styles.skills__container}>
            <motion.div 
                className={styles.skills__header}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className={styles.skills__title}>What I <span>Use</span></h1>
                <p className={styles.skills__subtitle}>
                    Here are the technologies and tools I work with to create amazing web applications.
                </p>
            </motion.div>

            <div className={styles.skills__filter}>
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`${styles.filter__btn} ${activeCategory === category.id ? styles.active : ''}`}
                        onClick={() => setActiveCategory(category.id)}
                        data-cursor="hover"
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            <div className={styles.skills__grid}>
                {filteredSkills.map((skill, index) => (
                    <motion.div 
                        key={skill.name}
                        className={styles.skill__card}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        data-cursor="hover"
                    >
                        <div className={styles.skill__info}>
                            <h3 className={styles.skill__name}>{skill.name}</h3>
                            <span className={styles.skill__level}>{skill.level}%</span>
                        </div>
                        <div className={styles.skill__bar}>
                            <motion.div 
                                className={styles.skill__progress}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                            />
                        </div>
                        <span className={styles.skill__category}>{skill.category}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills