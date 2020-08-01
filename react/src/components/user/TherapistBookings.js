import React, { Component } from "react";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import placeholder from "./../../assets/img/profile-placeholder.png";
import { API_ENDPOINT, IMAGE_ENDPOINT, AppString } from "../../constant";
import { myFirestore } from "../../Config/MyFirebase";


class TherapistBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.getAppointments();
  }

  getAppointments = () => {
    axios
      .get(`${API_ENDPOINT}/doctors/bookings`, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          var data = response.data.bookings;
          this.setState({ list: data });
        }
      })
      .catch((error) => console.log(error));
  };

  onBookingUpdate = (id, status) => {
    axios
      .put(
        `${API_ENDPOINT}/bookings/${id}/update_status?status=${status}`,
        {},
        { withCredentials: true }
      )
      .then((response) => {
        if (response.status === 200 || response.status === 204) {
          this.props.showToast(1, 'Booking updated.')
          this.getAppointments();
        }
      })
      .catch((error) => console.log(error));
  };

  gotoChat = async (booking) => {
    // this.props.history.push("/main", { id: booking.doctor.id, rmUser: booking.user });

    // const result = await myFirestore
    //   .collection(AppString.NODE_USERS)
    //   .where(AppString.ID, "==", booking.user.id)
    //   .get();

    // if (result.docs.length === 0) {
    //   // Set new data since this is a new user
    //   await myFirestore
    //     .collection("users")
    //     .doc(booking.user.id.toString())
    //     .set({
    //       id: booking.user.id,
    //       nickname: `${booking.user.first_name} ${booking.user.last_name}`,
    //       aboutMe: "PATIENT",
    //       photoUrl: IMAGE_ENDPOINT + booking.user.image,
    //       friends: [booking.doctor.id],
    //     });
    // } else {
    //   if (result.docs[0].data().friends.indexOf(booking.doctor.id) < 0) {
    //     await myFirestore
    //       .collection("users")
    //       .doc(booking.user.id.toString())
    //       .set({
    //         friends: [booking.doctor.id],
    //         merge: true,
    //       });
    //   }
    // }

    // // Process Therapist
    // const resultTherapist = await myFirestore
    //   .collection(AppString.NODE_USERS)
    //   .where(AppString.ID, "==", booking.doctor.id)
    //   .get();

    // if (resultTherapist.docs.length === 0) {
    //   // Set new data since this is a new user
    //   await myFirestore
    //     .collection("users")
    //     .doc(booking.doctor.id.toString())
    //     .set({
    //       id: booking.doctor.id,
    //       nickname: booking.doctor.name,
    //       aboutMe: "THERAPIST",
    //       photoUrl: IMAGE_ENDPOINT + booking.doctor.image,
    //       friends: [booking.user.id],
    //     });
    // } else {
    //   if (resultTherapist.docs[0].data().friends.indexOf(booking.user.id) < 0) {
    //     await myFirestore
    //       .collection("users")
    //       .doc(booking.doctor.id.toString())
    //       .set({
    //         friends: [booking.user.id],
    //         merge: true,
    //       });
    //   }
    // }
    this.props.history.push("/main", { id: booking.doctor.id });
  };

  gotoCall = (booking) => {
    console.log(booking)
  }

  render() {
    const { loggedInStatus, user, handleLogout } = this.props;
    const { list } = this.state;

    return (
      <div>
        <Header loggedInStatus={loggedInStatus} isInner={true} user={user} handleLogout={handleLogout} />
        <section id="therapists">
          <div className="container">
            <div className="therapists-content pt-5 pb-2">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-center pt-5 pb-2">
                    <h2>Patient Bookings </h2>
                  </div>
                  <hr />
                </div>

                <div className="col-md-12">
                  {list.map((value, index) => {
                    return (
                      <div className="card card-height height-auto" key={index}>
                        <div className="row">
                          <div className="col-md-auto">
                            <div className="image_container">
                              <img
                                src={
                                  value.user && value.user.image
                                    ? IMAGE_ENDPOINT + value.user.image
                                    : placeholder
                                }
                                alt="Generic placeholder"
                              />
                            </div>
                          </div>
                          <div className="col-md text-md-left">
                            <div className="title">
                              <h2 className="title-h2">
                                {value.user
                                  ? `${value.user.first_name || 'UNKNOWN'} ${value.user.last_name || 'UNKNOWN'}`
                                  : "N/A"}{" "}
                                (PATIENT)
                              </h2>
                            </div>
                            <div className="row">
                              <div className="col-md-5">
                                <strong>Booking Date:</strong>{" "}
                                {value.book_date
                                  ? value.book_date.split("T")[0]
                                  : ""}
                              </div>
                              <div className="col-md-7">
                                <strong>Timeslot:</strong> {value.timeslot}
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-5 description">
                                <strong>Status:</strong>{" "}
                                <span className="badge badge-primary">
                                  {value.status}
                                </span>
                              </div>
                              <div className="col-md-7 text-right mt-3 mt-md-0">
                                {value.status.toLowerCase() !== "paid" && value.status.toLowerCase() !== "accepted" && (
                                  <>
                                    <button
                                      className="btn btn-danger btn-sm w-auto mr-2"
                                      onClick={() =>
                                        this.onBookingUpdate(value.id, 2)
                                      }
                                    >
                                      Reject
                                    </button>
                                    <button
                                      className="btn btn-success btn-sm w-auto"
                                      onClick={() =>
                                        this.onBookingUpdate(value.id, 1)
                                      }
                                    >
                                      Accept
                                    </button>
                                  </>
                                )}
                                {value.status.toLowerCase() === "paid" && (
                                  <>
                                  <button
                                    className="btn btn-primary btn-sm w-auto ml-2"
                                    onClick={() => this.gotoChat(value)}
                                  >
                                    Chat
                                  </button>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {list.length <= 0 && <p>You dont have any bookings yet.</p>}
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

export default TherapistBookings;
