import React from "react"

import {
  Introduction,
  Header,
  Specialization,
  About,
  AboutSpace,
  Assessments,
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
          <Assessments />
        </section>
      </main>
    </Container>
  )
}

export default App
