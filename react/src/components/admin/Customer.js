import React, { Component } from "react";
import axios from "axios";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import { API_ENDPOINT, IMAGE_ENDPOINT } from "../../constant";
import { Container, Row, Col, Card } from "react-bootstrap";
import Placeholder from "../../assets/img/profile-placeholder.png";

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get(`${API_ENDPOINT}/admin/users?role=0`, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          var data = response.data.users;
          this.setState({ users: data });
        }
      })
      .catch((error) => console.log(error));
  };

  onChange = (id, e) => {
    axios
      .put(
        `${API_ENDPOINT}/admin/users/${id}/update_status?active=${e.target.value}`,
        {},
        { "Content-Type": "multipart/form-data", withCredentials: true }
      )
      .then((response) => {
        this.props.showToast(1, "User status updated.");
        this.getData();
      })
      .catch((response) => {
        this.props.showToast(2, "Unbale to update User Status.");
        console.log(response);
      });
  };

  render() {
    const { handleLogout } = this.props;
    const { users } = this.state;

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
                          <h1 className="h2">Patients</h1>
                        </div>
                        <div className="table-responsive">
                          <table className="table table-striped table-sm">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Photo</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Certificate</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {users.map((user) => {
                                return (
                                  <tr key={`user-${user.id}`}>
                                    <td>{user.id}</td>
                                    <td>
                                      <img
                                        src={
                                          user.image
                                            ? IMAGE_ENDPOINT + user.image
                                            : Placeholder
                                        }
                                        width="60"
                                        alt="avatar"
                                      />
                                    </td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                      {user.role.toLowerCase() === 'therapist' && user.doctor.certificate ?
                                        <a href={IMAGE_ENDPOINT + user.doctor.certificate} target="_blank" rel="noopener noreferrer" className="text-primary">view certificate</a>
                                      : 'N/A'
                                      }
                                    </td>
                                    <td>
                                      <select
                                        className="form-control"
                                        onChange={(e) =>
                                          this.onChange(user.id, e)
                                        }
                                      >
                                        <option
                                          value={true}
                                          defaultValue={user.active}
                                        >
                                          Active
                                        </option>
                                        <option
                                          value={false}
                                          defaultValue={!user.active}
                                        >
                                          Inactive
                                        </option>
                                      </select>
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

export default Customer;
