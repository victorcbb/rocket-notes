import { ChangeEvent, FormEvent, useState } from 'react'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

import { Container, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { api } from "../../services/api"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  
  const navigate = useNavigate()

  function handleSignUp(event: FormEvent) {
    event.preventDefault()
    
    setLoading(true)

    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api.post("/users", {
      name,
      email,
      password
    })
    .then(() => {
      alert("Usuário cadastrado com sucesso")
      navigate("/")
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message)
        setLoading(false)
      } else {
        alert("Não foi possível cadastrar")
        setLoading(false)
      }
    })
  }

  return (
    <Container>

      <Background>
        <div></div>
      </Background>

      <Form onSubmit={handleSignUp}>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />

        <Input 
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail((e.target.value))}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword((e.target.value))}
        />

        <Button 
          type='submit'
          title="Cadastrar"
          loading={loading}
        />

        <Link to="/">Voltar para o login</Link>

      </Form>

    </Container>
  )
}
