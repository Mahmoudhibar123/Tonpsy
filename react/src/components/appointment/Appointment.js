import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import Header from "../Header";
import Footer from "../Footer";
import "react-datepicker/dist/react-datepicker.css";
import {
  API_ENDPOINT,
  IMAGE_ENDPOINT
} from "../../constant";

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctor: [],
      booking_time: new Date(),
      timeslot: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleDateChange = date => {
    this.setState({
      booking_time: date
    });
  };


  componentDidMount() {
    const { id } = this.props.location.state;
    this.setState({ id: id });
    this.getDoctor(id);
  }

  getDoctor = id => {
    var url = `${API_ENDPOINT}/doctors/${id}`;
    axios
      .get(url, { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          var data = response.data.doctors;
          this.setState({ doctor: data });
        }
      })
      .catch(error => console.log(error));
  };

  handleSubmit = event => {
    event.preventDefault();
    const { booking_time, timeslot, id } = this.state;
    axios
      .post(
        `${API_ENDPOINT}/bookings`,
        { booking: { doctor_id: id, book_date: booking_time, timeslot: timeslot } },
        { withCredentials: true }
      )
      .then(response => {
        if (response.status === 200 || response.status === 204) {
          this.props.showToast(1, 'Booking successfully placed.')
          this.props.history.push("/booking-success");
        }
      })
      .catch(error => console.log(error));
  };

  render() {
    const { loggedInStatus, user, handleLogout } = this.props;
    const { booking_time } = this.state;
    console.log(booking_time);
    return (
      <div>
        <Header
          loggedInStatus={loggedInStatus}
          user={user}
          isInner={true}
          handleLogout={handleLogout}
        />
        <section id="therapists" className="pt-5">
          <div className="container py-5 mt-4">
            <div className="row">
              <div className="col-md-7">
                <div className="image_container-sm">
                  <img
                    src={IMAGE_ENDPOINT + this.state.doctor.image}
                    alt=""
                    className="img img-responsive"
                  />
                </div>
                <div className="title mt-2">
                  <h2 className="title-h2"> {this.state.doctor.name} </h2>
                </div>
                <div className="doc-type">
                  <a href="#"> Therapist </a>
                  <span className="badge badge-primary float-right">$ {this.state.doctor.fees}</span>
                </div>
                <div className="description">
                  <p>{this.state.doctor.description}</p>
                </div>
                <div className="uc-specialist mt-3">
                  {this.state.doctor.treatments &&
                    this.state.doctor.treatments.map((item, tindex) => {
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
              <div className="col-md-5 card-container">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Select Date </label>
                    <DatePicker
                      className="form-control"
                      minDate={new Date()}
                      defaultValue={booking_time}
                      selected={booking_time}
                      name="booking_time"
                      onChange={this.handleDateChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Select Time Slot</label>
                    <select className="form-control" name="timeslot" onChange={this.handleChange} required>
                      <option value="">Select Timeslot</option>
                      {this.state.doctor.available &&
                        this.state.doctor.available.map((item, index) => {
                          if (index === 0) {
                            return (
                              <>
                                {item.times &&
                                  item.times.map((item, index) => {
                                    return (
                                      <option value={item.time} key={index}>
                                        {item.time}
                                      </option>
                                    );
                                  })}
                              </>
                            );
                          }
                          return null
                        })}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Book Now
                </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default Appointment;
