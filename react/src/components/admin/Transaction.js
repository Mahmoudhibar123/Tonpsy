import React, { Component } from "react";
import axios from "axios";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import { API_ENDPOINT } from "../../constant";
import { Container, Row, Col, Card } from "react-bootstrap";

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };
  }

  componentDidMount() {
    this.getStats();
  }

  getStats = () => {
    axios
      .get(`${API_ENDPOINT}/admin/payments`, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          var data = response.data.payments;
          this.setState({ transactions: data });
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { handleLogout } = this.props;
    const { transactions } = this.state;

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
                          <h1 className="h2">Transactions</h1>
                        </div>
                        <div className="table-responsive">
                          <table className="table table-striped table-sm">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Transaction Id</th>
                                <th>Amount</th>
                                <th>Patient</th>
                                <th>Transaction Date</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {transactions.map((transaction) => {
                                return (
                                  <tr key={`transaction-${transaction.id}`}>
                                    <td>{transaction.id}</td>
                                    <td>{transaction.transaction_id}</td>
                                    <td>
                                      {transaction.amount}{" "}
                                      {transaction.currency}
                                    </td>
                                    <td>
                                      {transaction.user
                                        ? `${transaction.user.first_name} ${transaction.user.last_name}`
                                        : ""}
                                      <br />
                                      <small>{transaction.user.username}</small>
                                    </td>
                                    <td>
                                      {transaction.payment_date
                                        ? transaction.payment_date.split("T")[0]
                                        : ""}
                                    </td>
                                    <td>
                                      <span className="badge badge-primary">
                                        {transaction.status === 1
                                          ? "SUCCESS"
                                          : "FAILED"}
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

export default Transaction;
