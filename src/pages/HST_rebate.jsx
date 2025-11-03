// src/pages/Services.jsx
import InnerBanner from '../components/InnerBanner';
import ServiceForm from '../components/ServiceForm';
import { Helmet } from 'react-helmet-async';
function HST_rebate() {
  return (
    <main>
      <Helmet>
        <title>HST Rebate Assistance in Canada | Cloud Tax Solutions</title>
        <meta
          name="description"
          content="Claim your HST rebate with expert help. Cloud Tax Solutions assists Canadians with eligibility, filing, and maximizing GST/HST rebate refunds."
        />
      </Helmet>
      {/* Breadcrumb Section */}
      <InnerBanner
        title="HST Rebate"
        image="images/HST_Rebate/Image1.0.png"
        description="We’d love to hear from you. Get in touch with us today!"
      />
      {/* section 1 */}
      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 wow fadeInLeft">
              <img
                src="images/HST_Rebate/Image1.1.png"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">Expert Assistance for Your HST Rebate Claims</h2>
                <p>
                  At Rajesh Kumar Sharma CPA Professional Corporation, our accounting services
                  include specialized assistance with HST rebate claims, helping individuals and
                  businesses recover overpaid amounts and access available rebates under the GST/HST
                  system.
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
                <img src="images/HST_Rebate/Image1.2.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6 text-left align-self-center">
              <div className="ml-3 mt-3">
                <h2 className="font-weight-bold">Understanding the HST Rebate</h2>
                <p className="mt-3">
                  The GST/HST system offers various rebate options designed to recover amounts paid
                  in error or provide targeted relief to eligible taxpayers. One of the most common
                  rebates is the HST New Housing Rebate, which allows qualifying homeowners to
                  recover a portion of the HST paid on a new or substantially renovated property.
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
                src="images/HST_Rebate/Image1.3.jpg"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">HST New Housing Rebate Overview</h2>
                <p>
                  When you purchase a new or substantially renovated home from a builder—or hire a
                  builder to construct on your land—you may qualify for a rebate that includes two
                  components:
                </p>
                <ul className="list-unstyled mt-4 point-indent">
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>
                      <strong>Federal Rebate (5%)</strong> - Applicable on the federal portion of
                      the HST. The rebate amount is adjusted for homes priced above $450,000.
                    </span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>
                      <strong>Provincial Rebate (8%)</strong> - In Ontario, this applies to the
                      provincial portion of HST on homes used as a primary residence by the
                      purchaser or an immediate family member. This rebate allows for up to $24,000
                      with no claw-back for eligible homes.
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
                <img src="images/HST_Rebate/Image1.4.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6 text-left align-self-center">
              <div className="ml-3 mt-3">
                <h2 className="font-weight-bold">Timelines and Eligibility Considerations</h2>
                <p className="mt-3">
                  Strict deadlines apply to the HST New Housing Rebate—applications typically must
                  be submitted within two years of the purchase or occupancy date. However,
                  determining the occupancy date can sometimes be complex, requiring careful review
                  and documentation.
                </p>
                <p>
                  Our experienced professionals ensure accurate eligibility assessment, timely
                  submissions, and proper filing to help you maximize your rebate while remaining
                  fully compliant with CRA requirements.
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
                src="images/HST_Rebate/Image1.5.jpg"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h2 className="font-weight-bold">Partner with Us for HST Rebate Assistance</h2>
                <p>
                  Whether you’re applying for an HST rebate on a new home, renovation, or other
                  qualifying circumstance, our team provides clear guidance and reliable support.
                </p>
                <p>
                  Contact us today to discuss your eligibility and learn how Rajesh Kumar Sharma CPA
                  Professional Corporation can simplify your HST rebate process.
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

export default HST_rebate;
