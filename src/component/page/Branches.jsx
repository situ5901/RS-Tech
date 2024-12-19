import React, { useState, useRef } from 'react';
import './Branches.css';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import ExamLottie from '../assest/exam-lottie.json';
import ExamPng from '../assest/exam.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Branches() {
  const [selectedBranch, setSelectedBranch] = useState(null);
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

  const semesters = ['1 Semester', '2 Semester', '3 Semester', '4 Semester', '5 Semester', '6 Semester'];

  const handleBranchClick = (branchName) => {
    setSelectedBranch(branchName);
    setTimeout(() => {
      semesterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="branch-sec">
      <div className="branch-title">
        <h1>Select Your Branch</h1>
      </div>

      <div className="main-box">
        <div className="branch-list">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="branch-box"
              onClick={() => handleBranchClick(branch.name)}
              style={{ cursor: 'pointer' }}
            >
              <i className={`bi ${branch.icon}`}></i>
              <h2>{branch.name}</h2>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Lottie animationData={ExamLottie} loop={true} />
        </div>
      </div>

      <div className="semester-sec">
        {selectedBranch && (
          <div ref={semesterRef} className="semester-box">
            <h2>Select Semester for {selectedBranch}</h2>
            <div className="semester-box2">
              <div className="semester-list">
                {semesters.map((sem, index) => (
                  <Link
                    key={index}
                    to={`/question-papers`}
                    className="semester-button"
                  >
                    👉 {sem}
                  </Link>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <img style={{width: '100%'}} src={ExamPng} alt="Exam" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Branches;
