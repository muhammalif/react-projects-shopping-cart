import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us for any inquiries or feedback.</p>
      <form className="form">
        <label className="label" htmlFor="name"></label>
        <input
          className="input"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />

        <label className="label" htmlFor="email"></label>
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />

        <label className="label" htmlFor="message"></label>
        <textarea
          className="textarea"
          name="message"
          id="message"
          placeholder="Message"
        ></textarea>

        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
