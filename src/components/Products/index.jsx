import React from "react"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import prd1 from "../../../Images/produtos/prd-1.webp"
import prd2 from "../../../Images/produtos/prd-2.webp"
import prd3 from "../../../Images/produtos/prd-3.webp"
import prd4 from "../../../Images/produtos/prd-4.webp"
import prd5 from "../../../Images/produtos/prd-5.jpeg"
import { Container, BoxProduct, Title } from "./styles"

import "swiper/css"
import "swiper/css/pagination"

export function Products() {
  return (
    <Container>
      <Title>CONHEÇA NOSSOS PRODUTOS</Title>
      <hr />
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
          <BoxProduct>
            <img src={prd1} alt="Imagem do produto" />
            <h3>Produto X</h3>
          </BoxProduct>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <BoxProduct>
            <img src={prd2} alt="Imagem do produto" />
            <h3>Produto X</h3>
          </BoxProduct>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <BoxProduct>
            <img src={prd3} alt="Imagem do produto" />
            <h3>Produto X</h3>
          </BoxProduct>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <BoxProduct>
            <img src={prd4} alt="Imagem do produto" />
            <h3>Produto X</h3>
          </BoxProduct>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <BoxProduct>
            <img src={prd5} alt="Imagem do produto" />
            <h3>Produto X</h3>
          </BoxProduct>
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}
