import React, { Component } from "react";
import axios from "axios";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import { API_ENDPOINT } from "../../constant";
import { Container, Row, Col, Card } from "react-bootstrap";

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
    };
  }

  componentDidMount() {
    this.getStats();
  }

  getStats = () => {
    axios
      .get(`${API_ENDPOINT}/admin/bookings`, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          var data = response.data.bookings;
          this.setState({ bookings: data });
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { handleLogout } = this.props;
    const { bookings } = this.state;

    return (
      <>
        <Header handleLogout={handleLogout} />
        <Sidebar />
        <Container fluid className="ucmain-content">
          <Row>
            <Col lg="12" className="pr-0">
              <div className="ucinner__content">
                <Row className="mx-0 mt-3">
                  <Col md="12">
                    <Card>
                      <Card.Body>
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
                          <h1 className="h2">Bookings</h1>
                        </div>
                        <div className="table-responsive">
                          <table className="table table-striped table-sm">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Booking Date</th>
                                <th>Timeslot</th>
                                <th>Patient</th>
                                <th>Therapist</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {bookings.map((booking) => {
                                return (
                                  <tr key={`booking-${booking.id}`}>
                                    <td>{booking.id}</td>
                                    <td>
                                      {booking.book_date
                                        ? booking.book_date.split("T")[0]
                                        : ""}
                                    </td>
                                    <td>{booking.timeslot}</td>
                                    <td>
                                      {booking.user
                                        ? `${booking.user.first_name} ${booking.user.last_name}`
                                        : ""}
                                      <br />
                                      <small>{booking.user ? booking.user.username : ''}</small>
                                    </td>
                                    <td>
                                      {booking.doctor
                                        ? booking.doctor.name
                                        : ""}
                                    </td>
                                    <td>
                                      <span className="badge badge-primary">
                                        {booking.status}
                                      </span>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Booking;
