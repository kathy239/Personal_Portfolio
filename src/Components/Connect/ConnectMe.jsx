import React, { useState } from "react";
import "./ConnectMe.css";

const ConnectMe = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log(API_KEY);
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            required
          />
          <label htmlFor="message">Leave your message here</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="btn-submit">
            Submit Now
          </button>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default ConnectMe;
