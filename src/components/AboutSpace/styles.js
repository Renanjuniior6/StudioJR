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
  align-items: center;
  gap: 1.25rem;
`
export const TextGroup = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 12.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  b {
    font-weight: 600;
    font-size: 1rem;
    text-align: start;
    width: 13.4375rem;
  }

  p {
    text-align: start;
    width: 13.4375rem;
  }
`
export const SpaceImg = styled.img`
  width: 86%;
`
