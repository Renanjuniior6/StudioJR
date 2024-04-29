import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const TextBox = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  padding: 40px;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 900;
    color: rgb(1, 140, 171);
    width: 20rem;
  }
`
export const Text = styled.p`
  margin: 1.25rem 0 1.25rem 0;
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.75rem;
  max-width: 20rem;
`

export const Adress = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.25rem;
`

export const ImgBox = styled.div`
  margin: auto;
  img {
    width: 20rem;
    height: 24rem;
  }
`
