// src/pages/Services.jsx
import InnerBanner from '../components/InnerBanner';
import ServiceForm from '../components/ServiceForm';
import { Helmet } from 'react-helmet-async';
function Business_startup_and_incorporation() {
  return (
    <main>
      <Helmet>
        <title>Business Incorporation Services | Cloud Tax Solutions</title>
        <meta
          name="description"
          content="Start your business with confidence. Cloud Tax Solutions helps Canadian entrepreneurs with incorporation, structuring, and startup financial planning."
        />
      </Helmet>
      {/* Breadcrumb Section */}
      <InnerBanner
        title="Business Startup And Incorporation"
        image="images/BusinessStartup/Image1.0.jpg"
        description="We’d love to hear from you. Get in touch with us today!"
      />
      {/* section 1 */}
      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 wow fadeInLeft">
              <img
                src="images//BusinessStartup/Image1.1.png"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">A Strong Start for a Successful Future</h2>
                <p>
                  A successful business journey begins with the right foundation. At Rajesh Kumar
                  Sharma CPA Professional Corporation, we specialize in guiding entrepreneurs and
                  new business owners through every stage of startup and incorporation — ensuring
                  you make confident decisions that set your business up for long-term success.
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
                <img src="images//BusinessStartup/Image1.2.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6 text-left align-self-center">
              <div className="ml-3 mt-3">
                <h2 className="font-weight-bold">Tailored Business Structuring</h2>
                <p className="mt-3">
                  Every business is unique. We help you choose the right structure — sole
                  proprietorship, partnership, or corporation — based on your business type, income
                  level, and risk exposure.
                </p>
                <p>
                  Our tailored approach ensures your business structure supports growth, optimizes
                  taxes, and protects your personal and professional interests.
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
                src="images//BusinessStartup/Image1.3.png"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">Incorporation and Legal Guidance</h2>
                <p>
                  Our experts provide end-to-end assistance in the business incorporation process,
                  offering insights into legal requirements, compliance obligations, and tax
                  implications.
                </p>
                <p>
                  We help you establish your business with the right financial and operational
                  framework to ensure smooth incorporation and sustainable success.
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
                <img src="images//BusinessStartup/Image1.4.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6 text-left align-self-center">
              <div className="ml-3 mt-3">
                <h2 className="font-weight-bold">Strategic Financial Planning for Startups</h2>
                <p className="mt-3">
                  From initial setup to ongoing compliance, we assist startups in building sound
                  financial systems that support scalability and long-term profitability.
                </p>
                <p>
                  Our guidance covers everything from bookkeeping setup to budgeting and tax
                  planning — so you can focus on growing your business while we handle the financial
                  groundwork.
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
                src="images//BusinessStartup/Image1.5.jpg"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">Partner with Us</h2>
                <p>Start strong, stay compliant, and grow with confidence.</p>
                <p>
                  Contact Rajesh Kumar Sharma CPA Professional Corporation to learn how our
                  accounting and advisory services can help you with business startup and
                  incorporation.
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

export default Business_startup_and_incorporation;
