import React from "react"

import {
  Introduction,
  Header,
  Specialization,
  About,
  AboutSpace,
  Assessments,
  AddicionalInformation,
  Footer,
  Products,
  Results,
  Services,
  Certificates,
  MainQuestions,
} from "../../components"
import { Container } from "./styles"
function App() {
  return (
    <Container>
      <header id="home">
        <Header />
      </header>
      <main>
        <section>
          <Introduction />
        </section>
        <section id="specialization">
          <Specialization />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="results">
          <Results />
        </section>
        <section id="about-space">
          <AboutSpace />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="certificates">
          <Certificates />
        </section>
        <section id="assessments">
          <Assessments />
        </section>
        <section id="main-questions">
          <MainQuestions />
        </section>
        <section id="addicional-information">
          <AddicionalInformation />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </Container>
  )
}

export default App
