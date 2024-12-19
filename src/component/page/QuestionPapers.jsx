import React from 'react';
import { Link } from 'react-router-dom';
import './QuestionPapers.css';

function QuestionPapers() {
    return (
        <div className="branch-sec">
            <div className="branch-title">
                <h1>Computer Engineering</h1>
            </div>
            <div className="paper-list">
                {Array(10).fill('COMMON-1-YEAR-APPLIED-CHEMISTRY-180014-2023').map((paper, index) => (
                    <Link to="/paper" key={index} className="paper-link">
                        <div className="paper-box">
                            <span className="star">🌟</span>
                            <h4>{paper}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default QuestionPapers;
