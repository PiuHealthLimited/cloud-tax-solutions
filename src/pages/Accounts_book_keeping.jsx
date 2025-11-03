// src/pages/Services.jsx
import InnerBanner from '../components/InnerBanner';
import ServiceForm from '../components/ServiceForm';
import { Helmet } from 'react-helmet-async';
function Accounts_book_keeping() {
  return (
    <main>
      <Helmet>
        <title>Accounting & Bookkeeping Services | Cloud Tax Solutions</title>
        <meta
          name="description"
          content="Reliable accounting and bookkeeping services across Canada. Stay compliant, save time, and make smarter business decisions with Cloud Tax Solutions."
        />
      </Helmet>
      {/* Breadcrumb Section */}
      <InnerBanner
        title="Accounts and Bookkeeping"
        image="images/Accounting_and_Bookkeeping/Image1.0.png"
        description="We’d love to hear from you. Get in touch with us today!"
      />
      {/* section 1 */}
      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 wow fadeInLeft">
              <img
                src="images/Accounting_and_Bookkeeping/Image1.1.png"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">
                  Keep Your Finances Organized, Accurate, and Stress-Free
                </h2>
                <p>
                  Managing finances can be overwhelming for new and growing businesses — especially
                  when you’re juggling multiple priorities. Rajesh Kumar Sharma CPA Professional
                  Corporation, we specialize in providing reliable accounting and bookkeeping
                  services in Canada, helping entrepreneurs maintain control over their financial
                  health and make informed business decisions with confidence.
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
                <img
                  src="images/Accounting_and_Bookkeeping/Image1.2.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 text-left align-self-center">
              <div className="ml-3 mt-3">
                <h2 className="font-weight-bold">Why Bookkeeping Matters</h2>
                <p className="mt-3">
                  Accurate bookkeeping is the foundation of every successful business. It ensures
                  financial transparency, supports compliance, and gives you a clear understanding
                  of your company’s performance.
                </p>
                <p>
                  Our team of professional accountants meticulously records your company’s income,
                  expenses, assets, and liabilities — ensuring every transaction is properly
                  documented and reconciled. This allows you to track cash flow, plan budgets
                  effectively, and identify growth opportunities with clarity.
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
                src="images/Accounting_and_Bookkeeping/Image1.3.png"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">Professional Accounting Support You Can Trust</h2>
                <p>
                  As a leading CPA firm, we understand the financial challenges small and mid-sized
                  businesses face daily. Our experts handle everything from journal entries and
                  reconciliations to financial statements and tax-ready reports, ensuring accuracy
                  and timeliness at every step.
                </p>
                <p>
                  By partnering with Rajesh Kumar Sharma CPA Professional Corporation, you’ll
                  benefit from:
                </p>
                <ul className="list-unstyled mt-4 point-indent">
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Accurate and timely bookkeeping that eliminates costly errors</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Compliance-ready records for tax season and CRA audits</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Customized accounting solutions tailored to your business needs</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>
                      Expert financial insights to help you plan, forecast, and grow confidently
                    </span>
                  </li>
                </ul>
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
                <img
                  src="images/Accounting_and_Bookkeeping/Image1.4.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 text-left align-self-center">
              <div className="ml-3 mt-3">
                <h2 className="font-weight-bold">Focus on Growth — We’ll Handle the Numbers</h2>
                <p className="mt-3">
                  When you outsource your accounting and bookkeeping tasks to Rajesh Kumar Sharma
                  CPA Professional Corporation, you’re not just delegating paperwork — you’re
                  gaining a dedicated financial partner. Our experienced team ensures your financial
                  data is organized, transparent, and aligned with your business goals, so you can
                  focus on what truly matters: growing your business with complete peace of mind.
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

export default Accounts_book_keeping;
