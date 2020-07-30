import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/Layout/layout'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>          
      </Head>

      <h1>About Us</h1>
      <div className='aboutPage'>
        <p>
          Every website built by <span>DR. Lemon'made</span> Designs is customized to the needs of our client through our design process. We focus on using images, video and text that make your business stand out from the competition. Our clients see higher conversion rates, more traffic and better search rankings because we leverage our experience and a data-driven approach to create the optimal website for your business.
        </p>

        <hr />

        <p>
          Every website we build is mobile-friendly and will work on a myriad of devices. In addition, we strategically place call-to-actions through your site to increase conversion rates and generate more business. Finally, our websites are competitively priced to give you the best possible site at a reasonable cost.
        </p>
      </div>
      <style jsx>{`
        * {
          text-shadow: 1px 1px 3px black;
        }

        .aboutPage {
          margin-top: 1rem
        }

        @media (max-width: 600px) {
          
        }
      `}
      </style>      
    </Layout>
  )
}