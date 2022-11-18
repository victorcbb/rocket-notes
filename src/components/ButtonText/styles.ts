import { HTMLProps } from 'react'
import styled from "styled-components";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  isActive: boolean
}

export const Container = styled.button<ButtonProps>`
  background: none;
  border: none;

  color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  font-size: 1rem;
`
