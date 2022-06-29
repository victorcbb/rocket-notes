import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 15.625rem auto;
  grid-template-rows: 6.5625rem 8rem auto 4rem;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newnote content";

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`
export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  align-items: center;
  justify-content: center;

  
  border-bottom: .0625rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background:${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  > h1 {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 1.5rem;
  }
`

export const Menu = styled.ul`
  grid-area: menu;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  text-align: center;

  padding-top: 4rem;

  > li {
    margin-bottom: 1.5rem;
  }
`

export const Search = styled.div`
  grid-area: search;

  padding: 4rem 4rem 0;
`

export const Content = styled.div`
 grid-area: content;

 padding: 0 4rem;

 overflow-y: auto;
`

export const NewNote = styled(Link)`
  grid-area: newnote;

  background: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
`