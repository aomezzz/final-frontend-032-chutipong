import React from 'react';

const ReviewBox = () => {
  // Sample reviews data
  const reviews = [
    {
      name: "John Doe",  
      rating: 5,
      comment: "Excellent service! Highly recommend.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "Great quality products and fast shipping.",
    },
    {
      name: "Alice Johnson",
      rating: 5,
      comment: "Absolutely love my new PC! It works perfectly.",
    },
    {
      name: "Bob Brown",
      rating: 3,
      comment: "Good experience, but delivery was delayed.",
    },
  ];

  // Inline styles
  const styles = {
    section: {
      padding: '40px 20px',
      textAlign: 'center',
    },
    topHeader: {
      marginBottom: '20px',
    },
    reviewCard: {
      backgroundColor: '#f5f5f5',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      marginBottom: '20px',
    },
    rating: {
      color: 'gold', // Color for the stars
    },
    name: {
      color: 'black', // Name color
      margin: '10px 0',
    },
    comment: {
      color: 'black', // Comment color
      margin: '10px 0',
    },
    heading: {
      color: 'black', // Heading color
    },
  };

  return (
    <section style={styles.section} id="reviews">
      <div style={styles.topHeader}>
        <h1 style={styles.heading}>Customer Reviews</h1>
        <span>Here's what our customers say about us.</span>
      </div>
      <div className="row">
        {reviews.map((review, index) => (
          <div className="col" key={index}>
            <div style={styles.reviewCard}>
              <h3 style={styles.name}>{review.name}</h3>
              <div style={styles.rating}>
                {Array.from({ length: review.rating }, (_, i) => (
                  <i key={i} className="uil uil-star"></i>
                ))}
              </div>
              <p style={styles.comment}>{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewBox;
