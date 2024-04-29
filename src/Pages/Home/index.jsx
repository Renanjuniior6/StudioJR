import React from "react"

import { Introduction, Header, Specialization } from "../../components"
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
      </main>
    </Container>
  )
}

export default App
