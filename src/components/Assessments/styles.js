import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
  width: 22rem;
  margin: auto;

  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
  }
  hr {
    margin: auto;
    width: 50%;
    border: 1px solid #000;
    margin-bottom: 1.875rem;
  }
`
export const AssessmentsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background-color: #231f20;
  color: #fff;
  padding: 0.625rem;
  width: 100%;
  border-top-left-radius: 0.625rem;
  border-top-right-radius: 0.625rem;
  border-bottom-left-radius: 0.625rem;
  border-bottom-right-radius: 0.625rem;

  b {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: 100%;
  }
`
export const StarGroup = styled.div`
  display: flex;
  gap: 0.625rem;
  justify-content: center;
`
