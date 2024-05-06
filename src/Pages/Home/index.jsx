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
} from "../../components"
import { Container } from "./styles"
function App() {
  return (
    <Container>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Introduction />
        </section>
        <section>
          <Specialization />
        </section>
        <section>
          <About />
        </section>
        <section>
          <AboutSpace />
        </section>
        <section>
          <Products />
        </section>
        <section>
          <Assessments />
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
