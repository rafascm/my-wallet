import Head from 'next/head'
import Link from 'next/link'
import Container from '../components/containers/AppContainer'
import SignUpForm from '../components/SignUpForm'

const SignUp: React.FC = () => {
  return (
    <>
      <Head>
        <title>My Wallet</title>
      </Head>

      <Container>
        <h1 className="logo">MyWallet</h1>
        <SignUpForm />
      </Container>
    </>
  )
}
export default SignUp;
