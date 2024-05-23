import styled from "styled-components"

export const Container = styled.div`
  padding-top: 5.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  img {
    width: 90%;
    height: 21.875rem;
    object-fit: cover;
    border-radius: 0.625rem;
  }

  h1 {
    text-align: center;
    font-size: 1.5625rem;
    margin-bottom: 0;
  }

  hr {
    margin: auto;
    width: 50%;
    border: 1px solid #000;
  }

  p {
    text-align: center;
    width: 90%;
  }
`
