"use client"; // Add this at the very top to indicate it's a client-side component

import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center p-8">
      {/* Page Title */}
      <h1 className="text-[#1E2D3B] font-semibold text-[55px] text-center">CONTACTS</h1>
      <div className="w-[176px] h-2 bg-[#EDCD1F] my-4"></div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-lg w-full mt-6">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Inquiries Section */}
          <section>
            <h2 className="text-[#1E2D3B] text-2xl font-bold bg-[#EDCD1F] px-4 py-2 rounded-md">Inquiries:</h2>
            <p className="text-lg mt-4">
              For any inquiries, questions, or commendations, please call: 123-456-7890 or fill out the following form.
            </p>
          </section>

          {/* Contact Form Section */}
          <section>
            <h2 className="text-[#1E2D3B] text-2xl font-bold bg-[#EDCD1F] px-4 py-2 rounded-md">Contact Us:</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              {/* Form Fields */}
              <div>
                <label htmlFor="firstName" className="block text-lg font-medium text-[#1E2D3B]">First Name*</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-lg font-medium text-[#1E2D3B]">Last Name*</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-[#1E2D3B]">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-[#1E2D3B]">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter your subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-[#1E2D3B]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#1E2D3B] text-white font-bold rounded-md hover:bg-[#EDCD1F] transition"
              >
                Submit
              </button>
            </form>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Head Office Section */}
          <section className="p-4 bg-gray-100 rounded-md">
            <h3 className="text-[#1E2D3B] text-xl font-bold bg-[#EDCD1F] px-4 py-2 rounded-md">Head Office:</h3>
            <p>500 Terry Francine Street</p>
            <p>San Francisco, CA 94158</p>
            <p>Email: <a href="mailto:info@mysite.com" className="text-blue-600 underline">info@mysite.com</a></p>
            <p>Tel: 123-456-7890</p>
            <p>Fax: 123-456-7890</p>
          </section>

          {/* Employment Section */}
          <section className="p-4 bg-gray-100 rounded-md">
            <h3 className="text-[#1E2D3B] text-xl font-bold bg-[#EDCD1F] px-4 py-2 rounded-md">Employment:</h3>
            <p>
              To apply for a job with Sphere Construction, please send a cover letter together with your C.V. to:{" "}
              <a href="mailto:info@mysite.com" className="text-blue-600 underline">info@mysite.com</a>
            </p>
          </section>

          {/* Get a Quote Section */}
          <section className="p-4 bg-gray-100 rounded-md">
            <h3 className="text-[#1E2D3B] text-xl font-bold bg-[#EDCD1F] px-4 py-2 rounded-md">Get a Quote:</h3>
            <p>Call: 123-456-7890</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
