import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>My Wallet</title>
      </Head>

      <main>
        <h1 className="logo">
          MyWallet
        </h1>
      </main>
    </div>
  )
}
export default Home
