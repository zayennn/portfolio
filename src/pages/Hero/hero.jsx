import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import styles from "./hero.module.css";

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) * 0.01,
                y: (e.clientY - window.innerHeight / 2) * 0.01
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const socialLinks = [
        { icon: 'fa-brands fa-instagram', link: 'https://instagram.com/zaayeenn_', color: '#E4405F' },
        { icon: 'fa-brands fa-tiktok', link: 'https://www.tiktok.com/@zaayeen_', color: '#000000' },
        { icon: 'fa-brands fa-github', link: 'https://github.com/zayennn', color: '#181717' },
        { icon: 'fa-brands fa-linkedin', link: 'https://www.linkedin.com/in/elang-atha-zahran-100459220/', color: '#0A66C2' }
    ];

    const codeLines = [
        '<span class="keyword">const</span> developer = {',
        '  name: <span class="string">"Elang Atha Zahran"</span>,',
        '  role: <span class="string">"Junior Fullstack Developer"</span>,',
        '  skills: [',
        '    <span class="string">"React.js"</span>, <span class="string">"Laravel"</span>, <span class="string">"JavaScript"</span>, <span class="string">"PHP"</span>,',
        '    <span class="string">"Responsive Design"</span>, <span class="string">"Python"</span>, <span class="string">"Flask"</span>, <span class="string">"Django"</span>,',
        '    <span class="string">"Laravel"</span>, <span class="string">"etc"</span>',
        '  ],',
        '  passion: <span class="string">"Creating exceptional digital experiences"</span>',
        '};',
        '',
        '<span class="function">console</span>.<span class="function">log</span>(<span class="string">"Let\'s build something amazing!"</span>);'
    ];

    return (
        <section className={styles.section__hero}>
            <div className={styles.hero__container}>
                {/* Content */}
                <motion.div 
                    className={styles.hero__content}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.badge}>
                        <span className={styles.badge__text}>Available for work</span>
                    </div>

                    <motion.h2 
                        className={styles.greeting}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Hello, I'm
                    </motion.h2>

                    <motion.h1 
                        className={styles.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        data-cursor="hover"
                    >
                        Elang Atha Zahran
                    </motion.h1>

                    <motion.div 
                        className={styles.title__wrapper}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <h3 className={styles.title}>
                            <Typewriter
                                words={['Junior Fullstack Developer', 'Web Developer', 'Problem Solver']}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </h3>
                        <div className={styles.title__underline}></div>
                    </motion.div>

                    <motion.p 
                        className={styles.description}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        data-cursor="hover"
                    >
                        Building exceptional digital experiences with modern web technologies. 
                        Specializing in responsive design, clean architecture, and scalable solutions.
                    </motion.p>

                    <motion.div 
                        className={styles.cta__container}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <a href="#contact" className={styles.primary__btn} data-cursor="hover">
                            Get in Touch
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href="/projects" className={styles.secondary__btn} data-cursor="hover">
                            View Projects
                        </a>
                    </motion.div>

                    <motion.div 
                        className={styles.social__links}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                className={styles.social__link}
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                data-cursor="hover"
                                style={{ '--hover-color': social.color }}
                            >
                                <i className={social.icon}></i>
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div 
                        className={styles.scroll__indicator}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <span>Scroll Down</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </motion.div>
                </motion.div>

                {/* Image/Illustration */}
                <motion.div 
                    className={styles.hero__visual}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                    }}
                    data-cursor="hover"
                >
                    <div className={styles.visual__container}>
                        <div className={styles.code__snippet}>
                            <div className={styles.code__header}>
                                <div className={styles.code__dots}>
                                    <span className={styles.dot} style={{backgroundColor: '#FF5F56'}}></span>
                                    <span className={styles.dot} style={{backgroundColor: '#FFBD2E'}}></span>
                                    <span className={styles.dot} style={{backgroundColor: '#27C93F'}}></span>
                                </div>
                                <span className={styles.code__filename}>portfolio.js</span>
                            </div>
                            <div className={styles.code__content}>
                                <pre>
                                    <div className={styles.code__line}>
                                        <span className={styles.line__number}>01</span>
                                        <code>
                                            <span className={styles.keyword}>const</span> developer = {'{'}
                                        </code>
                                    </div>
                                    <div className={styles.code__line}>
                                        <span className={styles.line__number}>02</span>
                                        <code>
                                            &nbsp;&nbsp;name: <span className={styles.string}>"Elang Atha Zahran"</span>,
                                        </code>
                                    </div>
                                    <div className={styles.code__line}>
                                        <span className={styles.line__number}>03</span>
                                        <code>
                                            &nbsp;&nbsp;role: <span className={styles.string}>"Junior Fullstack Developer"</span>,
                                        </code>
                                    </div>
                                    <div className={styles.code__line}>
                                        <span className={styles.line__number}>04</span>
                                        <code>
                                            &nbsp;&nbsp;skills: [
                                        </code>
                                    </div>
                                    <div className={styles.code__line}>
                                        <span className={styles.line__number}>05</span>
                                        <code>
                                            &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"React.js"</span>, <span className={styles.string}>"Laravel"</span>, <span className={styles.string}>"JavaScript"</span>, <span className={styles.string}>"PHP"</span>,
                                        </code>
                                    </div>
                                    <div className={styles.code__line}>
                                        <span className={styles.line__number}>06</span>
                                        <code>
                                            &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"Responsive Design"</span>, <span className={styles.string}>"Python"</span>, <span className={styles.string}>"Flask"</span>, <span className={styles.string}>"Django"</span>,
                                        </code>
                                    </div>
                                    <div className={styles.code__line}>
                                        <span className={styles.line__number}>07</span>
                                        <code>
                                            &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"Laravel"</span>, <span className={styles.string}>"etc"</span>
                                        </code>
                                    </div>
                                    <div className={styles.code__line}>
                                        <span className={styles.line__number}>08</span>
                                        <code>
                                            &nbsp;&nbsp;],
                                        </code>
                                    </div>
                                    <div className={styles.code__line}>
                                        <span className={styles.line__number}>09</span>
                                        <code>
                                            &nbsp;&nbsp;passion: <span className={styles.string}>"Creating exceptional digital experiences"</span>
                                        </code>
                                    </div>
                                    <div className={styles.code__line}>
                                        <span className={styles.line__number}>10</span>
                                        <code>
                                            {'};'}
                                        </code>
                                    </div>
                                    <div className={styles.code__line}>
                                        <span className={styles.line__number}>11</span>
                                        <code></code>
                                    </div>
                                    <div className={styles.code__line}>
                                        <span className={styles.line__number}>12</span>
                                        <code>
                                            <span className={styles.console}>console</span>.<span className={styles.method}>log</span>(<span className={styles.string}>"Let's build something amazing!"</span>);
                                        </code>
                                    </div>
                                </pre>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Tech Stack */}
            <motion.div 
                className={styles.tech__stack}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
            >
                <div className={styles.tech__label}>Tech Stack This Portfolio</div>
                <div className={styles.tech__items}>
                    {['React', 'JavaScript', 'CSS3', 'Framer Motion'].map((tech, index) => (
                        <motion.span 
                            key={index}
                            className={styles.tech__item}
                            whileHover={{ scale: 1.1 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 1.6 + index * 0.1 }}
                            data-cursor="hover"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Hero