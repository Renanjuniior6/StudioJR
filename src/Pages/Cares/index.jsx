import React from "react"

import Img from "../../../Images/Hair/cares.jpg"
import { Container } from "./styles"

export function Cares() {
  return (
    <Container>
      <img src={Img} alt="Imagem-de-cabelo-no-lavatório" />
      <h1>Cuidados com o seu cabelo</h1>
      <hr />
      <p>
        Manter os cuidados com o cabelo é tão importante quanto hidratar o corpo
        e o rosto. A higiene correta traz diversos benefícios, como brilho,
        maciez, maleabilidade, saúde e força aos fios. No entanto, para ter
        cabelos bonitos e saudáveis, os cuidados precisam ser diários. O uso de
        produtos adequados, a ordem correta de tratamentos, o cronograma capilar
        bem pensado e a frequência correta de lavagem compõem uma rotina
        perfeita para as madeixas.
      </p>
    </Container>
  )
}
