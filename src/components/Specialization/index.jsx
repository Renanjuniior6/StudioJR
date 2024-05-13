import React from "react"

import Clinic from "../../../Images/General/consultorio-01.webp"
import { Container, ClinicImg, InfoGroup, Title, InfoText } from "./styles"

export function Specialization() {
  return (
    <Container>
      <ClinicImg src={Clinic} alt="imagem-do-salão" />

      <InfoGroup>
        <Title>
          Especialidades de <b>Joyce Rodrigues</b>
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
        <InfoText>
          <h3>Tratamento Discreto</h3>
          <p>
            Especialização em opções estéticas para correção de forma discreta e
            confortável.
          </p>
        </InfoText>
        <InfoText>
          <h3>Cuidado Infantil</h3>
          <p>Intervenções precoces para prevenir problemas ortodônticos.</p>
        </InfoText>
        <InfoText>
          <h3>Harmonia Maxilar</h3>
          <p>
            Abordagem que visa precisamente corrigir desarmonias na posição dos
            maxilares.
          </p>
        </InfoText>
        <InfoText>
          <h3>Integração Cirúrgica</h3>
          <p>
            Colaboração com cirurgiões bucomaxilofaciais para casos cirúrgicos.
          </p>
        </InfoText>
      </InfoGroup>
    </Container>
  )
}
