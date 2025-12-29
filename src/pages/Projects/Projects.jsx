import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Projects.module.css'

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'Budget Tracker',
            description: 'Budget Tracker: A powerful web app for managing your finances. Track expenses, categorize spending, set budgets, and generate detailed reports. It offers offline access and a mobile-friendly interface, making it easy to stay on top of your finances.',
            category: 'personal',
            type: 'Web Development',
            technologies: ['PHP', 'Laravel'],
            image: '/images/projects/budget_tracker.png',
            github: 'https://github.com/zayennn/budget-tracker',
            // live: '/',
            featured: true
        },
        {
            id: 2,
            title: 'Certiport',
            description: 'After completing the HTML and CSS basics test learning, I successfully obtained this certification, which covers the fundamental principles of web development, including the structure and presentation of web content.',
            category: 'certification',
            type: 'Certification',
            technologies: ['HTML5', 'CSS3'],
            image: '/images/projects/certiport.jpg',
            issuer: 'Coursera',
            date: '2023',
            credential: 'View Credential',
            credentialLink: '#',
            featured: true
        },
        {
            id: 3,
            title: 'Learning the Basic Principles of SOLID Programming',
            description: 'A course on Dicoding that teaches the principles of SOLID programming, which are essential for writing clean and maintainable code.',
            category: 'certification',
            type: 'certification',
            credential: 'View Credential',
            technologies: [''],
            image: '/images/projects/dicoding.png',
            featured: false
        },
        {
            id: 4,
            title: 'Created Landing Page for PT. DHP',
            description: 'Built a landing page for PT. DHP, a local IT services provider, using Laravel and Bootstrap 5, delivering a high-quality product on time based on client needs.',
            category: 'freelance',
            type: 'Web Development',
            technologies: ['PHP', 'Laravel', 'Bootstrap'],
            image: '/images/projects/freelance-1.jpg',
            // github: '#',
            // live: '#',
            featured: true
        },
        {
            id: 5,
            title: 'Created Landing Page for SMPN Negri 157 Jakarta',
            description: "A landing page designed for SMPN Negri 157 Jakarta, showcasing the school's programs and facilities.",
            category: 'freelance',
            type: 'Web Development',
            technologies: ['PHP', 'Laravel', 'Bootstrap'],
            image: '/images/projects/freelance-2.jpg',
            // github: '#',
            // live: '#',
            featured: false
        },
        {
            id: 6,
            title: 'Gmetrix',
            description: 'Gmetrix is the certification I obtained after passing the HTML5 and CSS3 tests during my high school years.',
            category: 'certification',
            type: 'Certification',
            technologies: ['React', 'JavaScript', 'Redux'],
            image: '/images/projects/gmtrix.jpg',
            issuer: 'Coursera',
            date: '2023',
            credential: 'View Credential',
            credentialLink: '#',
            featured: true
        },
        {
            id: 7,
            title: 'Intership In PT. Kreasi Sawala Nusantara',
            description: 'An internship program at PT. Kreasi Sawala Nusantara, where I gained practical experience in web development and collaborated with a team of developers.',
            category: 'certification',
            type: 'Certification',
            technologies: ['Junior FrontEnd'],
            image: '/images/projects/PKL.jpg',
            issuer: 'Coursera',
            date: '2023',
            credential: 'View Credential',
            credentialLink: '#',
            featured: true
        },
        {
            id: 8,
            title: 'Python Learning',
            description: "The React Web Python Learning project is an interactive website using React.js for learning Python basics in a practical and fun way. It's perfect for beginners to quickly learn without any hassle.",
            category: 'personal',
            type: 'Web Development',
            technologies: ['PHP', 'Laravel'],
            image: '/images/projects/python learning.png',
            github: 'https://github.com/zayennn/budget-tracker',
            github: 'https://github.com/zayennn/react-web-python-learning',
            live: 'https://react-web-python-learning.vercel.app/',
            featured: true
        },
        {
            id: 9,
            title: 'Vite Portfolio',
            description: 'A personal portfolio website built with Vite, showcasing my skills, projects, and experience.',
            category: 'personal',
            type: 'Web Development',
            technologies: ["Vite Js"],
            image: '/images/projects/vite-portfolio.png',
            github: 'https://github.com/zaayeenn/vite-portfolio',
            live: 'https://vite-portfolio-drab.vercel.app/',
            featured: false
        },
        {
            id: 10,
            title: 'React Js Portfolio',
            description: 'A personal portfolio website built with React, showcasing my skills, projects, and experience.',
            category: 'personal',
            type: 'Web Development',
            technologies: ["React Js"],
            image: '/images/projects/react portfolio.png',
            github: 'https://github.com/zaayeenn/reactjs-portfolio',
            live: 'https://els-reactjs-portfolio.vercel.app/',
            featured: false
        },
        {
            id: 11,
            title: 'Vite Cosmic Portfolio',
            description: 'This is a web portfolio built with Vite JS, incorporating parallax animations and star ratings.',
            category: 'personal',
            type: 'Web Development',
            technologies: ["Vite Js"],
            image: '/images/projects/react cosmic.png',
            github: 'https://github.com/zayennn/vite-cosmic-portfolio',
            live: 'https://cosmic-portfolio-iota.vercel.app/',
            featured: false
        },
        {
            id: 12,
            title: 'Cafe Coffe',
            description: 'This is a freelance project where I was asked by a friend to create a website for a cafe where customers can order products within the website. It was built using html5, css3, and javascript',
            category: 'freelance',
            type: 'Web Development',
            technologies: ["HTML5", "CSS3", "Javascript"],
            image: '/images/projects/freelance-3.png',
            featured: true
        },
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
                            {/* <div className={styles.image__placeholder}>
                                {project.category === 'certification' ? (
                                    <div className={styles.cert__icon}>
                                        <i className="fas fa-award"></i>
                                    </div>
                                ) : (
                                    <div className={styles.code__icon}>
                                        <i className="fas fa-code"></i>
                                    </div>
                                )}
                            </div> */}
                            <img src={project.image} alt="" />
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
                                        {/* <div className={styles.meta__item}>
                                            <i className="fas fa-university"></i>
                                            <span>{project.issuer}</span>
                                        </div>
                                        <div className={styles.meta__item}>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>{project.date}</span>
                                        </div> */}
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