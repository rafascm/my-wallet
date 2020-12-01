import styled from 'styled-components'

type FormProps = JSX.IntrinsicElements['form']

const AuthFormContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>
}

export default AuthFormContainer

const Container = styled.div`
  width: 100%;
  & > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    & > input,
    & > input::placeholder,
    & > input:focus {
      width: 100%;
      height: 2.5rem;
      border-radius: 0.3rem;
      padding: 0.5rem;
      outline-style: none;
      border: none;
      font: 400 1rem 'Raleway', sans-serif;
    }

    & > input[type='submit'] {
      background-color: ${props => props.theme.colors.button};
      color: ${props => props.theme.colors.backgroundText};
    }

    & > * + * {
      margin-top: 0.5rem;
    }
    padding: 1.5rem 0;

    & > a {
      margin-top: 1rem;
      font-size: 1rem;
      color: ${props => props.theme.colors.backgroundText};
    }
  }
`
