import React, { Component } from "react";
import axios from "axios";
import { API_ENDPOINT } from "../../constant";
import ReactChipInput from "react-chip-input";

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      fees: "",
      chips: [],
      ids: [],
    };
  }

  componentDidMount() {
    const { doctor_id } = this.props.location.state;
    this.setState({ doctor_id: doctor_id });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { description, name, fees, doctor_id } = this.state;

    axios
      .put(
        `${API_ENDPOINT}/doctors/${doctor_id}`,
        {
          name: name,
          description: description,
          fees: fees,
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.status === 200) {
          this.props.showToast(1, "About updated.");
          this.redirect(doctor_id);
        } else {
          this.props.showToast(2, "Unbale to update About.");
          this.setState({
            errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  redirect = (doctor_id) => {
    this.props.history.push("/profile-picture", { doctor_id: doctor_id });
  };

  addChip = (value) => {
    const { doctor_id, ids } = this.state;
    axios
      .post(
        `${API_ENDPOINT}/doctors/${doctor_id}/treatments`,
        { treatment: { name: value } },
        { withCredentials: true }
      )
      .then((response) => {
        const chips = this.state.chips.slice();
        chips.push(value);
        this.setState({ chips });
        ids.push(response.data.treatment.id);
        this.setState({ ids });
      })
      .catch((response) => {
        console.log(response);
      });
  };

  removeChip = (index) => {
    const { doctor_id, ids } = this.state;
    axios
      .delete(
        `${API_ENDPOINT}/doctors/${doctor_id}/treatments/${ids[index]}`,
        {},
        { withCredentials: true }
      )
      .then((response) => {
        const chips = this.state.chips.slice();
        chips.splice(index, 1);
        this.setState({ chips });
        const ids = this.state.ids.slice();
        ids.splice(index, 1);
        this.setState({ ids });
      })
      .catch((response) => {
        console.log(response);
      });
  };

  render() {
    const { description, name, fees, chips } = this.state;

    return (
      <div className="container my-5 bg-white p-4">
        <form onSubmit={this.handleSubmit}>
          <h2>Therapist Profile</h2>
          <p>Tell me about your self</p>
          <hr />
          <div className="form-group">
            <label>Full Name</label>
            <input
              className="form-control"
              name="name"
              placeholder="Name"
              required="required"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>About Me</label>
            <textarea
              rows="5"
              className="form-control"
              name="description"
              placeholder="Please describe about yourself..."
              required="required"
              maxLength="500"
              value={description}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Specialization</label>
            <ReactChipInput
              classes="uc-chips"
              chips={chips}
              onSubmit={(value) => this.addChip(value)}
              onRemove={(index) => this.removeChip(index)}
            />
          </div>
          <div className="form-group">
            <label>Fees</label>
            <input
              type="number"
              min="1"
              className="form-control"
              name="fees"
              placeholder="Fees"
              required="required"
              value={fees}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary w-auto">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AboutMe;
