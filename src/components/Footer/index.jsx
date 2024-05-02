import React from "react"

import Lgo from "../../../Images/Logo.webp"
import { Container } from "./styles"

export function Footer() {
  return (
    <Container>
      <img src={Lgo} />
      <p>
        @ 2024 Dra.Lauren Mitchel - Todos os direitos reservados. Desenvolvido
        por Renan Junior
      </p>
    </Container>
  )
}
