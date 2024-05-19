import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.1875rem;
  align-items: center;
  margin: auto;
  padding: 1.5rem 0 1.5rem 0;
  width: 98%;
  background-color: #231f20;
  color: #fff;
  border-top-left-radius: 0.625rem;
  border-top-right-radius: 0.625rem;
  border-bottom-left-radius: 0.625rem;
  border-bottom-right-radius: 0.625rem;

  h3 {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 300;
    text-align: center;
  }
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  width: 18.75rem;

  img {
    width: 100%;
    border-radius: 0.625rem;
  }

  p {
    font-weight: 600;
  }
`
