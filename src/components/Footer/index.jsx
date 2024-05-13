import React from "react"

import Logo from "../../../Images/General/Logo.webp"
import { Container } from "./styles"

export function Footer() {
  return (
    <Container>
      <img src={Logo} alt="Logo-do-rodapé" />
      <p>
        @ 2024 Dra.Lauren Mitchel - Todos os direitos reservados. Desenvolvido
        por Renan Junior
      </p>
    </Container>
  )
}
