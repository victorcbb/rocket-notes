import { Container } from "./styles";
import { Tag } from "../Tag"
import { ITags } from "../../pages/Home";

interface IData {
  title: string
  tags: ITags[]
}

interface NoteProps {
  data: IData
  onClick: () => void
}

export function Note({ data, ...rest }: NoteProps) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }

    </Container>
  )
}
