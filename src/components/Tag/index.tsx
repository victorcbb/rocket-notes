import { Container } from "./styles"

interface TagProps {
  title: string
}

export function Tag({ title, ...rest }: TagProps) {
   return (
    <Container {...rest}>
      {title}
    </Container>
   )
}
