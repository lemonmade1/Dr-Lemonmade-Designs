import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/Layout/layout'
import NavBar from '../../components/NavBar/navBar'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>          
      </Head>

      <NavBar />

      <h1>About</h1>
      
    </Layout>
  )
}