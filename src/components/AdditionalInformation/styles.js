import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 23rem;
    height: 17rem;
    margin-bottom: 0.75rem;
    border-radius: 0.625rem;
  }

  button {
    width: 80%;
  }
`
export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.25rem;

  h4 {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 300;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
  }

  p {
    font-size: 0.75rem;
    line-height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
