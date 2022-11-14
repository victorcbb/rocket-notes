import styled from 'styled-components'

export const Container = styled.div`

> textarea {
  width: 100%; 
  height: 9.375rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: .625rem;
  border: none;
  resize: none;

  margin-bottom: .5rem;
  padding: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
}
`
