import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.email) {
      alert('Email is required');
      return;
    }
  
    const templateParams = {
      name: `${formData.firstName} ${formData.lastName}`,
      time: new Date().toLocaleString(),
      message: formData.message,
    };
  
    try {
      // Sending the email with EmailJS
      await emailjs.send(
        'service_720mnn8',  // Your service ID from EmailJS
        'template_ytt2097',  // Your template ID from EmailJS
        templateParams,      // Template parameters (e.g., formData)
        'e3P2b38KM7J5enJxE'    // Your public API key from EmailJS
      );
      alert('Message sent!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message, please try again.');
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-gray-900 text-white p-8 rounded-xl shadow-xl space-y-4"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-800 focus:outline-none"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-800 focus:outline-none"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-800 focus:outline-none"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-800 focus:outline-none"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-800 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
