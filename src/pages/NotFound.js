import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-container">
      
      {/* เอฟเฟกต์แสงสีชมพูเบลอๆ ด้านหลัง */}
      <div className="bg-blob-pink"></div>

      {/* กล่องเนื้อหากระจกใส */}
      <div className="not-found-glass-card">
        
        <h1 className="error-code-modern">404</h1>
        
        <h2 className="error-title-modern">Oops! Page Not Found</h2>
        
        <p className="error-desc-modern">
          The page you are looking for might have been removed, 
          had its name changed, or is temporarily unavailable.
        </p>
        
        <Link to="/" className="btn-back-home">
          <i className="bi bi-house-door-fill"></i> Back to Homepage
        </Link>
        
      </div>
      
    </div>
  );
}

export default NotFound;