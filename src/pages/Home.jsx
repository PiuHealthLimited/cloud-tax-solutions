import React from "react";
import Banner from "../components/Banner";
import { Helmet } from 'react-helmet-async';
function Home() {

  const services = [
    { name: "Accounting and Bookkeeping", link: "Accounts_book_keeping" },
    { name: "Payroll Services", link: "Payroll_services" },
    { name: "Corporate Tax", link: "Corporate_tax" },
    { name: "Individual Tax", link: "Individual_tax" },
    { name: "Estate and Tax Planning", link: "Estate_and_tax_planning" },
    { name: "Business Advisory", link: "Business_advisory" },
    { name: "Virtual CFO Services", link: "Virtual_CFO_services" },
    { name: "Restaurant | Franchise", link: "Restaurant_franchise_accounting" },
    { name: "HST Rebate", link: "HST_rebate" },
    { name: "SR&ED Consulting", link: "SRED_consulting" },
    { name: "Small Business Loans", link: "Small_business_loans" },
    { name: "Business Incorporation", link: "Business_startup_and_incorporation" },
    { name: "CRA Audits, Appeals & Notice of Objections", link: "CRA_audits" },
    { name: "Sale and Purchase of Business", link: "Sale_and_purchase_of_business" }
  ];

  return (
    <>
    <Helmet>
      {/* <title>Home | Rajesh Kumar Sharma CPA</title> */}
      <title>Cloud Tax Solutions | Expert Tax & Accounting in Canada</title>
      <meta name="description" content="Simplify taxes and grow your business with Cloud Tax Solutions. Trusted experts in tax filing, bookkeeping, and advisory services across Canada." />
    </Helmet>
    <Banner />        
      {/* MAIN CONTENT */}
      <div className="main-content">
        {/*===================== Our Services Grid HTML(Home Page) =====================*/}
        <section className="uneven-grid-section"> {/* Removed inline CSS */}
          <div className="container">
            <div className="OurServicesHeader">
              <h2 className="section-header">Our Services</h2>
            </div>
            <div className="row grid-container">
              {/* Dynamically render the services list */}
              {services.map((service, i) => {
                // ✅ Identify last two items to apply custom placement classes
                const isSecondLast = i === services.length - 2;
                const isLast = i === services.length - 1;

                return (
                  <div
                    key={i}
                    className={`grid-item 
                      ${isSecondLast ? 'place-start' : ''}  /* ✅ Apply class to second-last item */
                      ${isLast ? 'place-end' : ''}           /* ✅ Apply class to last item */
                    `}
                  >
                  <h4>
                      <a href={service.link} className="grid-link">
                        {service.name}
                      </a>
                  </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/*===================== Our Services Grid HTML(Home Page) =====================*/}

        {/* How It Works */}
        <section className="how-it-works conection-shap iq-primary-green">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div
                  className="future-services text-center wow slideInUp"
                  data-wow-duration="0.5s"
                >
                  <div className="future-img">
                    <img
                      /*src="images/feature/01.png"*/
                      src="images/HomePage/Image1.1.png"
                      className="img-fluid mb-4"
                      alt=""
                    />
                  </div>
                  <h4 className="mb-3">Reliable Support</h4>
                  <p className="mb-0">
                    From bookkeeping to CRA audits, we guide you through every step with precision and personal care.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div
                  className="future-services text-center wow slideInUp"
                  data-wow-duration="1s"
                >
                  <div className="future-img">
                    <img
                      /*src="images/feature/02.png"*/
                      src="images/HomePage/Image1.2.png"
                      className="img-fluid mb-4"
                      alt=""
                    />
                  </div>
                  <h4 className="mb-3">Personalized Solutions</h4>
                  <p className="mb-0">
                    Custom tax and accounting strategies designed to save you time, money, and stress.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div
                  className="future-services text-center wow slideInUp"
                  data-wow-duration="1.5s"
                >
                  <div className="future-img">
                    <img
                      /*src="images/feature/03.png"*/
                      src="images/HomePage/Image1.3.png"
                      className="img-fluid mb-4"
                      alt=""
                    />
                  </div>
                  <h4 className="mb-3">Smart Business Insights</h4>
                  <p className="mb-0">
                    Financial clarity for better decisions — from payroll management to advisory services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How It Works */}

        {/* Easy Pricing Plans */}
        <section className="pt-0 finding-shap">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="fully-dedicated wow slideInLeft">
                  <img
                    src="images/feature/04.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6 text-left align-self-center">
                <div className="ml-3 mt-3">
                  <h6>Say Hello to the Future of Accounting</h6>
                  <h2 className="font-weight-bold">Modern Accounting Made Simple</h2>
                  <p className="mt-3">
                    Rajesh Kumar Sharma CPA Professional Corporation combines cloud-based tools with expert guidance to make your financial management faster, smarter, and stress-free.
                  </p>
                  <div className="row row-text">
                    <div className="col-md-6">
                      <h4>Cloud Accounting</h4>
                      <p>Access your books anytime, anywhere.</p>
                    </div>
                    <div className="col-md-6">
                      <h4>Automated Tax Filing</h4>
                      <p>Reduce errors and file confidently.</p>
                    </div>
                    <div className="col-md-6">
                      <h4>Insightful Reporting</h4>
                      <p> Make decisions backed by real financial data.</p>
                    </div>
                    <div className="col-md-6">
                      <h4>Certified Experts</h4>
                      <p>Work with accountants who know Canadian tax laws.</p>
                    </div>
                  </div>
                  <a className="button mt-3" href="#">
                     Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Easy Pricing Plans */}

        {/* Counter */}
        <section className="main-bg counter">
          <div className="container">
            <div className="row iq-counter3 text-center">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="iq-counter iq-pt-30 iq-rmb-30">
                  <span className="timer text-white" data-to="575" data-speed="5000">
                    500+
                  </span>
                  <h6 className="mt-3 text-white">Happy Clients</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="iq-counter iq-pt-30 iq-rmb-30">
                  <span className="timer text-white" data-to="1540" data-speed="5000">
                    $40M+
                  </span>
                  <h6 className="mt-3 text-white">in Taxes Managed</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="iq-counter iq-pt-30 iq-rmb-30">
                  <span className="timer text-white" data-to="110" data-speed="5000">
                    2000+
                  </span>
                  <h6 className="mt-3 text-white">Tax Filings Completed</h6>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="iq-counter iq-pt-30">
                  <span className="timer text-white" data-to="90" data-speed="5000">
                    98%
                  </span>
                  <h6 className="mt-3 text-white">Client Satisfaction</h6>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips & Tricks */}
        <section className="get-tips-tricks tricks-shap">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-md-6">
                <div className="tips-img wow fadeIn animated bounce slower">
                  <img src="images/feature/05.png" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-md-6 text-left align-self-center">
                <div className="ml-3 mt-3">
                  <h6>Advanced & Powerful Services</h6>
                  <h2 className="font-weight-bold">Comprehensive Tax & Accounting Services</h2>
                  <p className="mt-3">
                    From individuals to corporations, we handle your every financial need.
                  </p>
                  <div className="row row-text">
                    <div className="col-md-6">
                      <h4>Accounting & Bookkeeping</h4>
                      <p>Keep finances organized with reliable bookkeeping and reporting.</p>
                    </div>
                    <div className="col-md-6">
                      <h4>Corporate & Personal Tax</h4>
                      <p>Accurate filing and maximized deductions for businesses and individuals.</p>
                    </div>
                    <div className="col-md-6">
                      <h4>Payroll Services</h4>
                      <p> Simplify payroll with timely salary and tax remittance management.</p>
                    </div>
                    <div className="col-md-6">
                      <h4>CRA Audits & Appeals</h4>
                      <p>Professional representation and guidance during audits and disputes.</p>
                    </div>
                  </div>
                  {/*
                  <a className="button mt-3" href="#">
                    Get Started
                  </a>
                  */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="service-provide Service-shap iq-primary-green">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box">
                  <h4 className="title font-  weight-bold">Why Choose Us</h4>
                  <h2 className="title font-  weight-bold">Trusted by Businesses Across Canada</h2>
                  <p className="sub-title">
                    Expertise, transparency, and local knowledge — why 600+ clients rely on Rajesh Kumar Sharma CPA Professional Corporation.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {[...Array(4)].map((_, i) => (
                <div className="col-lg-3 col-md-3" key={i}>
                  <div className="rplr-30">
                    <div
                      className="future-services services text-center wow slideInUp"
                      data-wow-duration={`${0.5 * (i + 1)}s`}
                    >
                      <div className="future-img">
                        <img
                          src={`images/HomePage/0${i + 1}.png`}
                          className="img-fluid mb-4"
                          alt=""
                        />
                      </div>
                      {/*
                      <h4 className="mb-3">
                        {[
                          "Targeting Autonomous",
                          "Media Buying",
                          "Analytics & Insights",
                          "Optimization & Testing",
                          "Cross-Channel Execution",
                          "Advanced Monitoring",
                        ][i]}
                      </h4>
                      */}
                      <p className="mb-0">
                        {[
                          "Certified accountants with 15+ years of experience",
                          "Tailored solutions for individuals and SMEs",
                          "Full compliance with Canadian tax laws",
                          "Serving cities across Canada",
                        ][i]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="whyChooseButton">
            <a className="button mt-3" href="#">
              Schedule a Free Consultation
            </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;