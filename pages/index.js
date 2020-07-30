import Head from 'next/head'

import Footer from '../components/Footer/footer'

// import utilStyles from '../styles/utils.module.css'

const Home = () => (
  <div className='container'>
    <Head>
      <title>Home</title>
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

    <div id='loader-wrapper'>
      <div id='loader' />
      <div className='loader-section section-left' />
      <div className='loader-section section-right' />
    </div>

    <main>
      <h1 className='title'>
        <span className='lemons fontChange'>DR. Lemon'made</span>
        <a href='/posts/menu' className='.tm-main-nav a'> DESIGNS!</a>
      </h1>

      <div className='whatInspires'>
        <h2 className='lemons'>What Inspires You?</h2>
      </div>

      <div className='grid'>
        <a href='posts/about' className='card'>
          <h3>About Us &rarr;</h3>
          <p>Find in-depth information about <span className='lemons'>DR. Lemon'made DESIGNS</span> & features.</p>
        </a>

        <a href='posts/menu' className='card'>
          <h3>Our Templates &rarr;</h3>
          <p>Learn how to get one of our <span className='lemons'>Templates</span> today!</p>
        </a>

        <a
          href='posts/examples'
          className='card'
        >
          <h3>Examples &rarr;</h3>
          <p>How <span className='lemons'>Project's</span> can be better with just a touch of something else.</p>
        </a>

        <a
          href='posts/contact'
          className='card'
        >
          <h3>Contact Us &rarr;</h3>
          <p>
            Instantly <span className='lemons'>Contact Us</span> to build your next site.
          </p>
        </a>
      </div>

      <div id='preload-01' />
      <div id='preload-02' />
      <div id='preload-03' />
      <div id='preload-04' />

    </main>

    <Footer />

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .whatInspires {
        margin-top: 2rem;
      }

      a {
        color: inherit;
        text-shadow: 1px 1px 3px black;
        text-decoration: none;
      }

      .lemons {
        color: yellow;
        text-shadow: 1px 1px 3px black;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
        color: yellow;
        text-shadow: 1px 1px 1px black;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      {/* code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      } */}

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        height: 10rem;
        margin: 1rem;
        background: #0000006e;
        color: white;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
        .card {
          width: 27rem;
        }
      }
    `}
    </style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}
    </style>
  </div>
)

export default Home
