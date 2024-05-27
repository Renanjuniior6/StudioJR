import { WhatsappLogo, ArrowCircleUp } from "@phosphor-icons/react"
import React, { useState } from "react"

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
import { Container, Links } from "./styles"
export function Home() {
  const [changeLink, setChangeLink] = useState(true)

  window.onscroll = () => {
    if (window.scrollY < 9100) {
      setChangeLink(true)
    } else {
      setChangeLink(false)
    }
  }

  return (
    <Container>
      <Links
        href="https://wa.me/5521968697906"
        target="_blank"
        rel="noreferrer"
      >
        <WhatsappLogo size={45} />
      </Links>

      <Links change={changeLink} href="#home">
        <ArrowCircleUp size={45} />
      </Links>

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
