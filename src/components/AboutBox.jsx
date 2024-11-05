import React from 'react';
import actor from '../assets/picture/eva.png';
import actor2 from '../assets/picture/eva02.png';

function FeaturedBox() {
  return (
    <>
      {/* First Section (Image on Right) */}
      <section className='featured-box' id='about'>
        <div className="featured-text">
          <div className="featured-text-card"></div>
          <div className="featured-name">
            ROG x EVANGELION EVA-01 <span className='typedText'></span>
          </div>
          <div className="featured-text-info">
            <p>CPU : Intel Core i9-12900K</p>
            <p>VGA : ROG Strix GeForce RTX 3080 12GB GDDR6X OC EVA</p>
            <p>Mainboard : ROG MAXIMUS Z690 HERO EVA EDITION</p>
            <p>RAM : 64GB DDR5 5600MHZ</p>
            <p>SSD : 512GB NVMe SSD Gen 4</p>
            <p>PSU : ROG Thor 1000W Platinum II EVA Edition</p>
            <p>CASE : ROG Strix Helios EVA Edition</p>
            <p>OS : Windows 10 Home</p>
          </div>
          <div className="featured-text-btn">
            {/* Add buttons or actions here if needed */}
          </div>
        </div>

        <div className="featured-image">
          <div className="image">
            <img src={actor} alt="Featured Actor" />
          </div>
        </div>
      </section>

      {/* Second Section (Image on Left) */}
      <section className='featured-box reverse-layout' id='about'>
        <div className="featured-image">
          <div className="image">
            <img src={actor2} alt="Featured Actor" />
          </div>
        </div>

        <div className="featured-text">
          <div className="featured-text-card"></div>
          <div className="featured-name">
            ROG x EVANGELION EVA-02 <span className='typedText'></span>
          </div>
          <div className="featured-text-info">
            <p>CPU : Intel Core i9-12900K</p>
            <p>VGA : ROG Strix GeForce RTX 3080 12GB GDDR6X OC EVA</p>
            <p>Mainboard : ROG MAXIMUS Z690 HERO EVA EDITION</p>
            <p>RAM : 64GB DDR5 5600MHZ</p>
            <p>SSD : 512GB NVMe SSD Gen 4</p>
            <p>PSU : ROG Thor 1000W Platinum II EVA Edition</p>
            <p>CASE : ROG Strix Helios EVA Edition</p>
            <p>OS : Windows 10 Home</p>
          </div>
          <div className="featured-text-btn">
            {/* Add buttons or actions here if needed */}
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedBox;
