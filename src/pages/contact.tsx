import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#E2DBDF] font-sans">
      {/* Hero Section */}
      <section
        className="relative h-screen overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=400&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative h-full flex items-end pb-20 px-4">
          <div className="text-left text-white max-w-2xl">
            <p className="text-sm tracking-widest mb-3 uppercase font-hattons">We're Here to Help</p>
            <h1 className="text-4xl md:text-5xl font-light mb-4 leading-tight font-montserrat">
              Reach out with questions about treatments, appointments, or your care journey
            </h1>
            <p className="text-sm leading-relaxed opacity-90 font-open-sans">
              Whether you're ready to book your first visit, have questions about hair services, or need guidance on the right treatment for you, our team is here to support. We look forward to being part of your beauty and wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 px-4 bg-[#C1B5C6 ]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Form */}
            <div>
              <h2 className="text-3xl font-light mb-8 text-[#262626] font-montserrat">
                Let Us Help You Achieve Your<br />Best Hair Yet
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#FFFFFF] border-0 rounded-lg text-[#262626] placeholder-[#595959] focus:outline-none focus:ring-2 focus:ring-[#C1B5C6] font-open-sans"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#FFFFFF] border-0 rounded-lg text-[#262626] placeholder-[#595959] focus:outline-none focus:ring-2 focus:ring-[#C1B5C6] font-open-sans"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-[#FFFFFF] border-0 rounded-lg text-[#262626] placeholder-[#595959] focus:outline-none focus:ring-2 focus:ring-[#C1B5C6] resize-none font-open-sans"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#262626] hover:bg-[#B0C2B0] text-[#FFFFFF] font-light py-4 rounded-lg transition-colors duration-300 font-montserrat"
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-light mb-4 text-[#262626] font-montserrat">Get in touch</h3>
                <p className="text-sm text-[#595959] leading-relaxed font-open-sans">
                  We're here to support you. Reach out if you have questions about treatments, bookings, or your personalized care plan.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-light mb-4 text-[#262626] font-montserrat">Address</h3>
                <p className="text-sm text-[#595959] leading-relaxed font-open-sans">
                  Nairobi, Kenya<br />
                  Mwanzi Market, Westlands
                </p>
              </div>
              <div>
                <h3 className="text-xl font-light mb-4 text-[#262626] font-montserrat">Working Hours</h3>
                <div className="text-sm text-[#595959] space-y-1 font-open-sans">
                  <p>Mon - Sat: 9am - 7pm</p>
                  <p>Sun: 10am - 6pm</p>
                </div>
              </div>
              <div className="space-y-3">
                <a
                  href="mailto:hello@avyabeauty.co.ke"
                  className="flex items-center text-sm text-[#595959] hover:text-[#C1B5C6] transition-colors font-open-sans"
                >
                  <span className="mr-2">✉</span>
                  hello@avyabeauty.co.ke
                </a>
                <a
                  href="tel:+254755444433"
                  className="flex items-center text-sm text-[#595959] hover:text-[#C1B5C6] transition-colors font-open-sans"
                >
                  <span className="mr-2">📞</span>
                  +254116444433
                </a>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#B0C2B0] hover:bg-[#C1B5C6] flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-[#262626]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#B0C2B0] hover:bg-[#C1B5C6] flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-[#262626]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#B0C2B0] hover:bg-[#C1B5C6] flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5 text-[#262626]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-[#C1B5C6 ]  ">
        <div className="max-w-6xl mx-auto h-full px-4">
          <iframe
            className="w-full h-full border-0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=mwanzi market&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
