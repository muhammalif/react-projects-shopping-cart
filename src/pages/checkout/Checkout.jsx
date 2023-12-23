import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/Shop-Context";
import "./Checkout.css";

export const Checkout = () => {
  const { checkout } = useContext(ShopContext);
  const [paymentDetails, setPaymentDetails] = useState({
    paymentMethod: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    virtualAccount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentDetails({
      paymentMethod: e.target.value,
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      virtualAccount: generateRandomVirtualAccount(),
    });
  };

  const handleCheckout = () => {
    if (
      !paymentDetails ||
      Object.values(paymentDetails).some((value) => value === "")
    ) {
      return;
    }

    checkout(paymentDetails);
  };

  const generateRandomVirtualAccount = () => {
    return "VA" + Math.floor(Math.random() * 1000000000);
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="payment-form">
        <h2>Payment Details</h2>
        <form>
          <label>
            Payment Method:
            <select
              name="paymentMethod"
              value={paymentDetails.paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <option value="">Select Payment Method</option>
              <option value="creditCard">Credit Card</option>
              <option value="virtualAccount">Virtual Account</option>
            </select>
          </label>
          {paymentDetails.paymentMethod === "creditCard" && (
            <>
              <label>
                Card Number:
                <input
                  type="text"
                  name="cardNumber"
                  value={paymentDetails.cardNumber}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Expiry Date:
                <input
                  type="text"
                  name="expiryDate"
                  value={paymentDetails.expiryDate}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                CVV:
                <input
                  type="text"
                  name="cvv"
                  value={paymentDetails.cvv}
                  onChange={handleInputChange}
                />
              </label>
            </>
          )}
          {paymentDetails.paymentMethod === "virtualAccount" && (
            <label>
              Virtual Account Number:
              <input
                type="text"
                name="virtualAccount"
                value={paymentDetails.virtualAccount}
                readOnly
              />
            </label>
          )}
        </form>
      </div>

      <button className="checkout-button" onClick={handleCheckout}>
        Place Order
      </button>
    </div>
  );
};
