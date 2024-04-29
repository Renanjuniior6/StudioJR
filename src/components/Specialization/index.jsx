import React from "react"

import Clinic from "../../../Images/consultorio-01.webp"
import { Container, ClinicImg, InfoGroup, Title, InfoText } from "./styles"

export function Specialization() {
  return (
    <Container>
      <ClinicImg src={Clinic} />

      <InfoGroup>
        <Title>
          Especialidades da <b>Dra. Lauren Mitchell</b>
        </Title>
        <InfoText>
          <h3>Inovação digital</h3>
          <p>
            Utilização de tecnologias avançadas para criar planos de tratamento
            personalizados.
          </p>
        </InfoText>
        <InfoText>
          <h3>Ortodontia Preventiva</h3>
          <p>Intervenções precoces para prevenir problemas ortodônticos.</p>
        </InfoText>
      </InfoGroup>
    </Container>
  )
}
