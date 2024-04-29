import React from "react"

import Image from "../../../Images/lauren-01.webp"
import { Container, TextBox, ImgBox, Text, Adress } from "./styles"

export function Introduction() {
  return (
    <Container>
      <TextBox>
        <h1>SORRIA COM CONFIANÇA</h1>
        <Text>Sua jornada para um sorriso perfeito começa por aqui!</Text>
        <Adress>
          DRA LAUREN MITCHELL - SÃO JOSÉ DOS CAMPOS - SP CRO 00000 – SP
        </Adress>
      </TextBox>
      <ImgBox>
        <img src={Image} />
      </ImgBox>
    </Container>
  )
}
