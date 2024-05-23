import {
  InstagramLogo,
  WhatsappLogo,
  FacebookLogo,
  MapPin,
  CalendarDots,
} from "@phosphor-icons/react"
import React from "react"
import { Link } from "react-router-dom"

import Img from "../../../Images/Person/joyce-03.jpeg"
import { Button } from "../Button"
import { Container, Contact, SocialBox } from "./styles"

export function AddicionalInformation() {
  return (
    <Container>
      <img src={Img} alt="imagem-de-joyce" />
      <Contact>
        <h4>Localização e Contato</h4>
        <h3>Studio Joyce Rodrigues - JR</h3>
        <p>
          <MapPin size={32} />
          Rua Professor Souza Moreira, 20 - Inhoaíba, CG - RJ
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.68931890220165!2d-43.59573651057605!3d-22.912297397878753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be463df7ff9af%3A0x7ab14d10001477cf!2sR.%20Prof.%20Souza%20Moreira%2C%2099%20-%20Inhoa%C3%ADba%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2023059-540!5e0!3m2!1spt-BR!2sbr!4v1716382264051!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <h4>Redes sociais</h4>
        <SocialBox>
          <a
            href="https://www.instagram.com/studiojoycerodrigues2/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramLogo size={32} />
          </a>
          <a
            href="https://wa.me/5521968697906"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsappLogo size={32} />
          </a>
          <a
            href="https://www.facebook.com/joyce.rodrigues.9250"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookLogo size={32} />
          </a>
        </SocialBox>
      </Contact>
      <Link
        style={{ width: "80%", textDecoration: "none" }}
        to={"/agendamento"}
      >
        <Button>
          Agende seu horário <CalendarDots size={22} />
        </Button>
      </Link>
    </Container>
  )
}
