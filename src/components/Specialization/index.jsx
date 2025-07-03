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
          <h3>Alisamento Premium</h3>
          <p>
            Utilização dos melhores produtos do mercado e tratamento especial no
            seu cabelo.
          </p>
        </InfoText>
        <InfoText>
          <h3>Terapia capilar</h3>
          <p>
            Análise das condições dos fios e do couro cabeludo indentificando
            problemas e indicação de tratamento adequado.
          </p>
        </InfoText>
        <InfoText>
          <h3>Pigmentação especializada</h3>
          <p>
            Especialização em pigmentação com as melhores técnicas e tendências
            do mercado.
          </p>
        </InfoText>
        <InfoText>
          <h3>Cortes dedicados</h3>
          <p>
            Cortes de cabelo usando técnicas avançadas de alinhamento e modelos
            de acordo com as condições do cliente.{" "}
          </p>
        </InfoText>
        <InfoText>
          <h3>Sobrancelhas</h3>
          <p>
            Desing de sobrancelhas e pigmentação de renna com alinhamento ao
            rosto.
          </p>
        </InfoText>
        <InfoText>
          <h3>Soltura de cachos</h3>
          <p>
            Soltura de cachos com os melhores produtos do mercado e atenção
            especial aos seu cabelos.
          </p>
        </InfoText>
      </InfoGroup>
    </Container>
  )
}
