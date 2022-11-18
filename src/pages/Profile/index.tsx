import { useState, ChangeEvent, FormEvent } from "react"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"
import { Container, Form, Avatar } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()
  const [loading, setLoading] = useState(false)
  
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  function handleBack() {
    navigate('/')
  }

  async function handleUpdate(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const user = {
        name,
        email,
        password: passwordNew,
        old_password: passwordOld
      }
  
      await updateProfile({ user, avatarFile })
      
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar o perfil.")
      }

    } finally {
      setLoading(false)
    }

  }

  async function handleChangeAvatar(event: any) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)

  }

  return (
    <Container>
      <header>
        <button onClick={handleBack} type="button">
          <FiArrowLeft size={24} />
        </button>
      </header>

      <Form onSubmit={(e) => handleUpdate(e)}>

        <Avatar>
          <img 
            src={avatar} 
            alt="Imagem do usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input 
              id="avatar" 
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e: ChangeEvent<any>) => setPasswordOld(e.target.value)}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={(e: ChangeEvent<any>) => setPasswordNew(e.target.value)}
        />

        <Button type="submit" title="Salvar" loading={loading} />

      </Form>
    </Container>
  )
}
