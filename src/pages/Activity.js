import React, { useState } from "react";
import "./Activity.css";

import work1 from "../img/work-1.jpg";
import work from "../img/slide-2.jpg";
import work3 from "../img/slide-3.jpg";

function Activity() {
  // 1. กำหนดหมวดหมู่สำหรับ Filter
  const filterCategories = ["All", "Web", "Design", "Certificate", "Activity", "Other"];
  const [activeFilter, setActiveFilter] = useState("All");

  // 2. ข้อมูลผลงานทั้งหมด (คุณสามารถเปลี่ยนรูปและข้อความตรงนี้ได้เลย)
  const worksData = [
    {
      id: 1,
      category: "Web",
      title: "Signature Project",
      desc: "This is the work I am most proud of: Java Gui.",
      imgUrl: work1, // เปลี่ยนเป็นรูปของคุณ
      tags: ["Web", "UI", "Frontend"]
    },
    {
      id: 2,
      category: "Design",
      title: "Photoshop Design",
      desc: "This is my Photoshop design work from my military cadet field training.",
      imgUrl: work,
      tags: ["Design", "Poster", "Branding"]
    },
    {
      id: 3,
      category: "Certificate",
      title: "Award Ceremony",
      desc: "This is the award ceremony for volunteer military cadets.",
      imgUrl: work3,
      tags: ["Certificate", "Learning"]
    },
  ];

  // ระบบกรองข้อมูล (Filter Logic)
  const filteredWorks = activeFilter === "All" 
    ? worksData 
    : worksData.filter(work => work.category === activeFilter);

  return (
    <div className="activity-page-container">
      <div className="activity-content">
        
        {/* --- Hero Section (ส่วนบน) --- */}
        <div className="activity-hero">
          
          {/* ซ้าย: ข้อความและปุ่ม */}
          <div className="hero-left">
            <span className="hero-badge">
              <i className="bi bi-play-circle-fill text-primary"></i> Showcase
            </span>
            <h1>Activity & Works</h1>
            <p>
              A curated selection of my projects, activities, and visuals. 
              Explore the grid, filter by category, and open each card for full details.
            </p>
            
            <div className="hero-buttons">
              <button className="btn-browse">
                <i className="bi bi-grid-fill"></i> Browse Works
              </button>
              <button className="btn-random">
                <i className="bi bi-shuffle"></i> Random
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-box">
                <span className="stat-num">{worksData.length}</span>
                <span className="stat-label">Works</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">{filterCategories.length - 1}</span>
                <span className="stat-label">Categories</span>
              </div>
              <div className="stat-box">
                <span className="stat-num text-primary">100%</span>
                <span className="stat-label">Energy</span>
              </div>
            </div>
          </div>

          {/* ขวา: ผลงานไฮไลต์ (Featured Card) */}
          <div className="hero-featured">
            <span className="featured-badge">Featured</span>
            <img 
              src= {work1} 
              alt="Featured Work" 
              className="featured-img" 
            />
            <div className="featured-content">
              <h3>Signature Project</h3>
              <p>This is the work I am most proud of: Java Gui.</p>
              <button className="btn-full">View details</button>
            </div>
          </div>

        </div>

        {/* --- Filter & Works Grid (ส่วนล่าง) --- */}
        <div className="works-header">
          <div className="works-title">
            <h2>Works Grid</h2>
            <p>Use filters to narrow down by category.</p>
          </div>
          
          {/* ปุ่ม Filter */}
          <div className="filter-container">
            {filterCategories.map((cat, index) => (
              <button 
                key={index} 
                className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ตะแกรงแสดงผลงาน */}
        <div className="works-grid">
          {filteredWorks.map((work) => (
            <div className="work-card" key={work.id}>
              <img src={work.imgUrl} alt={work.title} className="work-img" />
              <div className="work-info">
                <h3>{work.title}</h3>
                <p>{work.desc}</p>
                <div className="work-tags">
                  {work.tags.map((tag, idx) => (
                    <span className="work-tag" key={idx}>{tag}</span>
                  ))}
                </div>
                <button className="btn-view-more">View more</button>
              </div>
            </div>
          ))}
          
          {/* ถ้าไม่มีข้อมูลในหมวดหมู่นั้น */}
          {filteredWorks.length === 0 && (
             <div style={{gridColumn: '1 / -1', textAlign: 'center', padding: '50px', color: '#6B7280'}}>
               <i className="bi bi-inboxes fs-1 d-block mb-3"></i>
               <p>No works found in this category.</p>
             </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Activity;