// src/pages/Services.jsx
import InnerBanner from '../components/InnerBanner';
import ServiceForm from '../components/ServiceForm';
import { Helmet } from 'react-helmet-async';
function Virtual_CFO_services() {
  return (
    <main>
      <Helmet>
        <title>Virtual CFO Services in Canada | Cloud Tax Solutions</title>
        <meta
          name="description"
          content="Get expert financial leadership without full-time costs. Cloud Tax Solutions offers Virtual CFO services to help Canadian businesses grow strategically."
        />
      </Helmet>
      {/* Breadcrumb Section */}
      <InnerBanner
        title="Virtual CFO Services"
        image="images/VirtualCFO/Image1.0.png"
        description="We’d love to hear from you. Get in touch with us today!"
      />
      {/* section 1 */}
      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 wow fadeInLeft">
              <img
                src="images/VirtualCFO/Image1.1.png"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">
                  Expert Financial Leadership—Without the Full-Time Cost
                </h2>
                <p>
                  Discover the benefits of our Virtual CFO Services, a flexible and cost-effective
                  solution that provides your business with expert financial guidance without the
                  expense of a full-time CFO. At Rajesh Kumar Sharma CPA Professional Corporation,
                  we help businesses strengthen financial decision-making, manage resources
                  effectively, and achieve long-term stability.
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
                <img src="images/VirtualCFO/Image1.2.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6 text-left align-self-center">
              <div className="ml-3 mt-3">
                <h2 className="font-weight-bold">Strategic Financial Expertise, On Demand</h2>
                <p className="mt-3">
                  Our Virtual CFO Services are designed for growing businesses that need
                  professional financial oversight but don’t require—or aren’t ready for—a full-time
                  Chief Financial Officer. Our experienced team delivers:
                </p>
                <ul className="list-unstyled mt-4 point-indent">
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>
                      <strong>Strategic financial advice</strong> tailored to your business goals.
                    </span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>
                      <strong>Budget planning and forecasting</strong> for sustainable growth
                    </span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>
                      <strong>Cash flow management</strong> to maintain financial health and
                      stability
                    </span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>
                      <strong>Financial analysis and reporting</strong> for informed decision-making
                    </span>
                  </li>
                </ul>
                <p>
                  We bring clarity, precision, and strategy to your business finances, ensuring
                  every decision contributes to your success.
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
                src="images/VirtualCFO/Image1.3.png"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">Why Choose Our Virtual CFO Services</h2>
                <p>
                  Partnering with Rajesh Kumar Sharma CPA Professional Corporation means gaining
                  access to trusted financial expertise on a flexible schedule. We help you elevate
                  your financial strategies, enhance decision-making, and manage costs
                  efficiently—empowering your business to operate with confidence and control.
                </p>
                <p>
                  Get in touch today to learn how our Virtual CFO Services can support your business
                  growth and financial performance.
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

export default Virtual_CFO_services;
