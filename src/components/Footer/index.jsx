import React from "react"

import Logo from "../../../Images/General/Logo-2-preview.png"
import { Container } from "./styles"

export function Footer() {
  return (
    <Container>
      <img src={Logo} alt="Logo-do-rodapé" />
      <p>
        @ 2024 Joyce Rodrigues - Todos os direitos reservados. Desenvolvido por
        Renan Junior
      </p>
    </Container>
  )
}
