import React from 'react';
import './Aptitude.css';
import { Link } from 'react-router-dom';

const AptitudeTest = () => {
  return (
    <>
      <div class="banner">
        <div class="content">
          <h1>
            Test preparation that <span class="highlight">makes a difference</span>
          </h1>
          <p>Prepare with us – <strong>Pass your test</strong> – Get the job</p>
          <p>Try one of our <span class="free">free</span> aptitude tests.</p>
          <button class="start-btn">Start Free Test</button>
        </div>
      </div>
      <div class="Aptitudeheader">
        <div class="icon-section">
          <div class="iconBox">
            <i class="bi bi-calculator-fill"></i>
            <p>Numerical Tests</p>
          </div>
          <div class="iconBox">
            <i class="bi bi-chat-dots-fill"></i>
            <p>Verbal Tests</p>
          </div>
          <div class="iconBox">
            <i class="bi bi-layout-text-sidebar-reverse"></i>
            <p>Non-verbal Tests</p>
          </div>
          <div class="iconBox">
            <i class="bi bi-gear-fill"></i>
            <p>Mechanical Tests</p>
          </div>
          <div class="iconBox">
            <i class="bi bi-people-fill"></i>
            <p>Tests by Publisher</p>
          </div>
        </div>
      </div>

      <div class="content2">
        <h2>Aptitude Test Preparation</h2>
        <h3>for Pre-employment Assessments</h3>
        <p>
          Unlock Your Potential: Ace your employee aptitude test or school entrance exam effortlessly with our tailored online practice tests.
        </p>
        <p>
          Practice with one of our free aptitude tests, or take your preparation to the next level with our comprehensive test preparation packages. <span class="highlight">Sign up</span> now and start your preparation today.
        </p>
        <p>
          Want to try a free aptitude test? Try our free <strong>Cognitive Ability Test</strong>.
        </p>
        <button class="cta-btn">Free Cognitive Ability Test</button>
      </div>
      <hr />
      <div className="containerBox">
        <h2>Practice Tests by Category</h2>
        <p>Find the test prep materials suitable for your needs. Select the relevant category below.</p>
        <div class="card-container">
          <Link to="/aptitude-question" className="card-link">
            <div class="aptitudeCard card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDkpOp4Uc7B-odBerv9-DcT-mKTLuiW1Vug&s" alt="Numerical Reasoning" />
              <h6>Numerical Reasoning</h6>
            </div>
          </Link>
          <div class="aptitudeCard card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDkpOp4Uc7B-odBerv9-DcT-mKTLuiW1Vug&s" alt="Verbal Skills" />
            <h6>Verbal Skills</h6>
          </div>
          <div class="aptitudeCard card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDkpOp4Uc7B-odBerv9-DcT-mKTLuiW1Vug&s" alt="Mechanical Aptitude" />
            <h6>Mechanical Aptitude</h6>
          </div>
          <div class="aptitudeCard card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDkpOp4Uc7B-odBerv9-DcT-mKTLuiW1Vug&s" alt="Abstract Reasoning" />
            <h6>Abstract Reasoning</h6>
          </div>
          <div class="aptitudeCard card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDkpOp4Uc7B-odBerv9-DcT-mKTLuiW1Vug&s" alt="Deductive Reasoning" />
            <h6>Deductive Reasoning</h6>
          </div>
          <div class="aptitudeCard card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDkpOp4Uc7B-odBerv9-DcT-mKTLuiW1Vug&s" alt="Spatial Ability" />
            <h6>Spatial Ability</h6>
          </div>
          <div class="aptitudeCard card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDkpOp4Uc7B-odBerv9-DcT-mKTLuiW1Vug&s" alt="Deductive Reasoning" />
            <h6>Deductive Reasoning</h6>
          </div>
          <div class="aptitudeCard card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDkpOp4Uc7B-odBerv9-DcT-mKTLuiW1Vug&s" alt="Spatial Ability" />
            <h6>Spatial Ability</h6>
          </div>
        </div>
      </div>
    </>
  )
};

export default AptitudeTest;
