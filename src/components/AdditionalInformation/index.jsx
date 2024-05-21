import { Phone, MapPin, CalendarDots } from "@phosphor-icons/react"
import React from "react"

import Img from "../../../Images/Person/joyce-03.jpeg"
import { Button } from "../Button"
import { Container, Contact } from "./styles"

export function AddicionalInformation() {
  return (
    <Container>
      <img src={Img} alt="imagem-de-joyce" />
      <Contact>
        <h4>Localização e Contato</h4>
        <h3>Studio Joyce Rodrigues - JR</h3>
        <p>
          <MapPin size={32} />
          Rua Professor Souza Moreira, 20 - Inhoaíba, CG - RJ
        </p>
        <p>
          <Phone size={32} />
          +55 (21) 96869-7906
        </p>
      </Contact>
      <Button to={"/agendamento"} style={{ width: "80%" }}>
        Agende seu horário <CalendarDots size={22} />
      </Button>
    </Container>
  )
}
