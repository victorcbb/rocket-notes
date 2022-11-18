import { Container } from "./styles";

interface ButtonTextProps {
  title: string
  isActive: boolean
  onClick: () => void
}

export function ButtonText({ title, isActive = false, ...rest }: ButtonTextProps) {
  return (
    <Container
      type="button"
      isActive={isActive}
      {...rest}
    >
      {title}
    </Container>
  )
}
