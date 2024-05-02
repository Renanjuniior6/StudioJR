import { Phone, MapPin, CalendarDots } from "@phosphor-icons/react"
import React from "react"

import Img from "../../../Images/lauren-03.webp"
import { Button } from "../Button"
import { Container, Contact } from "./styles"

export function AddicionalInformation() {
  return (
    <Container>
      <img src={Img} />
      <Contact>
        <h4>Localização e Contato</h4>
        <h3>Consultório Odontológico Dra. Lauren Mitchell</h3>
        <p>
          <MapPin size={32} />
          Avenida da Saúde, 456 - Jardim das Indústrias, SJC - SP
        </p>
        <p>
          <Phone size={32} />
          +55 (12) 0000-0000 | +55 (12) 90000-0000
        </p>
      </Contact>
      <Button>
        Agende seu horário <CalendarDots size={22} />
      </Button>
    </Container>
  )
}
