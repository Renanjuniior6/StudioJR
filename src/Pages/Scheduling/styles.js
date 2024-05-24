import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 0.625rem;

  button {
    font-size: 1rem;
  }

  .Datebox {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;

    label {
      margin-left: 0.3125rem;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  padding: 1.25rem;
  width: 88%;
  border-radius: 0.625rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  option {
    font-size: 0.625rem;
  }
`
