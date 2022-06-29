import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 9rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 7.75rem;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 1.5rem;
    }

  }
`

export const Form = styled.form`
  max-width: 21.25rem;
  margin: -6rem auto 0;

  > div:nth-child(4) {
    margin-top: 1rem;
  }
`

export const Avatar = styled.div`
  position: relative;

  margin: 0 auto 2rem;
  
  width: 11.625rem;
  height: 11.625rem;

  > img {
    border-radius: 50%;

    width: 11.625rem;
    height: 11.625rem;
  }

  > label {
    width: 3rem;
    height: 3rem;

    background: ${({ theme }) => theme.COLORS.ORANGE};

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: .5rem;
    right: .5rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_800}
    }
  }
`
