import Container from '../components/containers/AuthFormContainer'
import Link from 'next/link'

const Form: React.FC = () => {
  return (
    <Container>
      <input type="email" placeholder="E-mail" />
      <input type="password" placeholder="Senha" />
      <input type='submit' value="Entrar" />
      <Link href='/sign-up'>
        <a>Primeira vez? Cadastre-se!</a>
      </Link>
    </Container>
  )
}
export default Form
