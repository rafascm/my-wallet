import Head from 'next/head'
import Link from 'next/link'
import Container from '../components/containers/AppContainer'
import SignInForm from '../components/SignInForm'

const Home: React.FC = () => {

  return (
    <>
      <Head>
        <title>My Wallet</title>
      </Head>

      <Container>
        <h1 className="logo">MyWallet</h1>
        <SignInForm />
      </Container>
    </>
  )
}
export default Home
