import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './navbar.module.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { id: 1, text: 'home', href: '/' },
        { id: 2, text: 'about', href: '/' },
        { id: 3, text: 'skills', href: '/' },
        { id: 4, text: 'educations & experiences', href: '/' },
        { id: 5, text: 'my projects', href: '/' },
        { id: 6, text: 'get in touch', href: '/' },
    ];

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
        <div className={styles.navbar__container}>
            <a className={styles.brand} href="/">
                EAZ
            </a>

            {/* Desktop Menu */}
            <nav className={styles.nav__menu}>
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        className={styles.nav__link}
                        href={link.href}
                    >
                        {link.text}
                    </a>
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
                            <motion.a
                                key={link.id}
                                className={styles.nav__link}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                variants={linkVariants}
                                custom={index}
                                initial="closed"
                                animate="open"
                            >
                                {link.text}
                            </motion.a>
                        ))}
                        <motion.button
                            className={`${styles.btn__navbar} ${styles.hide}`}
                            variants={buttonVariants}
                            initial="closed"
                            animate="open"
                        >
                            resume <i className="fa-solid fa-download"></i>
                        </motion.button>
                    </motion.nav>
                )}
            </AnimatePresence>

            <button className={styles.btn__navbar}>
                resume <i className="fa-solid fa-download"></i>
            </button>

            <label 
                className={`${styles.hamburger} ${isMenuOpen ? styles.hamburger__open : ''}`} 
                htmlFor="hamburger-checkbox"
                onClick={(e) => {
                    e.preventDefault();
                    toggleMenu();
                }}
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
    )
}

export default Navbar