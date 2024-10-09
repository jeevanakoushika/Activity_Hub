import React, { useState } from "react";
import "../components/css/contact.css"; // Assuming your CSS file is named Contact.css

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send to an API)
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="form-section">
                    <h1 className="contact-title">Get In Touch</h1>
                    <h3 className="contact-subtitle">Leave us a message</h3>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="First Name & Last Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">Send</button>
                    </form>
                </div>

                {/* Right side: Contact information */}
                <div className="info-section">
                    <div className="contact-info">
                        <h3>Contact Info</h3>
                        <p><strong>Address:</strong> Activity Hub, KL University, Vaddeswaram, Green Fields</p>
                        <p><strong>Phone:</strong> +91 6736589556</p>
                        <p><strong>Email:</strong> activityhub@gmail.com</p>
                    </div>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.9985807782673!2d80.6077232!3d16.4533265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a72502d2e0f9d%3A0xabcdef1234567890!2sLocation!5e0!3m2!1sen!2sin!4v1696348104302!5m2!1sen!2sin"
                            width="400"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
