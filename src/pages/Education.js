import React from "react";
import "./Education.css";

// นำเข้ารูปภาพจากโฟลเดอร์ img ของคุณ
import kmutnb from "../img/kmutnb.png";
import techcom from "../img/images.jpg";
import cnp from "../img/logoSch_3.jpg";

function Education() {
  // ข้อมูลประวัติการศึกษาพร้อมลิงก์เว็บ
  const educationData = [
    {
      id: 1,
      school: "KMUTNB",
      period: "Currently Studying",
      logoUrl: kmutnb,
      websiteUrl: "https://www.kmutnb.ac.th/", // ลิงก์มหาวิทยาลัย
      desc: "Computer Education — combining teaching mindset with modern technology and UI engineering.",
      tags: [
        { name: "Education Tech", icon: "bi-laptop" },
        { name: "UI Engineering", icon: "bi-code-square" },
        { name: "Teaching", icon: "bi-person-chalkboard" },
      ],
      highlights: [
        "Focusing on modern web development and software architecture",
        "Developing functional tools for educational environments",
      ],
    },
    {
      id: 2,
      school: "Chainat Technical College",
      period: "Vocational Cert. (Y1-Y2)",
      logoUrl: techcom,
      iconFallback: "bi-gear-wide-connected",
      websiteUrl: "http://www.chainat.ac.th/", // ลิงก์วิทยาลัยเทคนิคชัยนาท
      desc: "Hands-on practice with programming, problem-solving, and building real assignments that work.",
      tags: [
        { name: "Coding", icon: "bi-code-slash" },
        { name: "Practical Work", icon: "bi-tools" },
        { name: "Problem Solving", icon: "bi-lightbulb" },
      ],
      highlights: [
        "Learned to ship projects with deadlines",
        "Improved logic and debugging skills",
      ],
    },
    {
      id: 3,
      school: "Chainatpittayakom",
      period: "Grade 7-12",
      logoUrl: cnp,
      iconFallback: "bi-buildings",
      websiteUrl: "https://www.chainatpit.ac.th/", // ลิงก์โรงเรียนชัยนาทพิทยาคม
      desc: "Built strong foundations and improved communication through teamwork and class activities.",
      tags: [
        { name: "Math", icon: "bi-calculator" },
        { name: "Science", icon: "bi-globe2" },
        { name: "Teamwork", icon: "bi-people" },
      ],
      highlights: [
        "Consistent learning habits & discipline",
        "Developed presentation confidence",
      ],
    },
  ];

  return (
    <div className="edu-page-container">
      <div className="education-content">
        <h1 className="edu-page-title">
          <i className="bi bi-mortarboard-fill text-primary"></i> Education
          Journey
        </h1>

        <div className="timeline-container">
          {educationData.map((edu) => (
            <div className="timeline-item" key={edu.id}>
              <div className="timeline-dot"></div>

              <div className="timeline-card">
                <div className="timeline-header">
                  {/* กล่องใส่โลโก้ */}
                  <div className="school-logo-box">
                    {edu.logoUrl ? (
                      <img src={edu.logoUrl} alt={`${edu.school} Logo`} />
                    ) : (
                      <i className={`bi ${edu.iconFallback}`}></i>
                    )}
                  </div>

                  <div className="school-info">
                    <div className="school-title-row">
                      {/* จัดกลุ่มชื่อโรงเรียนและปุ่มลิงก์ */}
                      <div className="school-name-wrapper">
                        <h3 className="school-name">{edu.school}</h3>

                        {/* ปุ่มลิงก์เว็บไซต์ (โชว์ถ้ามีข้อมูล websiteUrl) */}
                        {edu.websiteUrl && (
                          <a
                            href={edu.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="school-link-btn"
                            title={`Visit ${edu.school} website`}
                          >
                            <i className="bi bi-globe"></i> Website
                          </a>
                        )}
                      </div>

                      <span className="school-badge">{edu.period}</span>
                    </div>
                    <p className="school-desc">{edu.desc}</p>
                  </div>
                </div>

                <div className="timeline-tags">
                  {edu.tags.map((tag, index) => (
                    <span className="edu-tag" key={index}>
                      <i className={`bi ${tag.icon}`}></i> {tag.name}
                    </span>
                  ))}
                </div>

                <ul className="timeline-highlights">
                  {edu.highlights.map((item, index) => (
                    <li key={index}>
                      <i className="bi bi-check2-circle"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
