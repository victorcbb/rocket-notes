import { Container, Links, Content } from "./styles"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
import { api } from "../../services/api"

export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleDeleteNote() {
    const confirm = window.confirm("tem certeza que deseja ecluir a nota?")

    if(confirm) {
      await api.delete(`/notes/${params.id}`) 
      navigate(-1)
    }
  }
   
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)

      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />
      {
        data &&
        <main>
          <Content>
            <ButtonText 
              title="Excluir nota" 
              isActive 
              onClick={handleDeleteNote} 
            />

            <h1>{data.title}</h1>

            <p>{data.description}</p>

            {
              data.links &&
              <Section title="Link úteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target='_blank'>{link.url}</a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag 
                      key={String(tag.id)} 
                      title={tag.name} 
                    />
                  ))
                }
              </Section>
            }
            <Button 
              title="Voltar" 
              onClick={handleBack} 
            />          
          </Content>
        </main>
      }


    </Container>
  )  
}