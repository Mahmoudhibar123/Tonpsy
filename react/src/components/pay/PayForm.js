import React from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Header from "../Header";
import Footer from "../Footer";
import CardType from "../../assets/img/card_type.jpg";
import { API_ENDPOINT } from "../../constant";

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, token } = await stripe.createToken(elements.getElement(CardElement));
    if (error) {
      console.log("[error]", error);
    } else {
      axios
        .post(
          `${API_ENDPOINT}/payments`,
          {
            token: token.id,
            payment: {
              booking_id: props.id,
              amount: "50",
              currency: "USD",
              description: "Consulation charges.",
            },
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          props.history.push("/pay-success");
        })
        .catch((response) => {
          props.history.push("/pay-failed");
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" className="btn btn-primary mt-4" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

const stripePromise = loadStripe("pk_test_xewRnsGPAedcJWQph45FP3YD00Qqsd1KHm");

const PayForm = (props) => (
  <>
    <Header loggedInStatus={props.loggedInStatus} user={props.user} isInner={true} handleLogout={props.handleLogout} />
    <section id="therapists">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 text-center col-lg-6 mx-auto py-5">
            <h1 className="h3 mt-5">Payment</h1>
            <div className="card p-4">
              <Elements stripe={stripePromise}>
                <CheckoutForm id={props.location.state.id} history={props.history}/>
              </Elements>
            </div>
            <img src={CardType} width="200" alt="" />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default PayForm;
