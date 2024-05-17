import { ArrowRight } from "@phosphor-icons/react"
import React from "react"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import cp1 from "../../../Images/Hair/comparison-01.jpg"
import cp2 from "../../../Images/Hair/comparison-02.jpg"
import cp3 from "../../../Images/Hair/comparison-03.jpg"
import hr2 from "../../../Images/Hair/hair-01.jpg"
import hr1 from "../../../Images/Hair/hair-02.jpg"
import hr3 from "../../../Images/Hair/hair-03.jpg"
import hr4 from "../../../Images/Hair/hair-04.jpg"
import hr5 from "../../../Images/Hair/hair-06.jpg"
import { Container, Box, Title } from "./styles"
import "swiper/css"
import "swiper/css/pagination"

export function Results() {
  return (
    <Container>
      <Title>
        Veja nossos resultados{" "}
        <ArrowRight
          weight="bold"
          size={"1.5625rem"}
          style={{ marginLeft: "0.625rem" }}
        />
      </Title>
      <Swiper
        slidesPerView={1}
        spaceBetween={"3.75rem"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box>
            <img src={hr1} alt="Exemplo de cabelo" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Box>
            <img src={hr2} alt="Exemplo de cabelo" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Box>
            <img src={hr3} alt="Exemplo de cabelo" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Box>
            <img src={hr4} alt="Exemplo de cabelo" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Box>
            <img src={hr5} alt="Exemplo de cabelo" />
          </Box>
        </SwiperSlide>
      </Swiper>

      <Title>
        Antes e Depois{" "}
        <ArrowRight
          weight="bold"
          size={"1.5625rem"}
          style={{ marginLeft: "0.625rem" }}
        />
      </Title>

      <Swiper
        slidesPerView={1}
        spaceBetween={"3.75rem"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box>
            <img className="swiper-2-img" src={cp1} alt="Exemplo de cabelo" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Box>
            <img className="swiper-2-img" src={cp2} alt="Exemplo de cabelo" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Box>
            <img className="swiper-2-img" src={cp3} alt="Exemplo de cabelo" />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}
