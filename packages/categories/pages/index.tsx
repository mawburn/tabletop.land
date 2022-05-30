import type { NextPage } from 'next'
import Head from 'next/head'

import config from '../config'

const Home: NextPage = () => (
  <>
    <Head>
      <title>{`Login/SignUp - ${config.title}`}</title>
      <meta name="description" content="Login or SignUp to Tabletop.Land Vendor Portal" />
    </Head>
    <main>
      <h1>Login</h1>
    </main>
  </>
)

export default Home
