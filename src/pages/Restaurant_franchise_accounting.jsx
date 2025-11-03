// src/pages/Services.jsx
import InnerBanner from "../components/InnerBanner";
import ServiceForm from "../components/ServiceForm";
import { Helmet } from 'react-helmet-async';
function Restaurant_franchise_accounting() {
  return (
    <main>
      <Helmet>
      		<title>Restaurant & Franchise Accounting | Cloud Tax Solutions</title>
      		<meta name="description" content="Expert accounting for restaurants and franchises. Cloud Tax Solutions helps Canadian owners manage finances, ensure compliance, and grow profitably." />
    	</Helmet>
      {/* Breadcrumb Section */}
      <InnerBanner
          title="Restaurant And Franchise Accounting"
          image="images/Restaurants/Image1.0.png"
          description="We’d love to hear from you. Get in touch with us today!"
      />
      {/* section 1 */}
      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 wow fadeInLeft">
              <img
                src="images/Restaurants/Image1.1.jpg"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">Specialized Accounting Solutions for the Restaurant and Franchise Industry</h2>
                <p>
                  At Rajesh Kumar Sharma CPA Professional Corporation, we understand the unique financial challenges faced by restaurant owners and franchise operators. Our accounting services are specifically tailored to the restaurant and franchise industries, providing precise financial management and strategic insights that drive profitability and long-term growth.
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
                <img src="images/Restaurants/Image1.2.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6 text-left align-self-center">
              <div className="ml-3 mt-3">
                <h2 className="font-weight-bold">Comprehensive Financial Management for Restaurants and Franchises</h2>
                <p className="mt-3">
                    We deliver a full spectrum of accounting solutions designed to help restaurant owners and franchisees stay financially organized and compliant. Our services include:
                </p>
                <ul className="list-unstyled mt-4 point-indent">
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>
                      <strong>Bookkeeping and payroll management</strong> to ensure smooth day-to-day financial operations.
                    </span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>
                      <strong>Tax compliance and reporting</strong> to meet CRA requirements accurately and on time.
                    </span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>
                      <strong>Financial analysis and performance reviews</strong> to identify opportunities for cost control and revenue growth.
                    </span>
                  </li>
                </ul>
                <p>
                  Our expertise ensures accurate financial reporting, expense tracking, and compliance, so you can focus on running your business while we take care of your numbers.
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
                src="images/Restaurants/Image1.3.png"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">Strategic Financial Advice for Sustainable Growth</h2>
                <p>
                  Beyond managing finances, we offer strategic financial guidance to help restaurants and franchises make informed decisions, control costs, and improve operational efficiency. Whether you’re opening a new location or managing multiple franchises, we provide insights to support sustainable growth and profitability.
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
                <img src="images/Restaurants/Image1.4.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6 text-left align-self-center">
              <div className="ml-3 mt-3">
                <h2 className="font-weight-bold">Let’s Help Your Business Thrive</h2>
                <p className="mt-3">
                    Partner with Rajesh Kumar Sharma CPA Professional Corporation to gain a trusted financial advisor who understands your industry’s nuances.
                </p>
                <p>
                    Contact us today to discover how our accounting services can benefit your restaurant or franchise and help you achieve financial success.
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

export default Restaurant_franchise_accounting;