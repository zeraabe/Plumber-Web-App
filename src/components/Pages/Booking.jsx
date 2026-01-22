import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { FaCheckCircle, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaPhone, FaUser } from 'react-icons/fa';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    address: '',
    description: '',
    agreeTerms: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const serviceTypes = [
    'Emergency Repairs',
    'Leak Detection',
    'Drain Cleaning',
    'Water Heater Installation',
    'Pipe Installation',
    'Bathroom Remodeling',
    'Kitchen Remodeling',
    'General Maintenance',
    'Other'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service type';
    if (!formData.preferredDate) newErrors.preferredDate = 'Preferred date is required';
    if (!formData.preferredTime) newErrors.preferredTime = 'Preferred time is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to terms and conditions';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          serviceType: '',
          preferredDate: '',
          preferredTime: '',
          address: '',
          description: '',
          agreeTerms: false
        });
        setSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <Header />
      <div style={{ minHeight: '100vh', paddingTop: '150px', paddingBottom: '50px', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3">Book Your Service</h1>
            <p className="lead text-muted">Schedule a professional plumbing service at your convenience</p>
          </div>

          <div className="row g-4">
            {/* Booking Form */}
            <div className="col-lg-8">
              <div className="card shadow-lg border-0">
                <div className="card-body p-4">
                  {submitted && (
                    <div className="alert alert-success d-flex align-items-center mb-4" role="alert">
                      <FaCheckCircle className="me-2" size={24} />
                      <div>
                        <strong>Booking Confirmed!</strong>
                        <p className="mb-0">We have received your booking request. Our team will contact you shortly to confirm the appointment.</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div className="mb-4">
                      <label className="form-label fw-bold">
                        <FaUser className="me-2" style={{ color: '#eda83a' }} />
                        Full Name
                      </label>
                      <input
                        type="text"
                        className={`form-control p-3 ${errors.fullName ? 'is-invalid' : ''}`}
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && <div className="invalid-feedback d-block">{errors.fullName}</div>}
                    </div>

                    {/* Email and Phone */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label className="form-label fw-bold">Email Address</label>
                          <input
                            type="email"
                            className={`form-control p-3 ${errors.email ? 'is-invalid' : ''}`}
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                          />
                          {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label className="form-label fw-bold">
                            <FaPhone className="me-2" style={{ color: '#eda83a' }} />
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className={`form-control p-3 ${errors.phone ? 'is-invalid' : ''}`}
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+233 244 445 555"
                          />
                          {errors.phone && <div className="invalid-feedback d-block">{errors.phone}</div>}
                        </div>
                      </div>
                    </div>

                    {/* Service Type */}
                    <div className="mb-4">
                      <label className="form-label fw-bold">Service Type</label>
                      <select
                        className={`form-select p-3 ${errors.serviceType ? 'is-invalid' : ''}`}
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                      >
                        <option value="">-- Select a service --</option>
                        {serviceTypes.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                      {errors.serviceType && <div className="invalid-feedback d-block">{errors.serviceType}</div>}
                    </div>

                    {/* Date and Time */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label className="form-label fw-bold">
                            <FaCalendarAlt className="me-2" style={{ color: '#eda83a' }} />
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            className={`form-control p-3 ${errors.preferredDate ? 'is-invalid' : ''}`}
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                          />
                          {errors.preferredDate && <div className="invalid-feedback d-block">{errors.preferredDate}</div>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label className="form-label fw-bold">
                            <FaClock className="me-2" style={{ color: '#eda83a' }} />
                            Preferred Time
                          </label>
                          <input
                            type="time"
                            className={`form-control p-3 ${errors.preferredTime ? 'is-invalid' : ''}`}
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                          />
                          {errors.preferredTime && <div className="invalid-feedback d-block">{errors.preferredTime}</div>}
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="mb-4">
                      <label className="form-label fw-bold">
                        <FaMapMarkerAlt className="me-2" style={{ color: '#eda83a' }} />
                        Service Address
                      </label>
                      <input
                        type="text"
                        className={`form-control p-3 ${errors.address ? 'is-invalid' : ''}`}
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your service address"
                      />
                      {errors.address && <div className="invalid-feedback d-block">{errors.address}</div>}
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <label className="form-label fw-bold">Additional Details</label>
                      <textarea
                        className="form-control p-3"
                        rows={4}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe your plumbing issue or service needs..."
                      />
                    </div>

                    {/* Terms and Conditions */}
                    <div className="mb-4">
                      <div className="form-check p-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                          id="agreeTerms"
                        />
                        <label className="form-check-label" htmlFor="agreeTerms">
                          I agree to the terms and conditions
                        </label>
                        {errors.agreeTerms && <div className="invalid-feedback d-block">{errors.agreeTerms}</div>}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn fw-bold w-100"
                      style={{ padding: '12px 24px', backgroundColor: '#eda83a', border: 'none', color: '#000', fontSize: '1.1rem' }}
                    >
                      Book Service
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="col-lg-4">
              <div className="card shadow-lg border-0 mb-4" style={{ backgroundColor: '#1e3a8a', color: 'white' }}>
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-3">Quick Info</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <FaPhone className="me-2" style={{ color: '#eda83a' }} />
                      <strong>Phone:</strong> +233 244 445 555
                    </li>
                    <li className="mb-3">
                      <FaClock className="me-2" style={{ color: '#eda83a' }} />
                      <strong>Hours:</strong> Mon-Sun, 8:00 AM - 6:00 PM
                    </li>
                    <li className="mb-3">
                      <FaMapMarkerAlt className="me-2" style={{ color: '#eda83a' }} />
                      <strong>Service Area:</strong> Greater Accra Region
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card shadow-lg border-0" style={{ backgroundColor: '#eda83a' }}>
                <div className="card-body p-4" style={{ color: '#000' }}>
                  <h5 className="fw-bold mb-3">Why Choose Us?</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">✓ Licensed & Insured</li>
                    <li className="mb-2">✓ 24/7 Emergency Service</li>
                    <li className="mb-2">✓ Transparent Pricing</li>
                    <li className="mb-2">✓ Warranty Guarantee</li>
                    <li className="mb-2">✓ Fast Response Time</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;
