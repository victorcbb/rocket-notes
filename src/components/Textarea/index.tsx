import { HTMLProps } from 'react'
import { Container } from './styles'

interface TextareaProps extends HTMLProps<HTMLTextAreaElement> {}

export function Textarea({ ...rest }: TextareaProps) {
  return (
    <Container >
      <textarea {...rest} />
    </Container>
  )
}
