// CheckoutForm.js

import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = ({ campaignId }: { campaignId: string }) => {
  // this is for geeting user data
  const auth = useAuth();
  // @ts-ignore
  const { user } = auth;

  const stripe = useStripe();
  const elements = useElements();

  const [inputAmount, setInputAmount] = useState("");

  const handleAmountChange = (event: any) => {
    setInputAmount(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      console.error("Card element not found");
      return;
    }

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      console.error(error);
    } else {
      // Send the token and amount to your server and handle the payment
      // console.log(token, inputAmount);

      axios
        .post("https://blood-bound.vercel.app/stripe", {
          token: token.id,
          amount: inputAmount,
          campaignId: campaignId || "65bcd81af947cd787d3ce15a",
          email: user.email,
        })
        .then(() =>
          Swal.fire({
            icon: "success",
            title: "Payment Successful",
            position: "top-end",
            timer: 1500,
          })
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <input
          type="number"
          value={inputAmount}
          onChange={handleAmountChange}
          placeholder="Enter amount in cents"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div>
        <label>
          Card details
          <CardElement />
        </label>
      </div>
      <button type="submit" disabled={!stripe} className="btn">
        Donate
      </button>
    </form>
  );
};

export default CheckoutForm;
