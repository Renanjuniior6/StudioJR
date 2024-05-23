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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste esse
        eligendi, debitis rem reiciendis, sed repellendus dolore nulla saepe
        alias quia unde voluptate officiis ipsam velit accusantium porro fugit
        incidunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Perferendis enim totam voluptatum sint vel aperiam, itaque magni aliquam
        alias facere, cum labore ex accusamus reprehenderit perspiciatis! Sint
        ea repudiandae aliquam.
      </p>
    </Container>
  )
}
