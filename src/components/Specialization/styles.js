import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const ClinicImg = styled.img`
  height: 11rem;
  width: 23rem;
  object-fit: cover;
  margin: auto;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
`
export const InfoGroup = styled.div`
  text-align: center;
  width: 23rem;
  margin: auto;
  display: flex;
  gap: 2.1875rem;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(245, 245, 247);
  padding: 2.5rem 0 2.5rem 0;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
`
export const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  text-align: center;
  margin: auto;
  max-width: 23rem;
`
export const InfoText = styled.div`
  h3 {
    color: #f6ae2d;
  }

  p {
    font-size: 0.875rem;
    margin: 0px 1.25rem 0 1.25rem;
  }
`
