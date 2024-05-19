import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const ClinicImg = styled.img`
  height: 11rem;
  width: 98%;
  object-fit: cover;
  margin: auto;
  border-top-left-radius: 0.625rem;
  border-top-right-radius: 0.625rem;
`
export const InfoGroup = styled.div`
  text-align: center;
  width: 98%;
  margin: auto;
  display: flex;
  gap: 2.1875rem;
  flex-direction: column;
  justify-content: center;
  background-color: #231f20;
  color: #fff;
  padding: 2.5rem 0 2.5rem 0;
  border-bottom-left-radius: 0.625rem;
  border-bottom-right-radius: 0.625rem;
`
export const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  text-align: center;
  margin: auto;
  max-width: 23rem;

  b {
    font-weight: 600;
  }
`
export const InfoText = styled.div`
  h3 {
    color: #f6ae2d;
    font-size: 1.25rem;
  }

  p {
    font-size: 0.875rem;
    margin: 0px 1.25rem 0 1.25rem;
  }
`
