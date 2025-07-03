import styled from "styled-components"

export const Container = styled.div`
  hr {
    margin: auto;
    width: 50%;
    border: 1px solid #000;
    margin-bottom: 1.875rem;
  }
  .mySwiper {
    height: 21.875rem;
    width: 21.875rem;

    img {
      width: 85%;
      height: 16rem;
    }
    h3 {
      position: absolute;
      bottom: 1.25rem;
    }

    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal {
      bottom: var(--swiper-pagination-bottom, -7px);
    }
  }
`
export const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1.25rem;
  display: flex;
  justify-content: center;
  font-weight: 600;
`

export const BoxProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
