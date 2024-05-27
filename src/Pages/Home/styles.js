import styled from "styled-components"

export const Container = styled.div`
  section {
    margin-bottom: 5.125rem;
  }
`

export const Links = styled.a`
  height: 3.4375rem;
  width: 3.4375rem;
  background-color: #fff;
  color: #000;
  position: fixed;
  bottom: 0.4375rem;
  right: 0.5rem;
  z-index: 999;
  border-radius: 3.125rem;
  display: ${(props) => (props.change ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  padding-left: 0.125rem;
`
