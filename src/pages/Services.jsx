// src/pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <>
      {/* Breadcrumb Section */}
      <section className="iq-breadcrumb text-left grey-bg">
        <div className="container">
          <div className="row flex-nowrap">
            <div className="col-lg-6 col-md-6 text-left align-self-center">
              <h2 className="mt-3 font-weight-bold">Services</h2>
              <p className="mt-3">
                Printer Ipsum has been the industry's standard dummy text ever since the 1500s, when
                an unknown printer took a galley.
              </p>
              <nav aria-label="breadcrumb" className="mt-3">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      <i className="fa fa-home" aria-hidden="true"></i> Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Services
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 col-md-6 wow fadeInRight">
              <img src="/images/about/07.png" className="img-fluid iq-pr-50" alt="about" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Provide */}
      <section className="service-provide Service-shap">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box">
                <h2 className="title font-weight-bold">Service Provide</h2>
                <p className="sub-title">
                  Simply dummy has been the industry's standard dummy text.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {[
              {
                img: '/images/services/01.png',
                title: 'Targeting Autonomous',
                text: 'There are many variations of passages of the have suffered in some form.',
              },
              {
                img: '/images/services/02.png',
                title: 'Media Buying',
                text: 'There are many variations of passages of the have suffered in some form.',
              },
              {
                img: '/images/services/03.png',
                title: 'Analytics & Insights',
                text: 'There are many variations of passages of the have suffered in some form.',
              },
              {
                img: '/images/services/04.png',
                title: 'Optimization & Testing',
                text: 'There are many variations of passages of the have suffered in some form.',
              },
              {
                img: '/images/services/05.png',
                title: 'Cross-Channel Execution',
                text: 'There are many variations of passages of the have suffered in some form.',
              },
              {
                img: '/images/services/06.png',
                title: 'Advanced Monitoring',
                text: 'There are many variations of passages of the have suffered in some form.',
              },
            ].map((service, idx) => (
              <div className="col-lg-4 col-md-4" key={idx}>
                <div className="rplr-30">
                  <div
                    className="future-services services text-center wow slideInUp"
                    data-wow-duration={`${0.5 * ((idx % 3) + 1)}s`}
                  >
                    <div className="future-img">
                      <img src={service.img} className="img-fluid mb-4" alt={service.title} />
                    </div>
                    <h4 className="mb-3">{service.title}</h4>
                    <p className="mb-0">{service.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Section */}
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12 mb-4 mb-lg-0">
              <h2 className="text-left text-blue mb-3">
                Fully Dedicated To Finding The Best Solution
              </h2>
              <p>
                There are many variations of passages of the have suffered in f the have suffered in
                some form.
              </p>

              <div className="iq-health-progbar text-left">
                {[
                  { name: 'Consultancy', percent: 60 },
                  { name: 'Improvemebnt', percent: 70 },
                  { name: 'Branching', percent: 80 },
                ].map((item, idx) => (
                  <div className="progressbar-content" key={idx}>
                    <h6>{item.name}</h6>
                    <span className="progress-value">{item.percent}%</span>
                    <div className="iq-progress-bar">
                      <span data-percent={item.percent}></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6 col-sm-12 text-right">
              <img src="/images/16.jpeg" className="img-fluid" alt="solution" />
            </div>
          </div>

          {/* Features Section */}
          <div className="row iq-pt-100">
            <div className="col-md-12">
              <div className="title-box text-center">
                <h2 className="title text-blue font-weight-bold">Our Great Features</h2>
                <p className="sub-title">
                  If you are planning on developing a product landing app or website, take a look at
                  this beautiful-crafted and error-free templates.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {[
              {
                icon: 'flaticon flaticon-calendar-1',
                title: 'Smart Banners',
                text: 'The passage is attributed to an a product 15th century who is thought to have .',
                color: 'purple-hover',
              },
              {
                icon: 'flaticon flaticon-browser-2',
                title: 'Smart Pages',
                text: 'Attributed to an unknown typesetter the passage is in the 15th century who is thought to have .',
                color: 'org-hover',
              },
              {
                icon: 'flaticon flaticon-search-1',
                title: 'Easy to Customize',
                text: 'Passage is in the 15th century who landing is thought to an unknown typesetter',
                color: 'green-hover',
              },
              {
                icon: 'flaticon flaticon-browser-2',
                title: 'Smart Pages',
                text: 'Attributed to an unknown typesetter the passage is in the 15th century who is thought to have .',
                color: 'org-hover mt-5 mt-md-0',
              },
              {
                icon: 'fa fa-calendar',
                title: 'Smart Banners',
                text: 'The passage is attributed to an a product 15th century who is thought to have .',
                color: 'purple-hover mt-5 mt-md-0',
              },
              {
                icon: 'flaticon flaticon-search-1',
                title: 'Easy to Customize',
                text: 'Passage is in the 15th century who landing have attributed to an unknown typesetter',
                color: 'green-hover mt-5 mt-md-0',
              },
            ].map((feature, idx) => (
              <div className="col-md-4" key={idx}>
                <div
                  className={`iq-ecom-circle-style ${feature.color} text-center wow fadeInUp`}
                  data-wow-duration="0.9s"
                >
                  <div className="dot-circle">
                    <div className="effect-circle"></div>
                    <div className="main-circle">
                      <div className="circle-bg circle-border1">
                        <i className={feature.icon}></i>
                      </div>
                    </div>
                  </div>
                  <h5>{feature.title}</h5>
                  <span>{feature.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
