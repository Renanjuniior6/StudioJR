import { X } from "@phosphor-icons/react"
import "bootstrap"
import React from "react"

import { Container, Box, QuestionBox, AnswerBox, Title } from "./styles"
import "./styles.scss"

export function MainQuestions() {
  return (
    <Container>
      <Title>Perguntas Frequentes</Title>
      <hr />
      <Box>
        <QuestionBox
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#premium"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          O que é o Alisamento Premium? <X size={20} />
        </QuestionBox>
        <AnswerBox className="collapse" id="premium">
          O alisamento premium é um serviço de transmissão online que oferece
          uma ampla variedade de séries, filmes e documentários premiados em
          milhares de aparelhos conectados à internet.
        </AnswerBox>
      </Box>

      <Box>
        <QuestionBox
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dye"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          O que é Pigmentação? <X size={20} />
        </QuestionBox>
        <AnswerBox className="collapse" id="dye">
          O alisamento premium é um serviço de transmissão online que oferece
          uma ampla variedade de séries, filmes e documentários premiados em
          milhares de aparelhos conectados à internet.
        </AnswerBox>
      </Box>

      <Box>
        <QuestionBox
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#hydration"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          O que é Hidratação? <X size={20} />
        </QuestionBox>
        <AnswerBox className="collapse" id="hydration">
          O alisamento premium é um serviço de transmissão online que oferece
          uma ampla variedade de séries, filmes e documentários premiados em
          milhares de aparelhos conectados à internet.
        </AnswerBox>
      </Box>
    </Container>
  )
}
