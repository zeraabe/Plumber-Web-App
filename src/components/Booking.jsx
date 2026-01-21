import React, { useState } from 'react';
import { FormRow, FormGroup } from './common';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const services = [
    'Commercial Plumbing',
    'Residential Plumbing',
    'Kitchen Plumbing',
    'Gas Line Services',
    'Water Line Repair',
    'Bathroom Plumbing',
    'Drain Cleaning',
    'Basement Plumbing',
    'Emergency Service'
  ];

  const timeSlots = [
    { value: '', label: 'Any time' },
    { value: 'morning', label: 'Morning (8AM - 12PM)' },
    { value: 'afternoon', label: 'Afternoon (12PM - 4PM)' },
    { value: 'evening', label: 'Evening (4PM - 8PM)' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Booking submitted successfully! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      message: ''
    });
  };

  return (
    <section className="section booking" id="booking">
      <div className="container">
        <div className="booking-content">
          <div className="section-title">
            <h2>Online Booking For Appointments</h2>
            <p className="section-subtitle">
              Schedule your plumbing service online. We'll contact you to confirm the appointment.
            </p>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup label="Full Name" required>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="John Doe"
                  required
                />
              </FormGroup>

              <FormGroup label="Email Address" required>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="john@example.com"
                  required
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup label="Phone Number" required>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="+1 (234) 567-8900"
                  required
                />
              </FormGroup>

              <FormGroup label="Service Needed" required>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="">Select a service</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup label="Preferred Date" required>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </FormGroup>

              <FormGroup label="Preferred Time">
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="form-control"
                >
                  {timeSlots.map(slot => (
                    <option key={slot.value} value={slot.value}>{slot.label}</option>
                  ))}
                </select>
              </FormGroup>
            </FormRow>

            <FormGroup label="Additional Details">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                placeholder="Please describe your plumbing issue..."
                rows="4"
              />
            </FormGroup>

            <button type="submit" className="btn btn-large btn-block">
              Book Appointment Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;