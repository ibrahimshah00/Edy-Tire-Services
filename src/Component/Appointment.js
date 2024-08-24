import React, { useState } from 'react';

const Appointment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [day, setDay] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the WhatsApp message
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ADay: ${day}%0ADate: ${date}%0ATime: ${hour}%0AMessage Detail: ${message}`;

    // WhatsApp URL with the target number and the constructed message
    const whatsappURL = `https://wa.me/16198610976?text=${whatsappMessage}`;

    // Redirect to WhatsApp
    window.location.href = whatsappURL;
  };

  return (
    <>
      <h1 className='appointmentheading'>Book Your Appointment</h1>
      <div className="appointment-container">
        <div className="shop-hours">
          <h2>Shop Hours</h2>
          <ul>
            <li>Sunday: 8 AM–6 PM</li>
            <li>Monday: 8 AM–8 PM</li>
            <li>Tuesday: 8 AM–8 PM</li>
            <li>Wednesday: 8 AM–8 PM</li>
            <li>Thursday: 8 AM–8 PM</li>
            <li>Friday: 8 AM–8 PM</li>
            <li>Saturday: 8 AM–8 PM</li>
          </ul>
        </div>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="day">Select Day:</label>
            <select
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              required
            >
              <option value="" disabled>Select a day</option>
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Select Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="hour">Select Hour:</label>
            <select
              id="hour"
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              required
            >
              <option value="" disabled>Select a time</option>
              <option value="8 AM">8 AM</option>
              <option value="9 AM">9 AM</option>
              <option value="10 AM">10 AM</option>
              <option value="11 AM">11 AM</option>
              <option value="12 PM">12 PM</option>
              <option value="1 PM">1 PM</option>
              <option value="2 PM">2 PM</option>
              <option value="3 PM">3 PM</option>
              <option value="4 PM">4 PM</option>
              <option value="5 PM">5 PM</option>
              <option value="6 PM">6 PM</option>
              <option value="7 PM">7 PM</option>
              <option value="8 PM">8 PM</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter details about your appointment"
              required
            ></textarea>
          </div>
          <button type="submit">Book Appointment</button>
        </form>
      </div>
    </>
  );
};

export default Appointment;
