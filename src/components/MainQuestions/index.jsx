import { X } from "@phosphor-icons/react"
import React, { useState } from "react"

import { Container, Box, QuestionBox, AnswerBox, Title } from "./styles"

export function MainQuestions() {
  const [active, setActive] = useState(false)

  const showInfo = () => {
    if (active) {
      setActive(false)
    } else {
      setActive(true)
    }
  }

  return (
    <Container>
      <Title>Perguntas Frequentes</Title>
      <hr />
      <Box>
        <QuestionBox onClick={() => showInfo()}>
          O que é o Alisamento Premium? <X size={20} />
        </QuestionBox>
        <AnswerBox active={active}>
          O alisamento premium é um serviço de transmissão online que oferece
          uma ampla variedade de séries, filmes e documentários premiados em
          milhares de aparelhos conectados à internet.
        </AnswerBox>
      </Box>
      <Box>
        <QuestionBox onClick={() => showInfo()}>
          O que é o Alisamento Premium? <X size={20} />
        </QuestionBox>
        <AnswerBox active={active}>
          O alisamento premium é um serviço de transmissão online que oferece
          uma ampla variedade de séries, filmes e documentários premiados em
          milhares de aparelhos conectados à internet.
        </AnswerBox>
      </Box>
    </Container>
  )
}
