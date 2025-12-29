import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import styles from './PageTransition.module.css';

const PageTransition = ({ onLoadingComplete }) => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const [loadingText, setLoadingText] = useState('Loading');
    const [loadingDots, setLoadingDots] = useState('');

    useEffect(() => {
        setIsLoading(true);
        setLoadingText('Loading');
        setLoadingDots('');
        
        const dotsInterval = setInterval(() => {
            setLoadingDots(prev => {
                if (prev.length >= 3) return '';
                return prev + '.';
            });
        }, 300);

        const readyTimer = setTimeout(() => {
            setLoadingText('Ready!');
        }, 1000);

        const completeTimer = setTimeout(() => {
            setIsLoading(false);
            clearInterval(dotsInterval);
            clearTimeout(readyTimer);
            
            if (onLoadingComplete) {
                onLoadingComplete();
            }
        }, 1500);

        return () => {
            clearInterval(dotsInterval);
            clearTimeout(readyTimer);
            clearTimeout(completeTimer);
        };
    }, [location, onLoadingComplete]);

    const overlayVariants = {
        initial: {
            x: '-100%',
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        },
        exit: {
            x: '100%',
            opacity: 0,
            transition: {
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const textVariants = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.2
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3
            }
        }
    };

    const logoVariants = {
        animate: {
            rotate: 360,
            transition: {
                duration: 2,
                ease: "linear",
                repeat: Infinity
            }
        }
    };

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div 
                    className={styles.pageTransition}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={location.pathname}
                >
                    <motion.div 
                        className={styles.overlay}
                        variants={overlayVariants}
                    />

                    <div className={styles.content}>
                        <motion.div 
                            className={styles.logoContainer}
                            variants={logoVariants}
                            animate="animate"
                        >
                            <div className={styles.logo}>
                                EAZ
                            </div>
                        </motion.div>

                        <motion.div 
                            className={styles.textContainer}
                            variants={textVariants}
                        >
                            <h1 className={styles.loadingText}>
                                {loadingText}
                                <span className={styles.dots}>{loadingDots}</span>
                            </h1>
                            <p className={styles.subText}>
                                {loadingText === 'Loading' ? 'Preparing your experience' : 'Get ready!'}
                            </p>
                        </motion.div>

                        <motion.div 
                            className={styles.progressBar}
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageTransition;