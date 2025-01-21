import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// Load your Stripe publishable key
const stripePromise = loadStripe("pk_test_51N..."); // Replace with your test publishable key

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cart } = useCart();
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Handle payment submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      // Create a payment intent using Axios
      const response = await axios.post(
        "https://api.stripe.com/v1/payment_intents",
        {
          amount: cart.reduce((total, item) => total + parseFloat(item.price.replace("$", "")) * item.quantity, 0) * 100, // Convert to cents
          currency: "usd",
          payment_method_types: ["card"], // Add payment method types
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer sk_test_51N...`, // Use your Stripe test secret key
          },
        }
      );

      const { client_secret: clientSecret } = response.data;

      // Confirm the payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: shippingInfo.name,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.zip,
              country: shippingInfo.country,
            },
          },
        },
      });

      if (error) {
        console.error("Payment failed:", error.message);
        toast.error("Payment failed. Please try again."); // Show error toast
      } else if (paymentIntent.status === "succeeded") {
        toast.success("Payment successful! Your order has been placed."); // Show success toast
        // Clear the cart or redirect to a success page
      }
    } catch (error) {
      console.error("Error creating payment intent:", error);
      toast.error("An error occurred. Please try again."); // Show error toast
    }
  };

  // Calculate the total price of the cart
  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Shipping Information Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={shippingInfo.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={shippingInfo.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingInfo.city}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={shippingInfo.state}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={shippingInfo.zip}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={shippingInfo.country}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </form>

        {/* Order Summary and Payment Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    {item.quantity} x {item.price}
                  </p>
                </div>
                <p className="text-lg font-semibold">
                  ${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <hr className="my-4" />
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">Total</h3>
            <p className="text-xl font-bold text-blue-600">${totalPrice.toFixed(2)}</p>
          </div>

          {/* Stripe Card Element */}
          <div className="my-6">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={!stripe}
            className="w-full mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Pay Now
          </button>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}