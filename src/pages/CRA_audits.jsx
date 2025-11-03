// src/pages/Services.jsx
import InnerBanner from '../components/InnerBanner';
import ServiceForm from '../components/ServiceForm';
import { Helmet } from 'react-helmet-async';
function CRA_audits() {
  return (
    <main>
      <Helmet>
        <title>CRA Audit & Appeal Services | Cloud Tax Solutions Canada</title>
        <meta
          name="description"
          content="Facing a CRA audit or notice of objection? Cloud Tax Solutions provides expert representation and support to resolve CRA issues quickly and confidently."
        />
      </Helmet>
      {/* Breadcrumb Section */}
      <InnerBanner
        title="CRA Audits, Appeals & Notice of Objections"
        image="images/CRA_Audit/Image1.0.png"
        description="We’d love to hear from you. Get in touch with us today!"
      />
      {/* section 1 */}
      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 wow fadeInLeft">
              <img
                src="images/CRA_Audit/Image1.1.png"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">Expert Guidance for CRA Notices and Appeals</h2>
                <p>
                  Receiving a notice from the <strong>Canada Revenue Agency (CRA)</strong> can be
                  intimidating, but you don’t have to navigate it alone. At{' '}
                  <strong>Rajesh Kumar Sharma CPA Professional Corporation</strong>, we provide
                  expert assistance to ensure that you handle CRA audits, appeals, and objections
                  with confidence and accuracy.
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
                <img src="images/CRA_Audit/Image1.2.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6 text-left align-self-center">
              <div className="ml-3 mt-3">
                <h2 className="font-weight-bold">Comprehensive CRA Support</h2>
                <p className="mt-3">
                  Our team offers full support for CRA audits, appeals, and notice of objections. If
                  you’ve received an unfavorable decision or disagree with a CRA assessment, we
                  guide you through every step of the process, helping you protect your rights and
                  resolve issues efficiently.
                </p>
                <p>Our services include:</p>
                <ul className="list-unstyled mt-4 point-indent">
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Assistance and guidance through CRA audit processes</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Representation during appeals and objection procedures</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>
                      Strategic support to ensure compliance and maximize your chances of a
                      favorable outcome
                    </span>
                  </li>
                </ul>
                <p>
                  With our expertise, you can navigate government procedures confidently, knowing
                  your case is in capable hands.
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
                src="images/CRA_Audit/Image1.3.png"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">Why Choose Us</h2>
                <p>
                  By partnering with Rajesh Kumar Sharma CPA Professional Corporation, you gain a
                  knowledgeable ally experienced in managing CRA matters. We focus on clarity,
                  accuracy, and professional representation, ensuring your interactions with the CRA
                  are handled smoothly and effectively.
                </p>
                <p>
                  Contact us today to discuss your situation and learn how we can help you resolve
                  CRA assessments, objections, and audits with confidence.
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

export default CRA_audits;
