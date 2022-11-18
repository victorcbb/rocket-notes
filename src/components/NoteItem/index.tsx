import { ChangeEvent, MouseEventHandler } from 'react'
import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from "./styles"

interface NoteItemProps {
  isNew: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  value: string
  placeholder?: "Novo link" | "Nova tag"
  onChange?: (e: ChangeEvent<any>) => void
}

export function NoteItem({ isNew, onClick, value, ...rest }: NoteItemProps) {
  return (
    <Container isNew={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button 
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}