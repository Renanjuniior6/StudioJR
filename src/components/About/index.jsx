import { CalendarDots } from "@phosphor-icons/react"
import React from "react"

import PersonImg from "../../../Images/lauren-02.webp"
import { Button } from "../Button"
import { Container, Text, Content, Title, BoldText } from "./styles"

export function About() {
  return (
    <Container>
      <img src={PersonImg} />
      <Text>
        <Title>
          Sobre a <b>Dra. Lauren Mitchell</b>
        </Title>
        <p>CRO 00000 – SP</p>
        <Content>
          Em um mundo onde cada sorriso é único, a Dra. Lauren Mitchell traz sua
          paixão e experiência para moldar sorrisos brilhantes e confiantes. Com
          mais de 10 anos de dedicação à Ortodontia, ela se destaca como uma
          especialista comprometida em transformar não apenas dentes, mas vidas.
        </Content>
        <BoldText>+3000 Sorrisos transformados!</BoldText>
      </Text>
      <Button>
        Agende seu horário <CalendarDots size={23} />
      </Button>
    </Container>
  )
}
