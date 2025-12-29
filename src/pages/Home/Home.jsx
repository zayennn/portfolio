import React from 'react'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import Hero from '../Hero/hero'
import About from '../../components/About/About'
import Education from '../../components/Education/Education'
import styles from './Home.module.css'

const Home = () => {
  return (
    <PageWrapper>
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
    </PageWrapper>
  )
}

export default Home