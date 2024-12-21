import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './QuestionPapers.css';

const QuestionPapers = () => {
  const { state } = useLocation();
  const { semester, branch } = state || {}; // Destructure semester and branch from route state
  const [papers, setPapers] = useState([]);
  const [status, setStatus] = useState({ loading: true, error: null }); // Consolidated loading and error states

  useEffect(() => {
    const fetchPapers = async () => {
      if (!branch || !semester) {
        setStatus({ loading: false, error: 'Please select a branch and semester.' });
        return;
      }

      try {
        const response = await fetch(`http://localhost:4000/api/QuestionPapers/${branch}/${semester}`);
        if (!response.ok) throw new Error('Failed to fetch papers. Please try again later.');

        const data = await response.json();
        setPapers(data.items || []); // Update papers list
        setStatus({ loading: false, error: null });
      } catch (err) {
        setStatus({ loading: false, error: err.message });
      }
    };

    fetchPapers();
  }, [branch, semester]);

  const { loading, error } = status;

  // Render loading state
  if (loading) {
    return <div className="loading">Loading question papers...</div>;
  }

  // Render error state
  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="branch-sec">
      <div className="branch-title">
        <h1>{branch} - {semester}</h1>
      </div>
      <div className="paper-list">
        {papers.length > 0 ? (
          papers.map((paper, index) => (
            <Link
              to="/paper"
              state={{ semester, branch, paperName: paper }}
              key={index}
              className="paper-link"
            >
              <div className="paper-box">
                <span className="star">🌟</span>
                <h4>{paper}</h4>
              </div>
            </Link>
          ))
        ) : (
          <p>No papers found for this semester.</p>
        )}
      </div>
    </div>
  );
};

export default QuestionPapers;
