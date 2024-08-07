import React from 'react';
import './Resume.css'; // Optional: For styling

function Resume() {
  return (
    <div className="resume-container">
      <object
        data="/assets/Maas_Luis_2025.pdf"
        type="application/pdf"
        width="100%"
        height="1200px"
      >
        <p>Your browser does not support PDFs. Please download the PDF to view it: 
          <a href="/assets/Maas_Luis_2025.pdf">Download PDF</a>.
        </p>
      </object>
    </div>
  );
}

export default Resume;
