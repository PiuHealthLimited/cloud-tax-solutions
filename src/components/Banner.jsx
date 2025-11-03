// src/components/Banner.jsx
function Banner() {
  return (
    <div className="banner">
      <div className="bannercontainer container-fluid">
        <div className="row">
          {/* Left Text */}
          <div className="col-lg-7 col-md-14 col-sm-12">
            <div className="banner-text">
              <div className="slide-in-text">
                <div className="homeDegreeImage">
                  <div className="degreeLogoDiv col-lg-4 col-md-6 col-sm-12">
                  {/*<img src="./images/CPALogoHomePage.png" width="100%" alt="DegreeImage" className="degreeLogo mb-3" /></div>*/}
                  <img src="./images/HomePage/Image1.7.png" width="100%" alt="DegreeImage" className="degreeLogo mb-3" /></div>
                  <div className="degreeTextDiv col-lg-8 col-md-6 col-sm-12">
                <h2 className="homeHeroHeading main-color mb-3">
                  Rajesh Kumar Sharma CPA Professional Corporation
                </h2></div>
                </div>
                <h4 className="font-weight-bold mb-3">
                  Simplifying Taxes. Empowering Businesses.
                </h4>
                <div className="homeSubheaderText">
                <h5>Rajesh Kumar Sharma CPA Professional Corporation provides expert tax filing, bookkeeping, and advisory services tailored for individuals and small businesses across Canada.</h5>
                </div>
              </div>
              <br />
              <div className="align-items-center d-flex">
                <a className="button" href="#">
                  Get Started Today
                </a>
              </div>
            </div>

          </div>

          {/* Right Image */}
          <div className="col-lg-5 col-md-10 col-sm-12">
            <div className="banner-type wow fadeInRight">
              <img
                className="img-fluid banner-person"
                /*src="/images/banner/03.png"*/
                src="/images/HomePage/Image1.0.png"
                alt="Banner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
