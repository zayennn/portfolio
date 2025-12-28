import React from 'react'
import { motion } from 'framer-motion'
import styles from './Projects.module.css'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-featured e-commerce website with cart, checkout, and payment integration',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
            image: '/images/project1.jpg',
            github: '#',
            live: '#'
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A productivity app for managing tasks and projects with team collaboration',
            technologies: ['React', 'Firebase', 'Framer Motion'],
            image: '/images/project2.jpg',
            github: '#',
            live: '#'
        },
        {
            id: 3,
            title: 'Portfolio Website',
            description: 'Modern portfolio website with animations and responsive design',
            technologies: ['React', 'Framer Motion', 'CSS3'],
            image: '/images/project3.jpg',
            github: '#',
            live: '#'
        }
    ];

    return (
        <div className={styles.projects__container}>
            <motion.div 
                className={styles.projects__header}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className={styles.projects__title}>My <span>Projects</span></h1>
                <p className={styles.projects__subtitle}>
                    Here are some of my recent projects. Each project represents a unique challenge and solution.
                </p>
            </motion.div>

            <div className={styles.projects__grid}>
                {projects.map((project, index) => (
                    <motion.div 
                        key={project.id}
                        className={styles.project__card}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ y: -10 }}
                        data-cursor="hover"
                    >
                        <div className={styles.project__image}>
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className={styles.project__content}>
                            <h3 className={styles.project__title}>{project.title}</h3>
                            <p className={styles.project__desc}>{project.description}</p>
                            <div className={styles.project__tech}>
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx} className={styles.tech__tag}>{tech}</span>
                                ))}
                            </div>
                            <div className={styles.project__links}>
                                <a href={project.github} className={styles.project__link} data-cursor="hover">
                                    <i className="fab fa-github"></i> Code
                                </a>
                                <a href={project.live} className={styles.project__link} data-cursor="hover">
                                    <i className="fas fa-external-link-alt"></i> Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Projects