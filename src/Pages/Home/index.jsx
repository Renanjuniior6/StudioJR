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
        <section>
          <Specialization />
        </section>
        <section id="about">
          <About />
        </section>
        <section>
          <Results />
        </section>
        <section>
          <AboutSpace />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <Products />
        </section>
        <section>
          <Certificates />
        </section>
        <section>
          <Assessments />
        </section>
        <section>
          <MainQuestions />
        </section>
        <section>
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
