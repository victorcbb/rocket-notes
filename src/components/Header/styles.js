import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  grid-area: header;

  height: 6.5625rem;
  width: 100%;

  border-bottom: .0625rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  display: flex;
  justify-content: space-between;

  padding: 0 5rem;
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  gap: 1rem;

  > img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;

    object-fit: cover;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 1.5rem;

    span {
      font-size: .875rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100}
    }

    strong {
      font-size: 1.125rem;
      color: ${({ theme }) => theme.COLORS.WHITE}
    }
  }
`

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    font-size: 2.25rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    transition: 0.2s;

    &:hover {
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }
  }
`
