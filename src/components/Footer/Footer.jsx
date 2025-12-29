import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const quickLinks = [
        { name: 'Me, Basically', path: '/#about' },
        { name: 'What I Use', path: '/skills' },
        { name: 'Projects', path: '/projects' },
        { name: 'Behind the Code', path: '/behind-the-code' },
        { name: 'Contact', path: '/contact' }
    ];

    const socialLinks = [
        { icon: 'fab fa-github', url: 'https://github.com/zayennn', label: 'GitHub' },
        { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/elang-atha-zahran-100459220/', label: 'LinkedIn' },
        { icon: 'fab fa-instagram', url: 'https://instagram.com/zaayeenn_', label: 'Instagram' },
        { icon: 'fab fa-tiktok', url: 'https://tiktok.com/@zaayeen_', label: 'TikTok' },
    ];

    const contactInfo = [
        { icon: 'fas fa-envelope', text: 'athazahranel@gmail.com' },
        { icon: 'fas fa-map-marker-alt', text: 'Indonesia, West Java' },
        { icon: 'fas fa-phone', text: '+62 8778 8612 930' }
    ];

    const technologies = [
        'React Js', 'Framer Motion', 'CSS3', 'JavaScript',
        'Git', 'GitHub', 'Vercel'
    ];

    return (
        <footer className={styles.footer}>
            {/* Main Footer Content */}
            <div className={styles.footer__main}>
                <div className={styles.footer__container}>
                    {/* Brand & Description */}
                    <motion.div 
                        className={styles.footer__brand}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link to="/" className={styles.brand} data-cursor="hover">
                            EAZ
                        </Link>
                        <p className={styles.brand__description}>
                            Junior Fullstack Developer passionate about creating exceptional digital experiences. 
                            Let's build something amazing together.
                        </p>
                        <div className={styles.social__links}>
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.social__link}
                                    aria-label={social.label}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    data-cursor="hover"
                                >
                                    <i className={social.icon}></i>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div 
                        className={styles.footer__section}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className={styles.section__title}>Quick Links</h3>
                        <ul className={styles.links__list}>
                            {quickLinks.map((link, index) => (
                                <li key={index} className={styles.link__item}>
                                    <Link 
                                        to={link.path} 
                                        className={styles.link}
                                        data-cursor="hover"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div 
                        className={styles.footer__section}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className={styles.section__title}>Get In Touch</h3>
                        <ul className={styles.contact__list}>
                            {contactInfo.map((info, index) => (
                                <li key={index} className={styles.contact__item}>
                                    <i className={info.icon}></i>
                                    <span>{info.text}</span>
                                </li>
                            ))}
                        </ul>
                        <a 
                            href="mailto:athazahranel@gmail.com" 
                            className={styles.email__button}
                            data-cursor="hover"
                        >
                            <i className="fas fa-paper-plane"></i>
                            Send Email
                        </a>
                    </motion.div>

                    {/* Newsletter */}
                    {/* <motion.div 
                        className={styles.footer__section}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className={styles.section__title}>Stay Updated</h3>
                        <p className={styles.newsletter__text}>
                            Subscribe to get notified about my latest projects and updates.
                        </p>
                        <form className={styles.newsletter__form}>
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className={styles.newsletter__input}
                                data-cursor="hover"
                            />
                            <button 
                                type="submit" 
                                className={styles.newsletter__button}
                                data-cursor="hover"
                            >
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </motion.div> */}
                </div>
            </div>

            {/* Technologies */}
            <motion.div 
                className={styles.technologies__section}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className={styles.technologies__container}>
                    <span className={styles.technologies__label}>Built with:</span>
                    <div className={styles.technologies__list}>
                        {technologies.map((tech, index) => (
                            <motion.span 
                                key={index}
                                className={styles.technology}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ scale: 1.1 }}
                                data-cursor="hover"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Footer Bottom */}
            <div className={styles.footer__bottom}>
                <div className={styles.bottom__container}>
                    <div className={styles.copyright}>
                        <p>© {currentYear} Elang Atha Zahran. All rights reserved.</p>
                        <p className={styles.made__with}>
                            Made with <i className="fas fa-heart"></i> and <i className="fas fa-code"></i>
                        </p>
                    </div>
                    
                    {/* <div className={styles.legal__links}>
                        <a href="/privacy" className={styles.legal__link} data-cursor="hover">
                            Privacy Policy
                        </a>
                        <span className={styles.separator}>•</span>
                        <a href="/terms" className={styles.legal__link} data-cursor="hover">
                            Terms of Service
                        </a>
                        <span className={styles.separator}>•</span>
                        <a href="/sitemap" className={styles.legal__link} data-cursor="hover">
                            Sitemap
                        </a>
                    </div> */}

                    <div className={styles.back__top}>
                        <button 
                            className={styles.back__top__button}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            data-cursor="hover"
                            aria-label="Back to top"
                        >
                            <i className="fas fa-arrow-up"></i>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;