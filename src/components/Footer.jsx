// src/components/Footer.jsx
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id="contact" className="main-bg">
      <div className="container">
        <div className="row">
          {/* Logo and Company Info */}
          <div className="col-md-4">
            <div className="footer-logo mb-3">
              <Link to="/">
                <img
                  className="footerLogo"
                  src="/images/logo.png"
                  alt="Rajesh Kumar Sharma CPA Professional Corporation Logo"
                />
              </Link>
            </div>
            <p className="text-white">
              We are a certified professional accounting firm and leading consultancy that provides
              innovative and strategic services to a diverse client base.
            </p>
            {/* Social Icons */}
            <div className="social-icone mt-3">
              <ul className="d-flex align-items-center list-unstyled p-0 m-0">
                <li className="d-inline mr-2">
                  {/*<a href="#"><img src="/images/facebook.png" alt="Facebook" width="24" /></a>*/}
                  <a className="" target="_blank">
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fab-facebook"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                    </svg>{' '}
                  </a>
                </li>
                <li className="d-inline mr-2">
                  {/*<a href="#"><img src="/images/twitter.png" alt="Twitter" width="24" /></a>*/}
                  <a
                    className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-242140a"
                    target="_blank"
                  >
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fab-twitter"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>{' '}
                  </a>
                </li>
                <li className="d-inline mr-2">
                  {/*<a href="#"><img src="/images/instagram.png" alt="Instagram" width="24" /></a>*/}
                  <a
                    className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-15da6ef"
                    target="_blank"
                  >
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fab-instagram"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>{' '}
                  </a>
                </li>
                <li className="d-inline mr-2">
                  {/*<a href="#"><img src="/images/youtube.png" alt="YouTube" width="24" /></a>*/}
                  <a
                    className="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-a012852"
                    target="_blank"
                  >
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fab-youtube"
                      viewBox="0 0 576 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                    </svg>{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h5 className="text-white">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="text-white" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/about-us">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/services">
                  Services
                </Link>
              </li>
              {/*<li><Link className="text-white" to="/faqs">FAQs</Link></li>*/}
              <li>
                <Link className="text-white" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="col-md-3">
            <h5 className="text-white">Services</h5>
            <ul className="list-unstyled two-column">
              <li>
                <Link className="text-white" to="Accounts_book_keeping">
                  Accounting and Bookkeeping
                </Link>
              </li>
              <li>
                <Link className="text-white" to="Payroll_services">
                  Payroll Services
                </Link>
              </li>
              <li>
                <Link className="text-white" to="Corporate_tax">
                  Corporate Tax
                </Link>
              </li>
              <li>
                <Link className="text-white" to="Individual_tax">
                  Individual Tax
                </Link>
              </li>
              <li>
                <Link className="text-white" to="Estate_and_tax_planning">
                  Estate and Tax Planning
                </Link>
              </li>
              <li>
                <Link className="text-white" to="Business_advisory">
                  Business Advisory
                </Link>
              </li>
              <li>
                <Link className="text-white" to="Virtual_CFO_services">
                  Virtual CFO Services
                </Link>
              </li>
              <li>
                <Link className="text-white" to="Restaurant_franchise_accounting">
                  Restaurant | Franchise
                </Link>
              </li>
              <li>
                <Link className="text-white" to="HST_rebate">
                  HST Rebate
                </Link>
              </li>
              <li>
                <Link className="text-white" to="SRED_consulting">
                  SR&ED Consulting
                </Link>
              </li>
              <li>
                <Link className="text-white" to="Small_business_loans">
                  Small Business Loans
                </Link>
              </li>
              <li>
                <Link className="text-white" to="Business_startup_and_incorporation">
                  Business Incorporation
                </Link>
              </li>
              <li>
                <Link className="text-white" to="CRA_audits">
                  CRA Audits, Appeals & Notice of Objections
                </Link>
              </li>
              <li>
                <Link className="text-white" to="Sale_and_purchase_of_business">
                  Sale and Purchase of Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h5 className="text-white">Information</h5>
            <ul className="location-info list-unstyled text-white">
              <li>
                <img
                  src="/images/phone_icon.svg"
                  alt="Phone"
                  width="16"
                  className="info-icon mr-2"
                />
                <div className="info-icon-text">
                  <div>Phone</div>
                  <div>416.708.5881</div>
                </div>
              </li>
              <li className="mt-2">
                <img
                  src="/images/email_icon.svg"
                  alt="Email"
                  width="16"
                  className="info-icon mr-2"
                />
                <div className="info-icon-text">
                  <div>Email</div>
                  <div>Rajesh.sharmacpa@cloudtaxsolutions.com</div>
                </div>
              </li>
              <li className="mt-2">
                <img
                  src="/images/location_icon.svg"
                  alt="Location"
                  width="16"
                  className="info-icon mr-2"
                />
                <div className="info-icon-text">
                  <div>Location</div>
                  <div>111 Ballantyne Blvd, Vaughan ON, L3L 0E8</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="pt-4 border-light" />

        {/* Bottom Row */}
        <div className="row justify-content-between align-items-center pb-3">
          <div className="col-auto">
            <p className="text-white iq-font-16">Copyright © 2024 — All Rights Reserved</p>
          </div>
          {/*}
          <div className="col-auto">
            <h6 className="text-white iq-font-16">
              Design By <a href="https://iqonicthemes.com/" target="_blank" rel="noreferrer">iqonictheme.com</a>
            </h6>
          </div>
          */}
        </div>
      </div>

      {/* Back to Top */}
      {/*================================= TRIAL =================================*/}
      {/*<div id="back-to-top">
        <a className="top" id="top" href="#top">
          <span>Scroll Up</span> <i className="ion-ios-arrow-thin-up"></i>
        </a>
      </div>*/}
      {/* Back to Top */}
      <div id="back-to-top">
        <button
          className="back-to-top-button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span>Scroll Up</span> <i className="ion-ios-arrow-thin-up"></i>
        </button>
      </div>
      {/*================================= TRIAL =================================*/}

      {/* Cookie Banner */}
      <div id="cookie_div" className="align-items-center">
        We use cookies to give you tailored experiences on our website.
        <a className="button grey text-right ml-3" href="#" role="button" id="cookie">
          Accept
        </a>
      </div>
    </footer>
  );
}

export default Footer;
