import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [btnText, setBtnText] = useState("Send Message");
  const [isSent, setIsSent] = useState(false);

  // จำลองการกดส่งข้อความแบบง่ายๆ
  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnText("Sending...");
    
    setTimeout(() => {
      setBtnText("Message Sent!");
      setIsSent(true);
      
      // รีเซ็ตปุ่มกลับเป็นเหมือนเดิมหลังผ่านไป 3 วินาที
      setTimeout(() => {
        setBtnText("Send Message");
        setIsSent(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="contact-minimal-container">
      <div className="contact-minimal-wrapper">
        
        {/* --- ฝั่งซ้าย: ข้อความ --- */}
        <div className="contact-text-zone">
          <h1>Let's Talk</h1>
          <p>
            Whether you have a question, a project idea, or just want to say hi, 
            I'll try my best to get back to you!
          </p>

          <div className="direct-contact-list">
            <div className="contact-item">
              <i className="bi bi-envelope"></i>
              <span>pongsakorn@std.ac.th</span>
            </div>
            <div className="contact-item">
              <i className="bi bi-geo-alt"></i>
              <span>Bangkok, Thailand</span>
            </div>
          </div>
        </div>

        {/* --- ฝั่งขวา: ฟอร์มกรอกข้อมูล --- */}
        <div className="contact-form-zone">
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              className="minimal-input" 
              placeholder="Your Name" 
              required 
            />
            <input 
              type="email" 
              className="minimal-input" 
              placeholder="Your Email" 
              required 
            />
            <textarea 
              className="minimal-input" 
              placeholder="How can I help you?" 
              required 
            ></textarea>
            
            <button 
              type="submit" 
              className={`btn-minimal-submit ${isSent ? 'sent' : ''}`}
            >
              {!isSent && <i className="bi bi-send"></i>}
              {isSent && <i className="bi bi-check-circle"></i>}
              {btnText}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;