import { CalendarDots } from "@phosphor-icons/react"
import React from "react"

import Logo from "../../../Images/General/img-hair.png"
import { Button } from "../Button"
import { Container, ImgLogo } from "./styles"

export function Header() {
  return (
    <Container>
      <ImgLogo src={Logo} alt="Logo" />
      <Button>
        Agende seu horário <CalendarDots size={20} />
      </Button>
    </Container>
  )
}
