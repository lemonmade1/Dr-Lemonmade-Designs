import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/Layout/layout'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      
      <div>
        <section id="tm-section-4" className="tm-section">
          <div className="tm-contact-box-pad">
            <div className="row mb-4">
              <div className="col-sm-12">
                <header><h1 className="tm-text-shadow">Contact Us</h1></header>
              </div>
            </div>
            <div className="row tm-page-4-content">
              <div className="col-md-6 col-sm-12 tm-contact-col">
                <div className="contact_message">
                  <form action="#contact" method="post" className="contact-form">
                    <div className="form-group">
                      <input type="text" id="contact_name" name="contact_name" className="form-control" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                      <input type="email" id="contact_email" name="contact_email" className="form-control" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                      <textarea id="contact_message" name="contact_message" className="form-control" rows="9" placeholder="Message" required></textarea>
                    </div>
                    <button type="submit" className="btn tm-btn-submit tm-btn ml-auto">Submit</button>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 tm-contact-col contactInfo">
                <div className="tm-address-box">
                  <p>Aliquam interdum, nisl sedd faucibus tempor, massa velit laoreet ipsum, et faucibus sapien magna at enim. Suspendisse a dictum tortor.</p>

                  <hr />

                  <p>Curabitur venenatis leo in augue convallis, vulputate sollicitudin ex maximus.</p>

                  <hr />

                  <address>
                    120-240 Aliquam nec neque augue <br />                    Suspendisse tincidunt nunc, <br />
                    vitae sagis justo 11000
                  </address>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .contactInfo {
          text-align: center
        }
        hr {
          background: white;
        }        

        @media (max-width: 600px) {
          
        }
      `}
      </style>
    </Layout>
  )
}