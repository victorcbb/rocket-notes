import { useState, ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"

import { Container, Form } from "./styles"

import { api } from "../../services/api"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState<string[]>([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function hadleNewNote() {
    if (!title) {
      return alert("O campo título deve ser preenchido.")
    }

    if (newLink) {
      return alert(`Existe um link para adicionar no campo "Novo link".`)
    }

    if (newTag) {
      return alert(`Existe uma tag para adicionar no campo "Nova tag".`)
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })

    alert("Nota criada com sucesso!")
    navigate(-1)
  }

  function handleAddLink() {
    if (newLink.length === 0) {
      return alert(`Não é possívcel adicionar um campo de link vazio.`)
    }

    setLinks(prevState => [
      ...prevState,
      newLink
    ])

    setNewLink("")
  }

  function handleRemoveLink(deleted: string) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    if (newTag.length === 0) {
      return alert(`Não é possívcel adicionar um campo de tag vazio.`)
    }

    setTags(prevState => [
      ...prevState,
      newTag
    ])

    setNewTag("")
  }

  function handleRemoveTag(deleted: string) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText
              onClick={handleBack}
              title="Voltar"
            />
          </header>

          <Input
            placeholder="Título"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          />

          <Textarea
            placeholder="Observações"
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem
                  isNew={false}
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={(e: ChangeEvent<any>) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    isNew={false}
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
              <NoteItem
                isNew
                placeholder="Nova tag"
                value={newTag}
                onChange={(e: ChangeEvent<any>) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={hadleNewNote} />

        </Form>
      </main>
    </Container>
  )
}
