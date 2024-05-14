import React from "react"

import hair3 from "../../../Images/Hair/hair-06.jpg"
import eyebrow from "../../../Images/Hair/micropigmentacao.webp"
import hair1 from "../../../Images/Hair/styles-hair-01.jpg"
import hair2 from "../../../Images/Hair/styles-hair-02.jpg"
import { Container, Box, Title } from "./styles"

export function Services() {
  return (
    <Container>
      <Title> Veja exemplos de nossas especialidades</Title>
      <hr />
      <Box>
        <img src={hair1} alt="imagem-de-cabelo" />
        <span>Alisamento Premium</span>
      </Box>
      <Box>
        <img src={hair2} alt="imagem-de-cabelo" />
        <span>Mechas</span>
      </Box>
      <Box>
        <img src={hair3} alt="imagem-de-cabelo" />
        <span>Cortes</span>
      </Box>
      <Box>
        <img src={eyebrow} alt="imagem-de-sobrancelha" />
        <span>Sobrancelha</span>
      </Box>
    </Container>
  )
}
