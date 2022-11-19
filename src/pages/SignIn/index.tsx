import { ChangeEvent, FormEvent, useState } from "react"
import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"
import { Container, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn, loading } = useAuth()

  function handleSignIn(event: FormEvent) {
    event.preventDefault()
    signIn({ email, password })
  }

  return (
    <Container>
      <Form onSubmit={handleSignIn}>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          title="Entrar"
          loading={loading}
        />

        <Link to="/register">Criar conta</Link>

      </Form>

      <Background>
        <div></div>
      </Background>
    </Container>
  )
}
