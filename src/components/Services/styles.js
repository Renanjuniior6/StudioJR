import styled from "styled-components"

export const Container = styled.div`
  hr {
    margin: auto;
    width: 70%;
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
  height: 12.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.25rem;

  img {
    height: 80%;
    width: 85%;
    object-fit: cover;
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
  }

  span {
    background-color: #272727;
    height: 80%;
    width: 85%;
    color: #fff;
    text-align: center;
    padding-top: 0.3125rem;
    font-size: 1rem;
    font-weight: 600;
    border-bottom-left-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;
  }
`
