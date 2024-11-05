import React, { useState } from "react";
import { jsPDF } from "jspdf";

function JpgToPdfConverter() {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    handleFiles(files);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const imagePromises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises).then((imageDataUrls) => {
      setImages((prevImages) => [...prevImages, ...imageDataUrls]);
    });
  };

  const convertToPdf = () => {
    const pdf = new jsPDF();

    images.forEach((image, index) => {
      if (index > 0) pdf.addPage();
      pdf.addImage(image, "JPEG", 10, 10, 180, 160); // Adjust dimensions as needed
    });

    pdf.save("converted.pdf");
  };

  // Prevent default drag behaviors
  const preventDefaults = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div
      style={styles.page}
      onDragOver={preventDefaults}
      onDrop={handleDrop}
    >
      <div style={styles.card}>
        <h2 style={styles.header}>JPEG to PDF Converter</h2>
        <input
          type="file"
          accept="image/jpeg"
          multiple
          onChange={handleImageChange}
          style={styles.input}
        />
        {images.length > 0 && (
          <div style={styles.preview}>
            <h3 style={styles.previewHeader}>Selected Images</h3>
            <div style={styles.imageContainer}>
              {images.map((image, index) => (
                <img key={index} src={image} alt={`preview ${index}`} style={styles.imagePreview} />
              ))}
            </div>
          </div>
        )}
        <br /><br />
        <button onClick={convertToPdf} disabled={images.length === 0} style={styles.button}>
          Convert to PDF
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#e3f2fd', // Soft blue background
    fontFamily: 'Roboto, sans-serif', // Modern font
  },
  card: {
    width: '100%',
    maxWidth: '500px',
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  header: {
    fontSize: '24px',
    color: '#1976d2', // Primary color for the header
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #bbb',
    fontSize: '16px',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  button: {
    width: '100%',
    padding: '12px 0',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: '#ffffff',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  preview: {
    marginTop: '20px',
    textAlign: 'left',
  },
  previewHeader: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '10px',
  },
  imageContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
  },
  imagePreview: {
    width: '80px',
    height: 'auto',
    borderRadius: '5px',
    border: '1px solid #ddd',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

export default JpgToPdfConverter;
