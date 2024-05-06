import { SealCheck } from "@phosphor-icons/react"
import React from "react"

import Saloon from "../../../Images/consultorio-02.webp"
import { Container, Box, TextGroup, SpaceImg } from "./styles"

export function AboutSpace() {
  return (
    <Container>
      <h3>Conheça melhor o Studio JR</h3>
      <Box>
        <SealCheck size={90} style={{ color: "#f6ae2d" }} />
        <TextGroup>
          <b>Ambiente Acolhedor</b>
          <p>
            Projetada para proporcionar aos pacientes uma atmosfera acolhedora e
            reconfortante.
          </p>
        </TextGroup>
      </Box>
      <Box>
        <SealCheck size={90} style={{ color: "#f6ae2d" }} />
        <TextGroup>
          <b>Tecnologia de Ponta</b>
          <p>
            Equipada com tecnologia de última geração, para melhor atender
            nossos pacientes.
          </p>
        </TextGroup>
      </Box>
      <Box>
        <SealCheck size={90} style={{ color: "#f6ae2d" }} />
        <TextGroup>
          <b>Abordagem Personalizada</b>
          <p>
            O plano de tratamento é cuidadosamente adaptado às necessidades
            individuais.
          </p>
        </TextGroup>
      </Box>
      <Box>
        <SealCheck size={90} style={{ color: "#f6ae2d" }} />
        <TextGroup>
          <b>Pós-Tratamento Excepcional</b>
          <p>
            A Dra. Lauren está sempre disponível para responder a dúvidas e
            fornecer orientações.
          </p>
        </TextGroup>
      </Box>
      <Box>
        <SealCheck size={90} style={{ color: "#f6ae2d" }} />
        <TextGroup>
          <b>Agendamento Flexível</b>
          <p>
            Oferecemos flexibilidade para garantir que nossos horários atendam
            às suas necessidades.
          </p>
        </TextGroup>
      </Box>
      <SpaceImg src={Saloon} />
    </Container>
  )
}
