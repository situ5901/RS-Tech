import React from 'react'
import './Branches.css'
import { NavLink } from 'react-router-dom'

function Branches() {
  return (
    <div className="branch-sec">
      <div className="branch-title">
        <h1>Branches</h1>
      </div>
      <div className="branch-list">
        <NavLink to={'/question-papers'}>
          <div className="branch-box">
            <h2>Computer Enginnering</h2>
          </div>
        </NavLink>
        <NavLink to={'/question-papers'}>
          <div className="branch-box">
            <h2>Computer Enginnering</h2>
          </div>
        </NavLink>
        <NavLink to={'/question-papers'}>
          <div className="branch-box">
            <h2>Computer Enginnering</h2>
          </div>
        </NavLink>
        <NavLink to={'/question-papers'}>
          <div className="branch-box">
            <h2>Computer Enginnering</h2>
          </div>
        </NavLink>
        <NavLink to={'/question-papers'}>
          <div className="branch-box">
            <h2>Computer Enginnering</h2>
          </div>
        </NavLink>
        <NavLink to={'/question-papers'}>
          <div className="branch-box">
            <h2>Computer Enginnering</h2>
          </div>
        </NavLink>
        <NavLink to={'/question-papers'}>
          <div className="branch-box">
            <h2>Computer Enginnering</h2>
          </div>
        </NavLink>
        <NavLink to={'/question-papers'}>
          <div className="branch-box">
            <h2>Computer Enginnering</h2>
          </div>
        </NavLink>
        <NavLink to={'/question-papers'}>
          <div className="branch-box">
            <h2>Computer Enginnering</h2>
          </div>
        </NavLink>
        <NavLink to={'/question-papers'}>
          <div className="branch-box">
            <h2>Computer Enginnering</h2>
          </div>
        </NavLink>
        <NavLink to={'/question-papers'}>
          <div className="branch-box">
            <h2>Computer Enginnering</h2>
          </div>
        </NavLink>
        <NavLink to={'/question-papers'}>
          <div className="branch-box">
            <h2>Computer Enginnering</h2>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Branches
