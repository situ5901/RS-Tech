import React from "react";
import videoBG from './video.mp4'
import "./Home.css";


function Home() {
  return (
    <>
        <video className="vidbg" src={videoBG} autoPlay loop muted />




    
<div className="card-container">
      <div className="card">
        <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg" alt="Delicious Food" />
        <div className="card-content">
          <h2>Gourmet Burger</h2>
          <p>Experience the taste of gourmet burgers with this simple yet delicious recipe.</p>
        </div>
      </div>
      <div className="card">
        
        <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" alt="Tasty Pasta" />
        <div className="card-content">
          <h2>Italian Pasta</h2>
          <p>Indulge in a classNameic Italian pasta dish, perfect for any occasion.</p>
        </div>
      </div>
      <div className="card">
        <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg" alt="Healthy Salad" />
        <div className="card-content">
          <h2>Healthy Salad</h2>
          <p>Stay healthy and fit with this fresh and nutritious salad recipe.</p>
        </div>
      </div>
      <div className="card">
        <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg" alt="Healthy Salad" />
        <div className="card-content">
          <h2>Healthy Salad</h2>
          <p>Stay healthy and fit with this fresh and nutritious salad recipe.</p>
        </div>
      </div>
    </div>
  








<div className="row">
  <div className="columns">
    <h3>Requirement</h3>
    <p>A person who motivates others in the achievement of personal objectives such as improving relationships, setting goals, and determining priorities.</p>

  </div>
  <div className="columns">
    <h3>Planning</h3>
    <p>A person who acts independently without being affiliated with an organization. Who pursues a profession without a long-term commitment to any one employer.</p>

  </div>
  <div className="columns">
    <h3>Dividation</h3>
    <p>An entrepreneur who works “solo,” running their business. They might have contractors for hire, yet have full responsibility for running their business</p>

  </div>

  <div className="columns">
    <h3>Designing</h3>
    <p>An entrepreneur who works “solo,” running their business. They might have contractors for hire, yet have full responsibility for running their business</p>

  </div>

  <div className="columns">
    <h3>Testing</h3>
    <p>An entrepreneur who works “solo,” running their business. They might have contractors for hire, yet have full responsibility for running their business</p>

  </div>

  <div className="columns">
    <h3>Implementation</h3>
    <p>An entrepreneur who works “solo,” running their business. They might have contractors for hire, yet have full responsibility for running their business</p>

  </div>


</div>
    </>
  );
}
export default Home;
