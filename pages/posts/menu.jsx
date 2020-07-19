import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Menu() {
  return (
    <Layout>
      <Head>
        <title>Menu</title>
      </Head>
      <h1>Menu</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}