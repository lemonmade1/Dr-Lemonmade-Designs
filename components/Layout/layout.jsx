import Head from 'next/head'
import Link from 'next/link'

import styles from './layout.module.css'

import NavBar from '../NavBar/navbar'
import Footer from '../Footer/footer'

export const siteTitle = 'Lemon\'made Website'

export default function Layout ({ children, home }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel='icon' href='/favicon.ico' />

          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans:300,400' />
          <link rel='stylesheet' href='../css/fontawesome-all.min.css' />
          <link rel='stylesheet' href='../css/bootstrap.min.css' type='text/css' />
          <link rel='stylesheet' href='../css/magnific-popup.css' type='text/css' />
          <link rel='stylesheet' href='../slick/slick.css' type='text/css' />
          <link rel='stylesheet' href='../slick/slick-theme.css' type='text/css' />
          <link rel='stylesheet' href='../css/tooplate-style.css' type='text/css' />

          <script type='text/javascript' src='../js/jquery-3.2.1.min.js' />
          <script type='text/javascript' src='../js/jquery.magnific-popup.min.js' />
          <script type='text/javascript' src='../js/jquery.backstretch.min.js' />
          <script type='text/javascript' src='../slick/slick.min.js' />
          <script type='text/javascript' src='../js/custSlicker.js' />
        </Head>

        <NavBar />

        <main className={styles.mainPage}>
          {children}
        </main>

        {!home && (
          <div className={styles.backToHome}>
            <Link href='/'>
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
