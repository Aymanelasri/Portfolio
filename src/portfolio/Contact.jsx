import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');

    
    const formData = new FormData(form.current);
    formData.append('title', 'Portfolio');

    emailjs
      .send(
        "service_b1nkbcu",      
        "template_b06vd4e",     
        {
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          title: 'Portfolio'
        },
        "BLviy0RIzCBBpwgYX"     
      )
      .then(
        () => {
          setSuccess("Message sent successfully ✅");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log(error);
          setSuccess("Something went wrong ❌");
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-container reveal">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="fw-bold mb-5 contact-header">
              Get In <span className="accent">Touch</span>
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
            <div className="contact-card">
              {success && (
                <div className={`alert ${success.includes('✅') ? 'alert-success' : 'alert-danger'} mb-4`}>
                  {success}
                </div>
              )}

              <form ref={form} onSubmit={handleSubmit} className="contact-form">
                <div className="form-group mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="6"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-send" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'} <i className="bi bi-send"></i>
                </button>
              </form>

              <div className="contact-info mt-5">
                <h4 className="mb-3">Other Ways to Connect</h4>
                <div className="info-links">
                  <a href="https://github.com/Aymanelasri" target="_blank" rel="noopener noreferrer" className="info-link">
                    <i className="bi bi-github"></i> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/ayman-elasri-745a8033b" target="_blank" rel="noopener noreferrer" className="info-link">
                    <i className="bi bi-linkedin"></i> LinkedIn
                  </a>
                  <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=Aymanelasri100@gmail.com" target="_blank" rel="noopener noreferrer" className="info-link">
                    <i className="bi bi-envelope"></i> Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
