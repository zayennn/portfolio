import React from 'react'
import Hero from '../Hero/hero'
import About from '../../components/About/About'
import Education from '../../components/Education/Education'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home__container}>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
    </div>
  )
}

export default Home