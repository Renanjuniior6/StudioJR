import React from "react"

import Logo from "../../../Images/General/Logo-2-preview.png"
import { Navbar } from "../Navbar"
import { Container, ImgLogo } from "./styles"

export function Header() {
  return (
    <Container>
      <ImgLogo src={Logo} alt="Logo" />
      <Navbar />
    </Container>
  )
}
