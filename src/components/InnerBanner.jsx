// src/components/Breadcrumb.jsx
import React from "react";
import PropTypes from "prop-types";

function InnerBanner({ title, image, description }) {
  return (
    <section className="iq-breadcrumb text-left green-bg">
      <div className="container">
        <div className="row flex-wrap">
          <div className="col-lg-6 col-md-6 text-left align-self-center">
            <h2 className="mt-3 font-weight-bold">{title}</h2>

            {/* Optional description */}
            {description && <p className="mt-3">{description}</p>}

            {/* Breadcrumb Navigation */}
            <nav aria-label="breadcrumb" className="mt-3">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">
                    <i className="fa fa-home" aria-hidden="true"></i> Home
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {title}
                </li>
              </ol>
            </nav>
          </div>

          {/* Optional image */}
          {image && (
            <div className="col-lg-6 col-md-6 wow fadeInRight">
              <img
                src={image}
                className="img-fluid iq-pr-50"
                alt={title}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Prop validation (optional but good practice)
InnerBanner.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default InnerBanner;
