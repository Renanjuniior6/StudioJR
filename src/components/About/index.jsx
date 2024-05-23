import { CalendarDots } from "@phosphor-icons/react"
import React from "react"
import { Link } from "react-router-dom"

import PersonImg from "../../../Images/Person/joyce-01.jpeg"
import { Button } from "../Button"
import { Container, Text, Content, Title, BoldText } from "./styles"

export function About() {
  return (
    <Container>
      <img src={PersonImg} alt="imagem-joyce" />
      <Text>
        <Title>
          Sobre a <b>Joyce Rodrigues</b>
        </Title>
        <p>CEP 23059540 – RJ</p>
        <Content>
          Em um mundo onde cada sorriso é único, a Dra. Lauren Mitchell traz sua
          paixão e experiência para moldar sorrisos brilhantes e confiantes. Com
          mais de 10 anos de dedicação à Ortodontia, ela se destaca como uma
          especialista comprometida em transformar não apenas dentes, mas vidas.
        </Content>
        <BoldText>+3000 Cabelos transformados!</BoldText>
      </Text>
      <Link
        style={{ width: "100%", textDecoration: "none" }}
        to={"/agendamento"}
      >
        <Button>
          Agende seu horário <CalendarDots size={23} />
        </Button>
      </Link>
    </Container>
  )
}
