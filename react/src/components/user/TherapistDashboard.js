import React, { Component } from "react";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import { API_ENDPOINT } from "../../constant";

class TherapistDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.getAppointments();
  }

  getAppointments = () => {
    axios
      .get(`${API_ENDPOINT}/doctors/total_payments`, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          var data = response.data;
          this.setState({ data: data });
        }
      })
      .catch((error) => console.log(error));
  };

  gotoBookings = () => {
    this.props.history.push("/customer-bookings");
  };

  render() {
    const { loggedInStatus, user, handleLogout } = this.props;
    const { data } = this.state;

    return (
      <div>
        <Header loggedInStatus={loggedInStatus} user={user} isInner={true} handleLogout={handleLogout} />
        <section id="therapists">
          <div className="container">
            <div className="therapists-content pt-5 pb-2">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-center pt-5 pb-2">
                    <h2>Dashboard</h2>
                  </div>
                  <hr />
                </div>
                <div className="col-md-12">
                  <div className="row text-center">
                    <div
                      className="col-md-6"
                      onClick={() => this.gotoBookings()}
                    >
                      <div className="card bg-primary text-white p-4 mt-3 mb-4">
                        <i
                          className="fa fa-check-circle fa-5x"
                          aria-hidden="true"
                        ></i>
                        <hr />
                        <h3 className="text-white">
                          Total Booking : {data.total_bookings}
                        </h3>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card bg-warning text-white p-4 mt-3 mb-4">
                        <i className="fa fa-usd fa-5x" aria-hidden="true"></i>
                        <hr />
                        <h3 className="text-white">
                          Total Sales: {data.total_payment}
                        </h3>
                      </div>
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
  }
}

export default TherapistDashboard;
