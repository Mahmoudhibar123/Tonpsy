import React, { Component } from "react";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import { API_ENDPOINT, IMAGE_ENDPOINT } from "../../constant";

class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      fees: "",
      treatment: "",
    };
  }

  componentDidMount() {
    this.getDoctor();
  }

  getDoctor = () => {
    const { fees, treatment } = this.state;

    axios
      .get(`${API_ENDPOINT}/doctors?fees=${fees}&treatment=${treatment}`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          var data = response.data.doctors;
          this.setState({ list: data });
        }
      })
      .catch((error) => console.log(error));
  };

  getAppointemnt = (id) => {
    this.props.history.push("/booking", { id: id });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onFilter = (event) => {
    event.preventDefault();
    this.getDoctor();
  }

  render() {
    const { loggedInStatus, user, handleLogout } = this.props;
    const { list, fees, treatment } = this.state;

    return (
      <div>
        <Header
          loggedInStatus={loggedInStatus}
          user={user}
          isInner={true}
          handleLogout={handleLogout}
        />

        <section id="therapists">
          <div className="container">
            <div className="therapists-content">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-center mt-5 pt-5 pb-2">
                    <h2>I am looking for a therapist in all Tunisia</h2>
                  </div>
                  <hr />
                </div>

                <div className="col-md-12">
                  <form className="row" onSubmit={this.onFilter}>
                    <div className="form-group col-md-4">
                      <input
                        type="number"
                        className="form-control"
                        name="fees"
                        placeholder="Fees"
                        value={fees}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        name="treatment"
                        placeholder="Treatment"
                        value={treatment}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <button type="submit" className="btn btn-primary">
                        Apply
                      </button>
                    </div>
                  </form>
                </div>

                <div className="col-md-12 pb-4">
                  {list.map((value, index) => {
                    return (
                      <div className="card card-height" key={index}>
                        <div className="row">
                          <div className="col-md-auto">
                            <div className="image_container mx-auto mx-md-0">
                              <img src={IMAGE_ENDPOINT + value.image} alt="" />
                            </div>
                          </div>

                          <div className="col-md text-center text-md-left">
                            <div className="title">
                              <h2 className="title-h2"> {value.name} </h2>
                              <span className="doc-type">therapist</span>
                              <span className="badge badge-primary float-right">
                                $ {value.fees}
                              </span>
                            </div>
                            <div className="description">
                              <p>{value.description}</p>
                            </div>
                            <button
                              onClick={() => this.getAppointemnt(value.id)}
                              className="btn btn-primary w-auto"
                            >
                              Book Now
                            </button>
                            <div className="uc-specialist mt-3">
                              {value.treatments &&
                                value.treatments.map((item, tindex) => {
                                  if (item.name) {
                                    return (
                                      <span
                                        key={tindex}
                                        className="badge badge-primary py-1 mr-1 mb-1"
                                      >
                                        {item.name}
                                      </span>
                                    );
                                  }
                                  return null
                                })}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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

export default Doctor;
