// src/pages/About.jsx
import InnerBanner from '../components/InnerBanner';
import { Helmet } from 'react-helmet-async';
function About() {
  return (
    <main>
      <Helmet>
        <title>About Cloud Tax Solutions | Trusted Canadian Tax Experts</title>
        <meta
          name="description"
          content="Learn about Cloud Tax Solutions — a CPA-led firm offering expert tax, accounting, and advisory services to individuals and businesses across Canada."
        />
      </Helmet>
      {/* Breadcrumb Section */}
      <InnerBanner title="About Us" image="images/AboutUs/Image1.0.png" description="" />
      {/* About Section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 wow fadeInLeft">
              <img
                src="images/AboutUs/Image1.1.jpg"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <div className="iq_wrapper_header">
                  <h6>About Us</h6>
                  <h2 className="font-weight-bold">
                    Smart Financial Solutions for Businesses That Think Ahead
                  </h2>
                </div>
                <div className="iq_wrapper_content">
                  <p>
                    At Rajesh Kumar Sharma CPA Professional Corporation, we evaluate, craft, and
                    execute — turning complex financial challenges into clear, actionable
                    strategies. As a certified accounting and consulting firm, we deliver innovative
                    tax planning, compliance, and financial solutions to businesses.
                  </p>
                  <p>
                    Driven by expertise and efficiency, our team is committed to delivering
                    cost-effective, tailored results that create lasting value. We measure our
                    success not by short-term gains, but by the long-term growth and confidence of
                    our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Progress Section */}

      {/* Meet Our Founder Section */}
      <section className="founder-section">
        <div className="founder-info">
          <img
            src="./images/about/main.jpg" // Replace with the actual image path of Rajesh Kumar Sharma
            alt="Rajesh Kumar Sharma"
            className="founder-img"
          />
          <div className="founder-details">
            <h3>Meet Our Founder</h3>
            <h2>Rajesh Kumar Sharma, CPA</h2>
            <h4>Founder & Managing Partner, Rajesh Kumar Sharma CPA Professional Corporation</h4>
            <p>
              With over 25 years of Canadian and international experience, Rajesh Kumar Sharma, CPA
              (Chartered Professional Accountant), brings deep expertise in accounting, finance, and
              taxation. For more than 15 years, he has specialized in helping small and mid-sized
              corporations achieve financial success and compliance through strategic tax and
              accounting solutions.
            </p>
            <p>
              He leads a team skilled in business consulting, virtual CFO services, and the
              preparation of SR&ED, IRAP, and OVIN Government Grants. His proficiency also extends
              to Trust Filing, Estate Planning, and managing CRA audits across Corporate Tax,
              HST/GST, Payroll, WSIB, EHT, and SR&ED tax credits.
            </p>
            <p>
              Rajesh’s client-first approach and strong technical expertise continue to guide Rajesh
              Kumar Sharma CPA Professional Corporation toward excellence and long-term client
              success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="get-tips-tricks tricks-shap">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-md-6">
              <div className="tips-img wow fadeIn animated bounce slower">
                <img src="images/AboutUs/Image1.2.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6 text-left align-self-center">
              <div className="ml-3 mt-3">
                <h6>Our Expertise</h6>
                <h2 className="font-weight-bold">Accounting & Tax Services That Drive Results</h2>
                <p className="mt-3">
                  We help individuals and businesses navigate Canada’s tax system with clarity and
                  confidence. Our approach combines deep financial insight with technology-driven
                  accuracy to ensure your goals are met with precision.
                </p>
                <h5>Our Core Services Include:</h5>
                <div className="row row-text">
                  <div className="col-md-6">
                    <h4>Tax Filing & Planning</h4>
                    <p>
                      Precise tax filing with strategies to reduce liabilities and maximize returns.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h4>Accounting & Bookkeeping</h4>
                    <p>Efficient financial management and reporting for compliance and growth.</p>
                  </div>
                  <div className="col-md-6">
                    <h4>Payroll & Compliance</h4>
                    <p>Dependable payroll processing and compliance for smooth operations.</p>
                  </div>
                  <div className="col-md-6">
                    <h4>CRA Audit & Advisory</h4>
                    <p>Expert guidance and representation to protect and optimize your finances.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Assurance Section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 wow fadeInLeft">
              <img
                src="images/AboutUs/Image1.1.jpg"
                className="img-fluid pr-5"
                data-jarallax='{"speed": 0.6}'
                alt="About Details"
              />
            </div>
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <div className="iq_wrapper_column">
                <h6>Our Assurance</h6>
                <h2 className="font-weight-bold">Your Success, Our Commitment</h2>
                <p>
                  We build long-term partnerships grounded in trust, transparency, and tangible
                  results. Our proven methodology ensures every client receives personalized
                  attention, proactive solutions, and measurable impact.
                </p>
                <h6>Why Choose Rajesh Kumar Sharma CPA Professional Corporation:</h6>
                {/* ========== Changed for responsiveness ========== */}
                <ul className="custom-bullet-grid">
                  <li>100% Client-Focused Approach</li>
                  <li>Transparent Pricing & Communication</li>
                  <li>Experienced, Certified Professionals</li>
                  <li>Tailored Financial Strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/*
      <section id="team" className="pt-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box">
                <h2 className="title font-weight-bold">Our Team</h2>
                <p className="sub-title">
                  Simply dummy has been the industry's standard dummy text.
                </p>
              </div>
            </div>
          </div>
*/}
      {/* Four team members */}
      {/*
          <div className="row">
            {[
              { img: "images/bg/01.jpg", name: "Js Adams", role: "Web Designer" },
              { img: "images/bg/04.jpg", name: "Maecal Oberoi", role: "Web Designer" },
              { img: "images/bg/03.jpg", name: "Jason Deol", role: "Web Designer" },
              { img: "images/bg/02.jpg", name: "Js Adams", role: "Web Designer" },
            ].map((member, i) => (
              <div className="col-sm-12 col-lg-3 col-md-6" key={i}>
                <div className="iq-team wow slideInUp" data-wow-duration={`${0.5 * (i + 1)}s`}>
                  <div className="iq-team-img">
                    <img src={member.img} className="img-fluid center-block" alt={member.name} />
                  </div>
                  <div className="iq-team-info text-center">
                    <h5>{member.name}</h5>
                    <span className="team-post iq-tw-5">{member.role}</span>
                  </div>
                  <div className="share">
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-google"></i></a></li>
                      <li><a href="#"><i className="fab fa-github"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
*/}

      {/* Clients Section */}
      {/*
      <section className="iq-clients pt-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box">
                <h2 className="title font-weight-bold">They Trust Me</h2>
                <p className="sub-title">
                  Simply dummy has been the industry's standard dummy text.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div
                className="owl-carousel"
                data-autoplay="true"
                data-loop="true"
                data-nav="false"
                data-dots="true"
                data-items="6"
                data-items-laptop="5"
                data-items-tab="3"
                data-items-mobile="2"
                data-items-mobile-sm="1"
              >
                {[
                  "clients-img1.png",
                  "clients-img2.png",
                  "clients-img3.png",
                  "clients-img4.png",
                  "clients-img5.png",
                  "clients-img6.png",
                ].map((img, i) => (
                  <div className="item" key={i}>
                    <div className="clients-box">
                      <img
                        className="img-fluid client-img"
                        src={`images/clients/${img}`}
                        alt="client"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
*/}
    </main>
  );
}

export default About;
