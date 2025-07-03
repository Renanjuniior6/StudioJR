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
        <Content>
          Natural do Rio de Janeiro formada pela Academia Hair School
          Internacional, como cabeleireira Técnica Internacional, com
          especialidade em Transformação Química (lisos e ondulantes),
          Colorimetria, Cosmetologia e Terapeuta Capilar. O maior diferencial do
          Studio de Joyce Rodrigues é a acessibilidade à mulher negra,
          oferecendo tratamentos especializados em transformação química (lisos
          e ondulantes), respeitando a performance própria do fio e atendendo às
          necessidades da cliente. Iniciei minha jornada como cabeleireira com
          apenas 16 anos, através de uma oportunidade que me foi dada. A partir
          de então, busquei me especializar e assim conquistei minha formação,
          especialmente, com transformação química, área em que mais me destaco
          e sou reconhecida.
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
