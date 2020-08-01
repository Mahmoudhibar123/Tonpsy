import React from "react";
import Img from "./../assets/img/verified-icon_2x.png";
import therapists from "./../assets/img/therapists-grid_2x.png";
import Header from "./Header";
import Footer from "./Footer";

const Home = props => {
  return (
    <div>
      <Header
        loggedInStatus={props.loggedInStatus}
        user={props.user}
        isInner={false}
        handleLogout={props.handleLogout}
      />
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div className="blue-blob">
                <h1>Join 1 million Talkspace Users</h1>
                <h2>Feeling better starts with a single message</h2>
                <a href="/" type="button" className="btn btn-primary green-btn">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="therapists">
        <div className="container">
          <div className="therapists-content py-5">
            <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0 order-lg-2">
                <img src={therapists} alt="" className="therapists-img" />
                <div className="half-join">
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-4">
                    <div className="therapists-content-header">
                      <span>Licensed</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="therapists-content-header">
                      <span>Experienced</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="therapists-content-header" style={{ display: "flex" }}>
                      <span>Verified</span>
                      <span>
                        <img src={Img} alt="" className="header-img" />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="therapists-content-text">Meet our thousands of licensed therapists</div>
                    <div className="section-description">
                      <p>
                        All of our therapists are licensed, verified and background-checked. Working with a Talkspace therapist
                        will give you an unbiased, trained prespective and provide you with the guidance and tools to help you
                        feel better. When it comes to your mental health, the right therapist makes all the difference.
                      </p>
                    </div>
                    <a href="/" type="button" className="btn-primary green-btn login-modal">
                      Get matched now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
