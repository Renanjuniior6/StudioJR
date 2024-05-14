import React from "react"

import { Container, Box, QuestionBox, AnswerBox } from "./styles"

export function MainQuestions() {
  return (
    <Container>
      <Box>
        <QuestionBox>O que é o Alisamento Premium?</QuestionBox>
        <AnswerBox>
          O alisamento premium é um serviço de transmissão online que oferece
          uma ampla variedade de séries, filmes e documentários premiados em
          milhares de aparelhos conectados à internet.
        </AnswerBox>
      </Box>
    </Container>
  )
}
