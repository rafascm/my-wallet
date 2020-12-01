import Container from '../components/containers/AuthFormContainer'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import Axios from 'axios'

const Form: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [hasBeenClicked, setHasBeenClicked] = useState(false)

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isFormFilledUp()) return

    setHasBeenClicked(true)
    await Axios.post('http://localhost:5000/api/sign-up', {
      name,
      password,
      email,
      passwordConfirmation,
    })
      .then(res => {
        console.log(res.data)
        setHasBeenClicked(false)
      })
      .catch(e => console.log(e))
  }
  const isFormFilledUp = () => {
    if (
      name.length &&
      email.length &&
      password.length &&
      passwordConfirmation.length
    )
      return true
    return false
  }

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
          required={true}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required={true}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required={true}
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
          required={true}
        />
        <input type="submit" value="Entrar" disabled={hasBeenClicked} />
        <Link href="/">
          <a>Já tem uma conta? Entre agora!</a>
        </Link>
      </form>
    </Container>
  )
}
export default Form
