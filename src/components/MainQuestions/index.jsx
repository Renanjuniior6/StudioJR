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
          O alisamento premium é um procedimento químico que tem como objetivo
          deixar os cabelos mais lisos e sem frizz. Existem diferentes tipos de
          alisamento capilar, como o alisamento com formol, entre outros. O
          alisamento premium pode ser feito em todos os tipos de cabelo, desde
          os lisos até os mais crespos.
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
          O que é Tintura? <X size={20} />
        </QuestionBox>
        <AnswerBox className="collapse" id="dye">
          O processo de pintar o cabelo é conhecido como tintura. Algumas dicas
          incluem lavar o cabelo antes da tintura para permitir que os óleos
          naturais do cabelo sejam produzidos, o que ajuda a tintura a penetrar
          com mais facilidade.
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
          A hidratação capilar é um tratamento estético em que máscaras de
          hidratantes são aplicadas nos cabelos para a reposição de água nos
          fios, necessária para continuarem resistentes, maleáveis e brilhantes.
        </AnswerBox>
      </Box>
    </Container>
  )
}
