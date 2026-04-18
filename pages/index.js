import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const slides = [
  {
    image: "/Slide1.jpg",
    quote: "Justice delayed is justice denied.",
  },
  {
    image: "/Slide2.jpg",
    quote: "Integrity defines advocacy.",
  },
  {
    image: "/Slide3.jpg",
    quote: "Committed to protecting your rights.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const [showModal, setShowModal] = useState(0);
  const [form, setForm] = useState({
  name: "",
  phone: "",
  altPhone: "",
  issue: "",
    });
  const [success, setSuccess] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);

    

  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className="top-bar">
        <span>Sudhir Balan</span>
        <span>📞 +91 8867208883</span>
        <span>✉️ sudhirlegal22@gmail.com</span>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(5,15,30,0.7),rgba(5,15,30,0.7)), url(${slides[currentSlide].image})`,
        }}
      >

        
        <div className="hero-content fade">
          <h1>{slides[currentSlide].quote}</h1>
          <button 
            className="primary-btn"
            onClick={() => setShowModal(true)}
          >
            Book Consultation
          </button>
        </div>
      </section>

      {/* About Advocate */}
      <section id="attorney" className="attorney-section">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Sudhir Balan is a dedicated legal practitioner with extensive experience in litigation and advisory matters.
He regularly represents clients before the High Court and other judicial forums.
His practice spans civil disputes, criminal defense, family matters, and property matters.
Known for his meticulous preparation and strategic approach, he advocates with clarity and conviction.
He believes in combining strong legal research with practical courtroom execution.
Clients value his transparent guidance, accessibility, and unwavering commitment to their interests.
With professionalism and integrity at the core of his practice, he strives to secure effective and timely legal solutions.

          </p>
        </div>

        <div className="about-image">
          <img
           src="/images/Sudhir.jpeg"
           alt="Sudhir Law Chambers"
          />
        </div>
      </section>


      {/* Why Clients Trust Me */}
      <section id="trust" className="trust-section">
        <h2>Why Clients Trust Me</h2>
        <div className="trust-grid">
          <div className="trust-card">
            <div className="trust-icon">⚖️</div>
            <h3>Strong Courtroom Experience</h3>
            <p>Successful litigation and trails across multiple practice areas with a strong track record.</p>
          </div>
          <div className="trust-card">
            <div className="trust-icon">🤝</div>
            <h3>Client-Centric Approach</h3>
            <p>Your interests come first. Transparent communication and accessible guidance throughout your legal journey.</p>
          </div>
          <div className="trust-card">
            <div className="trust-icon">💡</div>
            <h3>Strategic Solutions</h3>
            <p>Meticulous preparation combined with practical courtroom execution for effective and timely legal outcomes.</p>
          </div>
          <div className="trust-card">
            <div className="trust-icon">🏆</div>
            <h3>Dedication & Integrity</h3>
            <p>Professionalism and integrity are at the core of every case. Unwavering commitment to your success.</p>
          </div>
        </div>
      </section>


      {/* Practice Areas */}
      <section id="practice" className="practice-section">
          <h2 className="section-title">Practice Areas</h2>

  <div className="practice-grid">

    <div className="practice-card">
      <div className="practice-overlay"></div>
      <img src="/images/civil.jpg" alt="Civil Litigation" />
      <div className="practice-content">
        <h3>Civil Litigation</h3>
        <h4>Disputes & Resolutions</h4>
      </div>
    </div>

    <div className="practice-card">
      <div className="practice-overlay"></div>
      <img src="/images/criminal.jpg" alt="Criminal Law" />
      <div className="practice-content">
        <h3>Criminal Law</h3>
        <h4>Defense & Prosecution</h4>
      </div>
    </div>

    <div className="practice-card">
      <div className="practice-overlay"></div>
      <img src="/images/family.jpg" alt="Divorce & Matrimonial Matters" />
      <div className="practice-content">
        <h3>Family Law</h3>
        <h4>Divorce & Matrimonial Matters</h4>
      </div>
    </div>

    <div className="practice-card">
      <div className="practice-overlay"></div>
      <img src="/images/property.jpg" alt="Property Law" />
      <div className="practice-content">
        <h3>Property Law</h3>
        <h4>Property Verification, Documentation & Land Disputes</h4>
      </div>
    </div>

    <div className="practice-card">
      <div className="practice-overlay"></div>
      <img src="/images/cheque.jpg" alt="Cheque Bounce & NI Act Cases" />
      <div className="practice-content">
        <h3>Cheque Bounce & NI Act Cases</h3>
        <h4>Quick Resolution</h4>
      </div>
    </div>

      </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="contact-section">
        <h2>Get in Touch</h2>

        <p>📞 +91 8979798998</p>
        <p>✉️ sudhirlegal22@gmail.com</p>
        <p>📍 #26, Ramamurthy Nagar old Police Station Building,
          1st Floor, Ramamurthy Nagar, Bengaluru-560016
        </p>
        <div className="map-container">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d242.96056785581257!2d77.667787!3d13.0121524!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11006b75bac9%3A0x157a8051ef1392d0!2sSudhir%20Law%20Chambers!5e0!3m2!1sen!2sin!4v1770807978360!5m2!1sen!2sin"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>




      </section>

      {/* Right Side Scroll Menu */}
      <div className="side-menu">
        <a href="#home">Home</a>
        <a href="#attorney">About</a>
        <a href="#practice">Practice Areas</a>
        <a href="#contact">Contact</a>
      </div>

      {showModal && (
  <div className="modal-overlay">
    <div className="modal">
      <div className="close-btn" onClick={() => setShowModal(false)}>
        ✕ Close
      </div>

      <h2>Book a Consultation</h2>

      <input
        placeholder="Full Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />

      <input
        placeholder="Phone Number"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        required
      />

      <input
        placeholder="Alternate Phone Number"
        onChange={(e) => setForm({ ...form, altPhone: e.target.value })}
      />

      <textarea
        placeholder="Briefly describe your issue"
        rows="4"
        onChange={(e) => setForm({ ...form, issue: e.target.value })}
        required
      />

      <button
        onClick={async () => {
          await fetch("/api/sendMail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
          });
          alert("Consultation request sent successfully");
          setShowModal(false);
        }}
      >
        Submit
      </button>
    </div>
  </div>
)}


      <Footer />
    </>
  );
}
