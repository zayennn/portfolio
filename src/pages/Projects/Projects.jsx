import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Projects.module.css'

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    
    const projects = [
        {
            id: 1,
            title: 'Personal Portfolio Website',
            description: 'Modern portfolio website built with React, Framer Motion, and custom CSS animations',
            category: 'personal',
            type: 'Web Development',
            technologies: ['React', 'Framer Motion', 'CSS3', 'JavaScript'],
            image: '/images/portfolio-project.jpg',
            github: 'https://github.com/zayennn/my-portfolio',
            live: '/',
            featured: true
        },
        {
            id: 2,
            title: 'E-Commerce Platform',
            description: 'Full-featured e-commerce solution with cart, checkout, and payment integration',
            category: 'freelance',
            type: 'Fullstack Development',
            technologies: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
            image: '/images/ecommerce-project.jpg',
            github: '#',
            live: '#',
            featured: true
        },
        {
            id: 3,
            title: 'Task Management App',
            description: 'Productivity application for managing tasks and projects with team collaboration features',
            category: 'personal',
            type: 'Web Application',
            technologies: ['React', 'Firebase', 'Framer Motion', 'CSS3'],
            image: '/images/task-app.jpg',
            github: '#',
            live: '#',
            featured: false
        },
        {
            id: 4,
            title: 'Restaurant Management System',
            description: 'Complete restaurant management system with order tracking, inventory, and reporting',
            category: 'freelance',
            type: 'Web Application',
            technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
            image: '/images/restaurant-system.jpg',
            github: '#',
            live: '#',
            featured: true
        },
        {
            id: 5,
            title: 'Weather Dashboard',
            description: 'Real-time weather application with location-based forecasts and interactive charts',
            category: 'personal',
            type: 'Web Application',
            technologies: ['JavaScript', 'API Integration', 'CSS3', 'Chart.js'],
            image: '/images/weather-app.jpg',
            github: '#',
            live: '#',
            featured: false
        },
        {
            id: 6,
            title: 'Blog Platform',
            description: 'Content management system for blogging with user authentication and comment system',
            category: 'freelance',
            type: 'Web Development',
            technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
            image: '/images/blog-platform.jpg',
            github: '#',
            live: '#',
            featured: false
        },
        {
            id: 7,
            title: 'React.js Certification',
            description: 'Advanced React.js concepts including hooks, context API, and performance optimization',
            category: 'certification',
            type: 'Certification',
            technologies: ['React', 'JavaScript', 'Redux'],
            image: '/images/react-cert.jpg',
            issuer: 'Coursera',
            date: '2023',
            credential: 'View Credential',
            credentialLink: '#',
            featured: true
        },
        {
            id: 8,
            title: 'Fullstack Web Development',
            description: 'Comprehensive fullstack development certification covering frontend and backend technologies',
            category: 'certification',
            type: 'Certification',
            technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
            image: '/images/fullstack-cert.jpg',
            issuer: 'Udemy',
            date: '2022',
            credential: 'View Credential',
            credentialLink: '#',
            featured: true
        },
        {
            id: 9,
            title: 'Laravel Certification',
            description: 'Professional Laravel development including authentication, APIs, and advanced features',
            category: 'certification',
            type: 'Certification',
            technologies: ['PHP', 'Laravel', 'MySQL', 'REST API'],
            image: '/images/laravel-cert.jpg',
            issuer: 'Laravel Certified',
            date: '2023',
            credential: 'View Credential',
            credentialLink: '#',
            featured: false
        }
    ];

    const filters = [
        { id: 'all', label: 'All Work', count: projects.length },
        { id: 'personal', label: 'Personal Projects', count: projects.filter(p => p.category === 'personal').length },
        { id: 'freelance', label: 'Freelance Projects', count: projects.filter(p => p.category === 'freelance').length },
        { id: 'certification', label: 'Certifications', count: projects.filter(p => p.category === 'certification').length }
    ];

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    return (
        <div className={styles.projects__container}>
            <motion.div 
                className={styles.projects__header}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className={styles.projects__title}>What I've <span>Built</span></h1>
                <p className={styles.projects__subtitle}>
                    A collection of my personal projects, freelance work, and professional certifications. 
                    Each represents a unique challenge and solution.
                </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div 
                className={styles.filter__container}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className={styles.filter__buttons}>
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            className={`${styles.filter__btn} ${activeFilter === filter.id ? styles.active : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                            data-cursor="hover"
                        >
                            {filter.label}
                            <span className={styles.filter__count}>{filter.count}</span>
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Projects Grid */}
            <div className={styles.projects__grid}>
                {filteredProjects.map((project, index) => (
                    <motion.div 
                        key={project.id}
                        className={`${styles.project__card} ${project.featured ? styles.featured : ''}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -8 }}
                        data-cursor="hover"
                    >
                        {/* Category Badge */}
                        <div className={`${styles.category__badge} ${styles[project.category]}`}>
                            {project.category === 'personal' && 'Personal Project'}
                            {project.category === 'freelance' && 'Freelance Work'}
                            {project.category === 'certification' && 'Certification'}
                        </div>

                        {/* Project Image */}
                        <div className={styles.project__image}>
                            <div className={styles.image__placeholder}>
                                {project.category === 'certification' ? (
                                    <div className={styles.cert__icon}>
                                        <i className="fas fa-award"></i>
                                    </div>
                                ) : (
                                    <div className={styles.code__icon}>
                                        <i className="fas fa-code"></i>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Project Content */}
                        <div className={styles.project__content}>
                            <div className={styles.project__header}>
                                <h3 className={styles.project__title}>{project.title}</h3>
                                {project.type && (
                                    <span className={styles.project__type}>{project.type}</span>
                                )}
                            </div>
                            
                            <p className={styles.project__desc}>{project.description}</p>
                            
                            {/* Technologies / Issuer */}
                            <div className={styles.project__meta}>
                                {project.category === 'certification' ? (
                                    <div className={styles.cert__meta}>
                                        <div className={styles.meta__item}>
                                            <i className="fas fa-university"></i>
                                            <span>{project.issuer}</span>
                                        </div>
                                        <div className={styles.meta__item}>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>{project.date}</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.project__tech}>
                                        {project.technologies.map((tech, idx) => (
                                            <span key={idx} className={styles.tech__tag}>{tech}</span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className={styles.project__actions}>
                                {project.category === 'certification' ? (
                                    <a 
                                        href={project.credentialLink} 
                                        className={styles.credential__btn}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-cursor="hover"
                                    >
                                        <i className="fas fa-external-link-alt"></i>
                                        {project.credential}
                                    </a>
                                ) : (
                                    <>
                                        {project.github && (
                                            <a 
                                                href={project.github} 
                                                className={styles.project__link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                data-cursor="hover"
                                            >
                                                <i className="fab fa-github"></i>
                                                Code
                                            </a>
                                        )}
                                        {project.live && (
                                            <a 
                                                href={project.live} 
                                                className={`${styles.project__link} ${styles.live__link}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                data-cursor="hover"
                                            >
                                                <i className="fas fa-external-link-alt"></i>
                                                Live Demo
                                            </a>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <motion.div 
                    className={styles.empty__state}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.empty__icon}>
                        <i className="fas fa-folder-open"></i>
                    </div>
                    <h3>No projects found</h3>
                    <p>Try selecting a different filter category</p>
                </motion.div>
            )}

            {/* CTA Section */}
            <motion.div 
                className={styles.cta__section}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className={styles.cta__content}>
                    <h2>Have a project in mind?</h2>
                    <p>Let's discuss how we can bring your ideas to life</p>
                    <a 
                        href="/contact" 
                        className={styles.cta__button}
                        data-cursor="hover"
                    >
                        Get in Touch
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </motion.div>
        </div>
    )
}

export default Projects