import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.1875rem;
  align-items: center;
  margin: auto;
  padding: 1.5rem 0 1.5rem 0;
  width: 22.875rem;
  background-color: rgb(245, 245, 245);
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;

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
