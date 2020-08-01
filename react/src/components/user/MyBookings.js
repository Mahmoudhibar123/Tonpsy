import React, { Component } from "react";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import { API_ENDPOINT, IMAGE_ENDPOINT, AppString } from "../../constant";
import { myFirestore } from "../../Config/MyFirebase";
import Placeholder from '../../assets/img/profile-placeholder.png';

class MyBookings extends Component {
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
      .get(`${API_ENDPOINT}/bookings`, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          var data = response.data.bookings;
          this.setState({ list: data });
        }
      })
      .catch((error) => console.log(error));
  };

  gotoPayment = (id) => {
    this.props.history.push("/pay", { id: id });
  };

  gotoChat = async (booking) => {
    const { user } = this.props;

    console.log("Child Page User", user)
    // Process Patient
    // const result = await myFirestore
    //   .collection(AppString.NODE_USERS)
    //   .where(AppString.ID, "==", user.id)
    //   .get();

    // console.log("Firebase Result: ", result);

    // if (result.docs.length === 0) {
    //   // Set new data since this is a new user
    //   await myFirestore
    //     .collection("users")
    //     .doc(user.id.toString())
    //     .set({
    //       id: user.id,
    //       nickname: `${user.first_name} ${user.last_name}`,
    //       aboutMe: "PATIENT",
    //       photoUrl: IMAGE_ENDPOINT + user.image,
    //       friends: [booking.doctor.id],
    //     });
    // } else {
    //   if (result.docs[0].data().friends.indexOf(booking.doctor.id) < 0) {
    //     await myFirestore
    //       .collection("users")
    //       .doc(user.id.toString())
    //       .set({
    //         friends: [booking.doctor.id],
    //         merge: true,
    //       });
    //   }
    // }

    // Process Therapist
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
    //       friends: [user.id],
    //     });
    // } else {
    //   if (
    //     resultTherapist.docs[0].data().friends.indexOf(user.id) < 0
    //   ) {
    //     await myFirestore
    //       .collection("users")
    //       .doc(booking.doctor.id.toString())
    //       .set({
    //         friends: [user.id],
    //         merge: true,
    //       });
    //   }
    // }
    this.props.history.push("/main", { id: user.id });
  };

  render() {
    const { loggedInStatus, user, handleLogout } = this.props;
    const { list } = this.state;

    console.log("Booking Pages Props: ", this.props)

    return (
      <div>
        <Header loggedInStatus={loggedInStatus} user={user} isInner={true} handleLogout={handleLogout} />
        <section id="therapists">
          <div className="container">
            <div className="therapists-content pt-5 pb-2">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-center pt-5 pb-2">
                    <h2> My Bookings  </h2>
                  </div>
                  <hr />
                </div>

                <div className="col-md-12">
                  {list.map((value, index) => {
                    return (
                      <div
                        className="card card-height height-auto"
                        key={`booking-${value.id}`}  >
                        <div className="row">
                          <div className="col-md-auto">
                            <div className="image_container">
                              <img
                                src={
                                  value.doctor
                                    ? IMAGE_ENDPOINT + value.doctor.image : Placeholder
                                }
                                alt="avatar"
                              />
                            </div>
                          </div>
                          <div className="col-md text-md-left">
                            <div className="title">
                              <h2 className="title-h2">
                                {" "}
                                {value.doctor ? value.doctor.name : "N/A"}
                                (THERAPIST)
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
                            </div>
                            <div className="row">
                              <div className="col-md-12 text-right mt-3 mt-md-0">
                                {value.status.toLowerCase() === "accepted" && (
                                  <button
                                    className="btn btn-primary btn-sm w-auto mr-2"
                                    onClick={() => this.gotoPayment(value.id)}
                                  >
                                    Pay Now
                                  </button>
                                )}
                                {value.status.toLowerCase() === "paid" && (
                                  <>
                                  <button
                                    className="btn btn-primary btn-sm w-auto"
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

export default MyBookings;
