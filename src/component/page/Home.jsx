import React from "react";
// import one from "./one.jpeg";
import videoBG from './video.mp4'
import maincard from './cardimg.png'
import "./Home.css";


function Home() {
  return (
    <>

      <video className="vidbg" src={videoBG} autoPlay loop muted />



      <div className="card-main">

        <div class="container">
          <h3>Why Choose RS Tech?</h3>
          <p>Get benefits with the best Digital Marketing Service with unique strategies. Improve the search visibility of your website with the proper techniques of our digital marketing experts. Boost sales and optimize your page for more user engagement.</p>
          
          <div class="pyramid-loader">
  <div class="wrapper">
    <span class="side side1"></span>
    <span class="side side2"></span>
    <span class="side side3"></span>
    <span class="side side4"></span>
    <span class="shadow"></span>
  </div>  
</div>


        </div>

        <div className="sec-container">
          <h3>Why Choose Situ?</h3>
          <img className="maincard" src={maincard} alt="" />


        </div>



      </div>
      <div class="row">

        <div class="columns">
          <h3>Requirement</h3>
          <p>A person who motivates others in the achievement of personal objectives such as improving relationships, setting goals, and determining priorities.</p>

        </div>
        <div class="columns">
          <h3>Planning</h3>
          <p>A person who acts independently without being affiliated with an organization. Who pursues a profession without a long-term commitment to any one employer.</p>

        </div>
        <div class="columns">
          <h3>Dividation</h3>
          <p>An entrepreneur who works “solo,” running their business. They might have contractors for hire, yet have full responsibility for running their business</p>

        </div>

        <div class="columns">
          <h3>Designing</h3>
          <p>An entrepreneur who works “solo,” running their business. They might have contractors for hire, yet have full responsibility for running their business</p>

        </div>

        <div class="columns">
          <h3>Testing</h3>
          <p>An entrepreneur who works “solo,” running their business. They might have contractors for hire, yet have full responsibility for running their business</p>

        </div>

        <div class="columns">
          <h3>Implementation</h3>
          <p>An entrepreneur who works “solo,” running their business. They might have contractors for hire, yet have full responsibility for running their business</p>

        </div>
        <>
          <div class="card-container">
            <div class="card">
              <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg" alt="Delicious Food" />
              <div class="card-content">
                <h2>Gourmet Burger</h2>
                <p>Experience the taste of gourmet burgers with this simple yet delicious recipe.</p>
              </div>
            </div>
            <div class="card">
              <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" alt="Tasty Pasta" />
              <div class="card-content">
                <h2>Italian Pasta</h2>
                <p>Indulge in a classic Italian pasta dish, perfect for any occasion.</p>
              </div>
            </div>
            <div class="card">
              <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg" alt="Healthy Salad" />
              <div class="card-content">
                <h2>Healthy Salad</h2>
                <p>Stay healthy and fit with this fresh and nutritious salad recipe.</p>
              </div>
            </div>
          </div>
        </>







      </div>
    </>
  );
}
export default Home;
