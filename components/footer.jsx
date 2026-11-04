
import React from "react";
import "./footer.css";

export default function Footer({ setCurrentPage }) {
  const quickLinks = [
    { label: "Home", page: "home" },
    { label: "About Us", page: "about" },
    { label: "Products", page: "products" },
    { label: "Solutions", page: "solutions" },
    { label: "Process", page: "process" },
    { label: "Contact Us", page: "contact" },
  ];

  const navigateTo = (page) => {
    if (typeof setCurrentPage === "function") {
      setCurrentPage(page);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Company information */}
        <div className="footer-column footer-company">
          <h2>
            Sri Aishwarya Lakshmi
            <span>Green Energies LLP</span>
          </h2>

          <p>
            Building a sustainable future through renewable
            energy, Bio-CBG projects, biogas solutions, and
            environmentally responsible waste management.
          </p>

          <div className="footer-socials">
            <a href="#facebook" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="#instagram" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
            <a href="#linkedin" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
            <a href="#youtube" aria-label="YouTube"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg></a>
          </div>
        </div>

        {/* Quick navigation */}
        <div className="footer-column footer-links">
          <h3>Quick Links</h3>
          <span className="footer-underline" />

          <nav aria-label="Footer navigation">
            {quickLinks.map((link) => (
              <button
                key={link.page}
                type="button"
                onClick={() => navigateTo(link.page)}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Contact details */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>
          <span className="footer-underline" />

          <div className="footer-contact-item">
            <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e8336d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg></span>
            <p>
              Durgam Cheruvu, Hitech City,
              Hyderabad, Telangana, India
            </p>
          </div>

          <div className="footer-contact">
            <div className="footer-contact-item">
              <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7ed321" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg></span>
              <button type="button" className="footer-enquiry-link" onClick={() => navigateTo("contact")}>
                info@gmail.com
              </button>
            </div>
            <div className="footer-contact-item">
              <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e8336d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg></span>
              90000000000
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Sri Aishwarya Lakshmi
          Green Energies LLP. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
