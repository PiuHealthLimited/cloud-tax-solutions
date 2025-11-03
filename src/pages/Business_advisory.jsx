// src/pages/Services.jsx
import InnerBanner from '../components/InnerBanner';
import ServiceForm from '../components/ServiceForm';
import { Helmet } from 'react-helmet-async';
function Business_advisory() {
  return (
    <main>
      <Helmet>
        <title>Business Advisory Services | Cloud Tax Solutions Canada</title>
        <meta
          name="description"
          content="Empower your business with expert advisory services. Cloud Tax Solutions offers strategic financial guidance to help Canadian businesses grow and optimize."
        />
      </Helmet>
      {/* Breadcrumb Section */}
      <InnerBanner
        title="Business Advisory"
        image="images/BusinessAdvisory/Image1.0.png"
        description="We’d love to hear from you. Get in touch with us today!"
      />
      {/* section 1 */}
      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 wow fadeInLeft">
              <img
                src="images/BusinessAdvisory/Image1.1.png"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">
                  Strategic Guidance to Grow and Optimize Your Business
                </h2>
                <p>
                  At Rajesh Kumar Sharma CPA Professional Corporation, our business advisory
                  services provide strategic guidance and specialized expertise to help businesses
                  make informed decisions, improve performance, and achieve their goals. From
                  financial analysis and operational improvement to growth strategies and risk
                  management, our solutions are tailored to meet the unique needs of each business.
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
                <img src="images/BusinessAdvisory/Image1.2.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6 text-left align-self-center">
              <div className="ml-3 mt-3">
                <h2 className="font-weight-bold">Tailored Business Strategies</h2>
                <p className="mt-3">
                  Every business is different, and our advisory approach reflects that. We work
                  closely with clients to evaluate their financial position, operations, and
                  long-term objectives, providing customized guidance that drives success.
                </p>
                <p>Our business advisory services include:</p>
                <ul className="list-unstyled mt-4">
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>
                      <strong>Financial Distribution Strategies</strong> - Strategically
                      distributing finances among family members or stakeholders to optimize returns
                      and support long-term planning.
                    </span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>
                      <strong>Incorporation and PSB Considerations</strong> - Evaluating the
                      potential for incorporating your business while ensuring compliance with
                      Personal Services Business (PSB) rules.
                    </span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>
                      <strong>Year-End Asset Acquisition</strong> - Advising on acquiring assets
                      before year-end to maximize potential tax advantages and positively impact
                      your financial position.
                    </span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>
                      <strong>Customized Business Advice</strong> - Recognizing that every business
                      has unique needs, we provide tailored strategies aligned with your operations,
                      growth plans, and financial objectives.
                    </span>
                  </li>
                </ul>
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
                src="images/BusinessAdvisory/Image1.3.png"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">Your Partner in Business Growth</h2>
                <p>
                  With Rajesh Kumar Sharma CPA Professional Corporation, you gain a partner
                  committed to empowering your business with informed decisions and actionable
                  insights. Our experienced team helps you navigate complex business challenges,
                  optimize resources, and achieve sustainable growth.
                </p>
                <p>
                  Reach out today to discuss your business advisory needs and discover how our
                  personalized strategies can enhance your business performance.
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

export default Business_advisory;
