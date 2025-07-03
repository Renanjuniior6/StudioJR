import { Star } from "@phosphor-icons/react"
import React from "react"

import { Container, AssessmentsGroup, StarGroup } from "./styles"

export function Assessments() {
  return (
    <Container>
      <h2>VEJA NOSSAS AVALIAÇÕES!</h2>
      <hr />
      <AssessmentsGroup>
        <b>Jaqueline Barbosa</b>
        <p>
          "Simplesmente maravilhoso! Fui muito bem atendida desde a recepção até
          o final. Meu cabelo ficou incrível, e o ambiente é super acolhedor.
          Voltarei com certeza!"
        </p>
        <StarGroup>
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
        </StarGroup>
      </AssessmentsGroup>
      <AssessmentsGroup>
        <b>Aline Santos</b>
        <p>
          "A Joyce é muito competente e atenciososa. Fiz o cabelo e a
          sobrancelha, e amei o resultado! O salão é limpo, organizado e
          transmite confiança."
        </p>
        <StarGroup>
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
        </StarGroup>
      </AssessmentsGroup>
      <AssessmentsGroup>
        <b>Letícia Alves</b>
        <p>
          "A experiência foi excelente! Me senti cuidada em cada detalhe. O
          corte e hidratação deixaram meu cabelo leve e brilhante. Super
          recomendo!"
        </p>
        <StarGroup>
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
          <Star weight="fill" size={25} style={{ color: "yellow" }} />
        </StarGroup>
      </AssessmentsGroup>
    </Container>
  )
}
