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
  width: 22.875rem;
  margin: auto;
  display: flex;
  gap: 35px;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(245, 245, 247);
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
`
export const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
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
