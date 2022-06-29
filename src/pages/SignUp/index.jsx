import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignUp() {
  
  return (
    <Container>

      <Background>
        <div></div>
      </Background>

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input 
          placeholder="E=mail"
          type="email"
          icon={FiMail}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Cadastrar" />

        <Link to="/">Voltar para o login</Link>

      </Form>

    </Container>
  )
}
