import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const formRef = useRef();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setSuccess(false);
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const result = await emailjs.sendForm(
                'service_x1eaxhl',
                'template_h64j5wt',
                formRef.current,
                'H8f6QlTxhkqWMjvyM'
            );

            console.log('Email sent successfully:', result.text);
            
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            
            setSuccess(true);
            
            setTimeout(() => {
                setSuccess(false);
            }, 5000);
            
        } catch (error) {
            console.error('Error sending email:', error);
            setError('Failed to send message. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        { 
            icon: 'fas fa-envelope', 
            title: 'Email', 
            value: 'athazahranel@gmail.com', 
            link: 'mailto:athazahranel@gmail.com',
            copyText: 'athazahranel@gmail.com'
        },
        { 
            icon: 'fas fa-phone', 
            title: 'Phone', 
            value: '+62 8778 8612 930', 
            link: 'tel:+6287788612930',
            copyText: '087788612930'
        },
        { 
            icon: 'fas fa-map-marker-alt', 
            title: 'Location', 
            value: 'Indonesia, West Java', 
            link: '#',
            copyText: 'Indonesia, West Java'
        },
    ];

    const socialLinks = [
        { icon: 'fab fa-instagram', url: 'https://instagram.com/zaayeenn_', label: 'Instagram' },
        { icon: 'fab fa-github', url: 'https://github.com/zayennn', label: 'GitHub' },
        { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/elang-atha-zahran', label: 'LinkedIn' },
        { icon: 'fab fa-tiktok', url: 'https://tiktok.com/@zaayeen_', label: 'TikTok' }
    ];

    const handleCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            alert('Copied to clipboard: ' + text);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className={styles.contact__container}>
            <motion.div 
                className={styles.contact__header}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className={styles.contact__title}>Let's <span>Connect</span></h1>
                <p className={styles.contact__subtitle}>
                    Have a project in mind? Let's discuss how we can bring your ideas to life. 
                    I typically respond within 24 hours.
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
                    <h2 className={styles.info__title}>Ways to Reach Me</h2>
                    <p className={styles.info__desc}>
                        Choose your preferred method. I'm available for freelance projects, 
                        collaboration opportunities, or just a friendly chat about tech.
                    </p>
                    
                    <div className={styles.info__grid}>
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                className={styles.info__card}
                                whileHover={{ y: -5 }}
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
                                <div className={styles.info__actions}>
                                    <a 
                                        href={info.link} 
                                        className={styles.action__link}
                                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fas fa-external-link-alt"></i>
                                    </a>
                                    <button 
                                        className={styles.copy__button}
                                        onClick={() => handleCopy(info.copyText)}
                                        data-cursor="hover"
                                    >
                                        <i className="fas fa-copy"></i>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className={styles.social__section}>
                        <h3 className={styles.social__title}>Follow My Journey</h3>
                        <div className={styles.social__links}>
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    className={styles.social__link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    data-cursor="hover"
                                >
                                    <i className={social.icon}></i>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Availability Status */}
                    <div className={styles.availability}>
                        <div className={styles.status__indicator}></div>
                        <div className={styles.status__text}>
                            <span className={styles.status__label}>Current Status:</span>
                            <span className={styles.status__value}>Available for projects</span>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div 
                    className={styles.contact__form__wrapper}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.form__header}>
                        <h2 className={styles.form__title}>Send a Message</h2>
                        <p className={styles.form__subtitle}>
                            Fill out the form below and I'll get back to you as soon as possible.
                        </p>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className={styles.contact__form}>
                        <div className={styles.form__group}>

                            {/* name */}
                            <div className={styles.input__wrapper}>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={styles.form__input}
                                    placeholder=" "
                                    data-cursor="hover"
                                />
                                <label htmlFor="name" className={styles.form__label}>
                                    Your Name *
                                </label>
                            </div>
                        </div>
                        
                        {/* email */}
                        <div className={styles.form__group}>
                            <div className={styles.input__wrapper}>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={styles.form__input}
                                    placeholder=" "
                                    data-cursor="hover"
                                />
                                <label htmlFor="email" className={styles.form__label}>
                                    Email Address *
                                </label>
                            </div>
                        </div>
                        
                        {/* subject */}
                        <div className={styles.form__group}>
                            <div className={styles.input__wrapper}>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={styles.form__input}
                                    placeholder=" "
                                    data-cursor="hover"
                                />
                                <label htmlFor="subject" className={styles.form__label}>
                                    Subject (Optional)
                                </label>
                            </div>
                        </div>
                        
                        <div className={styles.form__group}>
                            <div className={styles.textarea__wrapper}>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className={styles.form__textarea}
                                    placeholder=" "
                                    rows="5"
                                    data-cursor="hover"
                                ></textarea>
                                <label htmlFor="message" className={styles.form__label}>
                                    Your Message *
                                </label>
                            </div>
                        </div>

                        {/* Status Messages */}
                        {success && (
                            <motion.div 
                                className={styles.success__message}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <i className="fas fa-check-circle"></i>
                                Message sent successfully! I'll get back to you soon.
                            </motion.div>
                        )}
                        
                        {error && (
                            <motion.div 
                                className={styles.error__message}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <i className="fas fa-exclamation-circle"></i>
                                {error}
                            </motion.div>
                        )}

                        <motion.button
                            type="submit"
                            className={styles.submit__btn}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={loading}
                            data-cursor="hover"
                        >
                            {loading ? (
                                <>
                                    <span className={styles.spinner}></span>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <i className="fas fa-paper-plane"></i>
                                </>
                            )}
                        </motion.button>

                        <p className={styles.form__note}>
                            <i className="fas fa-shield-alt"></i>
                            Your information is safe with me. I don't share your data with anyone.
                        </p>
                    </form>
                </motion.div>
            </div>

            {/* FAQ Section */}
            <motion.div 
                className={styles.faq__section}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className={styles.faq__title}>Frequently Asked Questions</h2>
                <div className={styles.faq__grid}>
                    <div className={styles.faq__item}>
                        <h3>What's your typical response time?</h3>
                        <p>I usually respond within 24 hours on weekdays. For urgent matters, please mention it in your message.</p>
                    </div>
                    <div className={styles.faq__item}>
                        <h3>Do you work with international clients?</h3>
                        <p>Absolutely! I'm open to working with clients from anywhere in the world. I'm comfortable with remote collaboration.</p>
                    </div>
                    <div className={styles.faq__item}>
                        <h3>What types of projects do you take on?</h3>
                        <p>Web development, fullstack applications, portfolio websites, and custom solutions. Feel free to pitch any idea!</p>
                    </div>
                    <div className={styles.faq__item}>
                        <h3>What's your preferred method of communication?</h3>
                        <p>Email is best for initial contact. For ongoing projects, I'm flexible with email, Slack, or video calls.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;