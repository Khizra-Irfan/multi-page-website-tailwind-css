"use client";  // Add this at the very top to indicate it's a client-side component

import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
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
    // Handle form submission logic (e.g., send data to an API)
    console.log(formData);
  };

  return (
    <div className="p-8 space-y-8">
      {/* Main Heading */}
      <h1 className="text-[#1E2D3B] font-semibold text-[55px] mb-0 text-center">CONTACTS</h1>
      
      {/* Underline */}
      <div className="w-[176px] h-2 bg-yellow-500 mb-8 mx-auto"></div>

      {/* Main Layout - Flexbox/Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Inquiries Section */}
          <section className="text-left">
            <h2 className="text-3xl font-semibold mb-4 text-[#1E2D3B]">Inquiries:</h2>
            <p className="text-lg">
              For any inquiries, questions, or commendations, please call: 123-456-7890 or fill out the following form.
            </p>
          </section>

          {/* Contact Form Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-center text-[#1E2D3B]">Contact Us:</h2>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-lg font-medium">First Name*</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder='Enter you name'
                  value={formData.firstName}
                  onChange={handleChange}
                  className="p-3 border-2 border-gray-300 rounded-md mt-2"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-lg font-medium">Last Name*</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder='Enter your last name'
                  value={formData.lastName}
                  onChange={handleChange}
                  className="p-3 border-2 border-gray-300 rounded-md mt-2"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg font-medium">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Enter your email address'
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 border-2 border-gray-300 rounded-md mt-2"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject" className="text-lg font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder='Enter your subject'
                  value={formData.subject}
                  onChange={handleChange}
                  className="p-3 border-2 border-gray-300 rounded-md mt-2"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-lg font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder='Write your message'
                  value={formData.message}
                  onChange={handleChange}
                  className="p-3 border-2 border-gray-300 rounded-md mt-2"
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Contact Details Section */}
          <section className="text-left space-y-4">
            <h3 className="text-2xl font-semibold text-[#1E2D3B]">Head Office:</h3>
            <p>500 Terry Francine Street</p>
            <p>San Francisco, CA 94158</p>
            <p>Email: <a href="mailto:info@mysite.com" className="text-blue-600">info@mysite.com</a></p>
            <p>Tel: 123-456-7890</p>
            <p>Fax: 123-456-7890</p>
          </section>

          {/* Employment Section */}
          <section className="text-left space-y-4">
            <h3 className="text-2xl font-semibold text-[#1E2D3B]">Employment:</h3>
            <p>
              To apply for a job with Sphere Construction, please send a cover letter together with your C.V. to: 
              <a href="mailto:info@mysite.com" className="text-blue-600">info@mysite.com</a>
            </p>
          </section>

          {/* Get a Quote Section */}
          <section className="text-left">
            <h3 className="text-2xl font-semibold text-[#1E2D3B]">Get a Quote:</h3>
            <p>Call: 123-456-7890</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
