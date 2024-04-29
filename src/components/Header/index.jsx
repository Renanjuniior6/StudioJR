import { CalendarDots } from "@phosphor-icons/react"
import React from "react"

import Logo from "../../../Images/Logo.webp"
import { Button } from "../Button"
import { Container, ImgLogo } from "./styles"

export function Header() {
  return (
    <Container>
      <ImgLogo src={Logo} />
      <Button>
        Agende seu horário <CalendarDots size={20} />
      </Button>
    </Container>
  )
}
