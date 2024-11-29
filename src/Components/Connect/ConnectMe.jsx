import { useState } from "react";
import "./ConnectMe.css";

const ConnectMe = () => {
  const [result, setResult] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    setResult("Your message has been sent successfully!");
    // Add logic for handling form submission (e.g., API call).
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <form onSubmit={onsubmit}>
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
