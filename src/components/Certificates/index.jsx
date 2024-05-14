import React from "react"

import crt2 from "../../../Images/General/certificado-01.jpg"
import crt3 from "../../../Images/General/certificado-02.jpg"
import crt from "../../../Images/General/certificado.jpg"
import { Container, Box } from "./styles"

export function Certificates() {
  return (
    <Container>
      <h3>Certificados do Studio JR</h3>
      <Box>
        <img src={crt} /> <p>Certificado de alisamento</p>
      </Box>
      <Box>
        {" "}
        <img src={crt2} /> <p>Certificado de Pigmentação</p>
      </Box>
      <Box>
        {" "}
        <img src={crt3} /> <p>Certificado de Corte</p>
      </Box>
    </Container>
  )
}
