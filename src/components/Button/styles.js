import styled from "styled-components"

export const Container = styled.button`
  background-color: #f6ae2d;
  color: #fff;
  border: none;
  border-radius: 0.625rem;
  height: 3.125rem;
  font-weight: 600;
  font-size: 0.75rem;
  padding: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
  cursor: pointer;

  &:active {
    opacity: 0.8;
  }

  &:hover {
    opacity: 0.9;
  }
`
