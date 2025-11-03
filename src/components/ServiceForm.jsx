import React, { useState } from "react";

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    country: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="askus-container">
      <h1 className="form-title">Ask Us</h1>
      <p className="form-subtitle">Please complete the following details</p>

      <form onSubmit={handleSubmit} className="askus-form">
        {/* Row 1: Name, Email, Phone, City */}
        <div className="form-row four-cols">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        {/* Row 2: State, Country, Comment */}
        <div className="form-row comment-row">
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
          />
          <textarea
            name="comments"
            placeholder="Comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </div>

        {/* Row 3: Submit */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ServiceForm;
