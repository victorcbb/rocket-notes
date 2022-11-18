import { ReactNode } from "react";
import { Container } from "./styles";

interface SectionProps {
  title: string
  children: ReactNode
}

export function Section({ title, children }: SectionProps) {

  return (
    <Container>
      <h2>
        {title}
      </h2>
      {children}
    </Container>
  )
}
