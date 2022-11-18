import { ElementType, HTMLProps } from "react"
import { Container } from "./styles"

interface InputProps extends HTMLProps<HTMLInputElement> {
  icon?: ElementType
}

export function Input({ icon: Icon, ...rest }: InputProps) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest}  />
    </Container>
  )
}
