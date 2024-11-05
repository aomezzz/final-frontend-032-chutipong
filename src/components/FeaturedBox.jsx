import React from 'react';
import actor from '../assets/picture/eva.png';

function FeaturedBox() {
  return (
    <>
      <section className='featured-box' id='home'>
        <div className="featured-text">
          <div className="featured-text-card">
            <span>CHUTIPpc</span>
          </div>
          <div className="featured-name">
            Best selling <span className='typedText'></span>
          </div>
          <div className="featured-text-info">
            <p>
              CHUTIPpc and Studio ©khara bring the communion of gamers and machines with the EVANGELION collection. The Republic of Gamers launches new equipment for the EVANGELION project, with tech in motherboards, graphics cards, gaming cases, all-in-one coolers, gaming monitors, peripherals, routers, apparel, and gear. Build the EVA machine and synchronize it with EVA-01.
            </p>
          </div>
          <div className="featured-text-btn">
            {/* Add buttons or other content here if needed */}
          </div>
          
          {/* Social Icons */}
          <div className="social_icons">
            <div className="icon">
              <a href="https://www.instagram.com/Aomezzz_0_o" target="_blank" rel="noopener noreferrer">
                <i className='uil uil-instagram-alt'></i>
              </a>
            </div>
            <div className="icon">
              <a href="https://www.facebook.com/aomezzz" target="_blank" rel="noopener noreferrer">
                <i className='uil uil-facebook'></i>
              </a>
            </div>
            <div className="icon">
              <a href="https://www.github.com/aomezzz" target="_blank" rel="noopener noreferrer">
                <i className='uil uil-github-alt'></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="featured-image">
          <div className="image">
            <img src={actor} alt="Featured Actor" />
          </div>
        </div>
      </section>

      <section className="section" id="home">
  <div className="top-header">
  </div>

  <div className="project-container">
    <div className="project-box">
      <i className="uil uil-briefcase-alt"></i>
      <h3>Fast Shipping</h3>
      <label>Ensuring prompt delivery of your orders, so you receive them when you need them.</label>
    </div>

    <div className="project-box">
      <i className="uil uil-briefcase-alt"></i>
      <h3>Best Service</h3>
      <label>Providing top-notch support and assistance for a seamless customer experience.</label>
    </div>

    <div className="project-box">
      <i className="uil uil-briefcase-alt"></i>
      <h3>Good Environments</h3>
      <label>Creating a positive and conducive atmosphere for both work and collaboration.</label>
    </div>

    <div className="project-box">
      <i className="uil uil-briefcase-alt"></i>
      <h3>Good Price</h3>
      <label>Offering competitive pricing without compromising on quality and value.</label>
    </div>
  </div>
</section>

    </>
  );
}

export default FeaturedBox;
