// src/pages/Services.jsx
import InnerBanner from "../components/InnerBanner";
import ServiceForm from "../components/ServiceForm";
import { Helmet } from 'react-helmet-async';
function Small_business_loans() {
  return (
    <main>
      <Helmet>
      		<title>Small Business Loan Assistance | Cloud Tax Solutions</title>
      		<meta name="description" content="Get expert help securing small business loans in Canada. Cloud Tax Solutions prepares financials, ensures compliance, and boosts your loan approval success." />
    	</Helmet>
      {/* Breadcrumb Section */}
      <InnerBanner
          title="Small Business Loans"
          image="images/SmallBusinessLoans/Image1.0.png"
          description="We’d love to hear from you. Get in touch with us today!"
      />
      {/* section 1 */}
      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 wow fadeInLeft">
              <img
                src="images/SmallBusinessLoans/Image1.1.png"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">Financial Guidance to Help Your Business Secure the Funding It Needs</h2>
                <p>
                    At Rajesh Kumar Sharma CPA Professional Corporation, we specialize in helping small businesses navigate the complexities of loan applications and financial documentation. Our services are designed to improve your chances of loan approval while ensuring your business remains financially compliant and prepared for growth.
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
                <img src="images/SmallBusinessLoans/Image1.2.jpg" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6 text-left align-self-center">
              <div className="ml-3 mt-3">
                <h2 className="font-weight-bold">Comprehensive Loan Support</h2>
                <p className="mt-3">
                    We assist clients in preparing accurate financial statements, organizing essential documentation, and maintaining compliance with lender requirements.
                </p>
                <p>
                    Our expertise streamlines the loan process—ensuring your business presents a strong and credible financial profile to banks and lending institutions.
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
                src="images/SmallBusinessLoans/Image1.3.png"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">Loan Structuring and Financial Planning</h2>
                <p>
                    Beyond documentation, we provide guidance on loan structuring, helping you understand the financial implications of borrowing and planning strategically for repayment.
                </p>
                <p>
                    Our goal is to help you secure funding that supports your long-term business objectives while maintaining financial stability.
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
                <img src="images/SmallBusinessLoans/Image1.4.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6 text-left align-self-center">
              <div className="ml-3 mt-3">
                <h2 className="font-weight-bold">Empowering Small Business Growth</h2>
                <p className="mt-3">
                    With tailored financial advice and practical insights, we empower small business owners to make confident decisions about financing and growth.
                </p>
                <p>
                    Whether you’re expanding operations, purchasing equipment, or managing working capital, our professionals are here to guide you through every step.
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
                src="images/SmallBusinessLoans/Image1.5.jpg"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">Partner with Us</h2>
                <p>
                    Let us help you secure the funding your business deserves.
                </p>
                <p>
                    Contact Rajesh Kumar Sharma CPA Professional Corporation to learn how our accounting and advisory services can support your small business loan needs.
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

export default Small_business_loans;