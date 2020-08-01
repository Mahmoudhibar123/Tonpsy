import React, { Component } from "react";
import axios from "axios";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import { API_ENDPOINT } from "../../constant";
import { Container, Row, Col, Card } from "react-bootstrap";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const { loggedInStatus } = this.props;
    if(!loggedInStatus) {
      this.props.history.push("/auth/login");
    }
    this.getStats();
  }

  getStats = () => {
    axios
      .get(`${API_ENDPOINT}/admin/dashboard`, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          var data = response.data;
          this.setState({ data: data });
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { handleLogout } = this.props;
    const { data } = this.state;

    return (
      <>
        <Header handleLogout={handleLogout} />
        <Sidebar />
        <Container fluid className="ucmain-content">
          <Row>
            <Col lg="12" className="pr-0">
              <div className="ucinner__content">
                <Row className="mx-0 mt-3">
                  <Col md="6">
                    <Card className="mb-3">
                      <Card.Body>
                        <Row>
                          <Col xs>
                            <Card.Title>{data.bookings_count}</Card.Title>
                            <Card.Text>
                              <span>Total Bookings</span>
                            </Card.Text>
                          </Col>
                          <Col xs="auto" className="text-danger">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="64"
                              height="64"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-file"
                            >
                              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                              <polyline points="13 2 13 9 20 9"></polyline>
                            </svg>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="mb-3">
                      <Card.Body>
                        <Row>
                          <Col xs>
                            <Card.Title>{data.total_customers}</Card.Title>
                            <Card.Text>
                              <span>Total Customers</span>
                            </Card.Text>
                          </Col>
                          <Col xs="auto" className="text-info">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="64"
                              height="64"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-users"
                            >
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="mb-3">
                      <Card.Body>
                        <Row>
                          <Col xs>
                            {" "}
                            <Card.Title>{data.total_therapists}</Card.Title>
                            <Card.Text>
                              <span>Total Therapists</span>
                            </Card.Text>
                          </Col>
                          <Col xs="auto" className="text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="64"
                              height="64"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-users"
                            >
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="mb-3">
                      <Card.Body>
                        <Row>
                          <Col xs>
                            <Card.Title>
                              {" "}
                              ${" "}
                              {data.total_sales
                                ? data.total_sales.toFixed(2)
                                : ""}
                            </Card.Title>
                            <Card.Text>
                              <span>Total Sales</span>
                            </Card.Text>
                          </Col>
                          <Col xs="auto" className="text-warning">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="64"
                              height="64"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-bar-chart-2"
                            >
                              <line x1="18" y1="20" x2="18" y2="10"></line>
                              <line x1="12" y1="20" x2="12" y2="4"></line>
                              <line x1="6" y1="20" x2="6" y2="14"></line>
                            </svg>
                          </Col>
                        </Row>
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

export default AdminDashboard;
