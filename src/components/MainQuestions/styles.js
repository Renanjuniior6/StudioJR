import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    margin: auto;
    width: 50%;
    border: 1px solid #000;
    margin-bottom: 1.875rem;
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
  font-weight: 600;
`

export const Box = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.1875rem;
  width: 85%;
  margin: auto;
  margin-bottom: 0.1875rem;
`

export const QuestionBox = styled.button`
  border: none;
  background-color: #272727;
  color: #fff;
  padding: 0.625rem;
  text-align: center;
  position: relative;
  border-radius: 0.625rem;

  svg {
    position: absolute;
    right: 0.625rem;
    transform: rotate(45deg);
  }
`

export const AnswerBox = styled.div`
  background-color: #272727;
  color: #fff;
  padding: 0.625rem;
  border-bottom-right-radius: 0.625rem;
  border-bottom-left-radius: 0.625rem;
`
