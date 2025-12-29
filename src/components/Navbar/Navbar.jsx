import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import styles from './navbar.module.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navbarRef = useRef(null);
    const location = useLocation();
    const { scrollYProgress } = useScroll();
    const scrollX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 20,
        mass: 0.2,
    });

    useEffect(() => {
        const handleScroll = () => {
            if (!navbarRef.current) return;

            if (window.scrollY > 100) {
                navbarRef.current.classList.add(styles.active);
            } else {
                navbarRef.current.classList.remove(styles.active);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsMenuOpen(false);
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { id: 1, text: 'Me, Basically', href: '/' },
        { id: 2, text: 'What I Use', href: '/skills' },
        { id: 3, text: "what i've built", href: '/projects' },
        { id: 4, text: "what i'm into", href: '/into' },
        { id: 5, text: 'behind the code', href: '/behind-the-code' },
        { id: 6, text: 'get in touch', href: '/contact' },
    ];

    const handleNavClick = (href) => {
        setIsMenuOpen(false);

        if (href.includes('#') && location.pathname === '/') {
            const elementId = href.split('#')[1];
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const menuVariants = {
        closed: {
            clipPath: "ellipse(0% 0% at 100% 0%)",
            opacity: 0,
            transition: {
                duration: 0.3,
                delay: 0
            }
        },
        open: {
            clipPath: "ellipse(150% 200% at 100% 0%)",
            opacity: 1,
            transition: {
                duration: 0.7,
                delay: 0.1,
                ease: [0.34, 1.56, 0.64, 1]
            }
        }
    };

    const linkVariants = {
        closed: {
            opacity: 0,
            x: 20
        },
        open: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                delay: 0.5 + (i * 0.1)
            }
        })
    };

    const buttonVariants = {
        closed: {
            opacity: 0,
            x: 20
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                delay: 1.1
            }
        }
    };

    return (
        <>
            <motion.div
                className={styles.scroll__progress}
                style={{ scaleX: scrollX }}
            />

            <div ref={navbarRef} className={styles.navbar__container}>
                <Link className={styles.brand} to="/" data-cursor="hover">
                    EAZ
                </Link>

                {/* Desktop Menu */}
                <nav className={styles.nav__menu}>
                    {navLinks.map((link) => (
                        link.href.includes('#') ? (
                            <a
                                key={link.id}
                                className={styles.nav__link}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                                data-cursor="hover"
                            >
                                {link.text}
                            </a>
                        ) : (
                            <Link
                                key={link.id}
                                className={styles.nav__link}
                                to={link.href}
                                data-cursor="hover"
                            >
                                {link.text}
                            </Link>
                        )
                    ))}
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav
                            className={`${styles.nav__menu} ${styles.nav__menu__mobile}`}
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            {navLinks.map((link, index) => (
                                link.href.includes('#') ? (
                                    <motion.a
                                        key={link.id}
                                        className={styles.nav__link}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(link.href);
                                        }}
                                        variants={linkVariants}
                                        custom={index}
                                        initial="closed"
                                        animate="open"
                                        data-cursor="hover"
                                    >
                                        {link.text}
                                    </motion.a>
                                ) : (
                                    <motion.div
                                        key={link.id}
                                        variants={linkVariants}
                                        custom={index}
                                        initial="closed"
                                        animate="open"
                                    >
                                        <Link
                                            className={styles.nav__link}
                                            to={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            data-cursor="hover"
                                        >
                                            {link.text}
                                        </Link>
                                    </motion.div>
                                )
                            ))}
                            <motion.button
                                className={`${styles.btn__navbar} ${styles.hide}`}
                                variants={buttonVariants}
                                initial="closed"
                                animate="open"
                                data-cursor="hover"
                            >
                                Download CV <i className="fa-solid fa-download"></i>
                            </motion.button>
                        </motion.nav>
                    )}
                </AnimatePresence>

                <button className={styles.btn__navbar} data-cursor="hover">
                    Download CV <i className="fa-solid fa-download"></i>
                </button>

                <label
                    className={`${styles.hamburger} ${isMenuOpen ? styles.hamburger__open : ''}`}
                    htmlFor="hamburger-checkbox"
                    onClick={(e) => {
                        e.preventDefault();
                        toggleMenu();
                    }}
                    data-cursor="hover"
                >
                    <input
                        type="checkbox"
                        id="hamburger-checkbox"
                        checked={isMenuOpen}
                        onChange={toggleMenu}
                    />
                    <svg viewBox="0 0 32 32">
                        <path
                            className={`${styles.line} ${styles['line-top-bottom']}`}
                            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                        ></path>
                        <path
                            className={styles.line}
                            d="M7 16 27 16"
                        ></path>
                    </svg>
                </label>
            </div>
        </>
    )
}

export default Navbar