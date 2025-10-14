import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#C1B5C6] text-[#262626] py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Newsletter Section */}
          <div className="space-y-6 flex-1 max-w-md">
            <h2 className="text-4xl md:text-5xl font-light font-serif text-[#262626]">
              Join Our Newsletter.
            </h2>
            <p className="text-[#595959] text-sm leading-relaxed">
              We share occasional insights on personal growth, emotional well-being, and practical tools to navigate life with more clarity and balance.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-3 bg-[#E2DBDF] border-0 rounded-lg text-[#262626] placeholder-[#595959] focus:outline-none focus:ring-2 focus:ring-[#C1B5C6] font-sans"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#262626] text-[#E2DBDF] rounded-lg hover:bg-[#B0C2B0] hover:text-[#262626] transition-colors font-sans"
              >
                SUBSCRIBE 
              </button>
            </form>
            <p className="text-xs text-[#595959]">
              By signing up to receive emails from AVYA, you agree to our{' '}
              <a href="#" className="underline hover:text-[#C1B5C6]">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4 flex-shrink-0">
            <h3 className="text-sm uppercase tracking-wider text-[#595959] font-sans">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-[#262626] hover:text-[#C1B5C6] transition-colors font-sans"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-[#262626] hover:text-[#C1B5C6] transition-colors font-sans"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#262626] hover:text-[#C1B5C6] transition-colors font-sans"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#262626] hover:text-[#C1B5C6] transition-colors font-sans"
                >
                  Stories
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-[#262626] hover:text-[#C1B5C6] transition-colors font-sans"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
