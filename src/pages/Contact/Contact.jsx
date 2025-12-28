import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Contact.module.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    const contactInfo = [
        { icon: 'fas fa-envelope', title: 'Email', value: 'elangathazahran@email.com', link: 'mailto:elangathazahran@email.com' },
        { icon: 'fas fa-phone', title: 'Phone', value: '+62 812 3456 7890', link: 'tel:+6281234567890' },
        { icon: 'fas fa-map-marker-alt', title: 'Location', value: 'Indonesia', link: '#' },
        { icon: 'fab fa-linkedin', title: 'LinkedIn', value: 'linkedin.com/in/elangatha', link: '#' }
    ];

    return (
        <div className={styles.contact__container}>
            <motion.div 
                className={styles.contact__header}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className={styles.contact__title}>Get In <span>Touch</span></h1>
                <p className={styles.contact__subtitle}>
                    Have a project in mind? Feel free to reach out. Let's create something amazing together!
                </p>
            </motion.div>

            <div className={styles.contact__content}>
                <motion.div 
                    className={styles.contact__info}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.info__title}>Contact Information</h2>
                    <p className={styles.info__desc}>
                        Feel free to contact me through any of the channels below. I'll get back to you as soon as possible.
                    </p>
                    
                    <div className={styles.info__grid}>
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={index}
                                href={info.link}
                                className={styles.info__card}
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                data-cursor="hover"
                            >
                                <div className={styles.info__icon}>
                                    <i className={info.icon}></i>
                                </div>
                                <div className={styles.info__content}>
                                    <h3 className={styles.info__title__card}>{info.title}</h3>
                                    <p className={styles.info__value}>{info.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <div className={styles.social__links}>
                        <a href="#" className={styles.social__link} data-cursor="hover">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className={styles.social__link} data-cursor="hover">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="#" className={styles.social__link} data-cursor="hover">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" className={styles.social__link} data-cursor="hover">
                            <i className="fab fa-tiktok"></i>
                        </a>
                    </div>
                </motion.div>

                <motion.div 
                    className={styles.contact__form__wrapper}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <form onSubmit={handleSubmit} className={styles.contact__form}>
                        <div className={styles.form__group}>
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                data-cursor="hover"
                            />
                        </div>
                        
                        <div className={styles.form__group}>
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                data-cursor="hover"
                            />
                        </div>
                        
                        <div className={styles.form__group}>
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                data-cursor="hover"
                            />
                        </div>
                        
                        <div className={styles.form__group}>
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                data-cursor="hover"
                            ></textarea>
                        </div>
                        
                        <motion.button
                            type="submit"
                            className={styles.submit__btn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            data-cursor="hover"
                        >
                            Send Message <i className="fas fa-paper-plane"></i>
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact