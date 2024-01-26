// CheckoutForm.tsx (assuming you are using TypeScript)

import { useState, ChangeEvent, FormEvent } from "react"; // Import ChangeEvent and FormEvent from "react"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import Swal from "sweetalert2";

interface CheckoutFormProps {
  name: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ name }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [inputAmount, setInputAmount] = useState<string>(""); // Explicitly specify the type of inputAmount as string

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => { // Use ChangeEvent<HTMLInputElement> for event type
    setInputAmount(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => { // Use FormEvent<HTMLFormElement> for event type
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { token, error } = await stripe.createToken(
      elements.getElement(CardElement)
    );

    if (error) {
      console.error(error);
    } else {
      // Send the token and amount to your server and handle the payment
      console.log(token, inputAmount);

      axios
        .post("http://127.0.0.1:5000/stripe", {
          token: token.id,
          amount: inputAmount,
          name: name,
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
