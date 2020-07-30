import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout/layout'

export default function Menu() {
  return (
    <Layout>
      <Head>
        <title>Menu</title>
      </Head>
      
      <section id='tm-section-2' className='tm-section tm-section-carousel'>
        <div>
          <header className='mb-4'>
              <h2 className='tm-text-shadow'>Our Products</h2>
          </header>
          <div className='tm-img-container'>
            <div className='tm-img-slider'>
              <a href='../../compScience/laptop1.jpg' className='tm-slider-img'>
                <img src='../../compScience/laptop1.jpg' alt='Image' className='img-fluid' />
              </a>
              <a href='../../compScience/laptop1.jpg' className='tm-slider-img'>
                <img src='../../compScience/laptop1.jpg' alt='Image' className='img-fluid' />
              </a>
              <a href='../../compScience/laptop1.jpg' className='tm-slider-img'>
                <img src='../../compScience/laptop1.jpg' alt='Image' className='img-fluid' />
              </a>
              <a href='../../compScience/laptop1.jpg' className='tm-slider-img'>
                <img src='../../compScience/laptop1.jpg' alt='Image' className='img-fluid' />
              </a>
              <a href='../../compScience/laptop1.jpg' className='tm-slider-img'>
                <img src='../../compScience/laptop1.jpg' alt='Image' className='img-fluid' />
              </a>
              <a href='../../compScience/laptop1.jpg' className='tm-slider-img'>
                <img src='../../compScience/laptop1.jpg' alt='Image' className='img-fluid' />
              </a>
            </div>
          </div>
        </div>
        <style jsx>{`
        @media (max-width: 600px) {
          .container {
            height: 94vh;
          }
        }
      `}
      </style>
      </section>    
    </Layout>
  )
}