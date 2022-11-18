import { HTMLProps } from "react";
import styled from "styled-components";

export const Container = styled.button<HTMLProps<HTMLButtonElement>>`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 3.5rem;
  padding: 0 1rem;
  margin-top: 1rem;
  border: none;
  border-radius: .625rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
