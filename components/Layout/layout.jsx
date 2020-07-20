import Head from 'next/head'
import Link from 'next/link'

import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import Footer from '../Footer/footer'


const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.mainPage}>
        {children}
      </main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

      <Footer />
    </div>
  )
}