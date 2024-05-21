import React from "react"

import Logo from "../../../Images/General/Logo-2-preview.png"
import { Container, ImgLogo } from "./styles"

export function Header() {
  return (
    <Container>
      <ImgLogo src={Logo} alt="Logo" />
    </Container>
  )
}
