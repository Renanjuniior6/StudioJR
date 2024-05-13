import styled from "styled-components"

export const Container = styled.div`
  background-color: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
  padding: 1.25rem 0 1.25rem 0;

  img {
    width: 9rem;
  }

  p {
    font-size: 0.75rem;
    line-height: 1rem;
    max-width: 98%;
  }
`
