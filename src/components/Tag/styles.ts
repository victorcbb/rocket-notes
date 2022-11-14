import styled from "styled-components";

export const Container = styled.span`
  font-size: .75rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding: .3125rem .875rem;
  margin-right: .375rem;
  
  border-radius: .3125rem;
  background: ${({ theme }) => theme.COLORS.ORANGE};

`
