// src/pages/Services.jsx
import InnerBanner from '../components/InnerBanner';
import ServiceForm from '../components/ServiceForm';
import { Helmet } from 'react-helmet-async';
function Sale_and_purchase_of_business() {
  return (
    <main>
      <Helmet>
        <title>Buy or Sell a Business | Cloud Tax Solutions Canada</title>
        <meta
          name="description"
          content="Expert CPA support for buying or selling a business in Canada. Cloud Tax Solutions ensures smooth transactions, valuations, and tax-efficient deal structuring."
        />
      </Helmet>
      {/* Breadcrumb Section */}
      <InnerBanner
        title="Sale And Purchase Of Business"
        image="images/BusinessSale/Image1.0.jpg"
        description="We’d love to hear from you. Get in touch with us today!"
      />
      {/* section 1 */}
      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 wow fadeInLeft">
              <img
                src="images/BusinessSale/Image1.1.png"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">
                  Expert Financial Guidance for Buying or Selling a Business
                </h2>
                <p>
                  At Rajesh Kumar Sharma CPA Professional Corporation, we provide comprehensive
                  accounting and advisory services tailored to the complex financial and tax aspects
                  of business acquisitions and sales. Whether you’re planning to sell your business
                  or purchase a new one, our team ensures the process is smooth, informed, and
                  strategically sound.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-separator"></div>

      {/* Section 2 */}
      <section className="service-section">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-md-6">
              <div className="tips-img wow fadeIn animated bounce slower">
                <img src="images/BusinessSale/Image1.2.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6 text-left align-self-center">
              <div className="ml-3 mt-3">
                <h2 className="font-weight-bold">Comprehensive Transaction Support</h2>
                <p className="mt-3">
                  We assist clients through every stage of the transaction, from financial due
                  diligence and valuation assessments to analyzing tax implications and structuring
                  the deal for optimal outcomes.
                </p>
                <p>
                  Our goal is to help sellers maximize value while helping buyers make informed,
                  confident decisions by evaluating financial risks and opportunities associated
                  with each transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-separator"></div>

      {/* section 1 */}
      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 wow fadeInLeft">
              <img
                src="images/BusinessSale/Image1.3.png"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">Structuring the Right Type of Purchase</h2>
                <p>
                  Determining the best approach—sale/purchase of shares versus sale/purchase of
                  assets—can significantly impact taxes, liabilities, and overall returns
                </p>
                <p>
                  We help you understand the financial and tax implications of each option and guide
                  you in selecting the structure that best aligns with your business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-separator"></div>

      {/* Section 2 */}
      <section className="service-section">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-md-6">
              <div className="tips-img wow fadeIn animated bounce slower">
                <img src="images/BusinessSale/Image1.4.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6 text-left align-self-center">
              <div className="ml-3 mt-3">
                <h2 className="font-weight-bold">Trusted Experience in Business Transactions</h2>
                <p className="mt-3">
                  With extensive experience assisting clients across diverse industries, we’ve
                  developed the expertise to manage complex business transactions effectively.
                </p>
                <p>
                  Whether you’re expanding, transitioning, or exiting, we ensure your financial
                  interests are protected every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-separator"></div>

      {/* section 1 */}
      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 wow fadeInLeft">
              <img
                src="images/BusinessSale/Image1.5.png"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">Partner with Our Experts</h2>
                <p>
                  Let our professionals help you navigate the complexities of buying or selling a
                  business with confidence and clarity.
                </p>
                <p>
                  Contact us today to learn how Rajesh Kumar Sharma CPA Professional Corporation can
                  guide you through a successful transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceForm />
    </main>
  );
}

export default Sale_and_purchase_of_business;
