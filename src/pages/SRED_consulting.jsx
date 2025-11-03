// src/pages/Services.jsx
import InnerBanner from '../components/InnerBanner';
import ServiceForm from '../components/ServiceForm';
import { Helmet } from 'react-helmet-async';
function SRED_consulting() {
  return (
    <main>
      <Helmet>
        <title>SR&ED Consulting Services | Cloud Tax Solutions Canada</title>
        <meta
          name="description"
          content="Maximize your SR&ED tax credits with Cloud Tax Solutions. Expert consulting to help Canadian businesses claim R&D incentives and optimize returns."
        />
      </Helmet>
      {/* Breadcrumb Section */}
      <InnerBanner
        title="SR&ED Consulting"
        image="images/SRED/Image1.0.png"
        description="We’d love to hear from you. Get in touch with us today!"
      />
      {/* section 1 */}
      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 wow fadeInLeft">
              <img
                src="images/SRED/Image1.1.png"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">
                  Maximize Your SR&ED Tax Credits with Expert Guidance
                </h2>
                <p>
                  At Rajesh Kumar Sharma CPA Professional Corporation, we specialize in helping
                  businesses navigate the Scientific Research and Experimental Development (SR&ED)
                  program—one of Canada’s most valuable tax incentive initiatives. Our dedicated
                  SR&ED consulting services ensure you receive the maximum benefits your innovation
                  deserves.
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
                <img src="images/SRED/Image1.2.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6 text-left align-self-center">
              <div className="ml-3 mt-3">
                <h2 className="font-weight-bold">Comprehensive SR&ED Claim Assistance</h2>
                <p className="mt-3">
                  Our team provides end-to-end support in preparing and managing your SR&ED claims.
                  From identifying eligible R&D projects to preparing documentation and ensuring
                  compliance with CRA requirements, we handle the process with precision and
                  efficiency.
                </p>
                <p>
                  We help businesses of all sizes secure refundable or non-refundable tax credits
                  for their qualifying research and development activities.
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
                src="images/SRED/Image1.3.png"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">Maximizing R&D Expenditures and Incentives</h2>
                <p>
                  With our in-depth understanding of SR&ED guidelines, we conduct a thorough
                  analysis of your R&D expenditures to ensure no eligible cost is overlooked.
                </p>
                <p>
                  Our expertise allows your business to efficiently claim SR&ED incentives—just as
                  the Canada Revenue Agency distributed $4 billion in SR&ED incentives to Canadian
                  businesses in 2015, highlighting the scale and opportunity this program offers.
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
                <img src="images/SRED/Image1.4.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6 text-left align-self-center">
              <div className="ml-3 mt-3">
                <h2 className="font-weight-bold">Supporting Innovation Across All Industries</h2>
                <p className="mt-3">
                  Whether you’re in manufacturing, technology, engineering, or any other industry
                  driving innovation, our SR&ED specialists are equipped to help you leverage
                  federal funding opportunities. We simplify the process so you can focus on
                  innovation while we take care of your financial benefits.
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
                src="images/SRED/Image1.5.png"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">Let’s Help You Unlock SR&ED Funding</h2>
                <p>
                  Partner with Rajesh Kumar Sharma CPA Professional Corporation to optimize your
                  SR&ED claims and maximize your financial returns.
                </p>
                <p>
                  Contact us today to learn how our SR&ED consulting services can help your business
                  claim valuable R&D tax incentives and government grants.
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

export default SRED_consulting;
