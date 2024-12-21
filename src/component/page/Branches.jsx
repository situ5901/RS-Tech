import React, { useState, useRef } from 'react';
import './Branches.css';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import ExamLottie from '../assest/exam-lottie.json';
import ExamPng from '../assest/exam.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Branches = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [semesters, setSemesters] = useState([]);
  const [loading, setLoading] = useState(false);
  const semesterRef = useRef(null);

  const branches = [
    { name: 'Applied Science', icon: 'bi-book-fill' },
    { name: 'Civil Engineering', icon: 'bi-building-fill' },
    { name: 'Computer Engineering', icon: 'bi-laptop-fill' },
    { name: 'E&C Engineering', icon: 'bi-broadcast-pin' },
    { name: 'Electrical Engineering', icon: 'bi-lightning-fill' },
    { name: 'Fashion Design', icon: 'bi-person-fill' },
    { name: 'Fashion Technology', icon: 'bi-scissors' },
    { name: 'Finance Accounts & Auditing', icon: 'bi-cash-coin' },
    { name: 'IC Engineering', icon: 'bi-cpu-fill' },
    { name: 'Mechanical Engineering', icon: 'bi-gear-fill' },
    { name: 'Medical Eltx.', icon: 'bi-heart-fill' },
    { name: 'Textile Design', icon: 'bi-brush-fill' },
    { name: 'Textile Technology', icon: 'bi-palette-fill' },
    { name: 'Textile Processing', icon: 'bi-droplet-fill' },
  ];

  const handleBranchClick = async (branchName) => {
    setSelectedBranch(branchName);
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:4000/api/QuestionPapers/${branchName}`);
      if (!response.ok) {
        throw new Error('Failed to fetch semesters.');
      }

      const data = await response.json();
      setSemesters(data.items || []); // Assuming "items" contains semesters
    } catch (error) {
      console.error('Error fetching semesters:', error);
      setSemesters([]);
    } finally {
      setLoading(false);
      setTimeout(() => {
        semesterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <div className="branch-sec">
      {/* Branch Selection Section */}
      <div className="branch-title">
        <h1>Select Your Branch</h1>
      </div>

      <div className="main-box">
        <div className="branch-list">
          {branches.map(({ name, icon }, index) => (
            <div
              key={index}
              className="branch-box"
              onClick={() => handleBranchClick(name)}
              style={{ cursor: 'pointer' }}
            >
              <i className={`bi ${icon}`}></i>
              <h2>{name}</h2>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Lottie animationData={ExamLottie} loop={true} />
        </div>
      </div>

      {/* Semester Selection Section */}
      {selectedBranch && (
        <div ref={semesterRef} className="semester-sec">
          <div className="semester-box">
            <h2>Select Semester for {selectedBranch}</h2>
            <div className="semester-box2">
              {loading ? (
                <p>Loading semesters...</p>
              ) : (
                <div className="semester-list">
                  {semesters.length > 0 ? (
                    semesters.map((sem, index) => (
                      <Link
                        key={index}
                        to="/question-papers"
                        state={{ semester: sem, branch: selectedBranch }}
                        className="semester-button"
                      >
                        👉 {sem}
                      </Link>
                    ))
                  ) : (
                    <p>No semesters found for this branch.</p>
                  )}
                </div>
              )}
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <img style={{ width: '100%' }} src={ExamPng} alt="Exam" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Branches;
