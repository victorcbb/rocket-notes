import { HTMLProps } from "react";
import { Container } from "./styles";

interface ButtonProps {
  title: string
  loading?: boolean
  onClick?: () => void
  type: "button" | "submit"
}

export function Button({ title, loading = false, ...rest }: ButtonProps) {

  return (
    <Container
      disabled={loading}  
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container>
  )
}
