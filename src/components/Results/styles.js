import styled from "styled-components"

export const Container = styled.div`
  width: 22rem;
  margin: auto;

  .mySwiper {
    height: 100%;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 0.625rem;
    }

    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal {
      bottom: var(--swiper-pagination-bottom, 8px);
    }

    .swiper-2-img {
      height: 22rem;
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
  align-items: center;
  margin-top: 1.25rem;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
