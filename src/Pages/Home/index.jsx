import { WhatsappLogo } from "@phosphor-icons/react"
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
export function Home() {
  // window.onscroll = () => {
  //   if (window.scrollY > 400) {
  //   }
  // }

  return (
    <Container>
      <a
        href="https://wa.me/5521968697906"
        target="_blank"
        className="zap-box"
        rel="noreferrer"
      >
        <WhatsappLogo style={{ color: "#000" }} size={45} />
      </a>

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
