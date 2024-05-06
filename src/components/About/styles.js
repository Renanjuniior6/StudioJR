import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 22.875rem;

  img {
    width: 20rem;
    height: 27rem;
    border-radius: 1.5rem;
  }

  button {
    width: 85%;
  }
`
export const Text = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 1.875rem 0 0.9375rem 0;
`
export const Title = styled.h3`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 300;

  b {
    font-weight: 600;
  }
`
export const Content = styled.p`
  width: 20rem;
  font-size: 0.875rem;
`
export const BoldText = styled.b`
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #f6ae2d;
`
