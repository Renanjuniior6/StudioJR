import React from "react"

import Image from "../../../Images/joyce-01.jpeg"
import { Container, TextBox, ImgBox, Text, Adress } from "./styles"

export function Introduction() {
  return (
    <Container>
      <TextBox>
        <h1>
          VENHA FAZER SEU ALISAMENTO PREMIUM NA <b>JR</b>
        </h1>
        <Text>Sua jornada para um cabelo perfeito começa por aqui!</Text>
        <Adress>
          {" "}
          ST JOYCE RODRIGUES - CAMPO GRANDE - RJ CEP 23059-540 – RJ
        </Adress>
      </TextBox>
      <ImgBox>
        <img src={Image} />
      </ImgBox>
    </Container>
  )
}
