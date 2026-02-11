import { useState } from "react";
import Data_user from "./config/Data_user";
import "./Student.css";

function Student() {
  const [showModal, setShowModal] = useState(false);

  const pongsakorn = Data_user.find((student) =>
    student.name.toLowerCase().includes("pongsakorn"),
  );

  // ข้อมูลจริง (แก้ไขตรงนี้ได้เลย)
  const user = {
    ...pongsakorn,
    section: "TCT1 DERA",
    studentID: "6802041510066",
    age: pongsakorn?.age || 21,
    phone: "098-765-4321",
    role: "Computer Education Student",
    // ข้อมูลใน Modal
    certifications: [
      "Microsoft Certified: Azure Fundamentals",
      "Google UX Design Certificate",
      "Meta Front-End Developer",
    ],
    activities: ["Computer Club President", "Tech Camp Volunteer"],
  };

  if (!pongsakorn) return <div>Loading...</div>;

  return (
    <>
      <div className="hero-container">
        <div className="hero-card">
          {/* ฝั่งซ้าย: รูปภาพ */}
          <div className="hero-image-col">
            <div className="hero-blob blob-1"></div>
            <div className="hero-blob blob-2"></div>
            <img src={user.img} alt="Profile" className="hero-img" />
          </div>

          {/* ฝั่งขวา: เนื้อหา */}
          <div className="hero-content-col">
            <span className="badge-role">HELLO, I'M</span>

            <h1 className="hero-title">
              {user.name} <br />
              <span>{user.role}</span>
            </h1>

            <p className="hero-desc">
              Passionate about technology and education. <br />
              Creating functional and beautiful web experiences.
            </p>

            {/* Grid ข้อมูล 4 ช่อง */}
            <div className="info-grid-simple">
              <div className="info-box-simple">
                <span className="info-box-label">STUDENT ID</span>
                <span className="info-box-value">{user.studentID}</span>
              </div>
              <div className="info-box-simple">
                <span className="info-box-label">SECTION</span>
                <span className="info-box-value">{user.section}</span>
              </div>
              <div className="info-box-simple">
                <span className="info-box-label">AGE</span>
                <span className="info-box-value">{user.age} Years</span>
              </div>
              <div className="info-box-simple">
                <span className="info-box-label">PHONE</span>
                <span className="info-box-value">{user.phone}</span>
              </div>
            </div>

            <button className="btn-main" onClick={() => setShowModal(true)}>
              <span>View Full Profile</span>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* --- Modal Popup --- */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            {/* Header สีชมพู */}
            <div className="modal-header-pink">
              <button className="btn-close" onClick={() => setShowModal(false)}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            {/* เนื้อหาใน Modal */}
            <div className="modal-content-body">
              <img src={user.img} alt="profile" className="profile-circle" />

              <div className="user-title">
                <h2>{user.name}</h2>
                <p>{user.role}</p>
              </div>

              {/* Grid Contact & Education */}
              <div className="details-grid">
                {/* Contact Card */}
                <div className="detail-card">
                  <div className="detail-title">Contact Information</div>

                  <div className="detail-row">
                    <span className="detail-label">Email</span>
                    <span className="detail-val">pongsakorn@std.ac.th</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Phone</span>
                    <span className="detail-val">{user.phone}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Location</span>
                    <span className="detail-val">Bangkok, Thailand</span>
                  </div>
                </div>

                {/* Education Card */}
                <div className="detail-card">
                  <div className="detail-title">Education</div>

                  <div className="detail-row">
                    <span className="detail-label">Major</span>
                    <span className="detail-val">Computer Education</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">GPA</span>
                    <span className="detail-val">3.85</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Credits</span>
                    <span className="detail-val">120 Units</span>
                  </div>
                </div>
              </div>

              {/* Achievements Section */}
              <div className="section-head">Achievements & Certificates</div>
              <div className="tags-container">
                {user.certifications.map((cert, i) => (
                  <span key={i} className="tag-pill">
                    <i className="bi bi-award-fill me-2"></i> {cert}
                  </span>
                ))}
              </div>

              {/* Activities Section */}
              <div className="section-head">Activities</div>
              <div className="tags-container">
                {user.activities.map((act, i) => (
                  <span
                    key={i}
                    className="tag-pill"
                    style={{
                      background: "#F3F4F6",
                      color: "#333",
                      borderColor: "#ddd",
                    }}
                  >
                    <i className="bi bi-star-fill me-2 text-warning"></i> {act}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Student;
