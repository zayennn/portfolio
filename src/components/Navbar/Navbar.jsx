import React, { useState } from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.navbar__container}>
            <a className={styles.brand} href="/">
                EAZ
            </a>

            <nav className={`${styles.nav__menu} ${isMenuOpen ? styles.menu__open : ''}`}>
                <a className={styles.nav__link} href="/" onClick={() => setIsMenuOpen(false)}>home</a>
                <a className={styles.nav__link} href="/" onClick={() => setIsMenuOpen(false)}>about</a>
                <a className={styles.nav__link} href="/" onClick={() => setIsMenuOpen(false)}>skills</a>
                <a className={styles.nav__link} href="/" onClick={() => setIsMenuOpen(false)}>educations & experiences</a>
                <a className={styles.nav__link} href="/" onClick={() => setIsMenuOpen(false)}>my projects</a>
                <a className={styles.nav__link} href="/" onClick={() => setIsMenuOpen(false)}>get in touch</a>
                <button className={`${styles.btn__navbar} ${styles.hide}`}>
                    resume <i className="fa-solid fa-download"></i>
                </button>
            </nav>

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