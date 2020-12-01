import Container from '../components/containers/AuthFormContainer'
import Link from 'next/link'

const Form: React.FC = () => {
  return (
    <Container>
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="E-mail" />
      <input type="password" placeholder="Senha" />
      <input type="password" placeholder="Confirme a senha" />
      <input type='submit' value="Entrar" />
      <Link href='/'>
        <a>Já tem uma conta? Entre agora!</a>
      </Link>
    </Container>
  )
}
export default Form
