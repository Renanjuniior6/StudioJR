import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1.25rem;
  gap: 1.25rem;

  h2 {
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #f6ae2d;
    text-align: center;
  }
`
export const AssessmentsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background-color: rgb(245, 245, 245);
  padding: 0.625rem;
  width: 100%;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;

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
